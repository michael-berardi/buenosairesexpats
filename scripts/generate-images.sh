#!/bin/bash
# Image Generation Script for BuenosAiresExpats.com
# Uses Gemini API to generate realistic country and story images

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
COUNTRIES_DIR="$PROJECT_DIR/public/images/countries"
STORIES_DIR="$PROJECT_DIR/public/images/stories"

# Gemini API Configuration
GEMINI_API_KEY="${GEMINI_API_KEY:-}"
GEMINI_MODEL="gemini-2.0-flash-exp-image-generation"

if [ -z "$GEMINI_API_KEY" ]; then
    echo "Error: GEMINI_API_KEY environment variable not set"
    exit 1
fi

# Function to generate image using Gemini API
generate_image() {
    local prompt="$1"
    local output_file="$2"
    
    echo "Generating: $output_file"
    
    # Create temp files
    local temp_response=$(mktemp)
    local temp_json=$(mktemp)
    
    # Build JSON payload
    cat > "$temp_json" << EOF
{
  "contents": [{
    "parts": [{
      "text": "$prompt"
    }]
  }],
  "generationConfig": {
    "responseModalities": ["Text", "Image"]
  }
}
EOF
    
    # Call Gemini API
    curl -s -X POST "https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}" \
        -H "Content-Type: application/json" \
        -d "@$temp_json" \
        > "$temp_response"
    
    # Check for errors
    if grep -q '"error"' "$temp_response"; then
        echo "Error generating image:"
        cat "$temp_response"
        rm -f "$temp_response" "$temp_json"
        return 1
    fi
    
    # Extract base64 image data
    local base64_data=$(grep -o '"data": "[^"]*"' "$temp_response" | head -1 | sed 's/"data": "//;s/"$//')
    
    if [ -z "$base64_data" ]; then
        echo "Error: No image data in response"
        cat "$temp_response"
        rm -f "$temp_response" "$temp_json"
        return 1
    fi
    
    # Decode and save
    echo "$base64_data" | base64 -d > "$output_file"
    
    # Convert to WebP if possible
    if command -v cwebp &> /dev/null; then
        local webp_file="${output_file%.jpg}.webp"
        cwebp -q 85 "$output_file" -o "$webp_file" 2>/dev/null
        if [ -f "$webp_file" ]; then
            rm "$output_file"
            mv "$webp_file" "$output_file"
        fi
    fi
    
    rm -f "$temp_response" "$temp_json"
    echo "✓ Generated: $output_file"
}

# Country Image Prompts - Professional photography style
declare -A COUNTRY_PROMPTS=(
    ["usa-landmark.jpg"]="Professional travel photography of New York City skyline at golden hour, featuring the Statue of Liberty in the foreground and Manhattan skyscrapers in the background, clear blue sky, photorealistic, high quality, 4K"
    ["canada-landmark.jpg"]="Professional travel photography of Toronto skyline with CN Tower prominently featured, view from the waterfront at sunset, calm waters reflecting the city lights, photorealistic, high quality"
    ["mexico-landmark.jpg"]="Professional travel photography of Mexico City historic center, Zócalo plaza with Metropolitan Cathedral and National Palace, clear day, vibrant colors, photorealistic"
    ["brazil-landmark.jpg"]="Professional travel photography of Rio de Janeiro with Christ the Redeemer statue on Corcovado mountain, Sugarloaf Mountain in background, sunny day, photorealistic, iconic view"
    ["chile-landmark.jpg"]="Professional travel photography of Santiago de Chile skyline with snow-capped Andes mountains in the background, clear day, modern skyscrapers, photorealistic"
    ["uruguay-landmark.jpg"]="Professional travel photography of Montevideo waterfront, Rambla promenade with city skyline, historic Ciudad Vieja district, golden hour lighting, photorealistic"
    ["colombia-landmark.jpg"]="Professional travel photography of Bogotá cityscape with Monserrate mountain in background, historic La Candelaria district in foreground, dramatic mountain setting, photorealistic"
    ["peru-landmark.jpg"]="Professional travel photography of Machu Picchu ancient ruins with Huayna Picchu mountain, morning mist, dramatic Andes mountains, photorealistic, iconic view"
    ["uk-landmark.jpg"]="Professional travel photography of London skyline featuring Big Ben and Houses of Parliament, River Thames in foreground, Westminster Bridge, golden hour, photorealistic"
    ["germany-landmark.jpg"]="Professional travel photography of Berlin skyline with Brandenburg Gate, TV Tower visible in background, blue sky, historical and modern architecture blend, photorealistic"
    ["spain-landmark.jpg"]="Professional travel photography of Barcelona skyline featuring Sagrada Família cathedral, modernist architecture, clear Mediterranean sky, photorealistic"
    ["france-landmark.jpg"]="Professional travel photography of Paris skyline with Eiffel Tower prominently featured, Seine River, classic Haussmann buildings, golden hour lighting, photorealistic"
    ["italy-landmark.jpg"]="Professional travel photography of Rome skyline with Colosseum in foreground, ancient ruins, historic architecture, warm Italian sunlight, photorealistic"
    ["netherlands-landmark.jpg"]="Professional travel photography of Amsterdam canals with traditional narrow houses, bridges, bicycles, reflection in water, golden hour, photorealistic"
    ["switzerland-landmark.jpg"]="Professional travel photography of Swiss Alps with Matterhorn mountain peak, alpine lake reflection, dramatic mountain landscape, photorealistic"
    ["portugal-landmark.jpg"]="Professional travel photography of Lisbon skyline with historic trams, colorful buildings, Tagus River, São Jorge Castle on hilltop, golden hour, photorealistic"
    ["belgium-landmark.jpg"]="Professional travel photography of Brussels Grand Place with ornate guildhalls, flower carpet, historic architecture, blue sky, photorealistic"
    ["ireland-landmark.jpg"]="Professional travel photography of Dublin with Georgian architecture, colorful doors, historic buildings, River Liffey, overcast Irish sky, photorealistic"
    ["australia-landmark.jpg"]="Professional travel photography of Sydney Opera House and Harbour Bridge, Sydney Harbour, clear blue sky, iconic waterfront view, photorealistic"
    ["japan-landmark.jpg"]="Professional travel photography of Tokyo skyline with Mount Fuji in distance, modern skyscrapers mixed with traditional elements, clear day, photorealistic"
    ["new-zealand-landmark.jpg"]="Professional travel photography of Auckland skyline featuring Sky Tower, Waitematā Harbour, volcanic landscape, clear day, photorealistic"
    ["south-korea-landmark.jpg"]="Professional travel photography of Seoul skyline with modern skyscrapers, N Seoul Tower on mountain, Han River, clear evening sky, photorealistic"
)

# Story Image Prompts - Documentary/Photojournalistic style
declare -A STORY_PROMPTS=(
    ["erin-palermo-cafe.jpg"]="Documentary style photograph of a woman working on laptop in trendy Palermo Soho café in Buenos Aires, natural lighting, candid moment, coffee cup on table, plants in background, authentic expat scene"
    ["palermo-soho-street.jpg"]="Documentary photograph of Palermo Soho neighborhood in Buenos Aires, colorful street art, cobblestone streets, trendy shops, trees lining sidewalk, authentic neighborhood scene"
    ["expat-family-bilingual.jpg"]="Warm documentary photograph of a bilingual family scene in Buenos Aires home, parent reading to children, books in Spanish and English, cozy living room, natural lighting"
    ["lisa-startup-buenos-aires.jpg"]="Professional photograph of a confident female entrepreneur in modern coworking space in Buenos Aires, natural lighting, laptop on desk, city view through window, business casual attire"
    ["startup-community-event.jpg"]="Documentary photograph of a startup community networking event in Buenos Aires, diverse group of people conversing, modern venue, name tags, drinks, professional atmosphere"
    ["coworking-space-palermo.jpg"]="Modern coworking space interior in Palermo Buenos Aires, people working at desks, exposed brick, plants, natural light from large windows, contemporary design"
    ["digital-nomad-budget-life.jpg"]="Documentary photograph of minimalist apartment in Palermo Buenos Aires, digital nomad workspace with laptop, simple furnishings, good natural light, authentic budget living"
    ["palermo-apartment-budget.jpg"]="Interior photograph of affordable rental apartment in Palermo Buenos Aires, modest but clean furnishings, window with city view, authentic expat housing"
    ["expat-loneliness.jpg"]="Contemplative photograph of person sitting alone in Buenos Aires café, looking out window, rainy day, moody atmosphere, authentic expat experience"
    ["german-argentine-couple.jpg"]="Warm photograph of intercultural couple in Buenos Aires, casual outdoor setting, genuine smiles, diverse backgrounds, natural lighting, park or café background"
    ["recoleta-neighborhood.jpg"]="Elegant street scene in Recoleta Buenos Aires, French-style architecture, tree-lined avenue, historic buildings, sophisticated atmosphere, sunny day"
    ["podcast-recording.jpg"]="Photograph of home podcast recording setup in Buenos Aires apartment, microphone, laptop, casual but professional, natural lighting, books in background"
    ["british-expat-cricket.jpg"]="Documentary photograph of cricket match at Buenos Aires Cricket Club, players on field, spectators, traditional sport in Argentina setting, sunny day"
    ["london-vs-buenos-aires.jpg"]="Split concept or comparative photograph showing British expat transition, London elements blended with Buenos Aires scenery, symbolic representation"
    ["spanish-academy.jpg"]="Photograph of Spanish language school classroom in Buenos Aires, students engaged in learning, teacher at whiteboard, warm atmosphere, international students"
    ["tango-entrepreneur.jpg"]="Photograph of tango fashion designer in San Telmo Buenos Aires, measuring fabric or sketching designs, creative workspace, tango elements in background"
    ["san-telmo-tango.jpg"]="Evening photograph of tango dancers in San Telmo Buenos Aires, cobblestone streets, outdoor milonga, romantic lighting, authentic tango culture"
    ["bed-breakfast-buenos-aires.jpg"]="Charming interior photograph of boutique bed and breakfast in San Telmo Buenos Aires, cozy bedroom, antique furniture, warm hospitality atmosphere"
    ["buenos-aires-cafe-culture.jpg"]="Documentary photograph of busy Buenos Aires café, waiters serving coffee, customers at tables, classic Argentine café interior, marble tables, wood paneling"
    ["plaza-serrano.jpg"]="Vibrant photograph of Plaza Serrano in Palermo Buenos Aires, weekend market, people browsing stalls, colorful crafts, lively atmosphere, sunny day"
    ["street-vendor-buenos-aires.jpg"]="Documentary photograph of street vendor in Buenos Aires, selling socks or small items, candid moment, urban background, authentic street life"
    ["buenos-aires-subway.jpg"]="Photograph of Buenos Aires subway car interior, diverse passengers, street performer entertaining, authentic daily commute scene, documentary style"
    ["subway-performers.jpg"]="Documentary photograph of musicians performing in Buenos Aires subway, guitar player, passengers watching, candid moment, urban underground setting"
    ["digital-nomad-isolation.jpg"]="Contemplative photograph of solo digital nomad working in apartment in Buenos Aires, evening light, laptop glow, solitary atmosphere, city lights through window"
    ["palermo-soho-coworking.jpg"]="Modern coworking space in Palermo Soho Buenos Aires, digital nomads working, coffee culture, laptops, creative professionals, bright natural light"
    ["expat-loneliness-cafe.jpg"]="Photograph of solo expat at Buenos Aires café, working on laptop, empty chair across, quiet moment, candid documentary style"
    ["danish-student-buenos-aires.jpg"]="Photograph of Scandinavian student at Argentine university campus, books and laptop, engaged in study, diverse academic environment"
    ["university-life.jpg"]="Photograph of university campus in Buenos Aires, students walking between historic buildings, academic atmosphere, sunny day, green spaces"
    ["expat-departure.jpg"]="Emotional photograph at Buenos Aires airport departure area, person with luggage, looking back at city, bittersweet moment, natural lighting"
    ["tango-wheelchair-dancers.jpg"]="Inspiring photograph of inclusive tango dancers, one partner in wheelchair, elegant pose, San Telmo setting, powerful moment of accessibility in dance"
    ["san-telmo-milonga.jpg"]="Evening photograph of traditional milonga in San Telmo Buenos Aires, couples dancing tango, warm lighting, wooden floors, authentic atmosphere"
    ["accessible-tango.jpg"]="Photograph showing adaptive tango dancing, inclusive dance environment, diverse participants, supportive atmosphere, elegant movement"
    ["subway-accident.jpg"]="Dramatic photograph of Buenos Aires subway platform, moment of incident, concerned commuters, subway car doors, urgent atmosphere, documentary style"
    ["subway-mitigation.jpg"]="Photograph of helpful strangers assisting someone on subway platform, Buenos Aires, community support, candid moment, human connection"
    ["buenos-aires-metro.jpg"]="Clean photograph of modern Buenos Aires subway station, signage, passengers, daily commute, well-lit underground environment"
    ["cafe-bathroom.jpg"]="Photograph of typical Buenos Aires café interior, marble tables, wood paneling, classic Argentine café architecture, warm lighting"
    ["buenos-aires-cafe.jpg"]="Photograph of historic Buenos Aires café, ornate interior, mirrors, chandeliers, traditional atmosphere, cultural landmark"
    ["argentine-bureaucracy.jpg"]="Photograph of government office or paperwork process in Buenos Aires, documents, queues, administrative setting, authentic bureaucracy experience"
    ["robbery-mustard-scam.jpg"]="Cautionary photograph of distracted tourist in Buenos Aires, strangers approaching, Plaza San Martín area, subtle tension, documentary warning style"
    ["plaza-san-martin.jpg"]="Photograph of Plaza San Martín in Buenos Aires, Retiro area, tourists with luggage, historic buildings, trees, urban park setting"
    ["police-report.jpg"]="Photograph of police station interior in Buenos Aires, filing report, administrative process, official documents, candid documentary style"
)

# Generate Country Images
echo "=== Generating Country Images ==="
for filename in "${!COUNTRY_PROMPTS[@]}"; do
    output="$COUNTRIES_DIR/$filename"
    if [ -f "$output" ]; then
        echo "Skipping (exists): $filename"
    else
        generate_image "${COUNTRY_PROMPTS[$filename]}" "$output"
    fi
done

# Generate Story Images
echo ""
echo "=== Generating Story Images ==="
for filename in "${!STORY_PROMPTS[@]}"; do
    output="$STORIES_DIR/$filename"
    if [ -f "$output" ]; then
        echo "Skipping (exists): $filename"
    else
        generate_image "${STORY_PROMPTS[$filename]}" "$output"
    fi
done

echo ""
echo "=== Image Generation Complete ==="
echo "Country images: $COUNTRIES_DIR"
echo "Story images: $STORIES_DIR"
