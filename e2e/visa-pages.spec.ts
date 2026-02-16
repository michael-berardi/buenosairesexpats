import { test, expect } from "@playwright/test";

test.describe("Visa Pages", () => {
  test("Digital Nomad Visa page has correct content", async ({ page }) => {
    await page.goto("/visas/digital-nomad/");
    
    await expect(page).toHaveTitle(/Digital Nomad Visa/);
    await expect(page.locator("h1")).toContainText("Digital Nomad Visa");
    
    // Check for key sections
    await expect(page.locator("text=Requirements")).toBeVisible();
    await expect(page.locator("text=Application Process")).toBeVisible();
    await expect(page.locator("text=Document Checklist")).toBeVisible();
    await expect(page.locator("text=Frequently Asked Questions")).toBeVisible();
    
    // Check for last updated badge
    await expect(page.locator("text=Last updated")).toBeVisible();
    
    // Check for structured data
    const structuredData = await page.locator('script[type="application/ld+json"]').count();
    expect(structuredData).toBeGreaterThanOrEqual(3); // Article, HowTo, FAQPage
  });

  test("Visa overview page lists all visa types", async ({ page }) => {
    await page.goto("/visas/");
    
    await expect(page.locator("h1")).toContainText("Visa Options");
    
    // Check for visa type cards
    await expect(page.locator("text=Digital Nomad Visa")).toBeVisible();
    await expect(page.locator("text=Work Visa")).toBeVisible();
    await expect(page.locator("text=Retirement Visa")).toBeVisible();
  });

  test("Related visas section links work", async ({ page }) => {
    await page.goto("/visas/digital-nomad/");
    
    // Scroll to related visas section
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    
    const workVisaLink = page.locator("text=Work Visa").nth(1);
    if (await workVisaLink.isVisible().catch(() => false)) {
      await workVisaLink.click();
      await expect(page).toHaveURL(/.*visas\/work.*/);
    }
  });
});
