// Breeze Trip - Trip Planner & Itinerary Builder Engine

class TripPlanner {
  constructor() {
    this.storageKey = 'breeze_trip_plans_v1';
    this.activeTripIdKey = 'breeze_trip_active_id';
    this.trips = [];
    this.activeTrip = null;
    this.init();
  }

  init() {
    this.loadFromStorage();
    if (this.trips.length === 0) {
      this.seedCuratedTrips();
    }
    const savedActiveId = localStorage.getItem(this.activeTripIdKey);
    this.activeTrip = this.trips.find(t => t.id === savedActiveId) || this.trips[0] || null;
  }

  loadFromStorage() {
    try {
      const data = localStorage.getItem(this.storageKey);
      this.trips = data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error loading trips from storage:', e);
      this.trips = [];
    }
  }

  saveToStorage() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.trips));
      if (this.activeTrip) {
        localStorage.setItem(this.activeTripIdKey, this.activeTrip.id);
      }
    } catch (e) {
      console.error('Error saving trips to storage:', e);
    }
  }

  seedCuratedTrips() {
    if (typeof CURATED_ITINERARIES !== 'undefined' && CURATED_ITINERARIES.length > 0) {
      this.trips = CURATED_ITINERARIES.map(ci => ({
        id: 'trip_' + ci.id,
        title: ci.title,
        destination: ci.title,
        tagline: ci.tagline,
        duration: ci.duration,
        tripStyle: 'Couple', // default
        budgetTier: 'Mid-Range',
        travelerCount: 2,
        startDate: new Date().toISOString().split('T')[0],
        image: ci.image,
        isCustom: false,
        days: ci.days.map(d => ({
          dayNumber: d.dayNumber,
          title: d.title || `Day ${d.dayNumber}`,
          city: d.city || '',
          hotel: d.hotel || '',
          notes: '',
          spots: d.spots.map((s, idx) => ({
            id: 'spot_' + Date.now() + '_' + idx,
            name: s.name,
            timeSlot: s.timeSlot || 'Morning',
            notes: s.notes || '',
            entryFeeNumber: 100 // baseline estimate for ticket calc
          }))
        }))
      }));
      this.saveToStorage();
    }
  }

  createTrip({ title, destination, startDate, durationDays = 3, tripStyle = 'Solo', budgetTier = 'Mid-Range', travelerCount = 1, image = '' }) {
    const tripId = 'trip_' + Date.now();
    const days = [];

    for (let i = 1; i <= parseInt(durationDays); i++) {
      days.push({
        dayNumber: i,
        title: `Day ${i} in ${destination || 'Trip'}`,
        city: destination,
        hotel: '',
        notes: '',
        spots: []
      });
    }

    const newTrip = {
      id: tripId,
      title: title || `${destination} Adventure`,
      destination: destination || 'India',
      tagline: `A customized ${durationDays}-day getaway`,
      duration: `${durationDays} Days`,
      tripStyle: tripStyle,
      budgetTier: budgetTier,
      travelerCount: parseInt(travelerCount) || 1,
      startDate: startDate || new Date().toISOString().split('T')[0],
      image: image || 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
      isCustom: true,
      days: days
    };

    this.trips.unshift(newTrip);
    this.activeTrip = newTrip;
    this.saveToStorage();
    return newTrip;
  }

  setActiveTrip(tripId) {
    const trip = this.trips.find(t => t.id === tripId);
    if (trip) {
      this.activeTrip = trip;
      localStorage.setItem(this.activeTripIdKey, trip.id);
      return true;
    }
    return false;
  }

  deleteTrip(tripId) {
    this.trips = this.trips.filter(t => t.id !== tripId);
    if (this.activeTrip && this.activeTrip.id === tripId) {
      this.activeTrip = this.trips[0] || null;
    }
    this.saveToStorage();
  }

  addDayToActiveTrip() {
    if (!this.activeTrip) return;
    const nextDayNum = this.activeTrip.days.length + 1;
    this.activeTrip.days.push({
      dayNumber: nextDayNum,
      title: `Day ${nextDayNum} - Explore`,
      city: this.activeTrip.destination || '',
      hotel: '',
      notes: '',
      spots: []
    });
    this.activeTrip.duration = `${this.activeTrip.days.length} Days`;
    this.saveToStorage();
  }

  removeDayFromActiveTrip(dayNumber) {
    if (!this.activeTrip || this.activeTrip.days.length <= 1) return;
    this.activeTrip.days = this.activeTrip.days.filter(d => d.dayNumber !== dayNumber);
    // Re-index remaining days
    this.activeTrip.days.forEach((d, idx) => {
      d.dayNumber = idx + 1;
      if (d.title.startsWith('Day ')) {
        d.title = `Day ${idx + 1}` + (d.title.split('-')[1] ? ` - ${d.title.split('-')[1].trim()}` : '');
      }
    });
    this.activeTrip.duration = `${this.activeTrip.days.length} Days`;
    this.saveToStorage();
  }

  addSpotToDay(dayNumber, spotData) {
    if (!this.activeTrip) return false;
    const day = this.activeTrip.days.find(d => d.dayNumber === dayNumber);
    if (!day) return false;

    // Check if spot already added to this day
    const alreadyExists = day.spots.some(s => s.name.toLowerCase() === spotData.name.toLowerCase());
    if (alreadyExists) {
      return { success: false, message: 'This attraction is already in Day ' + dayNumber };
    }

    // Extract numeric fee estimate
    let feeNum = 0;
    if (spotData.entryFee) {
      const match = spotData.entryFee.match(/₹\s*([0-9,]+)/);
      if (match) {
        feeNum = parseInt(match[1].replace(/,/g, '')) || 0;
      }
    }

    const newSpot = {
      id: 'spot_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      name: spotData.name,
      category: spotData.category || 'Sightseeing',
      timeSlot: spotData.timeSlot || 'Morning',
      notes: spotData.mustKnowTip || spotData.description || '',
      image: spotData.image || '',
      entryFee: spotData.entryFee || 'Free',
      entryFeeNumber: feeNum,
      idealTimeHours: spotData.idealTimeHours || 2
    };

    day.spots.push(newSpot);
    this.saveToStorage();
    return { success: true, message: `Added ${spotData.name} to Day ${dayNumber}` };
  }

  removeSpotFromDay(dayNumber, spotId) {
    if (!this.activeTrip) return;
    const day = this.activeTrip.days.find(d => d.dayNumber === dayNumber);
    if (day) {
      day.spots = day.spots.filter(s => s.id !== spotId);
      this.saveToStorage();
    }
  }

  updateSpotTimeSlot(dayNumber, spotId, newTimeSlot) {
    if (!this.activeTrip) return;
    const day = this.activeTrip.days.find(d => d.dayNumber === dayNumber);
    if (day) {
      const spot = day.spots.find(s => s.id === spotId);
      if (spot) {
        spot.timeSlot = newTimeSlot;
        this.saveToStorage();
      }
    }
  }

  updateDayNotes(dayNumber, notes) {
    if (!this.activeTrip) return;
    const day = this.activeTrip.days.find(d => d.dayNumber === dayNumber);
    if (day) {
      day.notes = notes;
      this.saveToStorage();
    }
  }

  updateDayHotel(dayNumber, hotel) {
    if (!this.activeTrip) return;
    const day = this.activeTrip.days.find(d => d.dayNumber === dayNumber);
    if (day) {
      day.hotel = hotel;
      this.saveToStorage();
    }
  }

  calculateTripBudget(trip = this.activeTrip) {
    if (!trip) return null;

    const daysCount = trip.days.length || 1;
    const travelers = trip.travelerCount || 1;
    const tier = trip.budgetTier || 'Mid-Range';

    // Daily rates in INR based on tier
    let hotelRatePerNight = 1800; // Budget
    let foodRatePerDayPerson = 600;
    let transitRatePerDay = 500;

    if (tier === 'Mid-Range') {
      hotelRatePerNight = 4200;
      foodRatePerDayPerson = 1200;
      transitRatePerDay = 1200;
    } else if (tier === 'Luxury') {
      hotelRatePerNight = 11000;
      foodRatePerDayPerson = 2800;
      transitRatePerDay = 3000;
    }

    // Number of hotel rooms needed (assuming 2 persons per room)
    const roomsCount = Math.ceil(travelers / 2);
    const totalStay = (daysCount - 1 > 0 ? daysCount - 1 : 1) * hotelRatePerNight * roomsCount;
    const totalFood = daysCount * foodRatePerDayPerson * travelers;
    const totalTransit = daysCount * transitRatePerDay;

    // Sightseeing tickets
    let totalTickets = 0;
    trip.days.forEach(d => {
      d.spots.forEach(s => {
        totalTickets += (s.entryFeeNumber || 50) * travelers;
      });
    });

    const grandTotal = totalStay + totalFood + totalTransit + totalTickets;

    return {
      tier,
      daysCount,
      travelers,
      stay: totalStay,
      food: totalFood,
      transit: totalTransit,
      tickets: totalTickets,
      grandTotal: grandTotal,
      perPerson: Math.round(grandTotal / travelers)
    };
  }
}

// Global instance
window.breezePlanner = new TripPlanner();
