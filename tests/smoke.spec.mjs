import { test, expect } from "@playwright/test";

test.describe("600 PARTY landing", () => {
  test("renders without console errors and shows the key party info", async ({ page }) => {
    const errors = [];
    page.on("pageerror", (err) => errors.push(`pageerror: ${err.message}`));
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(`console.error: ${msg.text()}`);
    });

    await page.goto("/");
    await expect(page).toHaveTitle(/600 PARTY/);

    // Core artboard mounted (proves React + the precompiled bundle loaded)
    await expect(page.locator(".party-artboard")).toBeVisible();

    // Sacred 4-line stack: 600 / 000 / 000 / 000
    const stack = page.locator(".sacred-stack").first();
    await expect(stack).toBeVisible();
    await expect(stack).toContainText("600");
    await expect(stack).toContainText("000");

    // Tickets CTA points to the LNbits event (not a placeholder)
    const tickets = page.getByRole("link", { name: /buy_ticket/i });
    await expect(tickets).toHaveAttribute(
      "href",
      "https://lnbits.600.wtf/events/FT5HhuhSWHdhswmxZXCvMD",
    );

    // Venue card names Fuchs 2 + the address line
    await expect(page.getByText("FUCHS 2", { exact: true }).first()).toBeVisible();
    await expect(page.getByText(/Ostrov Štvanice/)).toBeVisible();

    // Lineup is wired — at least one band YouTube link is present
    const ytLinks = page.locator('a[href*="youtube.com"]');
    expect(await ytLinks.count()).toBeGreaterThanOrEqual(8);

    // Matrix-rain canvas mounted
    await expect(page.locator("canvas.matrix-canvas")).toBeAttached();

    expect(errors, errors.join("\n")).toEqual([]);
  });

  test("loads precompiled bundle (not Babel-in-browser)", async ({ page }) => {
    await page.goto("/");
    const hasBabel = await page.evaluate(() => typeof window.Babel !== "undefined");
    expect(hasBabel).toBe(false);
  });
});
