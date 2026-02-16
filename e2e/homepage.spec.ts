import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has correct title and meta description", async ({ page }) => {
    await expect(page).toHaveTitle(/Buenos Aires Expats/);
    
    const metaDescription = await page.locator('meta[name="description"]').getAttribute("content");
    expect(metaDescription).toContain("expats moving to Buenos Aires");
  });

  test("has working navigation links", async ({ page }) => {
    // Check main navigation items
    await expect(page.locator("nav")).toBeVisible();
    await expect(page.locator("text=Visas")).toBeVisible();
    await expect(page.locator("text=Guides")).toBeVisible();
    
    // Test visa navigation
    await page.click("text=Visas");
    await expect(page.locator("text=Digital Nomad Visa")).toBeVisible();
  });

  test("has hero section with CTA buttons", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("Buenos Aires");
    await expect(page.locator("text=Explore Visa Options")).toBeVisible();
    await expect(page.locator("text=Calculate Costs")).toBeVisible();
  });

  test("CTA buttons navigate correctly", async ({ page }) => {
    await page.click("text=Explore Visa Options");
    await expect(page).toHaveURL(/.*visas.*/);
  });

  test("has structured data (JSON-LD)", async ({ page }) => {
    const structuredData = await page.locator('script[type="application/ld+json"]').count();
    expect(structuredData).toBeGreaterThan(0);
  });

  test("is accessible - has skip navigation link", async ({ page }) => {
    const skipLink = page.locator(".skip-nav");
    await expect(skipLink).toBeVisible();
    await expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  test("footer has required links", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    await expect(page.locator("text=Privacy Policy")).toBeVisible();
    await expect(page.locator("text=Terms of Service")).toBeVisible();
    await expect(page.locator("text=Contact")).toBeVisible();
  });
});
