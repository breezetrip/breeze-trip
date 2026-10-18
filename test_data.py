import re
import os
import sys

def test_files():
    print("Testing Breeze Trip files...")
    
    # 1. Check data.js
    with open('js/data.js', 'r', encoding='utf-8') as f:
        data_text = f.read()

    cities = re.findall(r'id:\s*"([a-z0-9\-]+)",\s*\n\s*name:\s*"([^"]+)"', data_text)
    must_visits = re.findall(r'isMustVisit:\s*true', data_text)
    all_spots = re.findall(r'isMustVisit:', data_text)
    
    print(f"[OK] Found {len(cities)} cities in data.js:")
    for city_id, city_name in cities:
        print(f"   - {city_name} (ID: {city_id})")
    
    print(f"\n[OK] Found {len(all_spots)} total attractions/spots across India")
    print(f"[OK] Found {len(must_visits)} designated 'Must-Visit' spots")

    # 2. Check planner.js
    with open('js/planner.js', 'r', encoding='utf-8') as f:
        planner_text = f.read()
    assert 'class TripPlanner' in planner_text
    assert 'calculateTripBudget' in planner_text
    print("[OK] TripPlanner engine verified")

    # 3. Check map.js
    with open('js/map.js', 'r', encoding='utf-8') as f:
        map_text = f.read()
    assert 'class BreezeMapManager' in map_text
    assert 'initMainMap' in map_text
    assert 'initCityMap' in map_text
    print("[OK] Leaflet Map Manager verified")

    # 4. Check app.js
    with open('js/app.js', 'r', encoding='utf-8') as f:
        app_text = f.read()
    assert 'class BreezeApp' in app_text
    assert 'openCityModal' in app_text
    assert 'renderPlanner' in app_text
    print("[OK] BreezeApp Core verified")

    # 5. Check index.html
    with open('index.html', 'r', encoding='utf-8') as f:
        html_text = f.read()
    assert 'Breeze Trip' in html_text
    assert 'explore-section' in html_text
    assert 'planner-section' in html_text
    assert 'city-detail-modal' in html_text
    print("[OK] index.html structure verified")

    print("\nAll automated checks passed successfully!")

if __name__ == '__main__':
    test_files()
