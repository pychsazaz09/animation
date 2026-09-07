import { expect, test } from "@playwright/test";

test("visitors can reach the discovery entry point", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "把想看的，留在眼前。" })).toBeVisible();
  await page.getByRole("link", { name: "开始探索" }).click();
  await expect(page).toHaveURL(/\/search$/);
  await expect(page.getByRole("heading", { name: "从一部作品开始探索。" })).toBeVisible();
});
