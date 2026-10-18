// Breeze Trip - Core Application Controller

class BreezeApp {
  constructor() {
    this.currentTab = 'explore';
    this.selectedRegion = 'all';
    this.selectedCategory = 'all';
    this.searchQuery = '';
    this.selectedCityModalId = null;
    this.destinations = INDIA_DESTINATIONS;
    this.popularCities = (typeof POPULAR_CITIES_CATALOG !== 'undefined') ? POPULAR_CITIES_CATALOG : [];
    this.searchMenuRegionFilter = 'all';
    this.isSearchMenuOpen = false;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.renderPopularCitiesPills();
    this.renderSearchMenuRegionTabs();
    this.renderSearchMenuContent();
    this.renderRegionFilters();
    this.renderCategoryFilters();
    this.renderDestinations();
    this.renderCuratedTrips();
    this.renderPlanner();
    this.renderHelplines();

    // Check URL hash for direct tab navigation
    window.addEventListener('hashchange', () => this.handleHashRoute());
    this.handleHashRoute();

    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  handleHashRoute() {
    const hash = window.location.hash.replace('#', '');
    if (['explore', 'map', 'planner', 'curated', 'tools'].includes(hash)) {
      this.switchTab(hash);
    }
  }

  setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      // Focus opens the search menu
      searchInput.addEventListener('focus', () => {
        this.openSearchMenu();
        this.renderSearchMenuContent(searchInput.value.trim());
      });

      // Live typing filters both grid and search menu
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderDestinations();
        this.renderSearchMenuContent(this.searchQuery);
        if (!this.isSearchMenuOpen) {
          this.openSearchMenu();
        }
        if (window.breezeMap && this.currentTab === 'map') {
          window.breezeMap.renderMainMarkers(this.getFilteredDestinations());
        }
      });

      // Keyboard navigation shortcuts
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeSearchMenu();
        } else if (e.key === 'Enter') {
          this.renderDestinations();
          this.closeSearchMenu();
        }
      });
    }

    // Click outside to close search menu
    document.addEventListener('click', (e) => {
      const container = document.getElementById('search-menu-container');
      if (container && !container.contains(e.target)) {
        this.closeSearchMenu();
      }
    });

    // New Trip Form submission
    const newTripForm = document.getElementById('new-trip-form');
    if (newTripForm) {
      newTripForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleCreateTripSubmit(newTripForm);
      });
    }

    // Packing list generator form
    const packingForm = document.getElementById('packing-generator-form');
    if (packingForm) {
      packingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.generatePackingList();
      });
    }

    // Trip recommender form
    const recommenderForm = document.getElementById('recommender-form');
    if (recommenderForm) {
      recommenderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.generateRecommendations();
      });
    }
  }

  // =========================================================================
  // POPULAR CITIES SEARCH MENU & QUICK PILLS
  // =========================================================================
  renderPopularCitiesPills() {
    const container = document.getElementById('popular-cities-pills');
    if (!container) return;

    // Render popular city badges
    container.innerHTML = this.popularCities.map(city => `
      <button 
        onclick="window.breezeApp.selectCityFromMenu('${city.id}')" 
        class="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/15 hover:bg-white/30 text-white border border-white/20 backdrop-blur-sm transition flex items-center gap-1 shadow-sm whitespace-nowrap active:scale-95">
        <span>${city.emoji || '📍'}</span>
        <span>${city.name}</span>
      </button>
    `).join('');
  }

  renderSearchMenuRegionTabs() {
    const container = document.getElementById('search-menu-region-tabs');
    if (!container) return;

    const tabs = [
      { id: 'all', name: 'All' },
      { id: 'North', name: 'North' },
      { id: 'South', name: 'South' },
      { id: 'West', name: 'West' },
      { id: 'East', name: 'East' },
      { id: 'Central', name: 'Central' },
      { id: 'Northeast', name: 'Northeast' }
    ];

    container.innerHTML = tabs.map(tab => `
      <button 
        onclick="window.breezeApp.setSearchMenuRegion('${tab.id}')"
        class="px-2.5 py-1 rounded-lg font-bold transition text-[11px] whitespace-nowrap ${
          this.searchMenuRegionFilter === tab.id
            ? 'bg-emerald-600 text-white shadow-sm'
            : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
        }">
        ${tab.name}
      </button>
    `).join('');
  }

  setSearchMenuRegion(regionId) {
    this.searchMenuRegionFilter = regionId;
    this.renderSearchMenuRegionTabs();
    const searchInput = document.getElementById('search-input');
    const query = searchInput ? searchInput.value.trim() : '';
    this.renderSearchMenuContent(query);
  }

  renderSearchMenuContent(query = '') {
    const container = document.getElementById('search-menu-content');
    const titleEl = document.getElementById('search-menu-title');
    const countEl = document.getElementById('search-menu-count');
    if (!container) return;

    // Filter cities based on region tab
    let list = this.popularCities;
    if (this.searchMenuRegionFilter !== 'all') {
      list = list.filter(c => c.region.toLowerCase() === this.searchMenuRegionFilter.toLowerCase());
    }

    if (query) {
      // Live search results
      const q = query.toLowerCase();
      const matched = this.destinations.filter(d => {
        const matchesRegion = this.searchMenuRegionFilter === 'all' || d.region.toLowerCase() === this.searchMenuRegionFilter.toLowerCase();
        const matchesQuery = d.name.toLowerCase().includes(q) ||
          d.state.toLowerCase().includes(q) ||
          d.tagline.toLowerCase().includes(q) ||
          d.spots.some(s => s.name.toLowerCase().includes(q));
        return matchesRegion && matchesQuery;
      });

      if (titleEl) titleEl.innerHTML = `🔍 Matching Results for "<span class="text-emerald-600">${query}</span>"`;
      if (countEl) countEl.textContent = `${matched.length} Found`;

      if (matched.length === 0) {
        container.innerHTML = `
          <div class="py-8 text-center text-slate-400 text-xs">
            <p class="font-bold text-slate-600 mb-1">No matching city found for "${query}"</p>
            <p>Try searching another popular Indian city, or click any popular city below.</p>
            <button onclick="window.breezeApp.setSearchMenuRegion('all'); window.breezeApp.renderSearchMenuContent('');" class="mt-3 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs hover:bg-emerald-100">
              Browse All Popular Cities &rarr;
            </button>
          </div>
        `;
        return;
      }

      container.innerHTML = `
        <div class="space-y-2">
          ${matched.map(dest => {
            const mustCount = dest.spots.filter(s => s.isMustVisit).length;
            return `
              <div class="group flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-emerald-50/60 hover:border-emerald-200 transition cursor-pointer" onclick="window.breezeApp.selectCityFromMenu('${dest.id}')">
                <div class="flex items-center gap-3 min-w-0">
                  <img src="${dest.image}" alt="${dest.name}" class="w-12 h-12 rounded-lg object-cover shrink-0 shadow-sm" />
                  <div class="min-w-0">
                    <div class="flex items-center gap-1.5 mb-0.5">
                      <span class="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition">${dest.name}</span>
                      <span class="px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">${dest.region}</span>
                    </div>
                    <p class="text-[11px] text-slate-500 truncate">${dest.state} • ${dest.tagline}</p>
                    <div class="flex items-center gap-1.5 mt-1 text-[10px] text-amber-700 font-semibold">
                      <span>⭐ ${mustCount} Must-Go Places</span>
                      <span>• ⏱️ ${dest.idealDuration}</span>
                    </div>
                  </div>
                </div>
                <button onclick="event.stopPropagation(); window.breezeApp.openCityModal('${dest.id}'); window.breezeApp.closeSearchMenu();" class="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shrink-0 ml-2 shadow-sm">
                  Guide &rarr;
                </button>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else {
      // Default: All Popular Cities Grid
      if (titleEl) titleEl.textContent = "🔥 Popular Cities in India";
      if (countEl) countEl.textContent = `${list.length} Cities`;

      container.innerHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${list.map(city => {
            const dest = this.destinations.find(d => d.id === city.id);
            const image = dest ? dest.image : 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=400&q=80';
            const mustCount = dest ? dest.spots.filter(s => s.isMustVisit).length : 4;
            return `
              <div 
                onclick="window.breezeApp.selectCityFromMenu('${city.id}')"
                class="group flex items-center justify-between p-2 rounded-xl border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/50 transition cursor-pointer bg-white">
                <div class="flex items-center gap-2.5 min-w-0">
                  <img src="${image}" alt="${city.name}" class="w-10 h-10 rounded-lg object-cover shrink-0" />
                  <div class="min-w-0">
                    <div class="flex items-center gap-1">
                      <span class="font-bold text-slate-800 text-xs group-hover:text-emerald-700 transition truncate">${city.name}</span>
                      <span class="text-[10px] text-slate-400">(${city.region})</span>
                    </div>
                    <span class="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 inline-block truncate max-w-[140px]">
                      ${city.badge}
                    </span>
                  </div>
                </div>
                <span class="text-[10px] font-bold text-amber-600 shrink-0 ml-1">
                  ⭐ ${mustCount} spots
                </span>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    if (window.lucide) window.lucide.createIcons();
  }

  openSearchMenu() {
    const dropdown = document.getElementById('search-menu-dropdown');
    if (dropdown) {
      dropdown.classList.remove('hidden');
      this.isSearchMenuOpen = true;
    }
  }

  closeSearchMenu() {
    const dropdown = document.getElementById('search-menu-dropdown');
    if (dropdown) {
      dropdown.classList.add('hidden');
      this.isSearchMenuOpen = false;
    }
  }

  toggleSearchMenu() {
    if (this.isSearchMenuOpen) {
      this.closeSearchMenu();
    } else {
      this.openSearchMenu();
      const searchInput = document.getElementById('search-input');
      this.renderSearchMenuContent(searchInput ? searchInput.value.trim() : '');
    }
  }

  openPopularCitiesMenu() {
    this.switchTab('explore');
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      searchInput.focus();
      this.openSearchMenu();
      this.renderSearchMenuContent('');
    }
  }

  selectCityFromMenu(cityId) {
    const dest = this.destinations.find(d => d.id === cityId);
    const popularCity = this.popularCities.find(c => c.id === cityId);
    const cityName = dest ? dest.name : (popularCity ? popularCity.name : cityId);

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.value = cityName;
    }

    this.searchQuery = cityName.toLowerCase();
    this.selectedRegion = 'all';
    this.renderRegionFilters();
    this.renderDestinations();
    this.closeSearchMenu();

    // Scroll to destinations grid
    const grid = document.getElementById('destinations-grid');
    if (grid) {
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    this.showToast(`Selected ${cityName} - ${dest ? dest.state : 'India'}`);
  }

  switchTab(tabId) {
    this.currentTab = tabId;
    window.location.hash = tabId;

    // Update nav links styling
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.dataset.tab === tabId) {
        link.classList.add('text-emerald-600', 'font-bold', 'border-b-2', 'border-emerald-600');
        link.classList.remove('text-slate-600', 'font-medium');
      } else {
        link.classList.remove('text-emerald-600', 'font-bold', 'border-b-2', 'border-emerald-600');
        link.classList.add('text-slate-600', 'font-medium');
      }
    });

    // Hide all sections
    ['explore-section', 'map-section', 'planner-section', 'curated-section', 'tools-section'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add('hidden');
    });

    // Show target section
    const activeSection = document.getElementById(`${tabId}-section`);
    if (activeSection) {
      activeSection.classList.remove('hidden');
    }

    if (tabId === 'map') {
      setTimeout(() => {
        if (!window.breezeMap.mainMap) {
          window.breezeMap.initMainMap();
        } else {
          window.breezeMap.mainMap.invalidateSize();
        }
      }, 100);
    } else if (tabId === 'planner') {
      this.renderPlanner();
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  renderRegionFilters() {
    const container = document.getElementById('region-filters');
    if (!container) return;

    container.innerHTML = REGIONS.map(reg => `
      <button 
        onclick="window.breezeApp.setRegionFilter('${reg.id}')"
        class="region-btn px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-150 flex items-center gap-1.5 whitespace-nowrap shadow-sm border ${
          this.selectedRegion === reg.id
            ? 'bg-emerald-600 text-white border-emerald-600 shadow-emerald-200'
            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
        }">
        <i data-lucide="${reg.icon}" class="w-3.5 h-3.5"></i>
        <span>${reg.name}</span>
      </button>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  setRegionFilter(regionId) {
    this.selectedRegion = regionId;
    this.renderRegionFilters();
    this.renderDestinations();
    if (window.breezeMap && this.currentTab === 'map') {
      window.breezeMap.renderMainMarkers(this.getFilteredDestinations());
    }
  }

  renderCategoryFilters() {
    const container = document.getElementById('category-filters');
    if (!container) return;

    container.innerHTML = CATEGORIES.map(cat => `
      <button 
        onclick="window.breezeApp.setCategoryFilter('${cat.id}')"
        class="category-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 border ${
          this.selectedCategory === cat.id
            ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
        }">
        <i data-lucide="${cat.icon}" class="w-3 h-3"></i>
        <span>${cat.name}</span>
      </button>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  setCategoryFilter(categoryId) {
    this.selectedCategory = categoryId;
    this.renderCategoryFilters();
    this.renderDestinations();
  }

  getFilteredDestinations() {
    return this.destinations.filter(dest => {
      // Region match
      const matchesRegion = this.selectedRegion === 'all' || dest.region.toLowerCase() === this.selectedRegion.toLowerCase();

      // Category match: checks if city has tags or spots in category
      const matchesCategory = this.selectedCategory === 'all' || 
        dest.tags.some(t => t.toLowerCase() === this.selectedCategory.toLowerCase()) ||
        dest.spots.some(s => s.category.toLowerCase() === this.selectedCategory.toLowerCase());

      // Search match
      const query = this.searchQuery;
      const matchesSearch = !query ||
        dest.name.toLowerCase().includes(query) ||
        dest.state.toLowerCase().includes(query) ||
        dest.tagline.toLowerCase().includes(query) ||
        dest.tags.some(t => t.toLowerCase().includes(query)) ||
        dest.spots.some(s => s.name.toLowerCase().includes(query) || s.category.toLowerCase().includes(query));

      return matchesRegion && matchesCategory && matchesSearch;
    });
  }

  renderDestinations() {
    const container = document.getElementById('destinations-grid');
    const countBadge = document.getElementById('destinations-count');
    if (!container) return;

    const filtered = this.getFilteredDestinations();

    if (countBadge) {
      countBadge.textContent = `${filtered.length} Cities Found`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div class="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-3">
            <i data-lucide="compass" class="w-8 h-8"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-800 mb-1">No destinations match your search</h3>
          <p class="text-slate-500 text-sm mb-4">Try clearing your filters or searching for another city, spot, or state in India.</p>
          <button onclick="window.breezeApp.resetFilters()" class="px-5 py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition">
            Reset All Filters
          </button>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    container.innerHTML = filtered.map(dest => {
      const mustGoSpots = dest.spots.filter(s => s.isMustVisit);
      const totalSpots = dest.spots.length;

      return `
        <div class="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
          <!-- Thumbnail & Badges -->
          <div class="relative h-52 overflow-hidden bg-slate-100">
            <img 
              src="${dest.image}" 
              alt="${dest.name}" 
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
            
            <!-- Region Badge -->
            <div class="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-slate-800 shadow">
              <i data-lucide="map-pin" class="w-3 h-3 text-emerald-600"></i>
              <span>${dest.region} India</span>
            </div>

            <!-- Best Season Badge -->
            <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-600/90 text-white backdrop-blur-md shadow">
              ${dest.bestTimeToVisit.split('(')[0]}
            </div>

            <!-- City Title & State on Image -->
            <div class="absolute bottom-3 left-3 right-3 text-white">
              <h3 class="text-2xl font-bold tracking-tight text-white leading-tight drop-shadow-sm">${dest.name}</h3>
              <p class="text-xs text-slate-200 font-medium">${dest.state}</p>
            </div>
          </div>

          <!-- Body Info -->
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <p class="text-xs text-emerald-700 font-semibold mb-2 line-clamp-1 italic">
                "${dest.tagline}"
              </p>
              <p class="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                ${dest.description}
              </p>

              <!-- Must Visit Highlights Chips -->
              <div class="mb-4">
                <div class="flex items-center justify-between text-[11px] font-bold text-slate-700 mb-2">
                  <span class="flex items-center gap-1 text-amber-600">
                    <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-500"></i>
                    Must-Go Places (${mustGoSpots.length}):
                  </span>
                  <span class="text-slate-400 font-normal">${totalSpots} total spots</span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  ${mustGoSpots.slice(0, 3).map(s => `
                    <span class="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-medium truncate max-w-[150px]">
                      ⭐ ${s.name}
                    </span>
                  `).join('')}
                  ${mustGoSpots.length > 3 ? `<span class="text-[10px] text-slate-500 self-center">+${mustGoSpots.length - 3} more</span>` : ''}
                </div>
              </div>
            </div>

            <!-- Card Footer -->
            <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <div class="flex items-center gap-1 text-slate-500">
                <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-400"></i>
                <span>${dest.idealDuration}</span>
              </div>
              <button 
                onclick="window.breezeApp.openCityModal('${dest.id}')"
                class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition shadow-sm hover:shadow">
                <span>Explore Spots</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  resetFilters() {
    this.searchQuery = '';
    this.selectedRegion = 'all';
    this.selectedCategory = 'all';
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    this.renderRegionFilters();
    this.renderCategoryFilters();
    this.renderDestinations();
  }

  // =========================================================================
  // CITY MODAL & FAMOUS SPOTS VIEWER
  // =========================================================================
  openCityModal(cityId) {
    const dest = this.destinations.find(d => d.id === cityId);
    if (!dest) return;

    this.selectedCityModalId = cityId;
    const modal = document.getElementById('city-detail-modal');
    if (!modal) return;

    // Populate City Modal Header
    document.getElementById('modal-city-banner').src = dest.banner || dest.image;
    document.getElementById('modal-city-name').textContent = dest.name;
    document.getElementById('modal-city-state').textContent = `${dest.state} • ${dest.region} India`;
    document.getElementById('modal-city-tagline').textContent = `"${dest.tagline}"`;
    document.getElementById('modal-city-desc').textContent = dest.description;

    // Stat Badges
    document.getElementById('modal-stat-best-time').textContent = dest.bestTimeToVisit;
    document.getElementById('modal-stat-duration').textContent = dest.idealDuration;
    document.getElementById('modal-stat-budget').textContent = dest.avgBudgetPerDay;
    document.getElementById('modal-stat-hub').textContent = dest.nearestHub;

    // Famous Foods
    const foodsContainer = document.getElementById('modal-city-foods');
    if (foodsContainer) {
      foodsContainer.innerHTML = dest.famousFoods.map(food => `
        <span class="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium flex items-center gap-1">
          🍲 ${food}
        </span>
      `).join('');
    }

    // Travel Tips
    const tipsContainer = document.getElementById('modal-city-tips');
    if (tipsContainer) {
      tipsContainer.innerHTML = dest.travelTips.map(tip => `
        <li class="flex items-start gap-2 text-xs text-slate-600">
          <span class="text-emerald-500 font-bold">•</span>
          <span>${tip}</span>
        </li>
      `).join('');
    }

    // Render Spots inside modal
    this.renderCityModalSpots(dest);

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Initialize City Leaflet Map
    setTimeout(() => {
      window.breezeMap.initCityMap('city-modal-map', dest);
    }, 200);

    if (window.lucide) window.lucide.createIcons();
  }

  closeCityModal() {
    const modal = document.getElementById('city-detail-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
      this.selectedCityModalId = null;
    }
  }

  renderCityModalSpots(dest, spotFilterCategory = 'all') {
    const container = document.getElementById('modal-spots-container');
    if (!container) return;

    const spots = dest.spots.filter(s => {
      return spotFilterCategory === 'all' || s.category.toLowerCase() === spotFilterCategory.toLowerCase();
    });

    container.innerHTML = spots.map(spot => {
      const isMust = spot.isMustVisit;
      return `
        <div class="bg-white rounded-xl border ${isMust ? 'border-amber-300 ring-1 ring-amber-200 shadow-sm' : 'border-slate-200'} overflow-hidden hover:shadow-md transition flex flex-col md:flex-row">
          <!-- Image -->
          <div class="relative w-full md:w-56 h-44 shrink-0 bg-slate-100 overflow-hidden">
            <img src="${spot.image}" alt="${spot.name}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            ${isMust ? `
              <div class="absolute top-2 left-2 px-2 py-0.5 rounded bg-amber-400 text-slate-900 text-[10px] font-black tracking-wide shadow flex items-center gap-1">
                ⭐ MUST VISIT SPOT
              </div>
            ` : ''}
            <div class="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-900/80 text-white text-[10px] font-semibold backdrop-blur-sm">
              ${spot.category}
            </div>
          </div>

          <!-- Content Details -->
          <div class="p-4 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between gap-2 mb-1">
                <h4 class="font-bold text-slate-900 text-base leading-tight">${spot.name}</h4>
                <span class="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0">
                  ★ ${spot.rating}
                </span>
              </div>
              <p class="text-xs text-slate-600 mb-3 leading-relaxed">${spot.description}</p>
              
              <!-- Quick Info Row -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg mb-3">
                <div><strong class="text-slate-700">🎟️ Entry Fee:</strong> ${spot.entryFee}</div>
                <div><strong class="text-slate-700">⏱️ Ideal Stay:</strong> ${spot.idealTimeHours} Hours</div>
                <div class="col-span-1 sm:col-span-2"><strong class="text-slate-700">🕒 Timings:</strong> ${spot.timings}</div>
              </div>

              <!-- Insider Tip -->
              ${spot.mustKnowTip ? `
                <div class="flex items-start gap-1.5 text-[11px] text-amber-800 bg-amber-50/70 border-l-2 border-amber-400 px-2.5 py-1.5 rounded-r mb-3">
                  <i data-lucide="lightbulb" class="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5"></i>
                  <span><strong>Insider Tip:</strong> ${spot.mustKnowTip}</span>
                </div>
              ` : ''}
            </div>

            <!-- Action Button -->
            <div class="flex items-center justify-end pt-2 border-t border-slate-100">
              <button 
                onclick="window.breezeApp.promptAddSpotToTrip('${dest.id}', '${spot.id}')"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition shadow-sm">
                <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                <span>Add to My Trip Plan</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // =========================================================================
  // TRIP PLANNER & ITINERARY BUILDER
  // =========================================================================
  renderPlanner() {
    const planner = window.breezePlanner;
    const activeTrip = planner.activeTrip;

    // Render Trip Selector Dropdown
    const selectorContainer = document.getElementById('trip-selector-dropdown');
    if (selectorContainer) {
      selectorContainer.innerHTML = planner.trips.map(trip => `
        <option value="${trip.id}" ${activeTrip && activeTrip.id === trip.id ? 'selected' : ''}>
          ${trip.title} (${trip.duration})
        </option>
      `).join('');
    }

    const detailsContainer = document.getElementById('active-trip-content');
    if (!detailsContainer) return;

    if (!activeTrip) {
      detailsContainer.innerHTML = `
        <div class="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div class="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-3">
            <i data-lucide="calendar" class="w-8 h-8"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-800 mb-2">No Active Trip Selected</h3>
          <p class="text-slate-500 text-sm mb-4">Create a custom trip or choose one of our hand-crafted starter itineraries.</p>
          <button onclick="window.breezeApp.openNewTripModal()" class="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition">
            + Create New Trip
          </button>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    // Trip Budget Calculations
    const budget = planner.calculateTripBudget(activeTrip);

    detailsContainer.innerHTML = `
      <!-- Trip Header Banner -->
      <div class="relative rounded-2xl overflow-hidden mb-6 border border-slate-200 shadow-sm">
        <div class="h-44 md:h-52 w-full bg-slate-900 relative">
          <img src="${activeTrip.image || 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80'}" alt="${activeTrip.title}" class="w-full h-full object-cover opacity-50" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          <div class="absolute bottom-4 left-4 right-4 text-white flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-600 text-white">
                  ${activeTrip.duration}
                </span>
                <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white">
                  ${activeTrip.tripStyle} • ${activeTrip.travelerCount || 1} Travelers
                </span>
                <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500 text-slate-950">
                  ${activeTrip.budgetTier} Tier
                </span>
              </div>
              <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight">${activeTrip.title}</h2>
              <p class="text-xs md:text-sm text-slate-300">${activeTrip.tagline || activeTrip.destination}</p>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="window.breezeApp.copyItineraryText()" class="px-3.5 py-1.5 rounded-lg bg-white/90 hover:bg-white text-slate-800 text-xs font-bold shadow transition flex items-center gap-1.5" title="Copy to clipboard for WhatsApp or sharing">
                <i data-lucide="share-2" class="w-3.5 h-3.5 text-emerald-600"></i>
                <span class="hidden sm:inline">Share / Copy</span>
              </button>
              <button onclick="window.breezeApp.printItinerary()" class="px-3.5 py-1.5 rounded-lg bg-white/90 hover:bg-white text-slate-800 text-xs font-bold shadow transition flex items-center gap-1.5">
                <i data-lucide="printer" class="w-3.5 h-3.5 text-emerald-600"></i>
                <span>Print / PDF</span>
              </button>
              <button onclick="window.breezeApp.deleteActiveTrip()" class="px-3 py-1.5 rounded-lg bg-red-500/80 hover:bg-red-600 text-white text-xs font-semibold transition">
                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Layout: Days Timeline + Budget Summary Sidebar -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Days Timeline (2 Cols) -->
        <div class="lg:col-span-2 space-y-5">
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-slate-800 text-lg flex items-center gap-2">
              <i data-lucide="calendar" class="w-5 h-5 text-emerald-600"></i>
              <span>Day-by-Day Itinerary</span>
            </h3>
            <button onclick="window.breezeApp.addDayToTrip()" class="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-200 transition flex items-center gap-1">
              <i data-lucide="plus" class="w-3.5 h-3.5"></i>
              <span>Add Day</span>
            </button>
          </div>

          <!-- Day Cards -->
          <div class="space-y-4">
            ${activeTrip.days.map(day => `
              <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-4 md:p-5 transition hover:border-slate-300">
                <!-- Day Card Header -->
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <div class="flex items-center gap-2.5">
                    <span class="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                      D${day.dayNumber}
                    </span>
                    <div>
                      <h4 class="font-bold text-slate-800 text-sm leading-tight">${day.title}</h4>
                      <p class="text-[11px] text-slate-400">${day.spots.length} Attractions planned</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <button onclick="window.breezeApp.promptAddCustomSpot(${day.dayNumber})" class="text-xs text-emerald-700 hover:text-emerald-800 font-semibold px-2.5 py-1 rounded bg-emerald-50 transition">
                      + Add Activity
                    </button>
                    ${activeTrip.days.length > 1 ? `
                      <button onclick="window.breezeApp.removeDayFromTrip(${day.dayNumber})" class="text-slate-400 hover:text-red-500 p-1 rounded transition" title="Delete Day">
                        <i data-lucide="x" class="w-4 h-4"></i>
                      </button>
                    ` : ''}
                  </div>
                </div>

                <!-- Day Hotel & Notes input -->
                <div class="mb-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <input 
                    type="text" 
                    placeholder="🏨 Hotel / Stay name..." 
                    value="${day.hotel || ''}" 
                    onchange="window.breezePlanner.updateDayHotel(${day.dayNumber}, this.value); window.breezeApp.showToast('Hotel updated');"
                    class="px-2.5 py-1.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-700 bg-slate-50/50"
                  />
                  <input 
                    type="text" 
                    placeholder="📝 Day note (e.g. Early wake up, take metro)..." 
                    value="${day.notes || ''}" 
                    onchange="window.breezePlanner.updateDayNotes(${day.dayNumber}, this.value); window.breezeApp.showToast('Note saved');"
                    class="px-2.5 py-1.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-700 bg-slate-50/50"
                  />
                </div>

                <!-- Day Spots Timeline -->
                ${day.spots.length === 0 ? `
                  <div class="text-center py-6 border-2 border-dashed border-slate-100 rounded-lg text-slate-400 text-xs">
                    <p class="mb-1">No spots added yet for Day ${day.dayNumber}.</p>
                    <p class="text-[11px] text-emerald-600 font-semibold cursor-pointer" onclick="window.breezeApp.switchTab('explore')">
                      Browse cities and click "+ Add to My Trip Plan" &rarr;
                    </p>
                  </div>
                ` : `
                  <div class="space-y-2">
                    ${day.spots.map(spot => `
                      <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:bg-slate-100/70 transition text-xs">
                        <div class="flex items-center gap-2.5 min-w-0">
                          <!-- Time Slot Tag -->
                          <select 
                            onchange="window.breezePlanner.updateSpotTimeSlot(${day.dayNumber}, '${spot.id}', this.value); window.breezeApp.renderPlanner();"
                            class="text-[10px] font-bold uppercase rounded px-1.5 py-0.5 border ${
                              spot.timeSlot === 'Morning' ? 'bg-amber-100 text-amber-800 border-amber-200' :
                              spot.timeSlot === 'Afternoon' ? 'bg-sky-100 text-sky-800 border-sky-200' :
                              'bg-indigo-100 text-indigo-800 border-indigo-200'
                            }">
                            <option value="Morning" ${spot.timeSlot === 'Morning' ? 'selected' : ''}>🌅 Morning</option>
                            <option value="Afternoon" ${spot.timeSlot === 'Afternoon' ? 'selected' : ''}>☀️ Afternoon</option>
                            <option value="Evening" ${spot.timeSlot === 'Evening' ? 'selected' : ''}>🌙 Evening</option>
                          </select>
                          <div class="min-w-0">
                            <span class="font-bold text-slate-800 truncate block">${spot.name}</span>
                            ${spot.notes ? `<span class="text-[11px] text-slate-500 line-clamp-1">${spot.notes}</span>` : ''}
                          </div>
                        </div>
                        <div class="flex items-center gap-2 shrink-0 ml-2">
                          <span class="text-[11px] font-semibold text-slate-600 hidden sm:inline">${spot.entryFee || '₹' + spot.entryFeeNumber}</span>
                          <button onclick="window.breezePlanner.removeSpotFromDay(${day.dayNumber}, '${spot.id}'); window.breezeApp.renderPlanner();" class="text-slate-400 hover:text-red-500 p-1">
                            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                          </button>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                `}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Budget & Trip Summary Sidebar (1 Col) -->
        <div class="space-y-4">
          <!-- Budget Breakdown Card -->
          <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <h4 class="font-bold text-slate-800 text-base mb-1 flex items-center gap-2">
              <i data-lucide="calculator" class="w-4 h-4 text-emerald-600"></i>
              <span>Estimated Budget</span>
            </h4>
            <p class="text-xs text-slate-400 mb-4">Calculated for ${budget.travelers} traveler(s) • ${budget.tier} style</p>

            <div class="space-y-2.5 text-xs text-slate-600 mb-4 pb-4 border-b border-slate-100">
              <div class="flex justify-between">
                <span>🏨 Hotel / Accommodation:</span>
                <span class="font-semibold text-slate-800">₹${budget.stay.toLocaleString('en-IN')}</span>
              </div>
              <div class="flex justify-between">
                <span>🍲 Food & Dining:</span>
                <span class="font-semibold text-slate-800">₹${budget.food.toLocaleString('en-IN')}</span>
              </div>
              <div class="flex justify-between">
                <span>🚕 Local Cab / Transit:</span>
                <span class="font-semibold text-slate-800">₹${budget.transit.toLocaleString('en-IN')}</span>
              </div>
              <div class="flex justify-between">
                <span>🎟️ Sightseeing & Monument Tickets:</span>
                <span class="font-semibold text-slate-800">₹${budget.tickets.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <!-- Grand Total -->
            <div class="bg-emerald-50 rounded-xl p-3 border border-emerald-200 mb-4">
              <div class="flex justify-between items-baseline mb-1">
                <span class="text-xs font-bold text-emerald-900">Total Estimated Trip Cost:</span>
                <span class="text-lg font-black text-emerald-700">₹${budget.grandTotal.toLocaleString('en-IN')}</span>
              </div>
              <div class="flex justify-between text-[11px] text-emerald-700">
                <span>Per person:</span>
                <span class="font-bold">₹${budget.perPerson.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <p class="text-[10px] text-slate-400 italic">
              *Estimates are calculated using prevailing Indian average tariffs and can vary depending on seasonality and flight/train choices.
            </p>
          </div>

          <!-- Quick Action Card -->
          <div class="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-xl p-5 shadow-sm">
            <h4 class="font-bold text-base mb-1">Ready for the adventure?</h4>
            <p class="text-xs text-emerald-100 mb-4 leading-relaxed">
              Export your finalized itinerary to PDF or print it out with daily schedules, entry ticket checkpoints, and emergency notes.
            </p>
            <button onclick="window.breezeApp.printItinerary()" class="w-full py-2.5 rounded-lg bg-white text-emerald-800 font-bold text-xs hover:bg-emerald-50 transition shadow">
              Export / Print Itinerary PDF
            </button>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  handleTripSelection(tripId) {
    window.breezePlanner.setActiveTrip(tripId);
    this.renderPlanner();
  }

  openNewTripModal() {
    const modal = document.getElementById('new-trip-modal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  closeNewTripModal() {
    const modal = document.getElementById('new-trip-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  handleCreateTripSubmit(form) {
    const formData = new FormData(form);
    const destination = formData.get('destination') || 'India';
    const title = formData.get('title') || `${destination} Vacation`;
    const durationDays = parseInt(formData.get('durationDays')) || 3;
    const tripStyle = formData.get('tripStyle') || 'Solo';
    const budgetTier = formData.get('budgetTier') || 'Mid-Range';
    const travelerCount = parseInt(formData.get('travelerCount')) || 1;
    const startDate = formData.get('startDate');

    // Find destination image if available
    const matchedDest = this.destinations.find(d => d.name.toLowerCase() === destination.toLowerCase());
    const image = matchedDest ? matchedDest.image : '';

    const newTrip = window.breezePlanner.createTrip({
      title,
      destination,
      durationDays,
      tripStyle,
      budgetTier,
      travelerCount,
      startDate,
      image
    });

    this.closeNewTripModal();
    this.renderPlanner();
    this.showToast(`Trip "${newTrip.title}" created successfully!`);
    form.reset();
  }

  addDayToTrip() {
    window.breezePlanner.addDayToActiveTrip();
    this.renderPlanner();
    this.showToast('Added a new day to your itinerary');
  }

  removeDayFromTrip(dayNumber) {
    if (confirm(`Remove Day ${dayNumber} and its planned spots?`)) {
      window.breezePlanner.removeDayFromActiveTrip(dayNumber);
      this.renderPlanner();
      this.showToast(`Day ${dayNumber} removed`);
    }
  }

  deleteActiveTrip() {
    const planner = window.breezePlanner;
    if (!planner.activeTrip) return;
    if (confirm(`Are you sure you want to delete "${planner.activeTrip.title}"?`)) {
      planner.deleteTrip(planner.activeTrip.id);
      this.renderPlanner();
      this.showToast('Trip deleted');
    }
  }

  promptAddCustomSpot(dayNumber) {
    const spotName = prompt(`Enter attraction or activity name for Day ${dayNumber}:`);
    if (!spotName || !spotName.trim()) return;

    const notes = prompt('Enter timing or brief note (optional):') || '';

    window.breezePlanner.addSpotToDay(dayNumber, {
      name: spotName.trim(),
      notes: notes.trim(),
      category: 'Custom',
      entryFee: '₹0',
      idealTimeHours: 2,
      timeSlot: 'Morning'
    });

    this.renderPlanner();
    this.showToast(`Added ${spotName} to Day ${dayNumber}`);
  }

  promptAddSpotToTrip(cityId, spotId) {
    const planner = window.breezePlanner;
    if (!planner.activeTrip) {
      alert('Please create or select an active trip in the Trip Planner first!');
      this.switchTab('planner');
      return;
    }

    const dest = this.destinations.find(d => d.id === cityId);
    if (!dest) return;
    const spot = dest.spots.find(s => s.id === spotId);
    if (!spot) return;

    // Show day selection dialog
    const days = planner.activeTrip.days;
    let dayOptionsText = days.map(d => `${d.dayNumber}: ${d.title}`).join('\n');
    let chosenDay = prompt(
      `Add "${spot.name}" to which day of "${planner.activeTrip.title}"?\n\nEnter day number (1 - ${days.length}):\n${dayOptionsText}`,
      '1'
    );

    if (!chosenDay) return;
    chosenDay = parseInt(chosenDay);

    if (isNaN(chosenDay) || chosenDay < 1 || chosenDay > days.length) {
      alert(`Invalid day number. Please enter between 1 and ${days.length}.`);
      return;
    }

    const res = planner.addSpotToDay(chosenDay, spot);
    if (res.success) {
      this.showToast(`Added "${spot.name}" to Day ${chosenDay}!`);
    } else {
      alert(res.message);
    }
  }

  // =========================================================================
  // PRINTABLE ITINERARY PDF EXPORT
  // =========================================================================
  printItinerary() {
    const trip = window.breezePlanner.activeTrip;
    if (!trip) {
      alert('No active trip to print!');
      return;
    }

    const budget = window.breezePlanner.calculateTripBudget(trip);

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Breeze Trip - ${trip.title}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 30px; color: #1e293b; max-width: 800px; margin: auto; }
          .header { border-bottom: 3px solid #059669; padding-bottom: 15px; margin-bottom: 25px; display: flex; justify-content: space-between; align-items: flex-end; }
          .logo { font-size: 24px; font-weight: 900; color: #059669; }
          .tagline { font-size: 12px; color: #64748b; }
          .trip-title { font-size: 26px; font-weight: bold; margin: 10px 0 5px 0; }
          .badge { display: inline-block; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: bold; background: #e0f2fe; color: #0369a1; margin-right: 5px; }
          .day-card { border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 18px; page-break-inside: avoid; }
          .day-title { font-size: 16px; font-weight: bold; color: #0f172a; margin-bottom: 10px; border-bottom: 1px dashed #cbd5e1; padding-bottom: 6px; }
          .spot-item { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; }
          .slot { font-weight: bold; color: #059669; margin-right: 8px; }
          .budget-box { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 15px; margin-top: 25px; }
          .emergency { background: #fff1f2; border: 1px solid #fecdd3; border-radius: 8px; padding: 12px; font-size: 12px; margin-top: 20px; }
          @media print {
            body { padding: 0; }
            button { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="logo">✈️ Breeze Trip India</div>
            <div class="tagline">Your Official Travel Itinerary</div>
            <div class="trip-title">${trip.title}</div>
            <div>
              <span class="badge">${trip.duration}</span>
              <span class="badge">${trip.tripStyle}</span>
              <span class="badge">${trip.budgetTier} Tier</span>
              <span class="badge">${trip.travelerCount} Travelers</span>
            </div>
          </div>
          <button onclick="window.print()" style="padding: 8px 16px; background: #059669; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
            Print / Save as PDF
          </button>
        </div>

        <div>
          ${trip.days.map(d => `
            <div class="day-card">
              <div class="day-title">Day ${d.dayNumber}: ${d.title}</div>
              ${d.hotel ? `<div style="font-size: 12px; color: #475569; margin-bottom: 8px;">🏨 <strong>Hotel:</strong> ${d.hotel}</div>` : ''}
              ${d.notes ? `<div style="font-size: 12px; color: #475569; margin-bottom: 8px;">📝 <strong>Notes:</strong> ${d.notes}</div>` : ''}
              
              <div style="margin-top: 10px;">
                ${d.spots.length === 0 ? '<div style="font-size: 12px; color: #94a3b8;">Free day / leisure exploration</div>' : 
                  d.spots.map(s => `
                    <div class="spot-item">
                      <div>
                        <span class="slot">[${s.timeSlot}]</span>
                        <strong>${s.name}</strong>
                        ${s.notes ? `<div style="font-size: 11px; color: #64748b; margin-left: 20px;">${s.notes}</div>` : ''}
                      </div>
                      <div style="color: #64748b; font-size: 12px;">${s.entryFee || ''}</div>
                    </div>
                  `).join('')
                }
              </div>
            </div>
          `).join('')}
        </div>

        <div class="budget-box">
          <div style="font-weight: bold; margin-bottom: 8px;">Estimated Budget Summary:</div>
          <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 4px;">
            <span>Accommodation: ₹${budget.stay.toLocaleString('en-IN')}</span>
            <span>Food & Dining: ₹${budget.food.toLocaleString('en-IN')}</span>
            <span>Local Transit: ₹${budget.transit.toLocaleString('en-IN')}</span>
            <span>Sightseeing Tickets: ₹${budget.tickets.toLocaleString('en-IN')}</span>
          </div>
          <div style="font-size: 15px; font-weight: bold; color: #059669; margin-top: 8px; border-top: 1px solid #cbd5e1; padding-top: 6px; display: flex; justify-content: space-between;">
            <span>Grand Total:</span>
            <span>₹${budget.grandTotal.toLocaleString('en-IN')} (₹${budget.perPerson.toLocaleString('en-IN')} / person)</span>
          </div>
        </div>

        <div class="emergency">
          <strong>🚨 Tourist Helplines in India:</strong> All-India Emergency: 112 • Ministry of Tourism 24/7 Helpline: 1363 • Railway Helpline: 139
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
  }

  copyItineraryText() {
    const trip = window.breezePlanner.activeTrip;
    if (!trip) {
      alert('No active trip to copy!');
      return;
    }

    const budget = window.breezePlanner.calculateTripBudget(trip);
    let text = `✈️ BREEZE TRIP - ${trip.title.toUpperCase()}\n`;
    text += `📍 Destination: ${trip.destination} | Duration: ${trip.duration}\n`;
    text += `👥 Travelers: ${trip.travelerCount} (${trip.tripStyle}) | Budget Tier: ${trip.budgetTier}\n`;
    text += `💰 Estimated Cost: ₹${budget.grandTotal.toLocaleString('en-IN')} (₹${budget.perPerson.toLocaleString('en-IN')} / person)\n`;
    text += `--------------------------------------------------\n\n`;

    trip.days.forEach(d => {
      text += `📅 Day ${d.dayNumber}: ${d.title}\n`;
      if (d.hotel) text += `🏨 Hotel: ${d.hotel}\n`;
      if (d.notes) text += `📝 Notes: ${d.notes}\n`;
      if (d.spots.length === 0) {
        text += `   (Leisure / Free exploration)\n`;
      } else {
        d.spots.forEach(s => {
          text += `   • [${s.timeSlot}] ${s.name} ${s.entryFee ? '(' + s.entryFee + ')' : ''}\n`;
          if (s.notes) text += `     Tip: ${s.notes}\n`;
        });
      }
      text += `\n`;
    });

    text += `--------------------------------------------------\n`;
    text += `🚨 India Tourist Helplines: Emergency: 112 | Tourist: 1363 | Railways: 139\n`;
    text += `Created with Breeze Trip India (http://localhost:8000)`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        this.showToast('📋 Itinerary copied to clipboard! Ready to share on WhatsApp or Email.');
      }).catch(() => {
        prompt('Copy your itinerary text:', text);
      });
    } else {
      prompt('Copy your itinerary text:', text);
    }
  }

  loadDemoMvpTrip() {
    const trip = window.breezePlanner.trips[0];
    if (trip) {
      window.breezePlanner.setActiveTrip(trip.id);
      this.switchTab('planner');
      this.showToast(`Loaded "${trip.title}" MVP Demo!`);
    }
  }

  // =========================================================================
  // CURATED ITINERARIES
  // =========================================================================
  renderCuratedTrips() {
    const container = document.getElementById('curated-itineraries-grid');
    if (!container || typeof CURATED_ITINERARIES === 'undefined') return;

    container.innerHTML = CURATED_ITINERARIES.map(ci => `
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="relative h-48 bg-slate-100 overflow-hidden">
            <img src="${ci.image}" alt="${ci.title}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold bg-white text-slate-800 shadow">
              ${ci.duration}
            </span>
            <div class="absolute bottom-3 left-3 text-white">
              <h3 class="text-xl font-bold">${ci.title}</h3>
              <p class="text-xs text-slate-200">${ci.tagline}</p>
            </div>
          </div>
          <div class="p-5">
            <p class="text-xs text-slate-600 mb-4 leading-relaxed">${ci.description}</p>
            <div class="space-y-2 border-t border-slate-100 pt-3">
              ${ci.days.map(d => `
                <div class="flex items-start gap-2 text-xs text-slate-700">
                  <span class="font-bold text-emerald-600 shrink-0">Day ${d.dayNumber}:</span>
                  <span class="truncate">${d.title}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        <div class="p-5 pt-0">
          <button 
            onclick="window.breezeApp.cloneCuratedTrip('${ci.id}')"
            class="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow flex items-center justify-center gap-1.5">
            <i data-lucide="copy" class="w-3.5 h-3.5"></i>
            <span>Use this Itinerary</span>
          </button>
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  cloneCuratedTrip(curatedId) {
    const trip = window.breezePlanner.trips.find(t => t.id === 'trip_' + curatedId);
    if (trip) {
      window.breezePlanner.setActiveTrip(trip.id);
      this.switchTab('planner');
      this.showToast(`Loaded "${trip.title}" into Planner!`);
    }
  }

  // =========================================================================
  // SMART TOOLS: RECOMMENDER & PACKING LIST
  // =========================================================================
  generateRecommendations() {
    const month = document.getElementById('rec-month')?.value || 'any';
    const vibe = document.getElementById('rec-vibe')?.value || 'all';
    const resultsContainer = document.getElementById('recommender-results');
    if (!resultsContainer) return;

    let matches = this.destinations.filter(d => {
      let matchesVibe = true;
      if (vibe === 'beach') matchesVibe = d.tags.includes('Beach');
      else if (vibe === 'hills') matchesVibe = d.tags.includes('Nature') && (d.region === 'North' || d.region === 'Northeast');
      else if (vibe === 'heritage') matchesVibe = d.tags.includes('Heritage');
      else if (vibe === 'spiritual') matchesVibe = d.tags.includes('Spiritual');
      else if (vibe === 'food') matchesVibe = d.tags.includes('Food');
      return matchesVibe;
    });

    if (matches.length === 0) matches = this.destinations.slice(0, 3);

    // Pick top 3
    const topPicks = matches.slice(0, 3);

    resultsContainer.innerHTML = `
      <div class="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
        <h4 class="font-bold text-emerald-900 text-sm mb-3 flex items-center gap-1.5">
          <i data-lucide="sparkles" class="w-4 h-4 text-emerald-600"></i>
          <span>Recommended for you based on your preferences:</span>
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          ${topPicks.map(dest => `
            <div class="bg-white p-3 rounded-lg border border-emerald-200 shadow-sm cursor-pointer hover:border-emerald-500 transition" onclick="window.breezeApp.openCityModal('${dest.id}')">
              <img src="${dest.image}" class="w-full h-24 object-cover rounded mb-2" />
              <h5 class="font-bold text-slate-900 text-sm">${dest.name}</h5>
              <p class="text-[11px] text-slate-500 mb-1">${dest.state}</p>
              <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                ${dest.bestTimeToVisit.split('(')[0]}
              </span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  generatePackingList() {
    const type = document.getElementById('pack-type')?.value || 'general';
    const container = document.getElementById('packing-results');
    if (!container) return;

    const baseItems = [
      "Government Photo ID / Aadhaar / Passport & copies",
      "Cash (essential for smaller street vendors & rural entry gates)",
      "Power bank (10,000+ mAh) & universal charging cables",
      "Prescription medicines, motion-sickness & digestive tablets",
      "Reusable insulated water bottle",
      "Hand sanitizer & wet wipes"
    ];

    let specialized = [];
    if (type === 'hills') {
      specialized = [
        "Thermal inners & fleece jacket",
        "Windcheater / waterproof heavy jacket",
        "Woolen beanie / cap & gloves",
        "Woolen socks & comfortable hiking shoes",
        "Moisturizer & lip balm (high cold protection)",
        "Thermos flask for hot water"
      ];
    } else if (type === 'beach') {
      specialized = [
        "Quick-dry swimsuits & breathable cotton shirts",
        "Sunscreen (SPF 50+ broad spectrum)",
        "Polarized UV sunglasses & straw hat",
        "Beach slippers & water shoes",
        "Waterproof phone pouch",
        "Aloe vera gel for sunburn relief"
      ];
    } else if (type === 'spiritual') {
      specialized = [
        "Modest traditional clothing covering shoulders and knees",
        "Slip-on shoes / sandals (easy to take off outside temples)",
        "Cotton headscarf / dupatta / rumal for gurudwaras & temples",
        "Light cotton shawl for air-conditioned train / early dawn aartis",
        "Small coin purse for prasad & donation offerings"
      ];
    }

    const allItems = [...baseItems, ...specialized];

    container.innerHTML = `
      <div class="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
        <h4 class="font-bold text-slate-800 text-sm mb-3">Customized Packing Checklist:</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
          ${allItems.map((item, idx) => `
            <label class="flex items-center gap-2 p-2 rounded bg-white border border-slate-200 cursor-pointer hover:bg-slate-50">
              <input type="checkbox" class="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500" />
              <span>${item}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderHelplines() {
    const container = document.getElementById('helplines-container');
    if (!container || typeof TOURIST_HELPLINES === 'undefined') return;

    container.innerHTML = TOURIST_HELPLINES.map(h => `
      <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start justify-between gap-3">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <h5 class="font-bold text-slate-900 text-sm">${h.service}</h5>
            <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">${h.badge}</span>
          </div>
          <p class="text-xs text-slate-500">${h.description}</p>
        </div>
        <a href="tel:${h.number.split('/')[0].trim()}" class="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-mono font-bold text-xs hover:bg-emerald-700 transition shrink-0">
          📞 ${h.number}
        </a>
      </div>
    `).join('');
  }

  showToast(message) {
    const toast = document.getElementById('breeze-toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
      toast.classList.remove('opacity-100', 'translate-y-0');
    }, 3200);
  }
}

// Global App Instance
window.breezeApp = new BreezeApp();
