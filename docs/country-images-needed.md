# Country Images Needed for Nationality Pages

## Overview
Images have been configured for 21 priority countries. These images need to be sourced and placed in `/public/images/countries/`.

## Images Needed (21 total)

### North America
| File | Country | Description |
|------|---------|-------------|
| `usa-landmark.jpg` | United States | New York City skyline with Statue of Liberty |
| `canada-landmark.jpg` | Canada | Toronto skyline with CN Tower |
| `mexico-landmark.jpg` | Mexico | Mexico City skyline with historic center |

### South America / Mercosur
| File | Country | Description |
|------|---------|-------------|
| `brazil-landmark.jpg` | Brazil | Rio de Janeiro with Christ the Redeemer |
| `chile-landmark.jpg` | Chile | Santiago skyline with Andes mountains |
| `uruguay-landmark.jpg` | Uruguay | Montevideo waterfront and old city |
| `colombia-landmark.jpg` | Colombia | Bogota cityscape with mountains |
| `peru-landmark.jpg` | Peru | Machu Picchu with Andes mountains |

### Europe
| File | Country | Description |
|------|---------|-------------|
| `uk-landmark.jpg` | United Kingdom | London skyline with Big Ben and Thames |
| `germany-landmark.jpg` | Germany | Berlin skyline with Brandenburg Gate |
| `spain-landmark.jpg` | Spain | Barcelona skyline with Sagrada Familia |
| `france-landmark.jpg` | France | Paris skyline with Eiffel Tower |
| `italy-landmark.jpg` | Italy | Rome skyline with Colosseum |
| `netherlands-landmark.jpg` | Netherlands | Amsterdam canals with traditional houses |
| `switzerland-landmark.jpg` | Switzerland | Swiss Alps with Matterhorn |
| `portugal-landmark.jpg` | Portugal | Lisbon skyline with historic trams |
| `belgium-landmark.jpg` | Belgium | Brussels Grand Place with historic buildings |
| `ireland-landmark.jpg` | Ireland | Dublin with historic Georgian architecture |

### Asia-Pacific
| File | Country | Description |
|------|---------|-------------|
| `australia-landmark.jpg` | Australia | Sydney Opera House and Harbour Bridge |
| `japan-landmark.jpg` | Japan | Tokyo skyline with Mount Fuji |
| `new-zealand-landmark.jpg` | New Zealand | Auckland skyline with Sky Tower |
| `south-korea-landmark.jpg` | South Korea | Seoul skyline with modern architecture |

## Suggested Sources

### Free Stock Photo Sites
1. **Unsplash** (unsplash.com) - Free, no attribution required
2. **Pexels** (pexels.com) - Free, no attribution required
3. **Pixabay** (pixabay.com) - Free, no attribution required

### Search Terms
- "[City] skyline"
- "[Landmark] landmark"
- "[Country] tourism"
- "[City] cityscape"

### Image Specifications
- **Format**: JPG or WebP
- **Size**: 1200x800px minimum (for hero background)
- **Aspect Ratio**: 3:2 or 16:9
- **File Size**: Under 500KB each (optimize for web)
- **Style**: Bright, inviting, professional photography

## Remaining Countries (69)
The remaining 69 countries in the data file don't have images configured yet. They will display the fallback gradient background. Priority for adding more images:

### High Priority (Next 10)
- Austria
- Sweden
- Norway
- Denmark
- Greece
- Poland
- Czech Republic
- Hungary
- Israel
- South Africa

### Medium Priority
All other EU countries, major Asian markets

## Implementation Status
✅ Phase 2A Complete: Image fields added to CountryData interface
✅ Phase 2B Complete: Image paths added to 21 priority countries
✅ Phase 2C Complete: Page template updated to display images
⏳ Phase 2D Pending: Source and upload actual image files
