import { test, expect } from "@playwright/test";

test.describe("Legal Pages", () => {
  test("Privacy Policy page exists and has content", async ({ page }) => {
    await page.goto("/privacy/");
    
    await expect(page).toHaveTitle(/Privacy Policy/);
    await expect(page.locator("h1")).toContainText("Privacy Policy");
    
    // Check for key sections
    await expect(page.locator("text=Information We Collect")).toBeVisible();
    await expect(page.locator("text=How We Use Your Information")).toBeVisible();
    await expect(page.locator("text=Cookies and Tracking")).toBeVisible();
  });

  test("Terms of Service page exists and has content", async ({ page }) => {
    await page.goto("/terms/");
    
    await expect(page).toHaveTitle(/Terms of Service/);
    await expect(page.locator("h1")).toContainText("Terms of Service");
    
    // Check for key sections
    await expect(page.locator("text=Agreement to Terms")).toBeVisible();
    await expect(page.locator("text=Intellectual Property")).toBeVisible();
    await expect(page.locator("text=Limitation of Liability")).toBeVisible();
  });

  test("404 page works for non-existent routes", async ({ page }) => {
    await page.goto("/this-page-does-not-exist/");
    
    await expect(page.locator("text=Page Not Found")).toBeVisible();
    await expect(page.locator("text=Back to Homepage")).toBeVisible();
    
    // Test navigation back home
    await page.click("text=Back to Homepage");
    await expect(page).toHaveURL("/");
  });

  test("Footer links work on all pages", async ({ page }) => {
    const pages = ["/", "/visas/", "/contact/", "/about/"];
    
    for (const pageUrl of pages) {
      await page.goto(pageUrl);
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      
      const privacyLink = page.locator('a[href="/privacy/"]').first();
      const termsLink = page.locator('a[href="/terms/"]').first();
      
      await expect(privacyLink).toBeVisible();
      await expect(termsLink).toBeVisible();
    }
  });
});
