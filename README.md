# ✈️ Breeze Trip - India Travel Planner & Discovery Platform

**Breeze Trip** is an all-in-one travel planning website covering destinations across **all regions of India** (North, South, East, West, Central, and Northeast). It lets users explore cities, discover famous and must-visit spots, learn about local foods and travel tips, and construct interactive day-by-day itineraries with real-time budget calculations and PDF export.

---

## 🌟 Key Features

1. **Pan-India City Guides & Must-Go Spots**:
   - Covers iconic destinations: **Delhi, Agra, Jaipur, Udaipur, Varanasi, Manali, Leh & Ladakh, Rishikesh, Amritsar, Mumbai, Goa, Rann of Kutch, Bengaluru, Hampi, Munnar, Alleppey, Kochi, Pondicherry, Hyderabad, Kolkata, Darjeeling, Puri & Konark, Khajuraho, Indore & Ujjain, Gangtok, Shillong & Cherrapunji, Kaziranga & Guwahati**.
   - Spot details include: Entry fees (Indian & Foreigner rates), operational hours, time needed, insider tips, and high-resolution photography.
   - ⭐ **"Must Visit" Highlights** spotlighted for priority sightseeing.
   - Local delicacy food guides (e.g., Chole Bhature in Delhi, Dal Baati Churma in Jaipur, Karimeen Pollichathu in Kerala, Rosogolla in Kolkata).

2. **Interactive Day-by-Day Itinerary Planner**:
   - Create custom trips with duration (1 to 15 days), travel style (Solo, Couple, Family, Friends), and budget tier.
   - Slot activities into **Morning, Afternoon, and Evening** periods.
   - 1-click **"+ Add to Trip"** from any city or attraction card.
   - Add hotel bookings and custom activity notes.
   - **Real-Time Budget Calculator** estimating accommodation, meals, transit, and entry tickets in Indian Rupees (₹).
   - **Print & PDF Export**: Instant formatted printable itinerary sheet with emergency contacts.

3. **Interactive Pan-India & City Geolocation Maps**:
   - Built with **Leaflet.js** and OpenStreetMap.
   - Interactive pins across India showing must-go spot counts and quick explore triggers.
   - Dedicated city maps showing exact coordinates of attractions and heritage sites.

4. **Smart Travel Utilities**:
   - **Destination Recommender**: Suggests top matching Indian spots based on season and desired vibe.
   - **Smart Packing Checklist**: Generates custom packing lists for hill stations, beaches, or spiritual tours.
   - **Official Emergency Helplines**: Quick-dial tourist numbers (112, 1363, 139).

---

## 🚀 How to Run

### Option 1: Quick Launch with Python (Recommended)

Run the included local web server:

```powershell
python server.py
```

This will automatically find an available port (default `http://localhost:8000`) and launch Breeze Trip in your default web browser.

### Option 2: Direct Browser Opening

Since Breeze Trip is built with standard modern HTML5/CSS3/JavaScript, you can also open `index.html` directly in Google Chrome, Microsoft Edge, or Firefox:

```powershell
Start-Process "index.html"
```

---

## 📂 Project Structure

```
breeze-trip/
├── index.html          # Main application page with tabs, modals, and layouts
├── server.py           # Lightweight Python HTTP server
├── css/
│   └── style.css       # Custom styles, animations, scrollbars, and print layout
├── js/
│   ├── data.js         # Comprehensive All-India destination & attraction dataset
│   ├── planner.js      # Trip planner state machine, budget engine, and storage
│   ├── map.js          # Leaflet map manager for India and city views
│   └── app.js          # Core app controller, search, filters, modals, and tools
└── README.md           # Documentation and guide
```

---

## 🧳 Curated Signature Trips Included
- **Golden Triangle Classic** (Delhi, Agra, Jaipur - 5 Days)
- **Kerala Backwaters & Mist Hills** (Kochi, Munnar, Alleppey - 5 Days)
- **Himachal Snow & Alpine Escape** (Manali, Solang Valley, Atal Tunnel - 4 Days)
