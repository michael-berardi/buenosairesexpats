#!/usr/bin/env python3
"""
Image Generation Script for BuenosAiresExpats.com
Uses Google Gemini API to generate realistic photos
"""

import os
import sys
import base64
import json
import time
from pathlib import Path
from typing import Dict, Optional

# Try to import google.generativeai, fallback to requests if not available
try:
    import google.generativeai as genai
    HAS_GENAI = True
except ImportError:
    HAS_GENAI = False
    import requests

# Configuration
PROJECT_DIR = Path(__file__).parent.parent
COUNTRIES_DIR = PROJECT_DIR / "public" / "images" / "countries"
STORIES_DIR = PROJECT_DIR / "public" / "images" / "stories"

# Ensure directories exist
COUNTRIES_DIR.mkdir(parents=True, exist_ok=True)
STORIES_DIR.mkdir(parents=True, exist_ok=True)

# Country prompts - Professional travel photography style
COUNTRY_PROMPTS: Dict[str, str] = {
    "usa-landmark.jpg": "Professional travel photography of New York City skyline at golden hour, featuring the Statue of Liberty in the foreground and Manhattan skyscrapers in the background, clear blue sky, photorealistic, high quality, 4K",
    "canada-landmark.jpg": "Professional travel photography of Toronto skyline with CN Tower prominently featured, view from the waterfront at sunset, calm waters reflecting the city lights, photorealistic, high quality",
    "mexico-landmark.jpg": "Professional travel photography of Mexico City historic center, Zocalo plaza with Metropolitan Cathedral and National Palace, clear day, vibrant colors, photorealistic",
    "brazil-landmark.jpg": "Professional travel photography of Rio de Janeiro with Christ the Redeemer statue on Corcovado mountain, Sugarloaf Mountain in background, sunny day, photorealistic, iconic view",
    "chile-landmark.jpg": "Professional travel photography of Santiago de Chile skyline with snow-capped Andes mountains in the background, clear day, modern skyscrapers, photorealistic",
    "uruguay-landmark.jpg": "Professional travel photography of Montevideo waterfront, Rambla promenade with city skyline, historic Ciudad Vieja district, golden hour lighting, photorealistic",
    "colombia-landmark.jpg": "Professional travel photography of Bogotá cityscape with Monserrate mountain in background, historic La Candelaria district in foreground, dramatic mountain setting, photorealistic",
    "peru-landmark.jpg": "Professional travel photography of Machu Picchu ancient ruins with Huayna Picchu mountain, morning mist, dramatic Andes mountains, photorealistic, iconic view",
    "uk-landmark.jpg": "Professional travel photography of London skyline featuring Big Ben and Houses of Parliament, River Thames in foreground, Westminster Bridge, golden hour, photorealistic",
    "germany-landmark.jpg": "Professional travel photography of Berlin skyline with Brandenburg Gate, TV Tower visible in background, blue sky, historical and modern architecture blend, photorealistic",
    "spain-landmark.jpg": "Professional travel photography of Barcelona skyline featuring Sagrada Família cathedral, modernist architecture, clear Mediterranean sky, photorealistic",
    "france-landmark.jpg": "Professional travel photography of Paris skyline with Eiffel Tower prominently featured, Seine River, classic Haussmann buildings, golden hour lighting, photorealistic",
    "italy-landmark.jpg": "Professional travel photography of Rome skyline with Colosseum in foreground, ancient ruins, historic architecture, warm Italian sunlight, photorealistic",
    "netherlands-landmark.jpg": "Professional travel photography of Amsterdam canals with traditional narrow houses, bridges, bicycles, reflection in water, golden hour, photorealistic",
    "switzerland-landmark.jpg": "Professional travel photography of Swiss Alps with Matterhorn mountain peak, alpine lake reflection, dramatic mountain landscape, photorealistic",
    "portugal-landmark.jpg": "Professional travel photography of Lisbon skyline with historic trams, colorful buildings, Tagus River, São Jorge Castle on hilltop, golden hour, photorealistic",
    "belgium-landmark.jpg": "Professional travel photography of Brussels Grand Place with ornate guildhalls, flower carpet, historic architecture, blue sky, photorealistic",
    "ireland-landmark.jpg": "Professional travel photography of Dublin with Georgian architecture, colorful doors, historic buildings, River Liffey, overcast Irish sky, photorealistic",
    "australia-landmark.jpg": "Professional travel photography of Sydney Opera House and Harbour Bridge, Sydney Harbour, clear blue sky, iconic waterfront view, photorealistic",
    "japan-landmark.jpg": "Professional travel photography of Tokyo skyline with Mount Fuji in distance, modern skyscrapers mixed with traditional elements, clear day, photorealistic",
    "new-zealand-landmark.jpg": "Professional travel photography of Auckland skyline featuring Sky Tower, Waitematā Harbour, volcanic landscape, clear day, photorealistic",
    "south-korea-landmark.jpg": "Professional travel photography of Seoul skyline with modern skyscrapers, N Seoul Tower on mountain, Han River, clear evening sky, photorealistic",
}

def generate_image_genai(prompt: str, output_path: Path) -> bool:
    """Generate image using google-generativeai library"""
    try:
        api_key = os.environ.get("GEMINI_API_KEY")
        if not api_key:
            print("Error: GEMINI_API_KEY not set")
            return False
        
        genai.configure(api_key=api_key)
        
        # Use gemini-2.0-flash-exp-image-generation model
        model = genai.GenerativeModel('gemini-2.0-flash-exp-image-generation')
        
        response = model.generate_content(
            prompt,
            generation_config={
                'response_modalities': ['Text', 'Image']
            }
        )
        
        # Extract image data
        for part in response.parts:
            if hasattr(part, 'inline_data') and part.inline_data:
                image_data = part.inline_data.data
                output_path.write_bytes(image_data)
                print(f"✓ Generated: {output_path.name}")
                return True
        
        print(f"✗ No image in response for: {output_path.name}")
        return False
        
    except Exception as e:
        print(f"✗ Error generating {output_path.name}: {e}")
        return False

def generate_image_requests(prompt: str, output_path: Path) -> bool:
    """Generate image using requests library"""
    try:
        api_key = os.environ.get("GEMINI_API_KEY")
        if not api_key:
            print("Error: GEMINI_API_KEY not set")
            return False
        
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key={api_key}"
        
        payload = {
            "contents": [{
                "parts": [{"text": prompt}]
            }],
            "generationConfig": {
                "responseModalities": ["Text", "Image"]
            }
        }
        
        response = requests.post(url, json=payload, timeout=120)
        response.raise_for_status()
        
        data = response.json()
        
        # Extract image data from response
        if "candidates" in data and len(data["candidates"]) > 0:
            candidate = data["candidates"][0]
            if "content" in candidate and "parts" in candidate["content"]:
                for part in candidate["content"]["parts"]:
                    if "inlineData" in part:
                        image_data = base64.b64decode(part["inlineData"]["data"])
                        output_path.write_bytes(image_data)
                        print(f"✓ Generated: {output_path.name}")
                        return True
        
        print(f"✗ No image in response for: {output_path.name}")
        return False
        
    except Exception as e:
        print(f"✗ Error generating {output_path.name}: {e}")
        return False

def generate_image(prompt: str, output_path: Path) -> bool:
    """Generate image using available method"""
    if output_path.exists():
        print(f"Skipping (exists): {output_path.name}")
        return True
    
    print(f"Generating: {output_path.name}")
    
    # Try genai library first, fallback to requests
    if HAS_GENAI:
        return generate_image_genai(prompt, output_path)
    else:
        return generate_image_requests(prompt, output_path)

def main():
    """Main function to generate all images"""
    print("=" * 60)
    print("BuenosAiresExpats.com Image Generation")
    print("=" * 60)
    print()
    
    # Check API key
    if not os.environ.get("GEMINI_API_KEY"):
        print("Error: GEMINI_API_KEY environment variable not set")
        print("Get your API key from: https://makersuite.google.com/app/apikey")
        sys.exit(1)
    
    # Generate country images
    print(f"Generating {len(COUNTRY_PROMPTS)} country images...")
    print(f"Output directory: {COUNTRIES_DIR}")
    print()
    
    success_count = 0
    for filename, prompt in COUNTRY_PROMPTS.items():
        output_path = COUNTRIES_DIR / filename
        if generate_image(prompt, output_path):
            success_count += 1
        time.sleep(2)  # Rate limiting
    
    print()
    print(f"Country images: {success_count}/{len(COUNTRY_PROMPTS)} generated")
    print()
    
    # Summary
    print("=" * 60)
    print("Generation Summary")
    print("=" * 60)
    print(f"Country images: {COUNTRIES_DIR}")
    print(f"Generated: {success_count}/{len(COUNTRY_PROMPTS)}")
    
    if success_count < len(COUNTRY_PROMPTS):
        print()
        print("Note: Some images failed to generate.")
        print("This may be due to API quotas or content policies.")
        print("Retry failed images manually if needed.")

if __name__ == "__main__":
    main()
