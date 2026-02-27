#!/usr/bin/env node

/**
 * generate-images.mjs
 *
 * Uses Google's Imagen 4.0 model (via @google/genai SDK) to generate
 * hero and OG images for the Buenos Aires Expats site.
 *
 * Prerequisites:
 *   - GEMINI_API_KEY environment variable set
 *   - npm install @google/genai
 *
 * Usage:
 *   node scripts/generate-images.mjs
 */

import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, "..");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "public", "images");

// ---------------------------------------------------------------------------
// Image definitions
// ---------------------------------------------------------------------------

const images = [
  {
    filename: "transportation-hero.webp",
    aspectRatio: "16:9",
    personGeneration: "allow_all",
    prompt:
      "Professional photography of a Buenos Aires subte metro station with commuters, warm golden lighting, architectural details of the tiled station, rush hour atmosphere, editorial quality",
  },
  {
    filename: "working-taxes-hero.webp",
    aspectRatio: "16:9",
    personGeneration: "allow_adult",
    prompt:
      "Professional photography of a modern coworking space in Palermo Buenos Aires, laptop and coffee on wooden desk, natural sunlight through large windows, plants and exposed brick, creative professionals in background, editorial quality",
  },
  {
    filename: "getting-started-hero.webp",
    aspectRatio: "16:9",
    personGeneration: "allow_adult",
    prompt:
      "Professional photography of an expat traveler arriving at Ezeiza airport Buenos Aires, carrying luggage, city skyline visible through terminal windows, warm natural lighting, sense of new beginnings and adventure, editorial quality",
  },
  {
    filename: "og-image-new.jpg",
    aspectRatio: "16:9",
    personGeneration: "dont_allow",
    prompt:
      "Aerial photography of Buenos Aires cityscape at golden hour, Puerto Madero waterfront and Obelisco visible, warm sunset tones, professional quality, social media sharing format, clear sky area for text overlay",
  },
  {
    filename: "hero-cityscape-2.webp",
    aspectRatio: "16:9",
    personGeneration: "dont_allow",
    prompt:
      "Professional aerial panorama photography of Buenos Aires, Palermo parks and city skyline at sunset, warm golden and purple tones, dramatic clouds, wide format, editorial quality",
  },
  {
    filename: "lucero-legal-cta-bg.webp",
    aspectRatio: "16:9",
    personGeneration: "dont_allow",
    prompt:
      "Professional interior photography of an elegant law office in Buenos Aires, warm wood furnishings mixed with modern design, large windows with city view, leather and brass details, Argentine aesthetic, warm professional atmosphere, editorial quality",
  },
  {
    filename: "community-expats.webp",
    aspectRatio: "16:9",
    personGeneration: "allow_all",
    prompt:
      "Professional photography of a diverse group of international expats at an outdoor cafe in Buenos Aires, warm afternoon sunlight, genuine laughter and conversation, mixed ages and ethnicities, Palermo neighborhood setting, editorial quality",
  },
  {
    filename: "dining-hero-new.webp",
    aspectRatio: "16:9",
    personGeneration: "dont_allow",
    prompt:
      "Professional food photography of Argentine parrilla, premium steak on traditional grill, atmospheric restaurant lighting with warm tones, rustic wood and iron elements, smoke and sizzle, editorial quality",
  },
];

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  // Validate API key
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("ERROR: GEMINI_API_KEY environment variable is not set.");
    process.exit(1);
  }

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}`);
  }

  const ai = new GoogleGenAI({ apiKey });

  console.log(`\nGenerating ${images.length} images with Imagen 4.0...\n`);
  console.log(`Output directory: ${OUTPUT_DIR}\n`);

  let successCount = 0;
  let failCount = 0;

  for (const [index, img] of images.entries()) {
    const label = `[${index + 1}/${images.length}]`;
    console.log(`${label} Generating: ${img.filename}`);
    console.log(`${label} Prompt: "${img.prompt.slice(0, 80)}..."`);

    try {
      const response = await ai.models.generateImages({
        model: "imagen-4.0-generate-001",
        prompt: img.prompt,
        config: {
          numberOfImages: 1,
          aspectRatio: img.aspectRatio || "16:9",
          personGeneration: img.personGeneration || "allow_adult",
        },
      });

      if (
        !response.generatedImages ||
        response.generatedImages.length === 0
      ) {
        console.error(`${label} SKIP: No images returned for ${img.filename}`);
        failCount++;
        continue;
      }

      const imageData = response.generatedImages[0].image.imageBytes;
      const outputPath = path.join(OUTPUT_DIR, img.filename);
      fs.writeFileSync(outputPath, Buffer.from(imageData, "base64"));

      const stats = fs.statSync(outputPath);
      const sizeKB = (stats.size / 1024).toFixed(1);
      console.log(`${label} Saved: ${outputPath} (${sizeKB} KB)`);
      successCount++;
    } catch (err) {
      console.error(
        `${label} FAILED: ${img.filename} - ${err.message || err}`
      );
      failCount++;
    }

    console.log(""); // blank line between images
  }

  // Summary
  console.log("=".repeat(60));
  console.log(`Done! ${successCount} succeeded, ${failCount} failed.`);
  console.log("=".repeat(60));

  if (failCount > 0) {
    process.exit(1);
  }
}

main();
