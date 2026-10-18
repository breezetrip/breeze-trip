// Breeze Trip - Comprehensive India Destinations & Attractions Data
// Covering North, South, East, West, Central, and Northeast India

const REGIONS = [
  { id: "all", name: "All India", icon: "compass" },
  { id: "North", name: "North India", icon: "mountain" },
  { id: "South", name: "South India", icon: "palmtree" },
  { id: "West", name: "West India", icon: "sun" },
  { id: "East", name: "East India", icon: "landmark" },
  { id: "Central", name: "Central India", icon: "shield" },
  { id: "Northeast", name: "Northeast India", icon: "cloud-rain" }
];

const CATEGORIES = [
  { id: "all", name: "All Places", icon: "sparkles" },
  { id: "Heritage", name: "Heritage & Forts", icon: "castle" },
  { id: "Nature", name: "Nature & Hills", icon: "trees" },
  { id: "Spiritual", name: "Spiritual & Temples", icon: "flame" },
  { id: "Beach", name: "Beaches & Coastal", icon: "waves" },
  { id: "Adventure", name: "Adventure & Safaris", icon: "compass" },
  { id: "Market", name: "Markets & Culture", icon: "shopping-bag" }
];

// Curated Popular Indian Cities Catalog for Search Menu & Quick Navigation
const POPULAR_CITIES_CATALOG = [
  // North India
  { id: "delhi", name: "Delhi", state: "Delhi NCR", region: "North", badge: "Capital & Monuments", emoji: "🏛️" },
  { id: "jaipur", name: "Jaipur", state: "Rajasthan", region: "North", badge: "The Pink City", emoji: "🏰" },
  { id: "agra", name: "Agra", state: "Uttar Pradesh", region: "North", badge: "Taj Mahal", emoji: "✨" },
  { id: "varanasi", name: "Varanasi", state: "Uttar Pradesh", region: "North", badge: "Spiritual Ghats", emoji: "🛕" },
  { id: "manali", name: "Manali", state: "Himachal Pradesh", region: "North", badge: "Snow & Adventure", emoji: "🏔️" },
  { id: "shimla", name: "Shimla", state: "Himachal Pradesh", region: "North", badge: "Queen of Hills", emoji: "🌲" },
  { id: "srinagar", name: "Srinagar", state: "Jammu & Kashmir", region: "North", badge: "Dal Lake Paradise", emoji: "🚣" },
  { id: "leh-ladakh", name: "Leh & Ladakh", state: "Ladakh (UT)", region: "North", badge: "High Passes & Lakes", emoji: "🧭" },
  { id: "udaipur", name: "Udaipur", state: "Rajasthan", region: "North", badge: "City of Lakes", emoji: "💎" },
  { id: "jodhpur", name: "Jodhpur", state: "Rajasthan", region: "North", badge: "The Blue City", emoji: "🛡️" },
  { id: "jaisalmer", name: "Jaisalmer", state: "Rajasthan", region: "North", badge: "Golden Desert Fort", emoji: "🏜️" },
  { id: "amritsar", name: "Amritsar", state: "Punjab", region: "North", badge: "Golden Temple", emoji: "☀️" },
  { id: "rishikesh", name: "Rishikesh", state: "Uttarakhand", region: "North", badge: "Yoga & Rafting", emoji: "🌊" },
  { id: "haridwar", name: "Haridwar", state: "Uttarakhand", region: "North", badge: "Ganga Aarti", emoji: "🔥" },

  // West India
  { id: "mumbai", name: "Mumbai", state: "Maharashtra", region: "West", badge: "City of Dreams", emoji: "🏙️" },
  { id: "goa", name: "Goa", state: "Goa", region: "West", badge: "Beaches & Nightlife", emoji: "🏖️" },
  { id: "pune", name: "Pune", state: "Maharashtra", region: "West", badge: "Cultural & Forts", emoji: "📚" },
  { id: "ahmedabad", name: "Ahmedabad", state: "Gujarat", region: "West", badge: "UNESCO Heritage", emoji: "📜" },
  { id: "rann-of-kutch", name: "Rann of Kutch", state: "Gujarat", region: "West", badge: "White Salt Desert", emoji: "🌕" },

  // South India
  { id: "bengaluru", name: "Bengaluru", state: "Karnataka", region: "South", badge: "Garden City", emoji: "☕" },
  { id: "chennai", name: "Chennai", state: "Tamil Nadu", region: "South", badge: "Marina & Culture", emoji: "🎵" },
  { id: "hyderabad", name: "Hyderabad", state: "Telangana", region: "South", badge: "Pearls & Biryani", emoji: "🍲" },
  { id: "mysore", name: "Mysore", state: "Karnataka", region: "South", badge: "Royal Palaces", emoji: "👑" },
  { id: "hampi", name: "Hampi", state: "Karnataka", region: "South", badge: "Boulder Empire", emoji: "🗿" },
  { id: "coorg", name: "Coorg", state: "Karnataka", region: "South", badge: "Coffee Plantations", emoji: "☕" },
  { id: "kochi", name: "Kochi", state: "Kerala", region: "South", badge: "Arabian Sea Queen", emoji: "⚓" },
  { id: "munnar", name: "Munnar", state: "Kerala", region: "South", badge: "Tea Estates", emoji: "🍃" },
  { id: "alleppey", name: "Alleppey", state: "Kerala", region: "South", badge: "Backwater Cruise", emoji: "🛶" },
  { id: "ooty", name: "Ooty", state: "Tamil Nadu", region: "South", badge: "Nilgiri Toy Train", emoji: "🚂" },
  { id: "madurai", name: "Madurai", state: "Tamil Nadu", region: "South", badge: "Meenakshi Temple", emoji: "🛕" },
  { id: "pondicherry", name: "Puducherry", state: "Puducherry (UT)", region: "South", badge: "French Quarter", emoji: "🚲" },

  // East India
  { id: "kolkata", name: "Kolkata", state: "West Bengal", region: "East", badge: "City of Joy", emoji: "🚋" },
  { id: "darjeeling", name: "Darjeeling", state: "West Bengal", region: "East", badge: "Himalayan Vistas", emoji: "🍵" },
  { id: "puri-konark", name: "Puri & Konark", state: "Odisha", region: "East", badge: "Sun Temple & Beach", emoji: "🌅" },

  // Central India
  { id: "khajuraho", name: "Khajuraho", state: "Madhya Pradesh", region: "Central", badge: "Temple Sculptures", emoji: "🎨" },
  { id: "indore-ujjain", name: "Indore & Ujjain", state: "Madhya Pradesh", region: "Central", badge: "Food & Jyotirlinga", emoji: "🍛" },

  // Northeast India
  { id: "gangtok", name: "Gangtok", state: "Sikkim", region: "Northeast", badge: "Monasteries & Peaks", emoji: "🏔️" },
  { id: "shillong-meghalaya", name: "Shillong & Cherrapunji", state: "Meghalaya", region: "Northeast", badge: "Living Root Bridges", emoji: "🌿" },
  { id: "kaziranga-guwahati", name: "Kaziranga & Guwahati", state: "Assam", region: "Northeast", badge: "Rhino Safari", emoji: "🦏" },
  { id: "tawang", name: "Tawang", state: "Arunachal Pradesh", region: "Northeast", badge: "Monastery & Glaciers", emoji: "❄️" }
];

const INDIA_DESTINATIONS = [
  // =========================================================================
  // NORTH INDIA
  // =========================================================================
  {
    id: "delhi",
    name: "Delhi",
    state: "National Capital Territory",
    region: "North",
    tagline: "The Historic Heart & Soul of India",
    description: "A mesmerizing blend of centuries-old Mughal architecture, bustling centuries-old bazaars, grand colonial boulevards, and cutting-edge cosmopolitan energy.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to March",
    idealDuration: "3 - 4 Days",
    avgBudgetPerDay: "₹2,200 - ₹4,500",
    budgetCategory: "Mid-Range",
    nearestHub: "Indira Gandhi International Airport (DEL) / New Delhi Railway Station",
    coordinates: { lat: 28.6139, lng: 77.2090 },
    tags: ["Heritage", "Spiritual", "Market", "Food"],
    famousFoods: ["Chole Bhature", "Old Delhi Butter Chicken", "Paranthe Wali Gali Parathas", "Dahi Bhalla & Chaat", "Kulfi Falooda"],
    travelTips: [
      "Use the Delhi Metro - it is clean, fast, fully air-conditioned, and beats city traffic effortlessly.",
      "Dress modestly when visiting Jama Masjid, Gurudwara Bangla Sahib, and Akshardham Temple.",
      "Book ASI monument entry tickets in advance at asi.payumoney.com to skip long queues."
    ],
    spots: [
      {
        id: "delhi-red-fort",
        name: "Red Fort (Lal Qila)",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.6,
        entryFee: "₹35 (Indians), ₹550 (Foreigners)",
        timings: "9:30 AM - 4:30 PM (Closed Mondays)",
        idealTimeHours: 2.5,
        description: "The monumental 17th-century Mughal fortress crafted from red sandstone, standing tall as an emblem of India's independence and sovereign heritage.",
        mustKnowTip: "Attend the evening Sound & Light show narrating the vibrant history of Mughal Delhi.",
        image: "https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?auto=format&fit=crop&w=700&q=80",
        lat: 28.6562,
        lng: 77.2410
      },
      {
        id: "delhi-qutub-minar",
        name: "Qutub Minar Complex",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.7,
        entryFee: "₹35 (Indians), ₹550 (Foreigners)",
        timings: "7:00 AM - 5:00 PM (Open Daily)",
        idealTimeHours: 2,
        description: "A 73-metre tall UNESCO World Heritage minaret built in 1193, surrounded by ancient ruins, the rust-resistant 4th-century Iron Pillar, and intricate Indo-Islamic carvings.",
        mustKnowTip: "Golden hour right before sunset casts warm rays against the red sandstone flutes, perfect for photography.",
        image: "https://images.unsplash.com/photo-1545126178-862a0788b30d?auto=format&fit=crop&w=700&q=80",
        lat: 28.5244,
        lng: 77.1855
      },
      {
        id: "delhi-humayuns-tomb",
        name: "Humayun's Tomb",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.8,
        entryFee: "₹35 (Indians), ₹550 (Foreigners)",
        timings: "6:00 AM - 6:00 PM (Daily)",
        idealTimeHours: 2,
        description: "The architectural precursor to the Taj Mahal, this serene Charbagh garden tomb of Emperor Humayun is one of India's most immaculate Mughal masterpieces.",
        mustKnowTip: "Walk through the newly restored Sunder Nursery park right next door for lush gardens and heritage monuments.",
        image: "https://images.unsplash.com/photo-1608958435020-e8a7109ba809?auto=format&fit=crop&w=700&q=80",
        lat: 28.5933,
        lng: 77.2507
      },
      {
        id: "delhi-india-gate",
        name: "India Gate & Kartavya Path",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.7,
        entryFee: "Free Entry",
        timings: "Open 24 Hours (Best after 6:00 PM)",
        idealTimeHours: 1.5,
        description: "A 42-metre war memorial triumphal arch dedicated to Indian soldiers, located at the center of the majestic ceremonial boulevard Kartavya Path and the National War Memorial.",
        mustKnowTip: "Visit during the evening when the monument and water fountains are gorgeously illuminated under floodlights.",
        image: "https://images.unsplash.com/photo-1597042034861-6bfcf02419f0?auto=format&fit=crop&w=700&q=80",
        lat: 28.6129,
        lng: 77.2295
      },
      {
        id: "delhi-chandni-chowk",
        name: "Old Delhi & Chandni Chowk",
        isMustVisit: true,
        category: "Market",
        rating: 4.6,
        entryFee: "Free Entry (Food costs as consumed)",
        timings: "10:00 AM - 8:00 PM (Closed Sundays for wholesale)",
        idealTimeHours: 3,
        description: "One of India's oldest and busiest markets dating back to Shah Jahan. Dive into vibrant alleyways filled with spices, jewelry, street food legends, and the historic Jama Masjid.",
        mustKnowTip: "Hop on an electric cycle rickshaw from Metro Gate 1 to navigate the spice market (Khari Baoli) comfortably.",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=700&q=80",
        lat: 28.6506,
        lng: 77.2303
      },
      {
        id: "delhi-bangla-sahib",
        name: "Gurudwara Bangla Sahib",
        isMustVisit: false,
        category: "Spiritual",
        rating: 4.9,
        entryFee: "Free Entry",
        timings: "Open 24 Hours",
        idealTimeHours: 1.5,
        description: "Prominent Sikh house of worship known for its golden dome, tranquil sacred pool (sarovar), and the massive community kitchen (langar) serving thousands of free meals daily.",
        mustKnowTip: "Cover your head before entering (scarves are provided at the entrance) and remove your footwear.",
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=700&q=80",
        lat: 28.6263,
        lng: 77.2090
      }
    ]
  },

  {
    id: "agra",
    name: "Agra",
    state: "Uttar Pradesh",
    region: "North",
    tagline: "The City of the Taj & Timeless Mughal Splendor",
    description: "Home to the world's most breathtaking monument to eternal love, Agra is a treasure trove of UNESCO World Heritage sites situated gracefully along the Yamuna River.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to March",
    idealDuration: "1 - 2 Days",
    avgBudgetPerDay: "₹2,000 - ₹4,000",
    budgetCategory: "Budget",
    nearestHub: "Agra Cantt Railway Station (connected via Vande Bharat & Gatimaan Express from Delhi)",
    coordinates: { lat: 27.1767, lng: 78.0081 },
    tags: ["Heritage", "Monuments", "Culture"],
    famousFoods: ["Petha (Angoori, Kesar, Chocolate)", "Bedmi Puri & Aloo Sabzi", "Mughlai Korma", "Dalmoth Namkeen"],
    travelTips: [
      "Taj Mahal is closed on Fridays for prayers - plan your trip accordingly.",
      "Sunrise at the Taj Mahal offers the most magical light, pleasant temperatures, and the thinnest crowds.",
      "Hire an officially certified guide with an ID badge from the tourism office inside the gates."
    ],
    spots: [
      {
        id: "agra-taj-mahal",
        name: "Taj Mahal",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.9,
        entryFee: "₹50 (Indians), ₹1,100 (Foreigners) + ₹200 for main mausoleum",
        timings: "30 mins before sunrise to 30 mins before sunset (Closed Fridays)",
        idealTimeHours: 3,
        description: "One of the Seven Wonders of the World, an ivory-white marble mausoleum commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his beloved wife Mumtaz Mahal.",
        mustKnowTip: "Enter through the East Gate at sunrise (around 5:45 AM) to witness the marble shift from pale pink to shimmering gold.",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80",
        lat: 27.1751,
        lng: 78.0421
      },
      {
        id: "agra-fort",
        name: "Agra Fort",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.7,
        entryFee: "₹50 (Indians), ₹650 (Foreigners)",
        timings: "6:00 AM - 6:00 PM (Daily)",
        idealTimeHours: 2.5,
        description: "Massive 16th-century Mughal red sandstone fortress that served as the primary residence of emperors Akbar, Jahangir, and Shah Jahan, offering balcony views of the Taj Mahal.",
        mustKnowTip: "Look out from the octagonal tower (Musamman Burj) where Shah Jahan spent his final captive years gazing at the Taj Mahal.",
        image: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=700&q=80",
        lat: 27.1795,
        lng: 78.0211
      },
      {
        id: "agra-fatehpur-sikri",
        name: "Fatehpur Sikri",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.7,
        entryFee: "₹50 (Indians), ₹610 (Foreigners)",
        timings: "Sunrise to Sunset (Daily)",
        idealTimeHours: 3,
        description: "The ghost city and short-lived Mughal imperial capital founded by Emperor Akbar in 1571, home to the towering Buland Darwaza and the saintly tomb of Salim Chishti.",
        mustKnowTip: "Located 36 km from Agra; combine it with your journey towards Jaipur or take an early morning cab.",
        image: "https://images.unsplash.com/photo-1620619767323-b95a89183081?auto=format&fit=crop&w=700&q=80",
        lat: 27.0945,
        lng: 77.6678
      },
      {
        id: "agra-mehtab-bagh",
        name: "Mehtab Bagh (Moonlight Garden)",
        isMustVisit: false,
        category: "Nature",
        rating: 4.5,
        entryFee: "₹25 (Indians), ₹300 (Foreigners)",
        timings: "6:00 AM - 6:00 PM",
        idealTimeHours: 1.5,
        description: "Charbagh garden complex located directly across the Yamuna River from the Taj Mahal, providing an unforgettable, peaceful sunset reflection perspective.",
        mustKnowTip: "Arrive at 4:30 PM for unobstructed photos of the Taj Mahal mirrored across the water with fewer tourists.",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=700&q=80",
        lat: 27.1800,
        lng: 78.0425
      }
    ]
  },

  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    region: "North",
    tagline: "The Pink City of Maharajas, Palaces & Forts",
    description: "Rajasthan's capital is a spellbinding tapestry of pink-hued heritage palaces, hilltop forts, astronomical wonders, handloom textiles, and regal hospitality.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to March",
    idealDuration: "3 - 4 Days",
    avgBudgetPerDay: "₹2,500 - ₹5,000",
    budgetCategory: "Mid-Range",
    nearestHub: "Jaipur International Airport (JAI) / Jaipur Junction Railway Station",
    coordinates: { lat: 26.9124, lng: 75.7873 },
    tags: ["Heritage", "Market", "Culture", "Food"],
    famousFoods: ["Dal Baati Churma", "Pyaaz Kachori (Rawat Mishtan Bhandar)", "Ghewar", "Laal Maas", "Lassi at Lassiwala"],
    travelTips: [
      "Buy the Jaipur Composite Ticket (₹300 for Indians / ₹1000 for foreigners) which covers Amber Fort, Hawa Mahal, Jantar Mantar, Albert Hall, and Nahargarh Fort.",
      "Stay in a heritage Haveli inside the old walled city to experience authentic Rajasthani hospitality.",
      "Bargain with a friendly smile at Johari Bazaar and Bapu Bazaar for gemstones, blue pottery, and bandhani sarees."
    ],
    spots: [
      {
        id: "jaipur-amber-fort",
        name: "Amber Fort & Palace",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.8,
        entryFee: "₹100 (Indians), ₹500 (Foreigners)",
        timings: "8:00 AM - 5:30 PM & 6:30 PM - 9:15 PM (Night visit)",
        idealTimeHours: 3.5,
        description: "An awe-inspiring hilltop citadel overlooking Maota Lake, famous for its magnificent Sheesh Mahal (Mirror Palace), Diwan-e-Aam, and Mughal garden architecture.",
        mustKnowTip: "Opt for an electric jeep ride up the ramparts, and don't miss the secret underground tunnel leading to Jaigarh Fort.",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=700&q=80",
        lat: 26.9855,
        lng: 75.8513
      },
      {
        id: "jaipur-hawa-mahal",
        name: "Hawa Mahal (Palace of Winds)",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.7,
        entryFee: "₹50 (Indians), ₹200 (Foreigners)",
        timings: "9:00 AM - 4:30 PM",
        idealTimeHours: 1.5,
        description: "The iconic 5-storey pink sandstone façade featuring 953 honeycomb-carved jharokhas (latticed windows), engineered to allow royal ladies to watch street festivals unseen.",
        mustKnowTip: "Cross the street to the rooftop cafes (Tattoo Cafe or Wind View Cafe) for the best vantage point photos with the entire monument.",
        image: "https://images.unsplash.com/photo-1603288940300-349f2b8f886f?auto=format&fit=crop&w=700&q=80",
        lat: 26.9239,
        lng: 75.8267
      },
      {
        id: "jaipur-city-palace",
        name: "City Palace Jaipur",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.6,
        entryFee: "₹200 (Indians), ₹700 (Foreigners) - Royal Grandeur ticket extra",
        timings: "9:30 AM - 5:00 PM & 7:00 PM - 10:00 PM",
        idealTimeHours: 2.5,
        description: "The ceremonial seat of the Maharaja of Jaipur, featuring courtyards, museums displaying royal textiles and weaponry, and the world-famous Peacock Gate.",
        mustKnowTip: "The Pritam Niwas Chowk features four legendary painted gates depicting the four seasons of India.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80",
        lat: 26.9258,
        lng: 75.8237
      },
      {
        id: "jaipur-jantar-mantar",
        name: "Jantar Mantar",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.6,
        entryFee: "₹50 (Indians), ₹200 (Foreigners)",
        timings: "9:00 AM - 4:30 PM",
        idealTimeHours: 1.5,
        description: "A UNESCO World Heritage astronomical observatory containing nineteen stone architectural instruments, including the world's largest stone sundial (Vrihat Samrat Yantra).",
        mustKnowTip: "Hire a certified astronomy guide right at the gate to understand how accurately these ancient instruments calculate planetary positions.",
        image: "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=700&q=80",
        lat: 26.9248,
        lng: 75.8246
      },
      {
        id: "jaipur-nahargarh-fort",
        name: "Nahargarh Fort (Sunset Point)",
        isMustVisit: true,
        category: "Nature",
        rating: 4.7,
        entryFee: "₹50 (Indians), ₹200 (Foreigners)",
        timings: "10:00 AM - 5:30 PM (Fort) / Open till 10 PM for Padao restaurant",
        idealTimeHours: 2,
        description: "Perched on the edge of the rugged Aravalli Hills, Nahargarh provides sweeping panoramic views over the entire expanse of Jaipur city.",
        mustKnowTip: "Arrive 1 hour before sunset to grab a front-row seat at the rooftop cafe and watch the city transition from dusk to glittering night lights.",
        image: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=700&q=80",
        lat: 26.9372,
        lng: 75.8155
      }
    ]
  },

  {
    id: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh",
    region: "North",
    tagline: "The World's Oldest Living City of Light & Devotion",
    description: "Mark Twain famously noted that Varanasi is older than history, tradition, and legend. It is the spiritual capital of Hinduism on the sacred banks of the River Ganga.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to March",
    idealDuration: "2 - 3 Days",
    avgBudgetPerDay: "₹1,800 - ₹3,500",
    budgetCategory: "Budget",
    nearestHub: "Lal Bahadur Shastri International Airport (VNS) / Varanasi Junction (BSB)",
    coordinates: { lat: 25.3176, lng: 82.9739 },
    tags: ["Spiritual", "Heritage", "Culture"],
    famousFoods: ["Banarasi Paan", "Kachori Jalebi", "Malaiyo (Winter sweet)", "Tamatar Chaat", "Lassi at Blue Lassi Shop"],
    travelTips: [
      "Wake up before dawn for a sunrise rowboat or bajra cruise from Assi Ghat to Manikarnika Ghat.",
      "Pre-book the Kashi Vishwanath Sugam Darshan ticket online through shrikashivishwanath.org to bypass hours of queues.",
      "Dress respectfully with shoulders and knees covered in all temples and ghats."
    ],
    spots: [
      {
        id: "varanasi-dashashwamedh-ghat",
        name: "Dashashwamedh Ghat & Evening Ganga Aarti",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.9,
        entryFee: "Free Entry (Boat seating ₹150 - ₹300)",
        timings: "Aarti starts at 6:45 PM (Summer) / 6:00 PM (Winter)",
        idealTimeHours: 2,
        description: "The most vibrant ghat where young priests perform the spectacular, synchronized multi-tiered brass lamp Ganga Aarti every evening to hymns and conch shells.",
        mustKnowTip: "Rent a seat on a wooden boat facing the ghat 45 minutes before the Aarti begins for an unobstructed theatrical view.",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=700&q=80",
        lat: 25.3075,
        lng: 83.0104
      },
      {
        id: "varanasi-kashi-vishwanath",
        name: "Kashi Vishwanath Corridor & Golden Temple",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.8,
        entryFee: "Free General Entry (Special Darshan ₹300)",
        timings: "3:00 AM - 11:00 PM",
        idealTimeHours: 2.5,
        description: "One of the twelve sacred Jyotirlingas, newly connected to the holy river through a grand, sprawling pedestrian corridor inaugurated in 2021.",
        mustKnowTip: "Phones, electronic items, leather belts, and bags are prohibited inside; secure lockers are available at corridor entry gates.",
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=700&q=80",
        lat: 25.3109,
        lng: 83.0107
      },
      {
        id: "varanasi-sarnath",
        name: "Sarnath Deer Park & Dhamek Stupa",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.7,
        entryFee: "₹25 (Indians), ₹300 (Foreigners)",
        timings: "9:00 AM - 5:00 PM (Museum closed Fridays)",
        idealTimeHours: 3,
        description: "The sacred site just 10 km from Varanasi where Lord Buddha preached his very first sermon (Dhammacakkappavattana Sutta) after attaining enlightenment.",
        mustKnowTip: "Visit the Archaeological Museum on site to gaze upon the original 3rd-century BC Lion Capital of Ashoka (the National Emblem of India).",
        image: "https://images.unsplash.com/photo-1600100397608-f46399c6b653?auto=format&fit=crop&w=700&q=80",
        lat: 25.3811,
        lng: 83.0214
      },
      {
        id: "varanasi-assi-ghat",
        name: "Assi Ghat (Subah-e-Banaras)",
        isMustVisit: false,
        category: "Spiritual",
        rating: 4.7,
        entryFee: "Free Entry",
        timings: "Best at 5:00 AM for Subah-e-Banaras",
        idealTimeHours: 1.5,
        description: "The southernmost major ghat, celebrated for its morning cultural programs featuring classical music, Vedic chanting, yoga sessions, and artisanal chai stalls.",
        mustKnowTip: "Try the lemon tea and piping hot apple pie at the nearby international cafes in Assi village after morning prayers.",
        image: "https://images.unsplash.com/photo-1598449356475-b9f71db7d847?auto=format&fit=crop&w=700&q=80",
        lat: 25.2905,
        lng: 83.0069
      }
    ]
  },

  {
    id: "udaipur",
    name: "Udaipur",
    state: "Rajasthan",
    region: "North",
    tagline: "The Venice of the East & City of Lakes",
    description: "Surrounded by the azure waters of Lake Pichola and the dramatic ridges of the Aravalli Hills, Udaipur is arguably India's most romantic and regal destination.",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "September to March",
    idealDuration: "3 - 4 Days",
    avgBudgetPerDay: "₹3,000 - ₹6,500",
    budgetCategory: "Luxury",
    nearestHub: "Maharana Pratap Airport (UDR) / Udaipur City Railway Station",
    coordinates: { lat: 24.5854, lng: 73.7125 },
    tags: ["Heritage", "Nature", "Culture"],
    famousFoods: ["Dal Baati Churma", "Gatta Curry", "Ker Sangri", "Kachori with spicy mint chutney"],
    travelTips: [
      "Book a sunset boat ride on Lake Pichola that stops at the historic island palace of Jag Mandir.",
      "The City Palace is vast; allow at least 3 hours and wear comfortable walking shoes.",
      "Have dinner at an open-air rooftop restaurant overlooking Lake Pichola with views of the illuminated Taj Lake Palace."
    ],
    spots: [
      {
        id: "udaipur-city-palace",
        name: "Udaipur City Palace Complex",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.8,
        entryFee: "₹300 (Adults), Camera fee extra",
        timings: "9:00 AM - 5:30 PM",
        idealTimeHours: 3,
        description: "A monumental palace complex built over 400 years by 22 rulers of Mewar, featuring mirror-work galleries, Chinese tiles, antique courtyards, and panoramic lake balconies.",
        mustKnowTip: "Don't miss the Sheesh Mahal and the peacock courtyard (Mor Chowk) with over 5,000 brilliant mosaic glass tiles.",
        image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=700&q=80",
        lat: 24.5764,
        lng: 73.6835
      },
      {
        id: "udaipur-lake-pichola",
        name: "Lake Pichola & Jag Mandir",
        isMustVisit: true,
        category: "Nature",
        rating: 4.9,
        entryFee: "₹400 - ₹800 (Boat Ride)",
        timings: "9:00 AM - 6:00 PM (Best at 5:00 PM for sunset)",
        idealTimeHours: 2,
        description: "An artificial freshwater lake created in 1362 AD, containing the world-renowned Lake Palace hotel and the 17th-century island sanctuary of Jag Mandir.",
        mustKnowTip: "Sunset boat rides sell out quickly in peak winter season; buy tickets at the City Palace jetty by noon.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=700&q=80",
        lat: 24.5684,
        lng: 73.6780
      },
      {
        id: "udaipur-saheliyon-ki-bari",
        name: "Saheliyon Ki Bari (Garden of the Maidens)",
        isMustVisit: false,
        category: "Nature",
        rating: 4.5,
        entryFee: "₹20 (Indians), ₹100 (Foreigners)",
        timings: "9:00 AM - 7:00 PM",
        idealTimeHours: 1,
        description: "Historic ornamental garden with lush lawns, marble elephant fountains, lotus pools, and rain-simulating hydraulic water features created for royal princesses.",
        mustKnowTip: "The fountains operate entirely by gravity pressure without any modern pumps.",
        image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=700&q=80",
        lat: 24.6045,
        lng: 73.6844
      },
      {
        id: "udaipur-sajjangarh",
        name: "Sajjangarh (Monsoon Palace)",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.6,
        entryFee: "₹60 (Entry) + Forest transit charge",
        timings: "9:00 AM - 6:00 PM",
        idealTimeHours: 2,
        description: "Palatial hilltop residence perched on Bansdara peak in the Aravalli Range, built to track monsoon clouds and famed as a Bond filming location in Octopussy.",
        mustKnowTip: "Visit around 4:30 PM for the most breathtaking 360-degree sunset over the lakes and hills.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=700&q=80",
        lat: 24.5898,
        lng: 73.6364
      }
    ]
  },

  {
    id: "manali",
    name: "Manali",
    state: "Himachal Pradesh",
    region: "North",
    tagline: "The Valley of the Gods & Himalayan Playground",
    description: "Nestled at the northern end of the Kullu Valley by the Beas River, Manali is India's prime alpine escape offering snow adventure, pine forests, and bohemian cafes.",
    image: "https://images.unsplash.com/photo-1579619564365-03554da8239e?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1579619564365-03554da8239e?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to June (Dec-Feb for Snow, May-Jun for Pleasant Summers)",
    idealDuration: "4 - 5 Days",
    avgBudgetPerDay: "₹2,500 - ₹4,800",
    budgetCategory: "Mid-Range",
    nearestHub: "Bhuntar Airport (KUU - 50 km) / Overnight Volvo buses from New Delhi & Chandigarh",
    coordinates: { lat: 32.2432, lng: 77.1892 },
    tags: ["Nature", "Adventure"],
    famousFoods: ["Himachali Siddu (steamed stuffed wheat bread)", "Trout Fish", "Thukpa & Momos", "Kullu Dham"],
    travelTips: [
      "Obtain an online Rohtang Pass vehicle permit at least 2-3 days ahead if traveling in high summer season.",
      "Stay in Old Manali for quaint wooden cottages, live music cafes, and orchard walks away from the crowded Mall Road.",
      "Dress in multiple layers - mountain temperatures drop sharply once the sun sets."
    ],
    spots: [
      {
        id: "manali-solang-valley",
        name: "Solang Valley",
        isMustVisit: true,
        category: "Adventure",
        rating: 4.7,
        entryFee: "Free Entry (Activity charges extra)",
        timings: "Open all day (Best 9:00 AM - 5:00 PM)",
        idealTimeHours: 4,
        description: "The high-adrenaline adventure capital of Himachal, offering paragliding, zorbing, quad biking in summer, and skiing / snowboarding on snowy slopes in winter.",
        mustKnowTip: "Negotiate bundled activity packages with certified operators and check safety harnesses before paragliding.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=700&q=80",
        lat: 32.3166,
        lng: 77.1578
      },
      {
        id: "manali-atal-tunnel-sissu",
        name: "Atal Tunnel & Sissu (Lahaul Valley)",
        isMustVisit: true,
        category: "Nature",
        rating: 4.9,
        entryFee: "Free Entry",
        timings: "Open 24 Hours (Subject to winter weather advisories)",
        idealTimeHours: 5,
        description: "The world's longest highway tunnel above 10,000 feet (9.02 km) passing through the Pir Panjal range to unveil the stark, magical landscapes of Lahaul and the Sissu waterfall.",
        mustKnowTip: "You cross from lush green cedar valleys into dramatic snowbound trans-Himalayan scenery within just 15 minutes of driving through the tunnel.",
        image: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=700&q=80",
        lat: 32.4820,
        lng: 77.1235
      },
      {
        id: "manali-hadimba-temple",
        name: "Hadimba Devi Temple",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.6,
        entryFee: "Free Entry",
        timings: "8:00 AM - 6:00 PM",
        idealTimeHours: 1.5,
        description: "Unique four-tiered wooden pagoda temple built in 1553 AD, set amidst an enchanting forest of towering Himalayan cedar (Deodar) trees.",
        mustKnowTip: "Visit early in the morning before 9:30 AM to hear the birds singing in the deodar canopy in peace.",
        image: "https://images.unsplash.com/photo-1579619564365-03554da8239e?auto=format&fit=crop&w=700&q=80",
        lat: 32.2483,
        lng: 77.1804
      },
      {
        id: "manali-old-manali",
        name: "Old Manali & Cafe Culture",
        isMustVisit: false,
        category: "Market",
        rating: 4.6,
        entryFee: "Free",
        timings: "Best from afternoon till 10:00 PM",
        idealTimeHours: 3,
        description: "Rustic mountain village filled with traditional Himachali timber-and-stone houses, vibrant hippie cafes, artisanal bakeries, and live acoustic music.",
        mustKnowTip: "Try wood-fired pizza and fresh apple crumble pie at Cafe 1947 by the Manalsu river stream.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
        lat: 32.2546,
        lng: 77.1780
      }
    ]
  },

  {
    id: "leh-ladakh",
    name: "Leh & Ladakh",
    state: "Ladakh (UT)",
    region: "North",
    tagline: "The Land of High Passes, Blue Lakes & Starlit Skies",
    description: "A high-altitude desert kingdom crowned by jagged mountain peaks, turquoise glacial lakes, ancient Buddhist monasteries, and the highest motorable roads on earth.",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "May to September (Roads open; peak weather)",
    idealDuration: "6 - 8 Days",
    avgBudgetPerDay: "₹3,500 - ₹7,000",
    budgetCategory: "Mid-Range",
    nearestHub: "Kushok Bakula Rimpochee Airport, Leh (IXL)",
    coordinates: { lat: 34.1526, lng: 77.5771 },
    tags: ["Nature", "Adventure", "Spiritual"],
    famousFoods: ["Thukpa & Tingmo", "Ladakhi Butter Tea (Gur Gur Chai)", "Skyu (Traditional pasta soup)", "Yak Cheese"],
    travelTips: [
      "ACCLIMATIZATION IS CRITICAL: Rest completely for the first 24-48 hours upon flying into Leh (11,500 ft) to prevent Acute Mountain Sickness (AMS).",
      "Apply for Inner Line Permits (ILP) online through the official portal for Pangong Tso, Nubra Valley, and Hanle.",
      "Carry ample cash and a postpaid BSNL / Jio SIM card; prepaid non-J&K/Ladakh SIMs do not roam in Ladakh."
    ],
    spots: [
      {
        id: "ladakh-pangong-tso",
        name: "Pangong Tso Lake",
        isMustVisit: true,
        category: "Nature",
        rating: 4.9,
        entryFee: "ILP Permit Required (₹400 eco-fee)",
        timings: "Open all day (Best sunrise & daytime)",
        idealTimeHours: 6,
        description: "Endorheic salt lake sitting at 14,270 ft extending 134 km across India and Tibet, celebrated for changing its colors from deep azure to emerald green throughout the day.",
        mustKnowTip: "Stay overnight in a lakeside cottage or camp in Spangmik to witness milky-way night skies and brilliant sunrise reflections.",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=700&q=80",
        lat: 33.7595,
        lng: 78.6674
      },
      {
        id: "ladakh-nubra-valley",
        name: "Nubra Valley & Hunder Sand Dunes",
        isMustVisit: true,
        category: "Nature",
        rating: 4.8,
        entryFee: "ILP Permit Required",
        timings: "All day (Camel rides 9 AM - 6 PM)",
        idealTimeHours: 6,
        description: "Known as the Valley of Flowers of Ladakh, famed for high-altitude cold desert sand dunes and double-humped Bactrian camels against snowy mountain backdrops.",
        mustKnowTip: "Take a ride on the double-humped camel at Hunder sand dunes and stop at Diskit Monastery to see the 106-ft Maitreya Buddha.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
        lat: 34.5824,
        lng: 77.4477
      },
      {
        id: "ladakh-thiksey-monastery",
        name: "Thiksey Monastery",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.8,
        entryFee: "₹30",
        timings: "7:00 AM - 6:00 PM (Morning prayers at 7 AM)",
        idealTimeHours: 2.5,
        description: "Affiliated with the Gelugpa Tibetan Buddhist sect, this 12-storey whitewashed complex resembles the Potala Palace of Lhasa and houses a 49-ft Maitreya Buddha statue.",
        mustKnowTip: "Arrive at 7:00 AM sharp to sit quietly inside the prayer hall and witness the monks' morning chanting and horn blowing.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
        lat: 34.0573,
        lng: 77.6669
      },
      {
        id: "ladakh-khardung-la",
        name: "Khardung La Pass",
        isMustVisit: true,
        category: "Adventure",
        rating: 4.7,
        entryFee: "Permit Checkpoint",
        timings: "Daylight hours",
        idealTimeHours: 1,
        description: "Legendary mountain pass at 17,982 ft (5,359 m), acting as the gateway to the Shyok and Nubra valleys, and a dream milestone for motorcyclists.",
        mustKnowTip: "Do not stay at the top for more than 15-20 minutes due to thin oxygen levels, and drink plenty of water.",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=700&q=80",
        lat: 34.2787,
        lng: 77.6047
      }
    ]
  },

  {
    id: "rishikesh",
    name: "Rishikesh",
    state: "Uttarakhand",
    region: "North",
    tagline: "Yoga Capital of the World & River Adventure Hub",
    description: "Where the pristine emerald waters of the Ganga emerge from the Himalayan foothills, welcoming spiritual seekers, meditators, and whitewater rafters alike.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "September to April (March-May & Sep-Nov for Rafting)",
    idealDuration: "2 - 3 Days",
    avgBudgetPerDay: "₹1,800 - ₹3,800",
    budgetCategory: "Budget",
    nearestHub: "Dehradun Jolly Grant Airport (DED - 20 km) / Yog Nagari Rishikesh Railway Station",
    coordinates: { lat: 30.0869, lng: 78.2676 },
    tags: ["Spiritual", "Adventure", "Nature"],
    famousFoods: ["Pahari Thali", "Ayurvedic Herbal Teas", "Falafel & Hummus platters in Tapovan", "Kachori & Jalebi in Rishikesh Bazaar"],
    travelTips: [
      "Rishikesh is a strictly vegetarian and alcohol-free holy city.",
      "Whitewater rafting operates from Shivpuri (16 km) or Marine Drive (24 km); book only with licensed Uttarakhand Tourism guides.",
      "Stay in Tapovan or near Laxman Jhula for the best yoga ashrams and river-view cafes."
    ],
    spots: [
      {
        id: "rishikesh-triveni-ghat",
        name: "Triveni Ghat Evening Maha Aarti",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.8,
        entryFee: "Free Entry",
        timings: "6:00 PM - 7:30 PM",
        idealTimeHours: 1.5,
        description: "The holiest ghat in Rishikesh where three sacred subterranean rivers meet. Every evening, devotees gather for devotional chants and release floating diya lamps into the Ganga.",
        mustKnowTip: "Purchase a small flower-and-camphor diya boat from local stalls and release it onto the waters with your prayer.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
        lat: 30.1030,
        lng: 78.2936
      },
      {
        id: "rishikesh-ganga-rafting",
        name: "Ganga Whitewater Rafting (Shivpuri)",
        isMustVisit: true,
        category: "Adventure",
        rating: 4.8,
        entryFee: "₹600 - ₹1,500 per person (based on stretch length)",
        timings: "8:00 AM - 3:00 PM (Closed July-August monsoon)",
        idealTimeHours: 3.5,
        description: "Thrilling Grade III & IV river rapids including 'Roller Coaster', 'Golf Course', and 'Club House', concluding with cliff jumping into the deep river canyon.",
        mustKnowTip: "Wear quick-dry clothing and secure your spectacles or cameras with waterproof floats.",
        image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=700&q=80",
        lat: 30.1340,
        lng: 78.3840
      },
      {
        id: "rishikesh-beatles-ashram",
        name: "Beatles Ashram (Chaurasi Kutia)",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.5,
        entryFee: "₹150 (Indians), ₹600 (Foreigners)",
        timings: "9:00 AM - 4:00 PM",
        idealTimeHours: 2.5,
        description: "The historic ashram inside Rajaji Tiger Reserve where The Beatles stayed in 1968 to study Transcendental Meditation and composed over 40 songs for the White Album.",
        mustKnowTip: "Explore the meditation igloos (kutiyas) and the Beatles Cathedral covered in vibrant global graffiti art.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
        lat: 30.1130,
        lng: 78.3120
      }
    ]
  },

  {
    id: "amritsar",
    name: "Amritsar",
    state: "Punjab",
    region: "North",
    tagline: "The Golden Sanctuary of Faith, Valour & Gastronomy",
    description: "The spiritual heart of Sikhism, famous for the shimmering Golden Temple whose doors welcome every human being with warm compassion, langar, and patriotic spirit.",
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to March",
    idealDuration: "2 Days",
    avgBudgetPerDay: "₹1,800 - ₹3,600",
    budgetCategory: "Budget",
    nearestHub: "Sri Guru Ram Dass Jee International Airport (ATQ) / Amritsar Junction",
    coordinates: { lat: 31.6340, lng: 74.8723 },
    tags: ["Spiritual", "Heritage", "Food"],
    famousFoods: ["Amritsari Kulcha (Bhai Kulwant Singh)", "Makki di Roti & Sarson da Saag", "Amritsari Machhi (Fried fish)", "Sweet Peda Lassi (Ahuja)"],
    travelTips: [
      "Keep your head covered with a rumal / scarf at all times inside the Golden Temple complex and leave your footwear at the free counter.",
      "The Golden Temple Langar feeds over 100,000 people daily for free; everyone is invited to eat and volunteer.",
      "Plan the Wagah Border parade visit in the late afternoon; reach the border stadium by 3:30 PM for good seats."
    ],
    spots: [
      {
        id: "amritsar-golden-temple",
        name: "Sri Harmandir Sahib (Golden Temple)",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.9,
        entryFee: "Free Entry",
        timings: "Open 24 Hours (Best at 4:00 AM for Palki Sahib & illuminated at night)",
        idealTimeHours: 3.5,
        description: "The preeminent spiritual shrine of Sikhism, plated with 500 kg of pure gold, floating serenely in the center of the Amrit Sarovar (Pool of Nectar).",
        mustKnowTip: "Visit once during the day and once at night after 9 PM to experience two entirely different mystical atmospheres.",
        image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=700&q=80",
        lat: 31.6200,
        lng: 74.8765
      },
      {
        id: "amritsar-wagah-border",
        name: "Wagah Border Beating Retreat Ceremony",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.8,
        entryFee: "Free Entry (Carry Govt ID / Passport)",
        timings: "Ceremony 4:30 PM (Winter) / 5:30 PM (Summer); arrive 2 hours prior",
        idealTimeHours: 3,
        description: "The electrifying daily military ceremony performed by India's Border Security Force (BSF) and Pakistan Rangers, marked by synchronized high-kicks and patriotic cheers.",
        mustKnowTip: "Bags, food, and big cameras are strictly prohibited inside the stadium; only wallets and phones are allowed.",
        image: "https://images.unsplash.com/photo-1597042034861-6bfcf02419f0?auto=format&fit=crop&w=700&q=80",
        lat: 31.6047,
        lng: 74.5734
      },
      {
        id: "amritsar-jallianwala-bagh",
        name: "Jallianwala Bagh National Memorial",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.7,
        entryFee: "Free Entry",
        timings: "6:30 AM - 7:30 PM",
        idealTimeHours: 1.5,
        description: "Solemn public garden memorial preserving the tragic site of the 1919 massacre, featuring bullet-marked brick walls and the historic Martyrs' Well.",
        mustKnowTip: "Located just a 3-minute walk from the Golden Temple plaza.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80",
        lat: 31.6206,
        lng: 74.8801
      }
    ]
  },

  // =========================================================================
  // WEST INDIA
  // =========================================================================
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    region: "West",
    tagline: "The City of Dreams, Cinema & Coastal Energy",
    description: "India's financial and entertainment powerhouse, where Victorian gothic architecture meets Bollywood glamour, bustling local trains, and breezy seaside promenades.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "November to February",
    idealDuration: "3 - 4 Days",
    avgBudgetPerDay: "₹2,800 - ₹6,000",
    budgetCategory: "Mid-Range",
    nearestHub: "Chhatrapati Shivaji Maharaj International Airport (BOM) / CSMT Railway Station",
    coordinates: { lat: 18.9220, lng: 72.8347 },
    tags: ["Heritage", "Market", "Food", "Beach"],
    famousFoods: ["Vada Pav (Ashok Vada Pav)", "Pav Bhaji (Sardar / Cannon)", "Bombay Duck & Coastal Seafood", "Parsi Berry Pulao (Britannia)", "Bhel Puri at Chowpatty"],
    travelTips: [
      "Avoid traveling on the local trains during rush hours (8:30-10:30 AM and 5:30-8:30 PM) unless you want the extreme local commuter experience.",
      "Take an early morning walking heritage tour through Fort and Kala Ghoda.",
      "Use metered black-and-yellow (kaali-peeli) taxis in South Mumbai and auto-rickshaws in the suburbs."
    ],
    spots: [
      {
        id: "mumbai-gateway-of-india",
        name: "Gateway of India & Taj Mahal Palace",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.8,
        entryFee: "Free Entry",
        timings: "Open 24 Hours (Best early morning or sunset)",
        idealTimeHours: 1.5,
        description: "The 26-metre basalt arch monument built to commemorate the 1911 visit of King George V, standing proudly on the harbor opposite the legendary Taj Mahal Palace hotel.",
        mustKnowTip: "Board the ferry from the Gateway jetty for the 1-hour sea crossing to the ancient rock-cut Elephanta Caves.",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=700&q=80",
        lat: 18.9220,
        lng: 72.8347
      },
      {
        id: "mumbai-marine-drive",
        name: "Marine Drive (The Queen's Necklace)",
        isMustVisit: true,
        category: "Scenic",
        rating: 4.9,
        entryFee: "Free",
        timings: "Open 24 Hours",
        idealTimeHours: 2,
        description: "A 3.6-kilometre arc of promenade along the Arabian Sea coast, flanked by the world's second-largest collection of Art Deco buildings, twinkling like a string of pearls by night.",
        mustKnowTip: "Sit on the tetrapods near sunset with roasted bhutta (corn) or cutting chai from walking vendors.",
        image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=700&q=80",
        lat: 18.9430,
        lng: 72.8230
      },
      {
        id: "mumbai-elephanta-caves",
        name: "Elephanta Caves",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.6,
        entryFee: "₹40 (Indians), ₹600 (Foreigners) + Ferry ₹260 return",
        timings: "9:00 AM - 5:30 PM (Closed Mondays)",
        idealTimeHours: 4,
        description: "UNESCO World Heritage rock-cut cave temples on Elephanta Island dating back to the 5th-7th centuries, crowned by the majestic 20-foot three-headed Maheshmurti sculpture.",
        mustKnowTip: "Catch the morning 9 AM ferry to avoid mid-day heat on the island steps.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80",
        lat: 18.9633,
        lng: 72.9315
      },
      {
        id: "mumbai-csmt-terminus",
        name: "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
        isMustVisit: false,
        category: "Heritage",
        rating: 4.7,
        entryFee: "Free (Platform ticket ₹10)",
        timings: "Open 24 Hours (Illuminated 7 PM - 11 PM)",
        idealTimeHours: 1,
        description: "Masterpiece of Victorian Gothic Revival architecture in India fused with traditional Indian styles, serving as one of the world's most bustling rail terminals.",
        mustKnowTip: "Walk to the designated viewing deck across the junction at night when the building is illuminated in multicolored LEDs.",
        image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=700&q=80",
        lat: 18.9400,
        lng: 72.8354
      }
    ]
  },

  {
    id: "goa",
    name: "Goa",
    state: "Goa",
    region: "West",
    tagline: "Golden Sands, Portuguese Heritage & Tropical Susegad",
    description: "India's beloved coastal paradise, boasting sun-kissed Arabian Sea beaches, UNESCO Portuguese churches, spice plantations, beach shacks, and a relaxed susegad lifestyle.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "November to March",
    idealDuration: "4 - 6 Days",
    avgBudgetPerDay: "₹2,500 - ₹5,500",
    budgetCategory: "Mid-Range",
    nearestHub: "Dabolim Airport (GOI) / Manohar International Airport Mopa (GOX) / Madgaon Station",
    coordinates: { lat: 15.2993, lng: 74.1240 },
    tags: ["Beach", "Heritage", "Adventure", "Food"],
    famousFoods: ["Goan Fish Curry Thali", "Pork Vindaloo", "Bebinca (Multi-layered coconut dessert)", "Prawn Balchão", "Feni (Cashew spirit)"],
    travelTips: [
      "Rent a two-wheeler (scooter/bike for ₹350-₹500/day) - it is the absolute best and most liberating way to explore Goa's hidden beaches and backroads.",
      "Stay in North Goa (Anjuna, Vagator, Ashvem) for buzzing nightlife and beach clubs; choose South Goa (Palolem, Agonda, Benaulim) for serene relaxation.",
      "Respect beach safety flags; never swim in the sea during monsoon or when red flags are flying."
    ],
    spots: [
      {
        id: "goa-basilica-bom-jesus",
        name: "Basilica of Bom Jesus (Old Goa)",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.8,
        entryFee: "Free Entry",
        timings: "9:00 AM - 6:30 PM (Sunday 10:30 AM - 6:30 PM)",
        idealTimeHours: 1.5,
        description: "16th-century Baroque church and UNESCO World Heritage monument holding the sacred mortal remains of St. Francis Xavier in a silver casket.",
        mustKnowTip: "Walk across the road to Sé Cathedral, one of the largest churches in Asia, housing the giant Golden Bell.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=700&q=80",
        lat: 15.5009,
        lng: 73.9116
      },
      {
        id: "goa-palolem-beach",
        name: "Palolem Beach (South Goa)",
        isMustVisit: true,
        category: "Beach",
        rating: 4.8,
        entryFee: "Free Entry",
        timings: "Open 24 Hours",
        idealTimeHours: 4,
        description: "Crescent-shaped white sand beach fringed by towering coconut palms, gentle shallow swimming waters, colorful beach huts, and dolphin-spotting boat trips.",
        mustKnowTip: "Rent a kayak to paddle to Butterfly Beach and Monkey Island at the southern end during morning low tide.",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=700&q=80",
        lat: 15.0100,
        lng: 74.0232
      },
      {
        id: "goa-fort-aguada",
        name: "Fort Aguada & Lighthouse",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.6,
        entryFee: "Free (Lighthouse ₹20)",
        timings: "9:30 AM - 6:00 PM",
        idealTimeHours: 2,
        description: "A well-preserved 17th-century Portuguese coastal fort on Sinquerim Beach, featuring a 4-storey freshwater reservoir and a 19th-century lighthouse overlooking the Arabian Sea.",
        mustKnowTip: "Visit the lower fort for dramatic waves crashing against the seawall and the upper fort for expansive ocean vistas.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=700&q=80",
        lat: 15.4924,
        lng: 73.7736
      },
      {
        id: "goa-dudhsagar-falls",
        name: "Dudhsagar Waterfalls",
        isMustVisit: true,
        category: "Nature",
        rating: 4.7,
        entryFee: "Forest permit + Jeep safari (~₹3,000 per jeep split across 7 people)",
        timings: "8:00 AM - 4:30 PM (Closed during heavy peak monsoon)",
        idealTimeHours: 5,
        description: "A colossal four-tiered 310-metre waterfall on the Mandovi River resembling a cascading sea of milk, surrounded by dense Bhagwan Mahavir Wildlife Sanctuary jungle.",
        mustKnowTip: "Take the authorized forest department 4x4 jeep safari from Kulem station; lifejackets are mandatory for swimming in the natural pool.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
        lat: 15.3144,
        lng: 74.3143
      }
    ]
  },

  {
    id: "rann-of-kutch",
    name: "Rann of Kutch",
    state: "Gujarat",
    region: "West",
    tagline: "The White Salt Desert Under the Starlit Sky",
    description: "One of the world's largest seasonal salt marsh deserts, transforming into an endless shimmering white wonderland especially during the vibrant winter Rann Utsav festival.",
    image: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "November to February (Rann Utsav Season)",
    idealDuration: "3 Days",
    avgBudgetPerDay: "₹3,000 - ₹6,000",
    budgetCategory: "Mid-Range",
    nearestHub: "Bhuj Airport (BHJ) / Bhuj Railway Station (80 km)",
    coordinates: { lat: 23.8344, lng: 69.8394 },
    tags: ["Nature", "Culture", "Adventure"],
    famousFoods: ["Kutchi Dabeli", "Kathiyawadi Thali", "Khaman Dhokla", "Bajra no Rotlo with Ringna no Olo", "Gulab Pak"],
    travelTips: [
      "Obtain the White Rann permit online at kutchpermit.gujarat.gov.in or at the Bhirandiyara village checkpost.",
      "Plan your visit to coincide with the Full Moon nights when the white salt desert glows ethereally under moonlight.",
      "Explore craft villages like Nirona to see Rogan art and copper bells crafted nowhere else in the world."
    ],
    spots: [
      {
        id: "kutch-white-rann",
        name: "White Desert (Dhordo)",
        isMustVisit: true,
        category: "Nature",
        rating: 4.9,
        entryFee: "₹100 permit per person + vehicle charge",
        timings: "Open all day (Best 4:30 PM - 8:00 PM and full-moon nights)",
        idealTimeHours: 3.5,
        description: "An endless expanse of pure crystalline salt desert that stretches to the horizon, creating surreal optical illusions and celestial night views.",
        mustKnowTip: "Walk beyond the tourist camel carts onto the dry salt crust for quiet solitude and surreal photographs.",
        image: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=700&q=80",
        lat: 23.8344,
        lng: 69.8394
      },
      {
        id: "kutch-kalo-dungar",
        name: "Kalo Dungar (Black Hill)",
        isMustVisit: true,
        category: "Nature",
        rating: 4.6,
        entryFee: "Free Entry",
        timings: "6:00 AM - 6:30 PM",
        idealTimeHours: 2,
        description: "The highest point in Kutch at 462 metres, offering panoramic views of the great salt desert merging into the sky, along with the 400-year-old Dattatreya Temple.",
        mustKnowTip: "Attend the daily ritual at the temple where jackals are fed prasad to the sound of cymbals.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
        lat: 23.9067,
        lng: 69.7915
      },
      {
        id: "kutch-dholavira",
        name: "Dholavira (Harappan Civilization)",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.8,
        entryFee: "₹25 (Indians), ₹300 (Foreigners)",
        timings: "9:00 AM - 6:00 PM",
        idealTimeHours: 3,
        description: "UNESCO World Heritage archaeological site of the Indus Valley Civilization dating back 4,500 years, celebrated for its astonishing water harvesting reservoirs and city planning.",
        mustKnowTip: "Drive via the newly constructed 'Road to Heaven' across the White Rann to reach Khadir Bet island with salt flats on both sides.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80",
        lat: 23.8860,
        lng: 70.2130
      }
    ]
  },

  // =========================================================================
  // SOUTH INDIA
  // =========================================================================
  {
    id: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    region: "South",
    tagline: "The Garden City & Tech-Fueled Capital of South India",
    description: "Known for year-round pleasant weather, verdant parks, magnificent royal palaces, craft microbreweries, and India's finest South Indian filter coffee breakfasts.",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "September to March (Pleasant Year-Round)",
    idealDuration: "2 - 3 Days",
    avgBudgetPerDay: "₹2,400 - ₹5,000",
    budgetCategory: "Mid-Range",
    nearestHub: "Kempegowda International Airport (BLR) / KSR Bengaluru City Junction",
    coordinates: { lat: 12.9716, lng: 77.5946 },
    tags: ["Nature", "Heritage", "Food", "Culture"],
    famousFoods: ["Crispy Benne Masala Dosa (CTR / Vidyarthi Bhavan)", "Rava Idli (MTR)", "Mangalore Buns", "Filter Kaapi", "Mysore Pak"],
    travelTips: [
      "Use the Namma Metro (Purple and Green lines) to travel effortlessly between Indiranagar, MG Road, and Cubbon Park.",
      "Wake up early on Sunday morning for a walk in Cubbon Park followed by breakfast at Vidyarthi Bhavan or Brahmins' Thatte Idli.",
      "The international airport is ~40 km outside the city; take the Vayu Vajra KIA airport express buses for comfortable, affordable transit."
    ],
    spots: [
      {
        id: "blr-lalbagh",
        name: "Lalbagh Botanical Garden",
        isMustVisit: true,
        category: "Nature",
        rating: 4.7,
        entryFee: "₹30 (Entry ticket)",
        timings: "6:00 AM - 7:00 PM",
        idealTimeHours: 2.5,
        description: "A 240-acre botanical haven commissioned by Hyder Ali in 1760, home to rare tropical plants, a 3,000-million-year-old rock, and the famous London-inspired Glass House.",
        mustKnowTip: "Visit during the biannual flower shows (Republic Day and Independence Day) when the Glass House is adorned with millions of blooms.",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=700&q=80",
        lat: 12.9507,
        lng: 77.5848
      },
      {
        id: "blr-bangalore-palace",
        name: "Bangalore Palace",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.5,
        entryFee: "₹230 (Indians), ₹460 (Foreigners) - Camera extra",
        timings: "10:00 AM - 5:30 PM",
        idealTimeHours: 2,
        description: "Built in Tudor Revival style with fortified towers, battlements, and turrets reminiscent of Windsor Castle, adorned with Victorian interiors and vintage memorabilia.",
        mustKnowTip: "The audio guide is informative and included with the ticket; it reveals fascinating stories about the Wodeyar dynasty.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80",
        lat: 12.9988,
        lng: 77.5921
      },
      {
        id: "blr-cubbon-park",
        name: "Cubbon Park & Vidhana Soudha",
        isMustVisit: true,
        category: "Nature",
        rating: 4.7,
        entryFee: "Free Entry",
        timings: "6:00 AM - 7:00 PM (Motor vehicles banned on Sundays)",
        idealTimeHours: 2,
        description: "A 300-acre green lung in the city center surrounded by neo-Dravidian architecture, including the imposing granite Vidhana Soudha state legislature.",
        mustKnowTip: "Walk to Vidhana Soudha on Sunday evening to see the massive granite building illuminated by thousands of lights.",
        image: "https://images.unsplash.com/photo-1600100397608-f46399c6b653?auto=format&fit=crop&w=700&q=80",
        lat: 12.9763,
        lng: 77.5929
      }
    ]
  },

  {
    id: "hampi",
    name: "Hampi",
    state: "Karnataka",
    region: "South",
    tagline: "The Boulder-Strewn Empire of the Vijayanagara Kings",
    description: "A surreal open-air museum set amid giant ochre granite boulders and banana groves along the Tungabhadra River, revealing the ruins of the wealthiest medieval empire in India.",
    image: "https://images.unsplash.com/photo-1600100397608-f46399c6b653?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1600100397608-f46399c6b653?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to March",
    idealDuration: "3 Days",
    avgBudgetPerDay: "₹1,800 - ₹3,500",
    budgetCategory: "Budget",
    nearestHub: "Hosapete Junction (HPT - 13 km) / Jindal Vijayanagar Airport, Vidyanagar (VDY - 35 km)",
    coordinates: { lat: 15.3350, lng: 76.4600 },
    tags: ["Heritage", "Spiritual", "Nature", "Adventure"],
    famousFoods: ["South Indian Banana Leaf Thali", "Paddu & Mangalore Bajji", "Nutella Banana Pancakes on Hippie Island"],
    travelTips: [
      "Rent a bicycle or moped (₹200-₹400/day) to hop between the Sacred Center and Royal Center monuments.",
      "Climb Matanga Hill early at 5:30 AM for the most astonishing 360-degree sunrise view over the temple ruins and boulder landscape.",
      "Carry ample water and a wide-brim hat; midday sun on the granite boulders can be intense."
    ],
    spots: [
      {
        id: "hampi-vittala-temple",
        name: "Vijaya Vittala Temple & Stone Chariot",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.9,
        entryFee: "₹40 (Indians), ₹600 (Foreigners)",
        timings: "8:30 AM - 5:30 PM",
        idealTimeHours: 2.5,
        description: "The crown jewel of Hampi architecture, famous for the iconic Stone Chariot (featured on the ₹50 banknote) and the 56 musical pillars that chime when tapped.",
        mustKnowTip: "Take the electric buggies from the parking area to the temple gate if you wish to conserve energy in the heat.",
        image: "https://images.unsplash.com/photo-1600100397608-f46399c6b653?auto=format&fit=crop&w=700&q=80",
        lat: 15.3350,
        lng: 76.4740
      },
      {
        id: "hampi-virupaksha-temple",
        name: "Virupaksha Temple",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.8,
        entryFee: "₹25 (Indians), ₹50 (Camera)",
        timings: "6:00 AM - 1:00 PM & 5:00 PM - 9:00 PM",
        idealTimeHours: 2,
        description: "An active temple worshipping Lord Shiva since the 7th century AD, featuring a 50-metre high gopuram, ancient pinhole-camera inverted shadow illusion, and temple elephant Lakshmi.",
        mustKnowTip: "Observe the tiny opening in the rear sanctum wall where the shadow of the main tower is cast completely inverted.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80",
        lat: 15.3353,
        lng: 76.4600
      },
      {
        id: "hampi-matanga-hill",
        name: "Matanga Hill (Sunrise / Sunset)",
        isMustVisit: true,
        category: "Nature",
        rating: 4.9,
        entryFee: "Free Entry",
        timings: "Open 24 Hours (Best at 5:30 AM)",
        idealTimeHours: 2,
        description: "The highest hill in Hampi, mentioned in the Ramayana as the hermitage of Sage Matanga, offering panoramic views over the Tungabhadra River and Achyutaraya Temple.",
        mustKnowTip: "Wear grippy sneakers for the 30-minute stone step climb; take a flashlight if climbing down after sunset.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
        lat: 15.3320,
        lng: 76.4660
      }
    ]
  },

  {
    id: "munnar",
    name: "Munnar",
    state: "Kerala",
    region: "South",
    tagline: "Rolling Emerald Tea Estates & Misty Mountain Peaks",
    description: "Located at the confluence of three mountain streams in God's Own Country, Munnar is famous for sprawling tea plantations, rare Nilgiri Tahrs, and refreshing misty air.",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "September to May",
    idealDuration: "3 - 4 Days",
    avgBudgetPerDay: "₹2,200 - ₹4,500",
    budgetCategory: "Mid-Range",
    nearestHub: "Cochin International Airport (COK - 110 km) / Aluva Railway Station (110 km)",
    coordinates: { lat: 10.0889, lng: 77.0595 },
    tags: ["Nature", "Adventure"],
    famousFoods: ["Kerala Parotta with Beef or Chicken Roast", "Appam with Vegetable Stew", "Spiced Masala Chai", "Fresh Cardamom & Homemade Chocolates"],
    travelTips: [
      "The 4-hour scenic drive up the ghats from Kochi features Cheeyappara and Valara waterfalls along the way.",
      "Book your Eravikulam National Park safari entry ticket online in advance on eravikulamnationalpark.in.",
      "Carry woolens or light jackets even in summer; evenings in Munnar become pleasantly chilly."
    ],
    spots: [
      {
        id: "munnar-eravikulam",
        name: "Eravikulam National Park (Rajamalai)",
        isMustVisit: true,
        category: "Nature",
        rating: 4.8,
        entryFee: "₹200 (Indians), ₹500 (Foreigners)",
        timings: "7:00 AM - 4:00 PM (Closed Feb-March for calving season)",
        idealTimeHours: 3,
        description: "Sanctuary for the endangered Nilgiri Tahr (mountain goat) and home to Anamudi (2,695 m), the highest peak in South India, with rolling grasslands and shola forests.",
        mustKnowTip: "Board the first park bus at 7:30 AM to spot the friendly Nilgiri Tahrs grazing near the walkway.",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=700&q=80",
        lat: 10.1500,
        lng: 77.0667
      },
      {
        id: "munnar-tea-museum",
        name: "KDHP Tea Museum & Factory",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.6,
        entryFee: "₹125 (Entry + Tea tasting)",
        timings: "9:00 AM - 4:00 PM (Closed Mondays)",
        idealTimeHours: 1.5,
        description: "India's first tea museum at the Nallathanni Estate, showcasing the legacy of tea plantation history since the 1880s, artisanal tea processing, and tea tasting demonstrations.",
        mustKnowTip: "Buy fresh high-grade CTC and orthodox Green tea packets directly from the factory counter.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
        lat: 10.0917,
        lng: 77.0583
      },
      {
        id: "munnar-top-station",
        name: "Top Station & Echo Point",
        isMustVisit: true,
        category: "Nature",
        rating: 4.7,
        entryFee: "₹25",
        timings: "6:00 AM - 7:00 PM",
        idealTimeHours: 2.5,
        description: "The highest point on the Munnar-Kodaikanal road (1,880 m), offering panoramic views of the Western Ghats and the rolling plains of neighboring Tamil Nadu.",
        mustKnowTip: "Go early in the morning when the sea of clouds drifts below your feet across the valleys.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
        lat: 10.1256,
        lng: 77.2436
      }
    ]
  },

  {
    id: "alleppey",
    name: "Alleppey (Alappuzha)",
    state: "Kerala",
    region: "South",
    tagline: "The Backwater Paradise & Venice of the East",
    description: "A tranquil labyrinth of palm-fringed lagoons, emerald canals, paddy fields below sea level, and traditional thatched Kettuvallam houseboats gliding through calm waters.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to March",
    idealDuration: "2 Days",
    avgBudgetPerDay: "₹3,000 - ₹8,000 (Houseboat inclusive)",
    budgetCategory: "Luxury",
    nearestHub: "Cochin International Airport (COK - 85 km) / Alappuzha Railway Station (ALLP)",
    coordinates: { lat: 9.4981, lng: 76.3388 },
    tags: ["Nature", "Beach", "Food"],
    famousFoods: ["Karimeen Pollichathu (Pearl spot fish in banana leaf)", "Puttu & Kadala Curry", "Alleppey Duck Roast", "Toddy Shop Crab Roast", "Fresh Tender Coconut"],
    travelTips: [
      "Check that your houseboat is government-certified (Green Palm or Gold Star accredited).",
      "For budget travelers: Kerala State Water Transport Department (SWTD) runs scenic public backwater ferries from Alleppey to Kottayam for under ₹30!",
      "Visit in August to witness the thunderous Nehru Trophy Boat Race featuring traditional 100-rower snake boats (Chundan Vallams)."
    ],
    spots: [
      {
        id: "alleppey-houseboat-cruise",
        name: "Vembanad Lake Houseboat Cruise",
        isMustVisit: true,
        category: "Nature",
        rating: 4.9,
        entryFee: "Day cruise ₹5,000 - ₹9,000 / Overnight stay ₹8,000 - ₹18,000",
        timings: "Check-in 12:00 Noon, Check-out 9:00 AM next day",
        idealTimeHours: 6,
        description: "Cruise slowly down the serene canals of Vembanad Lake while your private onboard chef prepares fresh river fish and hot traditional Kerala meals.",
        mustKnowTip: "Choose an overnight stay so you wake up to morning fishermen rowing canoes through the mist over calm water.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=700&q=80",
        lat: 9.5833,
        lng: 76.3500
      },
      {
        id: "alleppey-marari-beach",
        name: "Marari Beach",
        isMustVisit: true,
        category: "Beach",
        rating: 4.7,
        entryFee: "Free Entry",
        timings: "Open 24 Hours",
        idealTimeHours: 3,
        description: "An unspoilt, peaceful fishing beach 11 km north of Alleppey, lined with golden sands, swaying coconut palms, and quiet eco-resorts.",
        mustKnowTip: "Take a barefoot stroll at sunset to watch local fishermen haul in their evening nets.",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=700&q=80",
        lat: 9.6000,
        lng: 76.2970
      }
    ]
  },

  {
    id: "kochi",
    name: "Kochi (Cochin)",
    state: "Kerala",
    region: "South",
    tagline: "The Queen of the Arabian Sea",
    description: "An ancient cosmopolitan trading harbor where Chinese cantilevered fishing nets, Portuguese churches, Dutch palaces, spice warehouses, and contemporary art biennials coexist.",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to March",
    idealDuration: "2 - 3 Days",
    avgBudgetPerDay: "₹2,200 - ₹4,800",
    budgetCategory: "Mid-Range",
    nearestHub: "Cochin International Airport (COK) / Ernakulam Junction (ERS)",
    coordinates: { lat: 9.9312, lng: 76.2673 },
    tags: ["Heritage", "Culture", "Food", "Market"],
    famousFoods: ["Malabar Biryani", "Kerala Fish Curry", "Appam with Stew", "Pazham Pori with Beef", "Kathakali-themed boutique dining"],
    travelTips: [
      "Use the Kochi Water Metro - India's first integrated electric boat transit system connecting the city islands.",
      "Watch an authentic Kathakali dance performance with live makeup demonstration at the Kerala Kathakali Centre in Fort Kochi.",
      "Stroll along Jew Town to browse antique shops, sandalwood carvings, and hand-woven linen."
    ],
    spots: [
      {
        id: "kochi-chinese-fishing-nets",
        name: "Chinese Fishing Nets (Cheena Vala)",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.6,
        entryFee: "Free (Tip for pulling nets ~₹50)",
        timings: "Sunrise to Sunset (Best at sunset)",
        idealTimeHours: 1.5,
        description: "Iconic shore-operated cantilevered fishing nets introduced by 14th-century Chinese traders, silhouetted against dramatic Arabian Sea sunsets.",
        mustKnowTip: "Walk along Vasco da Gama Square in Fort Kochi around 5:30 PM for spectacular sunset silhouettes.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=700&q=80",
        lat: 9.9678,
        lng: 76.2427
      },
      {
        id: "kochi-mattancherry-palace",
        name: "Mattancherry Palace (Dutch Palace)",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.6,
        entryFee: "₹5 (Indians & Foreigners)",
        timings: "9:45 AM - 1:00 PM & 2:00 PM - 4:45 PM (Closed Fridays)",
        idealTimeHours: 1.5,
        description: "Built by the Portuguese in 1555 and renovated by the Dutch, celebrated for its exquisite Hindu temple murals depicting scenes from the Ramayana in tempera technique.",
        mustKnowTip: "Jew Street and the Paradesi Synagogue are a 5-minute walk from the palace exit.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80",
        lat: 9.9583,
        lng: 76.2592
      }
    ]
  },

  {
    id: "pondicherry",
    name: "Puducherry (Pondicherry)",
    state: "Puducherry (UT)",
    region: "South",
    tagline: "The French Riviera of the East",
    description: "A charming coastal enclave where pastel mustard-yellow French colonial villas meet Tamil culture, chic beachfront boulevards, surfing waves, and spiritual serenity.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to March",
    idealDuration: "2 - 3 Days",
    avgBudgetPerDay: "₹2,200 - ₹4,500",
    budgetCategory: "Mid-Range",
    nearestHub: "Chennai International Airport (MAA - 140 km) / Puducherry Railway Station (PDY)",
    coordinates: { lat: 11.9416, lng: 79.8083 },
    tags: ["Beach", "Heritage", "Spiritual", "Food"],
    famousFoods: ["French Croissants & Baguettes", "Ratatouille & Crepes", "Pondicherry Kothu Parotta", "Café cold brews", "Wood-fired artisanal pizzas"],
    travelTips: [
      "Rent a bicycle to explore the cobbled streets of White Town with its bougainvillea-draped heritage buildings.",
      "Motor vehicles are prohibited along the Promenade Beach from 6:00 PM to 7:30 AM every day, making it an idyllic walking haven.",
      "Pre-book your Matrimandir inner chamber pass online in advance if visiting Auroville."
    ],
    spots: [
      {
        id: "pondy-white-town",
        name: "White Town (French Quarter) & Promenade",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.8,
        entryFee: "Free",
        timings: "Open 24 Hours",
        idealTimeHours: 3,
        description: "A grid of leafy streets with French street names (Rues), yellow colonial mansions, chic art galleries, and the 1.5 km seaside Promenade overlooking the Bay of Bengal.",
        mustKnowTip: "Stop by Baker Street for French quiches and pain au chocolat.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80",
        lat: 11.9333,
        lng: 79.8333
      },
      {
        id: "pondy-auroville",
        name: "Auroville & The Matrimandir",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.7,
        entryFee: "Free (Visitor pass required)",
        timings: "9:00 AM - 5:30 PM (Sundays till 1 PM)",
        idealTimeHours: 3,
        description: "An experimental universal township founded by Mirra Alfassa ('The Mother') dedicated to human unity, crowned by the golden geodesic sphere of the Matrimandir.",
        mustKnowTip: "The visitor viewing point allows free views of the golden dome; meditation inside requires booking 2-3 days prior in person.",
        image: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=700&q=80",
        lat: 12.0070,
        lng: 79.8106
      }
    ]
  },

  {
    id: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    region: "South",
    tagline: "The City of Pearls, Nizams & World-Famous Biryani",
    description: "A city steeped in royal Nizami heritage, towering granite fortresses, exquisite pearls, and a culinary tradition crowned by the legendary Dum Biryani.",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to March",
    idealDuration: "3 Days",
    avgBudgetPerDay: "₹2,200 - ₹4,500",
    budgetCategory: "Mid-Range",
    nearestHub: "Rajiv Gandhi International Airport (HYD) / Secunderabad & Hyderabad Deccan Stations",
    coordinates: { lat: 17.3850, lng: 78.4867 },
    tags: ["Heritage", "Food", "Culture"],
    famousFoods: ["Hyderabadi Dum Biryani (Paradise / Bawarchi / Shadab)", "Haleem (during Ramadan)", "Mirchi ka Salan", "Irani Chai & Osmania Biscuits (Nimrah Cafe)", "Double ka Meetha"],
    travelTips: [
      "Visit Nimrah Cafe right opposite Charminar for hot Irani Chai and butter-rich Osmania biscuits.",
      "Golconda Fort Sound & Light show in the evening is a masterclass in acoustic engineering and royal history.",
      "Shop for genuine Basra pearls and lac bangles at Laad Bazaar adjacent to Charminar."
    ],
    spots: [
      {
        id: "hyd-charminar",
        name: "Charminar & Laad Bazaar",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.7,
        entryFee: "₹25 (Indians), ₹300 (Foreigners)",
        timings: "9:30 AM - 5:30 PM (Illuminated 7 PM - 9 PM)",
        idealTimeHours: 2,
        description: "The 1591 monument with four grand minarets constructed by Muhammad Quli Qutb Shah, surrounded by vibrant bazaars filled with bangles, pearls, and street food.",
        mustKnowTip: "Climb up the spiraling minaret steps for a bird's eye view over the historic old quarter.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=700&q=80",
        lat: 17.3616,
        lng: 78.4747
      },
      {
        id: "hyd-golconda-fort",
        name: "Golconda Fort",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.8,
        entryFee: "₹25 (Indians), ₹300 (Foreigners)",
        timings: "9:00 AM - 5:30 PM",
        idealTimeHours: 3.5,
        description: "Medieval fortress famous for its phenomenal acoustics where a clap at the Fateh Darwaza entrance can be heard 1 km away at the hilltop pavilion (Bala Hissar).",
        mustKnowTip: "Wear comfortable walking shoes to climb the 360 stone steps to the summit for sweeping views of Hyderabad's skyline.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80",
        lat: 17.3833,
        lng: 78.4011
      }
    ]
  },

  // =========================================================================
  // EAST INDIA
  // =========================================================================
  {
    id: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    region: "East",
    tagline: "The City of Joy, Art, Literature & Grand Festivities",
    description: "India's intellectual and cultural capital on the Hooghly River, celebrated for colonial grandeur, yellow ambassador cabs, trams, literary cafes, and unmatched Durga Puja festivities.",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to March",
    idealDuration: "3 - 4 Days",
    avgBudgetPerDay: "₹1,800 - ₹3,800",
    budgetCategory: "Budget",
    nearestHub: "Netaji Subhash Chandra Bose International Airport (CCU) / Howrah Junction (HWH)",
    coordinates: { lat: 22.5726, lng: 88.3639 },
    tags: ["Heritage", "Culture", "Food", "Spiritual"],
    famousFoods: ["Rosogolla & Mishti Doi (K.C. Das)", "Kolkata Biryani with potato & boiled egg (Arsalan)", "Kathi Rolls (Kusum / Nizam's)", "Phuchka with tangy tamarind water", "Kosha Mangsho with Luchi"],
    travelTips: [
      "Ride the Kolkata Tram - the oldest operating electric tram network in Asia.",
      "Take an afternoon ferry across the Hooghly River from Princep Ghat to Howrah for breathtaking bridge views.",
      "Visit College Street (Boi Para) to explore miles of secondhand bookstalls and have coffee at the historic Indian Coffee House."
    ],
    spots: [
      {
        id: "kolkata-victoria-memorial",
        name: "Victoria Memorial Hall & Gardens",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.8,
        entryFee: "₹50 (Indians), ₹500 (Foreigners) / Garden ticket ₹20",
        timings: "10:00 AM - 5:00 PM (Gardens 5:30 AM - 6:00 PM, closed Mondays)",
        idealTimeHours: 3,
        description: "Opulent white Makrana marble palace built between 1906 and 1921, surrounded by 64 acres of landscaped gardens, housing priceless colonial art and royal artifacts.",
        mustKnowTip: "Attend the evening sound-and-light show 'Pride & Glory' on the memorial grounds.",
        image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=700&q=80",
        lat: 22.5448,
        lng: 88.3426
      },
      {
        id: "kolkata-howrah-bridge",
        name: "Howrah Bridge (Rabindra Setu)",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.7,
        entryFee: "Free",
        timings: "Open 24 Hours",
        idealTimeHours: 1,
        description: "An iconic engineering marvel with no nuts and bolts, this balanced cantilever bridge spans 1,500 feet across the Hooghly River carrying over 100,000 vehicles daily.",
        mustKnowTip: "Visit the nearby colorful Mallick Ghat Flower Market under the bridge at sunrise for an explosion of marigolds, roses, and riverside life.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80",
        lat: 22.5851,
        lng: 88.3468
      },
      {
        id: "kolkata-dakshineswar-temple",
        name: "Dakshineswar Kali Temple & Belur Math",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.8,
        entryFee: "Free Entry",
        timings: "6:00 AM - 12:30 PM & 3:00 PM - 8:30 PM",
        idealTimeHours: 3,
        description: "Navaratna-style temple dedicated to Bhavatarini (Kali) on the Hooghly riverbank, where 19th-century mystic Sri Ramakrishna Paramahamsa lived and worshipped.",
        mustKnowTip: "Take a ₹10 river ferry across the river from Dakshineswar directly to Belur Math, headquarters of the Ramakrishna Mission.",
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=700&q=80",
        lat: 22.6550,
        lng: 88.3575
      }
    ]
  },

  {
    id: "darjeeling",
    name: "Darjeeling",
    state: "West Bengal",
    region: "East",
    tagline: "The Queen of the Hills & Home of Champagne Teas",
    description: "Perched along a dramatic Himalayan crest, famed for sweeping vistas of Kangchenjunga (the world's 3rd highest peak), world-renowned muscatel tea gardens, and UNESCO toy trains.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "March to May (Spring) & October to December (Clear mountain views)",
    idealDuration: "3 - 4 Days",
    avgBudgetPerDay: "₹2,200 - ₹4,500",
    budgetCategory: "Mid-Range",
    nearestHub: "Bagdogra Airport (IXB - 70 km) / New Jalpaiguri Railway Station (NJP - 75 km)",
    coordinates: { lat: 27.0410, lng: 88.2663 },
    tags: ["Nature", "Heritage", "Adventure"],
    famousFoods: ["Steamed Momos with fiery red chili paste", "Darjeeling First Flush Tea", "Thukpa", "Churpee (hard yak cheese)", "Gundruk soup"],
    travelTips: [
      "Wake up at 3:30 AM to reach Tiger Hill before dawn to watch the first rays of sunlight illuminate the snow peaks of Kangchenjunga.",
      "Pre-book your Darjeeling Himalayan Railway Joyride steam locomotive ticket on the IRCTC portal.",
      "Buy first-flush Darjeeling tea directly from certified estate shops on Nehru Road and Mall Road."
    ],
    spots: [
      {
        id: "darjeeling-tiger-hill",
        name: "Tiger Hill Sunrise Point",
        isMustVisit: true,
        category: "Nature",
        rating: 4.8,
        entryFee: "₹50 - ₹100",
        timings: "4:00 AM - 6:30 AM",
        idealTimeHours: 2.5,
        description: "Situated at 2,590 m, famous for the magical sunrise over Mt. Kangchenjunga and Mt. Everest, casting iridescent pink and golden glows over the eternal snows.",
        mustKnowTip: "Leave Darjeeling town by 4:00 AM to beat the traffic line at the observatory gates.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
        lat: 27.0000,
        lng: 88.2833
      },
      {
        id: "darjeeling-toy-train",
        name: "Darjeeling Himalayan Railway (Toy Train)",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.7,
        entryFee: "Joyride Steam: ₹1,500 / Diesel: ₹1,000",
        timings: "Multiple scheduled trips daily",
        idealTimeHours: 2,
        description: "A UNESCO World Heritage narrow-gauge mountain railway built in 1881, looping gracefully around Batasia Loop and climbing to Ghum, the highest railway station in India.",
        mustKnowTip: "Book the steam-hauled heritage joyride for nostalgic coal-engine whistling and photographic stops at Batasia Loop.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
        lat: 27.0410,
        lng: 88.2663
      }
    ]
  },

  {
    id: "puri-konark",
    name: "Puri & Konark",
    state: "Odisha",
    region: "East",
    tagline: "Sacred Shores & The Sun God's Stone Chariot",
    description: "Odisha's sacred coastal corridor, home to the revered Jagannath Temple, the architectural wonder of the 13th-century Konark Sun Temple, and blue-flag surf beaches.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to March",
    idealDuration: "2 - 3 Days",
    avgBudgetPerDay: "₹1,800 - ₹3,500",
    budgetCategory: "Budget",
    nearestHub: "Biju Patnaik International Airport, Bhubaneswar (BBI - 60 km) / Puri Railway Station",
    coordinates: { lat: 19.8135, lng: 85.8312 },
    tags: ["Spiritual", "Heritage", "Beach"],
    famousFoods: ["Mahaprasad / Abadha (at Anand Bazaar)", "Chhena Poda (baked cottage cheese dessert)", "Khaja", "Puri Crab & Pomfret seafood curry", "Rasabali"],
    travelTips: [
      "Non-Hindus are not permitted inside the inner sanctum of Jagannath Temple; you can view the temple from the Raghunandan Library roof.",
      "The marine drive road connecting Puri and Konark offers one of the most scenic coastal drives in India.",
      "Visit Konark early at 8:00 AM before the stone heats up in the sun."
    ],
    spots: [
      {
        id: "konark-sun-temple",
        name: "Konark Sun Temple (Black Pagoda)",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.8,
        entryFee: "₹40 (Indians), ₹600 (Foreigners)",
        timings: "6:00 AM - 8:00 PM",
        idealTimeHours: 2.5,
        description: "13th-century UNESCO World Heritage temple sculpted as a colossal chariot with 24 elaborately carved stone wheels pulled by seven horses, designed to capture the first rays of dawn.",
        mustKnowTip: "The spokes of the 24 sundial wheels calculate exact time down to the minute by measuring shadow alignment.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80",
        lat: 19.8876,
        lng: 86.0945
      },
      {
        id: "puri-jagannath-temple",
        name: "Shree Jagannath Temple Puri",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.9,
        entryFee: "Free Entry",
        timings: "5:00 AM - 11:00 PM",
        idealTimeHours: 3,
        description: "One of the four sacred Char Dham pilgrimage sites, dedicated to Lord Jagannath, Balabhadra, and Subhadra, celebrated for the world-famous annual Ratha Yatra chariot festival.",
        mustKnowTip: "Visit Anand Bazaar inside the complex to taste the sacred Mahaprasad cooked in earthen pots stacked seven high over wooden fires.",
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=700&q=80",
        lat: 19.8049,
        lng: 85.8179
      }
    ]
  },

  // =========================================================================
  // CENTRAL INDIA
  // =========================================================================
  {
    id: "khajuraho",
    name: "Khajuraho",
    state: "Madhya Pradesh",
    region: "Central",
    tagline: "The Poetry in Stone & Medieval Temple Sculptures",
    description: "Famous worldwide for its UNESCO-listed Hindu and Jain temples adorned with intricate, expressive sculptures celebrating human life, spiritual union, and sensual art.",
    image: "https://images.unsplash.com/photo-1600100397608-f46399c6b653?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1600100397608-f46399c6b653?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to March (Khajuraho Dance Festival in February)",
    idealDuration: "2 Days",
    avgBudgetPerDay: "₹2,000 - ₹4,000",
    budgetCategory: "Budget",
    nearestHub: "Khajuraho Airport (HJR) / Khajuraho Railway Station (KURJ)",
    coordinates: { lat: 24.8318, lng: 79.9199 },
    tags: ["Heritage", "Culture"],
    famousFoods: ["Bhutte ka Kees", "Dal Bafla", "Mawa Bati", "Rogan Josh (MP style)", "Poha Jalebi"],
    travelTips: [
      "The Western Group of temples contains the largest and most finely carved structures, including Kandariya Mahadeva.",
      "Attend the evening sound-and-light show narrated in Amitabh Bachchan's resonant voice.",
      "Visit Raneh Falls (20 km away) to see a 30-metre deep canyon carved in pure crystalline granite."
    ],
    spots: [
      {
        id: "khajuraho-kandariya-mahadeva",
        name: "Western Group of Temples (Kandariya Mahadeva)",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.8,
        entryFee: "₹40 (Indians), ₹600 (Foreigners)",
        timings: "Sunrise to Sunset (Daily)",
        idealTimeHours: 3,
        description: "The pinnacle of Chandela art, featuring soaring spires designed like mountain peaks (Mount Meru) and adorned with over 800 detailed sculptures.",
        mustKnowTip: "Hire an ASI-licensed guide to appreciate the philosophical and artistic meaning behind the intricate external friezes.",
        image: "https://images.unsplash.com/photo-1600100397608-f46399c6b653?auto=format&fit=crop&w=700&q=80",
        lat: 24.8530,
        lng: 79.9197
      }
    ]
  },

  {
    id: "indore-ujjain",
    name: "Indore & Ujjain",
    state: "Madhya Pradesh",
    region: "Central",
    tagline: "India's Cleanest Culinary City & The Jyotirlinga of Time",
    description: "A dual powerhouse: Indore, India's cleanest city and street food paradise, coupled with sacred Ujjain, the city of Mahakaleshwar and the timeless Shipra River.",
    image: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to March",
    idealDuration: "3 Days",
    avgBudgetPerDay: "₹1,800 - ₹3,500",
    budgetCategory: "Budget",
    nearestHub: "Devi Ahilyabai Holkar International Airport, Indore (IDR) / Indore Junction",
    coordinates: { lat: 22.7196, lng: 75.8577 },
    tags: ["Food", "Spiritual", "Heritage"],
    famousFoods: ["Indori Poha with Sev & Jeeravan", "Sarafa Night Bazaar Garadu", "Bhutte ka Kees", "Joshi Dahi Bada (with flying bowl trick)", "Johnny Hot Dog (Chappan Dukan)"],
    travelTips: [
      "Sarafa Bazaar in Indore transforms from a jewelry market during the day into a bustling late-night street food feast from 9:00 PM to 2:00 AM!",
      "For Mahakaleshwar Bhasma Aarti (4:00 AM), advance online registration on the temple website is mandatory.",
      "Indore has won India's 'Cleanest City' award for 7 consecutive years; please maintain high cleanliness."
    ],
    spots: [
      {
        id: "ujjain-mahakaleshwar",
        name: "Mahakaleshwar Jyotirlinga (Ujjain)",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.9,
        entryFee: "Free Entry (VIP / Bhasma Aarti booking extra)",
        timings: "4:00 AM - 11:00 PM",
        idealTimeHours: 3,
        description: "One of the most sacred of the twelve Jyotirlingas, where the deity is Dakshinmukhi (facing south), famous for the divine dawn Bhasma Aarti and the magnificent Mahakal Lok corridor.",
        mustKnowTip: "Traditional attire is required for the sanctum Bhasma Aarti (Dhoti for men, Saree for women).",
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=700&q=80",
        lat: 23.1827,
        lng: 75.7682
      },
      {
        id: "indore-sarafa-bazaar",
        name: "Sarafa Night Food Bazaar (Indore)",
        isMustVisit: true,
        category: "Market",
        rating: 4.8,
        entryFee: "Free (Food pay-as-you-eat)",
        timings: "8:30 PM - 2:00 AM",
        idealTimeHours: 2.5,
        description: "A legendary gastronomic night market offering over 50 unique street food delicacies, from flying dahi badas to fried winter yam (garadu) and rabdi malpua.",
        mustKnowTip: "Don't miss Joshi Dahi Bada where the owner catches the flying bowl of curd with a signature flourish.",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=700&q=80",
        lat: 22.7180,
        lng: 75.8540
      }
    ]
  },

  // =========================================================================
  // NORTHEAST INDIA
  // =========================================================================
  {
    id: "gangtok",
    name: "Gangtok",
    state: "Sikkim",
    region: "Northeast",
    tagline: "The Cloud-Kissed Capital of Monasteries & Orchid Valleys",
    description: "Perched on a ridge at 5,410 ft in the Eastern Himalayas, Gangtok is the clean, litter-free capital of Sikkim, offering breathtaking views of Mt. Kanchenjunga.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "March to May (Spring blooms) & October to mid-December (Clear mountain views)",
    idealDuration: "4 - 5 Days",
    avgBudgetPerDay: "₹2,500 - ₹5,000",
    budgetCategory: "Mid-Range",
    nearestHub: "Pakyong Airport (PYG - 30 km) / Bagdogra Airport (IXB - 120 km) / New Jalpaiguri (NJP)",
    coordinates: { lat: 27.3389, lng: 88.6065 },
    tags: ["Nature", "Spiritual", "Adventure"],
    famousFoods: ["Sikkimese Momos with Dalle chili sauce", "Thukpa & Gyathuk", "Chhurpi Soup", "Sel Roti", "Kinema curry"],
    travelTips: [
      "Sikkim is India's 100% organic state and single-use plastic bottles are prohibited; carry a reusable flask.",
      "Permits are required for Tsomgo Lake, Baba Mandir, and Nathula Pass; submit your passport photos and ID copy to your travel agent a day in advance.",
      "MG Marg is a pedestrian-only boulevard with benches, music, cafes, and clean flowerbeds."
    ],
    spots: [
      {
        id: "gangtok-tsomgo-lake",
        name: "Tsomgo Lake & Nathula Pass",
        isMustVisit: true,
        category: "Nature",
        rating: 4.8,
        entryFee: "Protected Area Permit (PAP) required via registered travel operator",
        timings: "7:30 AM - 2:00 PM (Closed Mon & Tue for Nathula)",
        idealTimeHours: 6,
        description: "Glacial lake at 12,310 ft that remains frozen in winter, surrounded by alpine flowers in summer, on the historical Silk Route towards the Indo-China border.",
        mustKnowTip: "Rent yak rides and colorful boots at the lake edge; ensure you apply for the permit through a registered Sikkim operator.",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=700&q=80",
        lat: 27.3742,
        lng: 88.7619
      },
      {
        id: "gangtok-rumtek-monastery",
        name: "Rumtek Dharma Chakra Centre",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.7,
        entryFee: "₹10",
        timings: "6:00 AM - 6:00 PM",
        idealTimeHours: 2,
        description: "The largest monastery in Sikkim, serving as the seat of the Gyalwang Karmapa (Black Hat sect), housing sacred golden stupas, thangka paintings, and ancient relics.",
        mustKnowTip: "Carry government photo ID as there is an ITBP security check at the monastery entrance.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
        lat: 27.2961,
        lng: 88.5492
      },
      {
        id: "gangtok-mg-marg",
        name: "MG Marg (The Promenade of Gangtok)",
        isMustVisit: true,
        category: "Market",
        rating: 4.7,
        entryFee: "Free",
        timings: "10:00 AM - 9:00 PM (Shops close on Tuesdays)",
        idealTimeHours: 2,
        description: "Spit-and-litter-free pedestrian cobblestone boulevard lined with Himalayan souvenir shops, bookstores, bakeries, and lively evening cafes.",
        mustKnowTip: "Try traditional momos and bakery treats at The Baker's Cafe while people-watching from the balcony.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
        lat: 27.3300,
        lng: 88.6140
      }
    ]
  },

  {
    id: "shillong-meghalaya",
    name: "Shillong & Cherrapunji",
    state: "Meghalaya",
    region: "Northeast",
    tagline: "The Abode of Clouds & Living Root Bridges",
    description: "Meghalaya is nature's fairytale: rain-drenched emerald gorges, cascading waterfalls, crystal-clear rivers, and centuries-old living root bridges hand-woven from ficus elastica trees.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "September to May (Oct-April for clear Dawki river; Jun-Sep for raging monsoon falls)",
    idealDuration: "4 - 5 Days",
    avgBudgetPerDay: "₹2,500 - ₹4,800",
    budgetCategory: "Mid-Range",
    nearestHub: "Shillong Airport, Umroi (SHL) / Guwahati Lokpriya Gopinath Bordoloi Airport (GAU - 120 km)",
    coordinates: { lat: 25.5788, lng: 91.8933 },
    tags: ["Nature", "Adventure"],
    famousFoods: ["Jadoh (Khasi spiced rice with meat)", "Dohneiiong (Pork with black sesame)", "Tungrymbai", "Momos at Police Bazar", "Fresh Khasi Pineapples & Oranges"],
    travelTips: [
      "The Double Decker Living Root Bridge trek in Nongriat involves ~3,500 steps each way; wear proper hiking shoes and carry energy bars.",
      "Visit Dawki (Umngot River) during dry winter months (Nov-March) when the water is so crystal clear that boats appear to float in mid-air.",
      "Shillong is known as the Rock Music Capital of India; check out cafes like Dylan's Cafe for live music."
    ],
    spots: [
      {
        id: "meghalaya-root-bridge",
        name: "Double Decker Living Root Bridge (Nongriat)",
        isMustVisit: true,
        category: "Nature",
        rating: 4.9,
        entryFee: "₹50 (Community upkeep fee)",
        timings: "Sunrise to Sunset (Start hike by 7:30 AM)",
        idealTimeHours: 6,
        description: "A botanical wonder engineered by the indigenous Khasi tribe by training aerial ficus roots across turbulent jungle rivers over centuries.",
        mustKnowTip: "Stay overnight in a basic village homestay in Nongriat to enjoy the turquoise Rainbow Falls further up without rushing.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
        lat: 25.2505,
        lng: 91.6700
      },
      {
        id: "meghalaya-nohkalikai",
        name: "Nohkalikai Falls (Cherrapunji)",
        isMustVisit: true,
        category: "Nature",
        rating: 4.8,
        entryFee: "₹20",
        timings: "8:00 AM - 5:00 PM",
        idealTimeHours: 1.5,
        description: "India's tallest plunge waterfall (340 metres / 1,115 feet), plunging off a sheer cliff into an otherworldly emerald-green pool below.",
        mustKnowTip: "Visit around midday when the morning mist clears up to reveal the full vertical plunge.",
        image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=700&q=80",
        lat: 25.2757,
        lng: 91.6847
      },
      {
        id: "meghalaya-dawki-river",
        name: "Umngot River (Dawki)",
        isMustVisit: true,
        category: "Adventure",
        rating: 4.8,
        entryFee: "Boat ride ₹800 - ₹1,200 for 1 hour",
        timings: "8:00 AM - 4:30 PM (Best from Nov to April)",
        idealTimeHours: 2.5,
        description: "One of the cleanest rivers in Asia flowing between India and Bangladesh, with transparent waters where boats look suspended in the air.",
        mustKnowTip: "Combine Dawki with a visit to Mawlynnong, recognized as 'God's Own Garden' and one of the cleanest villages in Asia.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
        lat: 25.1880,
        lng: 92.0230
      }
    ]
  },

  {
    id: "kaziranga-guwahati",
    name: "Kaziranga & Guwahati",
    state: "Assam",
    region: "Northeast",
    tagline: "The Realm of the Greater One-Horned Rhinoceros",
    description: "The gateway to the Northeast on the majestic Brahmaputra River, leading to Kaziranga National Park, home to two-thirds of the world's great one-horned rhinos.",
    image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "November to April (Park open season)",
    idealDuration: "3 - 4 Days",
    avgBudgetPerDay: "₹2,500 - ₹5,500",
    budgetCategory: "Mid-Range",
    nearestHub: "Lokpriya Gopinath Bordoloi International Airport, Guwahati (GAU) / Guwahati Railway Station",
    coordinates: { lat: 26.5775, lng: 93.1711 },
    tags: ["Nature", "Adventure", "Spiritual"],
    famousFoods: ["Assamese Thali with Joha Rice", "Masor Tenga (tangy river fish curry)", "Khaar", "Duck meat with Ash Gourd", "Assam CTC Golden Pekoe Tea"],
    travelTips: [
      "Kaziranga National Park is closed from May to October during the monsoon flooding.",
      "Take an early morning Elephant Safari (5:30 AM) in the Central Kohora Range for close encounters with wild rhinos in elephant grass.",
      "Take an evening Brahmaputra sunset dinner cruise from Guwahati city ghats."
    ],
    spots: [
      {
        id: "kaziranga-national-park",
        name: "Kaziranga National Park Rhino Safari",
        isMustVisit: true,
        category: "Adventure",
        rating: 4.9,
        entryFee: "Jeep Safari ~₹2,500 - ₹3,500 per vehicle + forest toll",
        timings: "Morning Safari 7:00 AM / Afternoon Safari 1:30 PM",
        idealTimeHours: 4,
        description: "UNESCO World Heritage wildlife sanctuary spanning tall elephant grass, marshlands, and dense forest, harboring the highest density of one-horned rhinos, tigers, and wild water buffaloes.",
        mustKnowTip: "The Central (Kohora) and Western (Bagori) ranges provide the highest chances of rhino and wild elephant sightings.",
        image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=700&q=80",
        lat: 26.5775,
        lng: 93.1711
      },
      {
        id: "guwahati-kamakhya-temple",
        name: "Maa Kamakhya Temple (Guwahati)",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.8,
        entryFee: "Free (Special VIP queue ticket ₹500)",
        timings: "5:30 AM - 1:00 PM & 2:30 PM - 5:30 PM",
        idealTimeHours: 3,
        description: "One of the oldest and most revered 51 Shakti Peethas perched on Nilachal Hill, dedicated to the mother goddess and celebrated for the annual Ambubachi Mela.",
        mustKnowTip: "The line can be long; buy an authorized fast-track VIP darshan token at the counter before 7:00 AM.",
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=700&q=80",
        lat: 26.1664,
        lng: 91.7056
      }
    ]
  }
,

// =========================================================================
  // NORTH INDIA (Additional Popular Cities)
  // =========================================================================
  {
    id: "shimla",
    name: "Shimla",
    state: "Himachal Pradesh",
    region: "North",
    tagline: "The Queen of Hill Stations & Summer Capital of the Raj",
    description: "Nestled amidst oak and cedar forests, Shimla exudes colonial charm with its pedestrian Mall Road, neo-Gothic Christ Church, and the UNESCO Kalka-Shimla mountain train.",
    image: "https://images.unsplash.com/photo-1597042034861-6bfcf02419f0?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1597042034861-6bfcf02419f0?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "March to June (Pleasant) & December to February (Snowfall)",
    idealDuration: "2 - 3 Days",
    avgBudgetPerDay: "₹2,200 - ₹4,500",
    budgetCategory: "Mid-Range",
    nearestHub: "Jubarhati Airport Shimla (SLV) / Kalka Railway Station (connected via Toy Train) / Chandigarh (110 km)",
    coordinates: { lat: 31.1048, lng: 77.1734 },
    tags: ["Nature", "Heritage"],
    famousFoods: ["Himachali Madra", "Siddu with Ghee", "Chha Gosht", "Warm Cinnamon Buns at Mall Road bakeries"],
    travelTips: [
      "Vehicles are prohibited on Mall Road and The Ridge; enjoy leisurely walks and take the municipal elevator (Lift) from Cart Road.",
      "Ride the ropeway or hike up to Jakhoo Temple for sunrise, but hold on to your spectacles and phones due to playful monkeys.",
      "Book the Kalka-Shimla toy train months in advance through IRCTC for an unforgettable ride through 102 tunnels."
    ],
    spots: [
      {
        id: "shimla-the-ridge",
        name: "The Ridge & Christ Church",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.7,
        entryFee: "Free Entry",
        timings: "Open 24 Hours (Best during sunset)",
        idealTimeHours: 2,
        description: "The sprawling open-air cultural heart of Shimla offering sweeping vistas of the snow-capped Himalayan ranges and the iconic 1857 neo-Gothic yellow Christ Church.",
        mustKnowTip: "Grab a seat on the wooden benches at dusk when the church stained-glass windows glow under lamplight.",
        image: "https://images.unsplash.com/photo-1597042034861-6bfcf02419f0?auto=format&fit=crop&w=700&q=80",
        lat: 31.1044,
        lng: 77.1751
      },
      {
        id: "shimla-jakhoo-temple",
        name: "Jakhoo Hill & 108-ft Hanuman Statue",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.6,
        entryFee: "Free (Ropeway ~₹500 return)",
        timings: "6:00 AM - 7:00 PM",
        idealTimeHours: 2,
        description: "Situated on Shimla's highest peak (8,050 ft), housing an ancient temple where Lord Hanuman is believed to have rested while searching for the Sanjeevani herb.",
        mustKnowTip: "Take the 6-minute scenic Jakhoo Ropeway from The Ridge for stunning pine-canopy aerial views.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80",
        lat: 31.1009,
        lng: 77.1852
      },
      {
        id: "shimla-kalka-toy-train",
        name: "Kalka-Shimla UNESCO Toy Train",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.8,
        entryFee: "₹70 - ₹500 (based on train class)",
        timings: "Multiple morning departures",
        idealTimeHours: 5,
        description: "A 96-km narrow-gauge railway built in 1903 crossing 864 bridges and 102 tunnels, offering romantic views of pine-clad hills and quaint colonial stations.",
        mustKnowTip: "Board the Shivalik Deluxe Express for panoramic windows and complimentary breakfast on board.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
        lat: 31.1048,
        lng: 77.1734
      }
    ]
  },

  {
    id: "srinagar",
    name: "Srinagar",
    state: "Jammu & Kashmir",
    region: "North",
    tagline: "Paradise on Earth, Mughal Terraces & Floating Houseboats",
    description: "Famed as Heaven on Earth, Srinagar captivates with colorful Shikara gondolas on Dal Lake, cedar houseboats, terraced Mughal gardens, and snow-dusted Zabarwan mountains.",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "April to October (Gardens & Lakes) & December to February (Snow & Winter)",
    idealDuration: "3 - 4 Days",
    avgBudgetPerDay: "₹2,800 - ₹6,000",
    budgetCategory: "Mid-Range",
    nearestHub: "Sheikh ul-Alam International Airport, Srinagar (SXR)",
    coordinates: { lat: 34.0837, lng: 74.7973 },
    tags: ["Nature", "Heritage", "Food"],
    famousFoods: ["Kashmiri Wazwan (Rogan Josh, Rista, Gushtaba)", "Kahwa (Saffron green tea with almonds)", "Modur Pulao", "Nadru Yakhni (Lotus stem curry)"],
    travelTips: [
      "Experience staying on a handcrafted cedarwood houseboat on Nigeen Lake for tranquility, or Dal Lake for buzz.",
      "Wake up at 5:30 AM to take a Shikara ride to the floating vegetable market in the interior backwaters of Dal Lake.",
      "Buy authentic saffron, walnuts, and pashmina shawls with the official Govt GI-tag certification."
    ],
    spots: [
      {
        id: "srinagar-dal-lake",
        name: "Dal Lake Shikara Ride & Houseboats",
        isMustVisit: true,
        category: "Nature",
        rating: 4.9,
        entryFee: "Shikara Ride ₹700 - ₹1,200 per hour",
        timings: "Sunrise to 9:00 PM",
        idealTimeHours: 2.5,
        description: "The jewel of Kashmir, covering 18 sq km with floating gardens (Radh), ornate carved wooden houseboats, and water channels shaded by ancient chinar trees.",
        mustKnowTip: "Sip steaming hot saffron kahwa tea poured from a copper samovar on a moving shikara.",
        image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=700&q=80",
        lat: 34.0900,
        lng: 74.8700
      },
      {
        id: "srinagar-mughal-gardens",
        name: "Mughal Gardens (Shalimar & Nishat Bagh)",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.8,
        entryFee: "₹25 (Indians), ₹100 (Foreigners)",
        timings: "9:00 AM - 7:00 PM",
        idealTimeHours: 2.5,
        description: "17th-century terraced Persian garden estates built by Emperor Jahangir for his wife Nur Jahan, adorned with cascading water fountains, flowerbeds, and century-old chinar trees.",
        mustKnowTip: "Visit in October to see the chinar leaves turn into fiery shades of crimson, orange, and amber gold.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
        lat: 34.1500,
        lng: 74.8700
      },
      {
        id: "srinagar-shankaracharya",
        name: "Shankaracharya Temple",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.7,
        entryFee: "Free Entry",
        timings: "6:00 AM - 8:00 PM",
        idealTimeHours: 1.5,
        description: "Ancient stone Shiva temple dating back to 200 BC, perched 1,000 feet above the valley floor atop Gopadari Hill, offering commanding views of Srinagar city.",
        mustKnowTip: "Climb the 240 stone stairs; mobile phones and electronic cameras are not permitted inside due to security.",
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=700&q=80",
        lat: 34.0700,
        lng: 74.8400
      }
    ]
  },

  {
    id: "jodhpur",
    name: "Jodhpur",
    state: "Rajasthan",
    region: "North",
    tagline: "The Sun City & Legendary Indigo Blue Fortress",
    description: "Guarded by the colossal cliffside ramparts of Mehrangarh Fort, Jodhpur's old quarters are painted in soothing shades of Brahmin blue, lined with vibrant spice bazaars.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to March",
    idealDuration: "2 - 3 Days",
    avgBudgetPerDay: "₹2,200 - ₹4,800",
    budgetCategory: "Mid-Range",
    nearestHub: "Jodhpur Airport (JDH) / Jodhpur Junction Railway Station",
    coordinates: { lat: 26.2389, lng: 73.0243 },
    tags: ["Heritage", "Market", "Culture"],
    famousFoods: ["Mawa Kachori", "Mirchi Vada (Janta Sweet Home)", "Pyaaz Kachori", "Gulab Jamun Sabzi", "Makhaniya Lassi (Shri Mishrilal Hotel)"],
    travelTips: [
      "Experience zip-lining (Flying Fox) across the battlements and lakes of Mehrangarh Fort for adrenaline and aerial perspectives.",
      "Wander through Navchokiya quarter early in the morning to photograph the authentic bright blue painted houses.",
      "Stop at Shri Mishrilal Hotel near the Clock Tower (Ghanta Ghar) for their legendary saffron-infused Makhaniya Lassi."
    ],
    spots: [
      {
        id: "jodhpur-mehrangarh-fort",
        name: "Mehrangarh Fort",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.9,
        entryFee: "₹100 (Indians), ₹600 (Foreigners)",
        timings: "9:00 AM - 5:00 PM",
        idealTimeHours: 3.5,
        description: "Rudyard Kipling called it 'the work of giants.' One of India's largest and most imposing hill forts rising 400 feet above the city, with intricate sandstone lattice galleries.",
        mustKnowTip: "Rent the world-class audio guide to hear gripping tales of Rajput battles, cannonballs, and royal valor.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80",
        lat: 26.2980,
        lng: 73.0188
      },
      {
        id: "jodhpur-jaswant-thada",
        name: "Jaswant Thada",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.6,
        entryFee: "₹30 (Indians), ₹50 (Foreigners)",
        timings: "9:00 AM - 5:00 PM",
        idealTimeHours: 1.5,
        description: "Often referred to as the 'Taj Mahal of Marwar', this 1899 royal white marble cenotaph is built with thin marble sheets that emit a warm golden glow when illuminated by the sun.",
        mustKnowTip: "The tranquil lakeside garden provides postcard-perfect views looking up at the Mehrangarh ramparts.",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=700&q=80",
        lat: 26.3025,
        lng: 73.0239
      },
      {
        id: "jodhpur-umaid-bhawan",
        name: "Umaid Bhawan Palace",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.6,
        entryFee: "₹30 (Museum ticket)",
        timings: "10:00 AM - 4:30 PM",
        idealTimeHours: 2,
        description: "One of the world's largest private royal residences, built with yellow golden sandstone, part of which operates as a luxury Taj hotel and museum showcasing vintage cars and royal clocks.",
        mustKnowTip: "Check out the Maharaja's vintage automobile collection displayed in the front driveway.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=700&q=80",
        lat: 26.2808,
        lng: 73.0475
      }
    ]
  },

  {
    id: "jaisalmer",
    name: "Jaisalmer",
    state: "Rajasthan",
    region: "North",
    tagline: "The Golden City & The Living Desert Citadel",
    description: "Rising like a shimmering mirage from the heart of the Thar Desert, Jaisalmer is celebrated for its yellow sandstone living fort, intricate Jain havelis, and camel dunes.",
    image: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to March (Desert Festival in February)",
    idealDuration: "2 - 3 Days",
    avgBudgetPerDay: "₹2,500 - ₹5,000",
    budgetCategory: "Mid-Range",
    nearestHub: "Jaisalmer Airport (JSA) / Jaisalmer Railway Station",
    coordinates: { lat: 26.9157, lng: 70.9083 },
    tags: ["Heritage", "Adventure", "Culture"],
    famousFoods: ["Ker Sangri", "Dal Baati Churma", "Gatte ki Sabzi", "Ghotua Ladoo (local dessert)", "Laal Maas"],
    travelTips: [
      "Jaisalmer Fort is a living fort with a quarter of the old city's population residing inside; respect local residents while touring.",
      "Camp overnight at the Sam Sand Dunes in a luxury Swiss tent with folk Kalbelia dancing and star gazing.",
      "Carry sunglasses and scarves to protect against windblown desert sand."
    ],
    spots: [
      {
        id: "jaisalmer-fort",
        name: "Jaisalmer Fort (Sonar Qila)",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.8,
        entryFee: "Free entry to fort (Palace museum ₹100)",
        timings: "Open all day",
        idealTimeHours: 3,
        description: "Built in 1156 AD on Trikuta Hill, this UNESCO World Heritage golden fort has 99 bastions and houses ancient havelis, handicraft shops, and seven interconnected medieval Jain temples.",
        mustKnowTip: "Watch the golden sandstone turn into gleaming honey-gold at sunrise from the cannon viewpoint ramparts.",
        image: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=700&q=80",
        lat: 26.9124,
        lng: 70.9126
      },
      {
        id: "jaisalmer-sam-dunes",
        name: "Sam Sand Dunes & Desert Safari",
        isMustVisit: true,
        category: "Adventure",
        rating: 4.7,
        entryFee: "Camel ride ₹300 - ₹800 / Jeep Dune Bashing ₹1,500",
        timings: "Best 4:00 PM - 8:00 PM",
        idealTimeHours: 4,
        description: "Dramatic undulating golden sand dunes 40 km from Jaisalmer, offering camel safaris, thrilling 4x4 dune bashing, Rajasthani folk dances around a bonfire, and celestial stargazing.",
        mustKnowTip: "Take the 4x4 open jeep safari over the crests of the dunes right before sunset for a rollercoaster thrill.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
        lat: 26.8333,
        lng: 70.5000
      },
      {
        id: "jaisalmer-patwon-ki-haveli",
        name: "Patwon Ki Haveli",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.7,
        entryFee: "₹50 (Indians), ₹100 (Foreigners)",
        timings: "9:00 AM - 5:30 PM",
        idealTimeHours: 1.5,
        description: "A cluster of five palatial havelis built by a wealthy brocade merchant family in 1805, renowned as the most elaborately carved stone mansion in Rajasthan with 60 balconies (jharokhas).",
        mustKnowTip: "Step onto the top floor balconies for an extraordinary framed view of Jaisalmer Fort towering above.",
        image: "https://images.unsplash.com/photo-1603288940300-349f2b8f886f?auto=format&fit=crop&w=700&q=80",
        lat: 26.9174,
        lng: 70.9168
      }
    ]
  },

  {
    id: "haridwar",
    name: "Haridwar",
    state: "Uttarakhand",
    region: "North",
    tagline: "The Sacred Gateway of the Gods on the Holy Ganga",
    description: "One of Hinduism's seven holiest cities (Sapta Puri), where the sacred River Ganga descends from the Himalayas into the Indo-Gangetic plains, famed for the vibrant Har Ki Pauri aarti.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to April",
    idealDuration: "1 - 2 Days",
    avgBudgetPerDay: "₹1,500 - ₹3,200",
    budgetCategory: "Budget",
    nearestHub: "Haridwar Junction Railway Station / Dehradun Jolly Grant Airport (DED - 35 km)",
    coordinates: { lat: 29.9457, lng: 78.1642 },
    tags: ["Spiritual", "Heritage"],
    famousFoods: ["Puri Chhole at Mohanji Puriwale", "Aloo Puri & Halwa", "Kachori with spicy potato curry", "Kullad Milk with Rabdi"],
    travelTips: [
      "Reach Har Ki Pauri at least 1 hour before sunset (5:00 PM in winter, 6:00 PM in summer) to secure a seat along the ghat stairs.",
      "Haridwar is strictly vegetarian and alcohol-free throughout the municipal city.",
      "Combine Haridwar with Rishikesh, located just a 45-minute drive (25 km) upstream."
    ],
    spots: [
      {
        id: "haridwar-har-ki-pauri",
        name: "Har Ki Pauri & Evening Ganga Aarti",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.9,
        entryFee: "Free Entry",
        timings: "Aarti starts at 6:00 PM (Winter) / 6:45 PM (Summer)",
        idealTimeHours: 2,
        description: "The most sacred ghat in Haridwar where King Vikramaditya is said to have built the steps. Every evening, thousands gather to witness multi-tiered brass lamp aartis reflecting off the fast-flowing emerald waters.",
        mustKnowTip: "Float a leaf-cup diya with marigolds and camphor onto the Ganga after the evening prayer.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
        lat: 29.9576,
        lng: 78.1711
      },
      {
        id: "haridwar-mansa-devi",
        name: "Mansa Devi Ropeway & Hilltop Temple",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.5,
        entryFee: "Free (Ropeway combo ~₹150)",
        timings: "6:00 AM - 8:00 PM",
        idealTimeHours: 2,
        description: "Perched atop Bilwa Parvat in the Shivalik Hills, dedicated to Goddess Mansa Devi who fulfills the wishes of devotees, reachable via a scenic cable car ropeway.",
        mustKnowTip: "Buy the combined ropeway ticket that covers both Mansa Devi and Chandi Devi temples.",
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=700&q=80",
        lat: 29.9575,
        lng: 78.1636
      }
    ]
  },

  // =========================================================================
  // SOUTH INDIA (Additional Popular Cities)
  // =========================================================================
  {
    id: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    region: "South",
    tagline: "The Cultural Capital of South India & Gateway to Carnatic Arts",
    description: "A vibrant coastal metropolis steeped in Dravidian heritage, towering gopuram temples, classical music and Bharatanatyam arts, and Asia's longest natural urban beach.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "November to February",
    idealDuration: "2 - 3 Days",
    avgBudgetPerDay: "₹2,200 - ₹4,500",
    budgetCategory: "Mid-Range",
    nearestHub: "Chennai International Airport (MAA) / Chennai Central Railway Station (MAS)",
    coordinates: { lat: 13.0827, lng: 80.2707 },
    tags: ["Heritage", "Beach", "Culture", "Food"],
    famousFoods: ["Traditional Tamil Banana Leaf Meals", "Filter Kaapi", "Idli & Vada with 3 Chutneys (Murugan Idli)", "Sundal at Marina Beach", "Chettinad Pepper Chicken"],
    travelTips: [
      "Visit Mylapore's Kapaleeshwarar Temple early in the morning to hear temple bells and smell fresh jasmine.",
      "Take an evening stroll along Marina Beach to taste hot sundal, fried fish, and chili bhajji from beach stalls.",
      "Explore DakshinaChitra heritage museum on the East Coast Road (ECR) towards Mahabalipuram."
    ],
    spots: [
      {
        id: "chennai-marina-beach",
        name: "Marina Beach & Promenade",
        isMustVisit: true,
        category: "Beach",
        rating: 4.6,
        entryFee: "Free Entry",
        timings: "Open 24 Hours (Best 5:00 AM - 8:00 AM & 5:00 PM - 8:30 PM)",
        idealTimeHours: 2,
        description: "Stretching 13 km along the Bay of Bengal, Marina is India's longest natural urban beach, teeming with kites, horse rides, lighthouse viewpoints, and seafood stalls.",
        mustKnowTip: "Take the elevator to the top of the Marina Lighthouse for a 360-degree ocean and city vista.",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=700&q=80",
        lat: 13.0500,
        lng: 80.2824
      },
      {
        id: "chennai-kapaleeshwarar",
        name: "Kapaleeshwarar Temple (Mylapore)",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.8,
        entryFee: "Free Entry",
        timings: "5:30 AM - 12:00 PM & 4:30 PM - 9:00 PM",
        idealTimeHours: 2,
        description: "A 7th-century architectural masterpiece of Dravidian style dedicated to Lord Shiva, renowned for its 37-metre multi-tiered rainbow rainbow-colored gopuram sculpted with mythological deities.",
        mustKnowTip: "Walk through the historic agraharam streets around the temple tank to shop for bronze lamps and silk sarees.",
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=700&q=80",
        lat: 13.0335,
        lng: 80.2694
      }
    ]
  },

  {
    id: "mysore",
    name: "Mysore (Mysuru)",
    state: "Karnataka",
    region: "South",
    tagline: "The City of Royal Palaces, Sandalwood & Silk",
    description: "The erstwhile capital of the Wodeyar dynasty, famed for its fairy-tale illuminated palace, pure silk sarees, fragrant sandalwood, and grand Dasara festival celebrations.",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to March (Dasara Festival in Oct)",
    idealDuration: "2 Days",
    avgBudgetPerDay: "₹2,000 - ₹4,000",
    budgetCategory: "Mid-Range",
    nearestHub: "Mysuru Airport (MYQ) / Mysuru Junction / Bengaluru Airport (170 km via Expressway)",
    coordinates: { lat: 12.2958, lng: 76.6394 },
    tags: ["Heritage", "Culture", "Food"],
    famousFoods: ["Original Mysore Pak (Guru Sweets)", "Mylari Dosa (Hotel Vinayaka Mylari)", "Mysore Bonda", "Filter Kaapi"],
    travelTips: [
      "Mysore Palace is illuminated by nearly 100,000 incandescent bulbs on Sundays and public holidays from 7:00 PM to 7:45 PM; do not miss this spectacle!",
      "Visit the 135-year-old Devaraja Market to experience vibrant pyramids of kumkum powder, fresh jasmine flowers, and fruits.",
      "The newly opened Bengaluru-Mysuru expressway reduces driving time to just 90 minutes from Bengaluru."
    ],
    spots: [
      {
        id: "mysore-palace",
        name: "Mysore Palace (Amba Vilas)",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.9,
        entryFee: "₹100 (Indians), ₹200 (Foreigners)",
        timings: "10:00 AM - 5:30 PM (Illumination on Sun & holidays 7 PM - 7:45 PM)",
        idealTimeHours: 3,
        description: "One of India's most visited royal palaces, designed in Indo-Saracenic style with stained-glass peacock ceilings, silver doors, carved mahogany pavilions, and ivory inlays.",
        mustKnowTip: "Remove your shoes before entering the inner residential corridors; lockers are provided at the entrance.",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=700&q=80",
        lat: 12.3051,
        lng: 76.6552
      },
      {
        id: "mysore-chamundi-hill",
        name: "Chamundi Hill & Nandi Monolith",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.7,
        entryFee: "Free Entry",
        timings: "7:30 AM - 2:00 PM & 3:30 PM - 9:00 PM",
        idealTimeHours: 2,
        description: "Situated 1,000 metres above sea level, housing the 17th-century temple of Goddess Chamundeshwari and a gigantic 16-foot monolithic granite statue of Nandi the sacred bull.",
        mustKnowTip: "Drive up the hill around sunset for panoramic viewpoints looking down at the entire illuminated city of Mysore.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80",
        lat: 12.2725,
        lng: 76.6710
      }
    ]
  },

  {
    id: "ooty",
    name: "Ooty (Udhagamandalam)",
    state: "Tamil Nadu",
    region: "South",
    tagline: "The Queen of Hill Stations & The Blue Mountain Retreat",
    description: "Nestled in the Nilgiri Hills at 7,350 ft, Ooty charms visitors with cool eucalyptus-scented breezes, vast tea gardens, English country cottages, and the historic blue toy train.",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to June (April-May for Summer Flower Festival)",
    idealDuration: "2 - 3 Days",
    avgBudgetPerDay: "₹2,200 - ₹4,800",
    budgetCategory: "Mid-Range",
    nearestHub: "Coimbatore International Airport (CJB - 88 km) / Mettupalayam Railway Station (Toy Train)",
    coordinates: { lat: 11.4102, lng: 76.6950 },
    tags: ["Nature", "Heritage"],
    famousFoods: ["Nilgiri High-Grown Tea", "Homemade Dark Chocolates (Fudge & Truffles)", "Fresh Varkey (crispy pastry)", "Hot vegetable stew with appam"],
    travelTips: [
      "Ride the UNESCO Nilgiri Mountain Railway between Mettupalayam and Ooty; it uses an extraordinary rack-and-pinion cog system to climb steep ravines.",
      "Carry light woolens even in summer as night temperatures frequently drop below 12°C.",
      "Buy fresh homemade chocolates from King Star or Modern Stores on Commercial Road."
    ],
    spots: [
      {
        id: "ooty-nilgiri-toy-train",
        name: "Nilgiri Mountain Railway (UNESCO Toy Train)",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.8,
        entryFee: "₹30 - ₹205 (IRCTC booking)",
        timings: "Scheduled daily runs",
        idealTimeHours: 3.5,
        description: "Built by the British in 1908, this charming steam toy train meanders through 16 tunnels, 250 bridges, and lush emerald tea estates climbing up the Nilgiri hills.",
        mustKnowTip: "Sit on the left side when climbing uphill from Mettupalayam to Coonoor for the best valley waterfall views.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
        lat: 11.4100,
        lng: 76.6950
      },
      {
        id: "ooty-botanical-gardens",
        name: "Government Botanical Gardens",
        isMustVisit: true,
        category: "Nature",
        rating: 4.6,
        entryFee: "₹40 (Adults), ₹20 (Children)",
        timings: "7:00 AM - 6:30 PM",
        idealTimeHours: 2,
        description: "Established in 1848 across 55 terraced acres, home to over 1,000 exotic floral species, an Italian garden, a fern house, and a 20-million-year-old fossilized tree trunk.",
        mustKnowTip: "Visit during the annual May Flower Show when intricate floral animal sculptures and exhibits are displayed.",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=700&q=80",
        lat: 11.4190,
        lng: 76.7110
      },
      {
        id: "ooty-doddabetta",
        name: "Doddabetta Peak & Telescope House",
        isMustVisit: true,
        category: "Nature",
        rating: 4.5,
        entryFee: "₹10",
        timings: "7:00 AM - 6:00 PM",
        idealTimeHours: 1.5,
        description: "The highest mountain in the Nilgiri Hills at 8,650 ft (2,637 m), flanked by shola forests and offering panoramic views of Bandipur National Park on clear days.",
        mustKnowTip: "Go early in the morning before 10:00 AM before dense mountain fog obscures the valley view.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
        lat: 11.4010,
        lng: 76.7350
      }
    ]
  },

  {
    id: "coorg",
    name: "Coorg (Kodagu)",
    state: "Karnataka",
    region: "South",
    tagline: "The Scotland of India & Coffee Plantation Haven",
    description: "A misty mountainous haven in the Western Ghats blanketed by lush arabica coffee estates, spice plantations, cascading waterfalls, and distinct Kodava warrior traditions.",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to April (Coffee harvest in winter)",
    idealDuration: "3 Days",
    avgBudgetPerDay: "₹2,500 - ₹5,000",
    budgetCategory: "Mid-Range",
    nearestHub: "Kannur International Airport (CNN - 85 km) / Mangalore Airport (IXE - 135 km) / Mysuru Railway Station",
    coordinates: { lat: 12.3375, lng: 75.8069 },
    tags: ["Nature", "Adventure", "Food"],
    famousFoods: ["Pandi Curry (Coorg Spiced Pork with Kachampuli)", "Kadamputtu (Steamed rice balls)", "Bamboo Shoot Curry", "Fresh Roasted Filter Coffee", "Coorg Honey"],
    travelTips: [
      "Stay in an authentic coffee plantation estate homestay to wake up to the fragrance of fresh coffee blossoms.",
      "Visit the Golden Temple (Namdroling Monastery) in Bylakuppe, the second-largest Tibetan settlement in India outside Dharamshala.",
      "Kachampuli (Coorg dark vinegar made from wild garcinia gummi-gutta) is a fantastic culinary souvenir to take home."
    ],
    spots: [
      {
        id: "coorg-abbey-falls",
        name: "Abbey Falls (Abbi Falls)",
        isMustVisit: true,
        category: "Nature",
        rating: 4.6,
        entryFee: "₹15",
        timings: "9:00 AM - 5:00 PM",
        idealTimeHours: 1.5,
        description: "A thundering 70-foot waterfall roaring into the Kaveri River gorge, framed by hanging bridges, coffee bushes, and pepper vines.",
        mustKnowTip: "The hanging bridge across the gorge offers the most photogenic vantage point for the roaring cascade.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
        lat: 12.4533,
        lng: 75.7197
      },
      {
        id: "coorg-dubare-elephant-camp",
        name: "Dubare Elephant Camp",
        isMustVisit: true,
        category: "Adventure",
        rating: 4.7,
        entryFee: "Boat crossing ₹30 / Elephant bathing & interaction extra",
        timings: "9:00 AM - 11:00 AM & 4:30 PM - 5:30 PM",
        idealTimeHours: 2.5,
        description: "Historic elephant training camp situated on an island in the Kaveri River, where visitors can watch and assist mahouts in bathing and feeding gentle giants.",
        mustKnowTip: "Arrive before 9:00 AM to participate in scrubbing and bathing elephants in the shallow river waters.",
        image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=700&q=80",
        lat: 12.3680,
        lng: 75.9050
      },
      {
        id: "coorg-rajas-seat",
        name: "Raja's Seat (Madikeri)",
        isMustVisit: true,
        category: "Scenic",
        rating: 4.5,
        entryFee: "₹10",
        timings: "6:00 AM - 8:00 PM",
        idealTimeHours: 1.5,
        description: "A scenic seasonal garden of flowers and musical fountains perched on a cliff edge where the Kings of Kodagu sat to watch the crimson sun sink behind the misty Western Ghat ranges.",
        mustKnowTip: "Arrive by 5:30 PM to grab a front-row bench for the sunset and stay for the musical fountain show.",
        image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=700&q=80",
        lat: 12.4214,
        lng: 75.7382
      }
    ]
  },

  {
    id: "madurai",
    name: "Madurai",
    state: "Tamil Nadu",
    region: "South",
    tagline: "The Soul of Tamil Nadu & The City that Never Sleeps",
    description: "One of the world's oldest continuously inhabited cities, built concentrically around the monumental Meenakshi Amman Temple on the banks of the Vaigai River.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to March",
    idealDuration: "2 Days",
    avgBudgetPerDay: "₹1,800 - ₹3,600",
    budgetCategory: "Budget",
    nearestHub: "Madurai Airport (IXM) / Madurai Junction (MDU)",
    coordinates: { lat: 9.9252, lng: 78.1198 },
    tags: ["Spiritual", "Heritage", "Food"],
    famousFoods: ["Jigarthanda (Famous cooling drink with almond gum & basundi)", "Madurai Kari Dosa (Mutton minced dosa)", "Bun Parotta", "Kothu Parotta", "Mallipoo Idli with spicy chutneys"],
    travelTips: [
      "Attend the nightly procession ceremony at Meenakshi Temple around 9:00 PM when Lord Shiva's idol is carried to Goddess Meenakshi's chamber.",
      "Dress conservatively with shoulders and legs fully covered (dhoti/pants and salwar/sarees); shorts and sleeveless are barred.",
      "Try Famous Jigarthanda at the original shop on East Marret Street."
    ],
    spots: [
      {
        id: "madurai-meenakshi-temple",
        name: "Meenakshi Sundareswarar Temple",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.9,
        entryFee: "Free Entry (Special Darshan ₹100)",
        timings: "5:00 AM - 12:30 PM & 4:00 PM - 10:00 PM",
        idealTimeHours: 3.5,
        description: "An architectural wonder of South India featuring 14 towering gopurams reaching up to 52 metres, adorned with over 33,000 brightly painted sculptures, and the famous Hall of Thousand Pillars.",
        mustKnowTip: "Mobile phones are strictly prohibited inside; deposit them safely at the authorized temple token locker outside the East Gate.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80",
        lat: 9.9195,
        lng: 78.1193
      },
      {
        id: "madurai-thirumalai-palace",
        name: "Thirumalai Nayakkar Mahal",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.6,
        entryFee: "₹10 (Indians), ₹50 (Foreigners)",
        timings: "9:00 AM - 5:00 PM",
        idealTimeHours: 1.5,
        description: "Built in 1636 AD by King Thirumalai Nayak in Indo-Saracenic and Italianate styles, celebrated for its colossal circular stucco pillars rising 82 feet with ornate archways.",
        mustKnowTip: "Attend the evening sound-and-light show recounting the history of King Thirumalai and the epic Silappadikaram.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=700&q=80",
        lat: 9.9150,
        lng: 78.1230
      }
    ]
  },

  // =========================================================================
  // WEST INDIA (Additional Popular Cities)
  // =========================================================================
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    region: "West",
    tagline: "India's First UNESCO World Heritage City & Food Paradise",
    description: "A vibrant cultural epicenter on the Sabarmati River, celebrated for Mahatma Gandhi's serene ashram, ancient stepwells with intricate subterranean carvings, and buzzing street snacks.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "October to March (International Kite Festival in January)",
    idealDuration: "2 - 3 Days",
    avgBudgetPerDay: "₹1,800 - ₹3,800",
    budgetCategory: "Budget",
    nearestHub: "Sardar Vallabhbhai Patel International Airport (AMD) / Ahmedabad Junction (ADI)",
    coordinates: { lat: 23.0225, lng: 72.5714 },
    tags: ["Heritage", "Food", "Culture"],
    famousFoods: ["Gujarati Thali (Agashiye / Gordhan Thal)", "Khaman Dhokla & Fafda Jalebi", "Sev Khamani", "Dabeli", "Late Night Street Food at Manek Chowk"],
    travelTips: [
      "Manek Chowk transforms into a bustling open-air night street food market after 9:00 PM; try the famous chocolate cheese sandwiches and rabdi kulfi!",
      "Take the morning Heritage Walk through the old pols (residential clusters) organized by the Ahmedabad Municipal Corporation.",
      "Visit the newly built Atal Pedestrian Bridge on the Sabarmati Riverfront for sunset photos."
    ],
    spots: [
      {
        id: "ahmedabad-sabarmati-ashram",
        name: "Sabarmati Ashram (Gandhi Ashram)",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.8,
        entryFee: "Free Entry",
        timings: "8:30 AM - 6:30 PM",
        idealTimeHours: 2,
        description: "Situated peacefully on the Sabarmati riverbanks, this was Mahatma Gandhi's headquarters from 1917 to 1930 and the starting point of the historic Dandi Salt March.",
        mustKnowTip: "Visit Hriday Kunj, the humble cottage where Gandhiji lived with Kasturba, preserving his original spinning wheel (charkha) and spectacles.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80",
        lat: 23.0605,
        lng: 72.5800
      },
      {
        id: "ahmedabad-adalaj-stepwell",
        name: "Adalaj Stepwell (Adalaj ni Vav)",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.8,
        entryFee: "Free Entry",
        timings: "8:00 AM - 6:00 PM",
        idealTimeHours: 1.5,
        description: "Built in 1498 by Queen Rudabai, a five-storey subterranean sandstone stepwell with intricately carved pillars and galleries where subterranean temperatures are 6 degrees cooler than outside.",
        mustKnowTip: "Look out for the octagonal opening overhead where shafts of sunlight illuminate the detailed floral and mythological friezes.",
        image: "https://images.unsplash.com/photo-1600100397608-f46399c6b653?auto=format&fit=crop&w=700&q=80",
        lat: 23.1667,
        lng: 72.5800
      },
      {
        id: "ahmedabad-atal-bridge",
        name: "Atal Pedestrian Bridge & Riverfront",
        isMustVisit: true,
        category: "Scenic",
        rating: 4.7,
        entryFee: "₹30",
        timings: "9:00 AM - 10:45 PM",
        idealTimeHours: 1.5,
        description: "A 300-metre pedestrian footbridge inspired by the vibrant colors of kite festival kites, spanning the Sabarmati River with LED illumination and waterfront boardwalks.",
        mustKnowTip: "Visit after dark to see the kaleidoscopic color-changing lights reflected across the water.",
        image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=700&q=80",
        lat: 23.0180,
        lng: 72.5700
      }
    ]
  },

  {
    id: "pune",
    name: "Pune",
    state: "Maharashtra",
    region: "West",
    tagline: "The Oxford of the East & Capital of Maratha Valor",
    description: "The historical stronghold of Chhatrapati Shivaji Maharaj and the Peshwas, blending historic hill forts, academic prestige, serene Osho gardens, and delicious Maharashtrian food.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "July to February (Monsoon for lush forts, Winter for pleasant days)",
    idealDuration: "2 - 3 Days",
    avgBudgetPerDay: "₹2,000 - ₹4,200",
    budgetCategory: "Mid-Range",
    nearestHub: "Pune International Airport (PNQ) / Pune Junction (PUNE)",
    coordinates: { lat: 18.5204, lng: 73.8567 },
    tags: ["Heritage", "Culture", "Food"],
    famousFoods: ["Misal Pav (Kata Kirr / Bedekar)", "Bhakarwadi (Chitale Bandhu Mithaiwale)", "Bun Maska & Chai at Cafe Goodluck", "Puran Poli", "Sujata Mastani (thick ice cream shake)"],
    travelTips: [
      "Hike up to Sinhagad Fort in the morning and eat piping hot kanda bhajjis (onion fritters) and pitla bhakri prepared by village cooks at the summit.",
      "Visit Shrimant Dagdusheth Halwai Ganpati Temple, one of the most revered and richly adorned Ganesha temples in Maharashtra.",
      "Have traditional bun maska and keema pav at historic Irani joint Cafe Goodluck on FC Road."
    ],
    spots: [
      {
        id: "pune-shaniwar-wada",
        name: "Shaniwar Wada",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.6,
        entryFee: "₹25 (Indians), ₹300 (Foreigners)",
        timings: "9:30 AM - 5:30 PM",
        idealTimeHours: 2,
        description: "The formidable 1732 seat of the Peshwa rulers of the Maratha Empire, famed for its spiked Dilli Darwaza gates, massive stone foundation walls, and fountain gardens.",
        mustKnowTip: "Attend the evening sound-and-light show that brings the dramatic rise and intrigue of the Peshwa dynasty to life.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80",
        lat: 18.5196,
        lng: 73.8553
      },
      {
        id: "pune-aga-khan-palace",
        name: "Aga Khan Palace",
        isMustVisit: true,
        category: "Heritage",
        rating: 4.6,
        entryFee: "₹25 (Indians), ₹300 (Foreigners)",
        timings: "9:00 AM - 5:30 PM",
        idealTimeHours: 2,
        description: "An Italianate palace with sprawling lawns built in 1892, where Mahatma Gandhi, Kasturba Gandhi, and Mahadev Desai were imprisoned during the 1942 Quit India Movement.",
        mustKnowTip: "Pay homage at the peaceful marble samadhis of Kasturba Gandhi and Mahadev Desai located in the garden.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=700&q=80",
        lat: 18.5524,
        lng: 73.9015
      },
      {
        id: "pune-sinhagad-fort",
        name: "Sinhagad Fort (Lion's Fort)",
        isMustVisit: true,
        category: "Adventure",
        rating: 4.7,
        entryFee: "₹50 (Vehicle toll)",
        timings: "6:00 AM - 6:00 PM",
        idealTimeHours: 3.5,
        description: "An isolated cliff fortress 30 km from Pune perched 4,300 ft high, famous for the legendary 1670 battle led by Tanaji Malusare to reclaim the fort for Chhatrapati Shivaji Maharaj.",
        mustKnowTip: "Enjoy freshly whipped mattha (spiced buttermilk) and hot pithla bhakri cooked over earthen chulha fires at the top.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
        lat: 18.3663,
        lng: 73.7558
      }
    ]
  },

  // =========================================================================
  // NORTHEAST INDIA (Additional Popular Cities)
  // =========================================================================
  {
    id: "tawang",
    name: "Tawang",
    state: "Arunachal Pradesh",
    region: "Northeast",
    tagline: "The Land of the Monpas, Glacial Lakes & Sacred Chants",
    description: "Perched at 10,000 ft in Arunachal Pradesh, Tawang is home to India's largest Buddhist monastery, snow-draped Sela Pass, crystal glacial lakes, and heroic border memorials.",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1600&q=80",
    bestTimeToVisit: "March to May (Spring rhododendrons) & September to November (Clear mountain skies)",
    idealDuration: "4 - 5 Days",
    avgBudgetPerDay: "₹2,800 - ₹5,500",
    budgetCategory: "Mid-Range",
    nearestHub: "Tezpur Airport / Guwahati Airport (450 km scenic drive via Bhalukpong & Dirang)",
    coordinates: { lat: 27.5861, lng: 91.8653 },
    tags: ["Nature", "Spiritual", "Adventure"],
    famousFoods: ["Thukpa & Gyapa Khazi", "Zan (Finger millet porridge with vegetables)", "Momos with Churpi", "Sweet Butter Tea"],
    travelTips: [
      "Inner Line Permit (ILP) is mandatory for Indian nationals; Protected Area Permit (PAP) for foreign tourists, obtained online via arunachalilp.com.",
      "The drive from Guwahati/Tezpur takes 2 days with an overnight halt in Bomdila or Dirang to acclimatize comfortably.",
      "Carry heavy warm woolens and thermal layers even in spring."
    ],
    spots: [
      {
        id: "tawang-monastery",
        name: "Tawang Monastery (Galden Namgey Lhatse)",
        isMustVisit: true,
        category: "Spiritual",
        rating: 4.9,
        entryFee: "₹20",
        timings: "7:00 AM - 6:00 PM",
        idealTimeHours: 3,
        description: "The second largest Buddhist monastery in the world outside Lhasa, Tibet, founded in 1680. It houses an 18-foot golden Buddha statue and over 400 resident Monpa monks.",
        mustKnowTip: "Witness the morning prayers at 7:30 AM when young monks chant sacred mantras accompanied by giant drums and long horns.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
        lat: 27.5861,
        lng: 91.8653
      },
      {
        id: "tawang-sela-pass",
        name: "Sela Pass & Sela Lake",
        isMustVisit: true,
        category: "Nature",
        rating: 4.9,
        entryFee: "Free Entry (ILP Checkpoint)",
        timings: "Open daylight hours",
        idealTimeHours: 1.5,
        description: "Breathtaking high-altitude mountain pass at 13,700 ft (4,170 m), flanked by the pristine, sacred Sela Lake which remains frozen in winter.",
        mustKnowTip: "Stop at the military-run cafeteria at the pass for piping hot chai and vegetable momos amidst snowy peaks.",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=700&q=80",
        lat: 27.5042,
        lng: 92.1039
      }
    ]
  }
];

// Curated starter itineraries across India
const CURATED_ITINERARIES = [
  {
    id: "golden-triangle",
    title: "Golden Triangle Classic",
    tagline: "Delhi, Agra & Jaipur Heritage Circuit",
    duration: "5 Days",
    region: "North",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
    description: "India's definitive introduction: Mughal monuments in Delhi, the ethereal Taj Mahal in Agra, and royal pink palaces and hilltop forts in Jaipur.",
    days: [
      {
        dayNumber: 1,
        city: "Delhi",
        title: "Old & New Delhi Heritage Walk",
        spots: [
          { name: "Red Fort (Lal Qila)", timeSlot: "Morning", notes: "Arrive at 9:30 AM, explore Diwan-i-Aam and Lahore Gate" },
          { name: "Old Delhi & Chandni Chowk", timeSlot: "Afternoon", notes: "Lunch at Paranthe Wali Gali, cycle rickshaw spice market tour" },
          { name: "India Gate & Kartavya Path", timeSlot: "Evening", notes: "Stroll along the illuminated boulevard and National War Memorial" }
        ]
      },
      {
        dayNumber: 2,
        city: "Delhi to Agra",
        title: "Architectural Marvels & Journey to Agra",
        spots: [
          { name: "Qutub Minar Complex", timeSlot: "Morning", notes: "Explore the UNESCO minaret and ancient iron pillar" },
          { name: "Humayun's Tomb", timeSlot: "Afternoon", notes: "Mughal garden tomb exploration" },
          { name: "Gatimaan Express Train", timeSlot: "Evening", notes: "Express train to Agra (1 hr 40 mins), check into hotel" }
        ]
      },
      {
        dayNumber: 3,
        city: "Agra to Jaipur",
        title: "Sunrise at Taj Mahal & The Ghost City",
        spots: [
          { name: "Taj Mahal", timeSlot: "Morning", notes: "Witness sunrise at 6 AM when marble glows pink and gold" },
          { name: "Agra Fort", timeSlot: "Afternoon", notes: "Explore the royal quarters and views of Taj Mahal" },
          { name: "Fatehpur Sikri", timeSlot: "Evening", notes: "En route to Jaipur, visit Buland Darwaza" }
        ]
      },
      {
        dayNumber: 4,
        city: "Jaipur",
        title: "Royal Amber Fort & Palaces",
        spots: [
          { name: "Amber Fort & Palace", timeSlot: "Morning", notes: "Jeep up to the fort, explore the Sheesh Mahal mirror hall" },
          { name: "Hawa Mahal (Palace of Winds)", timeSlot: "Afternoon", notes: "Rooftop cafe photoshoot opposite the facade" },
          { name: "Nahargarh Fort (Sunset Point)", timeSlot: "Evening", notes: "Panoramic sunset drinks overlooking the Pink City" }
        ]
      },
      {
        dayNumber: 5,
        city: "Jaipur",
        title: "Science, Royal Museums & Bazaars",
        spots: [
          { name: "City Palace Jaipur", timeSlot: "Morning", notes: "Museum tour and Peacock Gate photography" },
          { name: "Jantar Mantar", timeSlot: "Afternoon", notes: "Discover giant stone astronomical sundials" },
          { name: "Johari & Bapu Bazaars", timeSlot: "Evening", notes: "Shopping for gemstones, juttis, and block-print textiles" }
        ]
      }
    ]
  },
  {
    id: "kerala-serenity",
    title: "Kerala Backwaters & Mist Hills",
    tagline: "Kochi, Munnar & Alleppey Houseboat Serenade",
    duration: "5 Days",
    region: "South",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80",
    description: "Immerse in emerald tranquility: Dutch and Portuguese colonial history in Fort Kochi, misty rolling tea plantations in Munnar, and houseboats on Alleppey backwaters.",
    days: [
      {
        dayNumber: 1,
        city: "Kochi",
        title: "Fort Kochi Colonial Charm",
        spots: [
          { name: "Chinese Fishing Nets (Cheena Vala)", timeSlot: "Morning", notes: "Watch fishermen operate the cantilevered nets" },
          { name: "Mattancherry Palace (Dutch Palace)", timeSlot: "Afternoon", notes: "Ramayana murals and Jew Town antique shopping" },
          { name: "Kathakali Performance", timeSlot: "Evening", notes: "Classical dance and makeup demonstration in Fort Kochi" }
        ]
      },
      {
        dayNumber: 2,
        city: "Kochi to Munnar",
        title: "Ascent to the Tea Hills",
        spots: [
          { name: "Cheeyappara Waterfalls", timeSlot: "Morning", notes: "Roadside waterfall photo stop on the ghat highway" },
          { name: "KDHP Tea Museum & Factory", timeSlot: "Afternoon", notes: "Fresh tea processing demonstration and tasting" },
          { name: "Old Munnar Town", timeSlot: "Evening", notes: "Sample hot spiced chai and homemade chocolates" }
        ]
      },
      {
        dayNumber: 3,
        city: "Munnar",
        title: "High Peak Wildlife & Cloud Vistas",
        spots: [
          { name: "Eravikulam National Park (Rajamalai)", timeSlot: "Morning", notes: "Spot the endangered Nilgiri Tahr mountain goats" },
          { name: "Top Station & Echo Point", timeSlot: "Afternoon", notes: "Spectacular Western Ghat panoramic valley views" },
          { name: "Campfire & Stargazing", timeSlot: "Evening", notes: "Chilly mountain evening at plantation resort" }
        ]
      },
      {
        dayNumber: 4,
        city: "Munnar to Alleppey",
        title: "Houseboat Check-in & Lagoon Cruise",
        spots: [
          { name: "Drive to Alleppey", timeSlot: "Morning", notes: "Scenic drive from hills down to the tropical coastline" },
          { name: "Vembanad Lake Houseboat Cruise", timeSlot: "Afternoon", notes: "Check-in at noon, traditional Karimeen banana-leaf lunch" },
          { name: "Sunset on the Backwaters", timeSlot: "Evening", notes: "Quiet dusk gliding past village canals and paddy fields" }
        ]
      },
      {
        dayNumber: 5,
        city: "Alleppey & Marari",
        title: "Morning Mist & Palm Beach Relaxation",
        spots: [
          { name: "Morning Ferry Canal Ride", timeSlot: "Morning", notes: "Watch village life wake up along the waterways" },
          { name: "Marari Beach", timeSlot: "Afternoon", notes: "Golden sand beach stroll and fresh coconut water" },
          { name: "Departure", timeSlot: "Evening", notes: "Transfer to Cochin International Airport" }
        ]
      }
    ]
  },
  {
    id: "himalayan-escape",
    title: "Himachal Alpine & Snow Adventure",
    tagline: "Manali, Solang Valley & Atal Tunnel",
    duration: "4 Days",
    region: "North",
    image: "https://images.unsplash.com/photo-1579619564365-03554da8239e?auto=format&fit=crop&w=600&q=80",
    description: "Breathe crisp mountain air, glide over snow slopes, cross the engineering marvel of Atal Tunnel into Lahaul, and enjoy bohemian cafe culture.",
    days: [
      {
        dayNumber: 1,
        city: "Manali",
        title: "Old Manali & Ancient Deodar Forest",
        spots: [
          { name: "Hadimba Devi Temple", timeSlot: "Morning", notes: "Ancient wooden pagoda in giant deodar cedar woods" },
          { name: "Old Manali & Cafe Culture", timeSlot: "Afternoon", notes: "Wood-fired pizza, apple strudel, and local art galleries" },
          { name: "Mall Road Manali", timeSlot: "Evening", notes: "Shop for Kullu shawls, woolens, and dried apples" }
        ]
      },
      {
        dayNumber: 2,
        city: "Manali",
        title: "Solang Valley Snow & Sky Thrills",
        spots: [
          { name: "Solang Valley", timeSlot: "Morning", notes: "Paragliding, cable car ropeway, and zorbing" },
          { name: "Jogini Waterfall Hike", timeSlot: "Afternoon", notes: "Gentle 45-minute pine forest walk to cascading falls" },
          { name: "Vashisht Hot Springs", timeSlot: "Evening", notes: "Rejuvenating dip in natural sulfur hot springs" }
        ]
      },
      {
        dayNumber: 3,
        city: "Manali to Lahaul",
        title: "Atal Tunnel & Sissu Valley",
        spots: [
          { name: "Atal Tunnel & Sissu (Lahaul Valley)", timeSlot: "Morning", notes: "Drive through the 9 km tunnel into dramatic trans-Himalayan landscapes" },
          { name: "Sissu Waterfall & Lake", timeSlot: "Afternoon", notes: "Zip-line across river and mountain photography" },
          { name: "Return Drive & Bonfire", timeSlot: "Evening", notes: "Hot Himachali Siddu dinner by the fire" }
        ]
      },
      {
        dayNumber: 4,
        city: "Manali",
        title: "Nature Walk & Departure",
        spots: [
          { name: "Van Vihar Nature Park", timeSlot: "Morning", notes: "Quiet walk along the rushing Beas River" },
          { name: "Local Trout Fish Lunch", timeSlot: "Afternoon", notes: "Enjoy fresh grilled river trout at local eatery" },
          { name: "Overnight Volvo Bus", timeSlot: "Evening", notes: "Board return coach to Delhi / Chandigarh" }
        ]
      }
    ]
  }
];

// Essential Emergency & Tourist Directory
const TOURIST_HELPLINES = [
  { service: "All-India Emergency Number", number: "112", description: "Police, Fire, and Ambulance unified response", badge: "24/7 National" },
  { service: "Ministry of Tourism Helpline", number: "1363 / 1800-11-1363", description: "Multi-lingual tourist support in 12 languages (Hindi, English, French, Spanish, etc.)", badge: "Toll Free" },
  { service: "National Railway Helpline", number: "139", description: "Train PNR, live tracking, medical emergencies on trains", badge: "Indian Railways" },
  { service: "National Highway Helpline", number: "1033", description: "Highway roadside assistance and ambulance dispatch", badge: "NHAI" },
  { service: "Women's Safety Helpline", number: "1091", description: "Dedicated 24/7 security assistance for women travelers", badge: "National" }
];
