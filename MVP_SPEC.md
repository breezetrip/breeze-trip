# 🚀 Breeze Trip - MVP Specification & Architecture

## 1. Executive Summary
**Breeze Trip** is a modern, lightweight, single-page web application (SPA) that empowers travelers to explore cities across **all 6 geographical zones of India**, discover their most famous spots and **Must-Go ⭐** landmarks, learn about authentic local delicacies, and build custom day-by-day travel itineraries with real-time budget estimation and PDF export.

---

## 2. Core User Stories (MVP Scope)

| # | User Story | Implementation |
|---|------------|----------------|
| **US-1** | As a traveler, I want to search and explore any popular city in India. | Search bar with interactive autocomplete dropdown menu covering 38+ popular cities across all 6 zones of India. |
| **US-2** | As a traveler, I want to know the famous spots and must-go places in that city. | City detail modal with "Must Visit ⭐" badges, operating hours, entry fees (Indian/Foreigner), ideal duration, and insider travel tips. |
| **US-3** | As a traveler, I want to explore local food delicacies and cultural travel advice. | City guide sections detailing regional dishes (e.g., Dal Baati Churma, Karimeen Pollichathu, Indori Poha, Wazwan) and essential dos/don'ts. |
| **US-4** | As a traveler, I want to create a customized day-by-day travel itinerary. | Trip Planner engine with morning/afternoon/evening slots, hotel notes, custom activities, and "+ Add to Trip" buttons on every attraction. |
| **US-5** | As a traveler, I want an automatic budget estimate for my trip. | Real-time budget calculator breaking down accommodation, meals, transit, and entry tickets in Indian Rupees (₹). |
| **US-6** | As a traveler, I want to export and share my itinerary. | Clean printable/PDF export sheet and 1-click "Share / Copy" formatted text to clipboard for WhatsApp/Email. |
| **US-7** | As a traveler, I want to view cities and attractions on an interactive map. | Leaflet.js Pan-India exploration map and city-level attraction geolocation maps. |

---

## 3. Pan-India Destination Matrix

The MVP dataset spans **38 cities** and **117 famous attractions**:

- **North India (14 Cities)**: Delhi, Jaipur, Agra, Varanasi, Manali, Shimla, Srinagar, Leh & Ladakh, Udaipur, Jodhpur, Jaisalmer, Amritsar, Rishikesh, Haridwar.
- **South India (12 Cities)**: Bengaluru, Chennai, Hyderabad, Mysore, Hampi, Coorg, Kochi, Munnar, Alleppey, Ooty, Madurai, Puducherry.
- **West India (5 Cities)**: Mumbai, Goa, Pune, Ahmedabad, Rann of Kutch.
- **East India (3 Cities)**: Kolkata, Darjeeling, Puri & Konark.
- **Central India (2 Cities)**: Khajuraho, Indore & Ujjain.
- **Northeast India (4 Cities)**: Gangtok, Shillong & Cherrapunji, Kaziranga & Guwahati, Tawang.

---

## 4. Technical Architecture

- **Frontend**: HTML5, Tailwind CSS, Lucide Icons, Leaflet.js (OpenStreetMap), Google Fonts.
- **State Management**: `TripPlanner` class in vanilla ES6 JavaScript with browser `localStorage` persistence.
- **Server**: Lightweight Python HTTP server (`server.py`) with zero external pip dependencies.
- **Launchers**: `launch_mvp.bat` (Windows 1-click batch launcher) and `python server.py`.

---

## 5. Verification & Health Check

Automated test script [`test_data.py`](file:///c:/Users/akris/.gemini/antigravity/scratch/breeze-trip/test_data.py):
- Validates 38 cities & 117 attractions.
- Validates 111 designated "Must-Visit" spots.
- Validates `TripPlanner`, `BreezeMapManager`, and `BreezeApp` modules.
- Confirms HTTP 200 OK responses across all static assets.
