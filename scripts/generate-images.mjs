#!/usr/bin/env node

/**
 * generate-images.mjs
 *
 * Uses Google's Imagen 4.0 model (via @google/genai SDK) to generate
 * images for the Buenos Aires Expats homepage overhaul.
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
// Image definitions — homepage overhaul
// ---------------------------------------------------------------------------

const images = [
  {
    filename: "hero-street-cafe.webp",
    aspectRatio: "16:9",
    personGeneration: "allow_all",
    prompt:
      "A warm, authentic Buenos Aires street-level cafe scene during golden hour. Outdoor seating on a tree-lined cobblestone sidewalk in Palermo or San Telmo. Warm string lights, espresso cups on marble tables, European architecture with colorful facades in the background. People chatting and enjoying life. Cinematic, editorial photography style, shallow depth of field, rich warm tones. No text or watermarks.",
  },
  {
    filename: "cost-of-living-card.webp",
    aspectRatio: "16:9",
    personGeneration: "allow_all",
    prompt:
      "A vibrant Buenos Aires market scene at a traditional feria or food stall. Fresh fruits, empanadas, colorful produce displayed beautifully. Warm natural lighting, authentic Argentine street market atmosphere. A vendor interacting with a customer. Editorial photography style, rich saturated colors, shallow depth of field. No text or watermarks.",
  },
  {
    filename: "journey-planning.webp",
    aspectRatio: "16:9",
    personGeneration: "allow_adult",
    prompt:
      "A person researching on a laptop at a bright, modern cafe with large windows. Travel guidebooks and a passport visible on the table. Buenos Aires city map or travel notes scattered around. Warm, aspirational mood. Natural light, editorial photography style. No text or watermarks.",
  },
  {
    filename: "journey-arrived.webp",
    aspectRatio: "16:9",
    personGeneration: "allow_adult",
    prompt:
      "First impressions of Buenos Aires: a person walking down a beautiful tree-lined avenue in Buenos Aires with classic European-style buildings, balconies with plants, and dappled sunlight through jacaranda trees. Sense of wonder and discovery. Golden hour light, cinematic editorial photography. No text or watermarks.",
  },
];

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("ERROR: GEMINI_API_KEY environment variable is not set.");
    process.exit(1);
  }

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

    console.log("");
  }

  console.log("=".repeat(60));
  console.log(`Done! ${successCount} succeeded, ${failCount} failed.`);
  console.log("=".repeat(60));

  if (failCount > 0) {
    process.exit(1);
  }
}

main();
