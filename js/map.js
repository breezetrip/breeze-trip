// Breeze Trip - Leaflet Interactive Map Module

class BreezeMapManager {
  constructor() {
    this.mainMap = null;
    this.cityMap = null;
    this.mainMarkers = [];
    this.cityMarkers = [];
  }

  // Initialize the Pan-India exploration map
  initMainMap(containerId = 'india-map-container') {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (this.mainMap) {
      this.mainMap.remove();
      this.mainMap = null;
    }

    // Centered around central India with appropriate bounds
    this.mainMap = L.map(containerId, {
      center: [22.8, 80.0],
      zoom: 5,
      minZoom: 4,
      maxZoom: 16,
      scrollWheelZoom: true
    });

    // Clean OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(this.mainMap);

    this.renderMainMarkers();

    // Invalidate size after layout completes
    setTimeout(() => {
      if (this.mainMap) this.mainMap.invalidateSize();
    }, 250);
  }

  renderMainMarkers(filteredDestinations = INDIA_DESTINATIONS) {
    if (!this.mainMap) return;

    // Clear existing markers
    this.mainMarkers.forEach(m => this.mainMap.removeLayer(m));
    this.mainMarkers = [];

    const bounds = L.latLngBounds();

    filteredDestinations.forEach(dest => {
      if (!dest.coordinates) return;

      const mustGoCount = dest.spots.filter(s => s.isMustVisit).length;

      // Custom HTML Marker Pin
      const customIcon = L.divIcon({
        className: 'custom-map-marker',
        html: `
          <div class="group relative flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-125">
            <div class="w-8 h-8 rounded-full bg-emerald-600 text-white shadow-lg flex items-center justify-center border-2 border-white ring-2 ring-emerald-400/50">
              <i data-lucide="map-pin" class="w-4 h-4"></i>
            </div>
            <div class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-slate-900 font-bold text-[10px] flex items-center justify-center border border-white">
              ${mustGoCount}
            </div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });

      const marker = L.marker([dest.coordinates.lat, dest.coordinates.lng], { icon: customIcon });

      // Popup Content
      const popupHtml = `
        <div class="p-1 max-w-[240px] font-sans">
          <div class="relative h-24 rounded-lg overflow-hidden mb-2 bg-slate-100">
            <img src="${dest.image}" alt="${dest.name}" class="w-full h-full object-cover" />
            <span class="absolute top-1 right-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-600 text-white shadow">
              ${dest.region}
            </span>
          </div>
          <h4 class="font-bold text-slate-900 text-base leading-tight">${dest.name}</h4>
          <p class="text-xs text-slate-500 mb-1">${dest.state}</p>
          <p class="text-xs text-slate-600 line-clamp-2 mb-2">${dest.tagline}</p>
          <div class="flex items-center justify-between pt-1 border-t border-slate-100">
            <span class="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              ⭐ ${mustGoCount} Must-Go
            </span>
            <button onclick="window.breezeApp.openCityModal('${dest.id}')" class="text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-2.5 py-1 rounded transition">
              Explore &rarr;
            </button>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { maxWidth: 260 });
      marker.addTo(this.mainMap);
      this.mainMarkers.push(marker);
      bounds.extend([dest.coordinates.lat, dest.coordinates.lng]);
    });

    // Re-initialize Lucide icons in markers
    if (window.lucide) {
      setTimeout(() => window.lucide.createIcons(), 50);
    }
  }

  // Initialize detailed map inside City Modal
  initCityMap(containerId, destination) {
    const container = document.getElementById(containerId);
    if (!container || !destination || !destination.coordinates) return;

    if (this.cityMap) {
      this.cityMap.remove();
      this.cityMap = null;
    }

    this.cityMap = L.map(containerId, {
      center: [destination.coordinates.lat, destination.coordinates.lng],
      zoom: 12,
      scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap',
      maxZoom: 18
    }).addTo(this.cityMap);

    this.cityMarkers = [];
    const bounds = L.latLngBounds();
    bounds.extend([destination.coordinates.lat, destination.coordinates.lng]);

    // Plot all attractions of the city
    destination.spots.forEach(spot => {
      if (!spot.lat || !spot.lng) return;

      const isMust = spot.isMustVisit;
      const markerColor = isMust ? 'bg-amber-500 ring-amber-300' : 'bg-emerald-600 ring-emerald-300';
      const iconBadge = isMust ? '⭐' : '📍';

      const customIcon = L.divIcon({
        className: 'city-spot-marker',
        html: `
          <div class="flex items-center justify-center w-7 h-7 rounded-full ${markerColor} text-white text-xs font-bold shadow-md border border-white ring-2 ring-opacity-60 cursor-pointer transition transform hover:scale-125">
            ${iconBadge}
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -28]
      });

      const spotMarker = L.marker([spot.lat, spot.lng], { icon: customIcon });

      const popupHtml = `
        <div class="p-1 max-w-[230px] font-sans">
          <div class="relative h-20 rounded-md overflow-hidden mb-1.5 bg-slate-100">
            <img src="${spot.image}" alt="${spot.name}" class="w-full h-full object-cover" />
            ${isMust ? '<span class="absolute top-1 left-1 bg-amber-400 text-slate-900 text-[10px] font-black px-1.5 py-0.5 rounded shadow">MUST VISIT</span>' : ''}
          </div>
          <h5 class="font-bold text-slate-900 text-sm leading-snug">${spot.name}</h5>
          <p class="text-[11px] text-emerald-700 font-semibold mb-1">${spot.category} • ⏱️ ${spot.idealTimeHours} hrs</p>
          <p class="text-xs text-slate-600 line-clamp-2 mb-2">${spot.description}</p>
          <button onclick="window.breezeApp.promptAddSpotToTrip('${destination.id}', '${spot.id}')" class="w-full text-center text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 py-1 rounded transition">
            + Add to Itinerary
          </button>
        </div>
      `;

      spotMarker.bindPopup(popupHtml);
      spotMarker.addTo(this.cityMap);
      this.cityMarkers.push(spotMarker);
      bounds.extend([spot.lat, spot.lng]);
    });

    if (this.cityMarkers.length > 0) {
      this.cityMap.fitBounds(bounds, { padding: [30, 30] });
    }

    setTimeout(() => {
      if (this.cityMap) this.cityMap.invalidateSize();
    }, 300);
  }
}

window.breezeMap = new BreezeMapManager();
