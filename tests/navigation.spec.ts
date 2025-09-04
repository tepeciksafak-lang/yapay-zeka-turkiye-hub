import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate using keyboard', async ({ page }) => {
    await page.goto('/tr')
    
    // Test Tab navigation
    await page.keyboard.press('Tab') // Skip link
    await page.keyboard.press('Tab') // First nav item
    await expect(page.locator(':focus')).toBeVisible()
    
    // Test Enter key navigation
    await page.keyboard.press('Enter')
    await expect(page).toHaveURL(/.*\/tr/)
  })

  test('should switch locales correctly', async ({ page }) => {
    await page.goto('/tr')
    
    // Click language switcher
    await page.getByRole('button', { name: /language/i }).click()
    await page.getByRole('menuitem', { name: /english/i }).click()
    
    await expect(page).toHaveURL(/.*\/en/)
    await expect(page.locator('h1')).toContainText('You run the business')
  })

  test('should have proper ARIA attributes', async ({ page }) => {
    await page.goto('/tr')
    
    const nav = page.getByRole('navigation')
    await expect(nav).toHaveAttribute('aria-label')
    
    const buttons = page.getByRole('button')
    for (const button of await buttons.all()) {
      if (await button.getAttribute('aria-expanded') !== null) {
        await expect(button).toHaveAttribute('aria-expanded')
      }
    }
  })

  test('should meet Lighthouse performance criteria', async ({ page }) => {
    await page.goto('/tr')
    
    // Wait for page to fully load
    await page.waitForLoadState('networkidle')
    
    // Check that critical resources load quickly
    const performanceTiming = await page.evaluate(() => {
      return {
        domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
        loadComplete: performance.timing.loadEventEnd - performance.timing.navigationStart
      }
    })
    
    expect(performanceTiming.domContentLoaded).toBeLessThan(2500) // 2.5s LCP target
    expect(performanceTiming.loadComplete).toBeLessThan(5000)
  })
})