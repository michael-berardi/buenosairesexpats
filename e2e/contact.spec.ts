import { test, expect } from "@playwright/test";

test.describe("Contact Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact/");
  });

  test("has correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Contact Us/);
  });

  test("contact form has all required fields", async ({ page }) => {
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="subject"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test("form validation works - empty fields", async ({ page }) => {
    await page.click('button[type="submit"]');
    
    // Should show validation errors
    await expect(page.locator("text=Name must be at least")).toBeVisible();
  });

  test("form validation works - invalid email", async ({ page }) => {
    await page.fill('input[name="name"]', "John Doe");
    await page.fill('input[name="email"]', "invalid-email");
    await page.fill('input[name="subject"]', "Test Subject");
    await page.fill('textarea[name="message"]', "This is a test message that is long enough.");
    
    await page.click('button[type="submit"]');
    
    await expect(page.locator("text=Please enter a valid email")).toBeVisible();
  });

  test("form submission shows success state", async ({ page }) => {
    // Fill in valid data
    await page.fill('input[name="name"]', "John Doe");
    await page.fill('input[name="email"]', "john@example.com");
    await page.fill('input[name="subject"]', "Test Subject");
    await page.fill('textarea[name="message"]', "This is a test message that is long enough to pass validation.");
    
    await page.click('button[type="submit"]');
    
    // Should show loading state then success
    await expect(page.locator("text=Sending...")).toBeVisible();
    await expect(page.locator("text=Message Sent!")).toBeVisible({ timeout: 5000 });
  });

  test("has email fallback link", async ({ page }) => {
    const emailLink = page.locator('a[href^="mailto:"]');
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute("href", /hello@buenosairesexpats.com/);
  });
});
