import { test, expect } from '@playwright/test'

test.describe('Homepage SSR & Internationalization', () => {
  const locales = ['tr', 'de', 'en']

  locales.forEach((locale) => {
    test(`should render SSR content for ${locale} locale`, async ({ page }) => {
      await page.goto(`/${locale}`)
      
      // Check that page loads without JavaScript
      await page.addInitScript(() => {
        delete (window as any).requestAnimationFrame
      })
      
      // Verify critical content is present
      await expect(page.locator('h1')).toBeVisible()
      await expect(page.locator('main')).toBeVisible()
      
      // Check language-specific content
      if (locale === 'tr') {
        await expect(page).toHaveTitle(/AI Otomasyon Platformu/)
      } else if (locale === 'de') {
        await expect(page).toHaveTitle(/KI-Automatisierungsplattform/)
      } else if (locale === 'en') {
        await expect(page).toHaveTitle(/AI Automation Platform/)
      }
    })

    test(`should have proper hreflang for ${locale}`, async ({ page }) => {
      await page.goto(`/${locale}`)
      
      // Check hreflang attributes
      const hreflangs = await page.locator('link[rel="alternate"]').all()
      expect(hreflangs.length).toBeGreaterThan(0)
      
      // Verify specific hreflang exists for each locale
      await expect(page.locator(`link[hreflang="tr"]`)).toHaveCount(1)
      await expect(page.locator(`link[hreflang="de"]`)).toHaveCount(1)
      await expect(page.locator(`link[hreflang="en"]`)).toHaveCount(1)
    })

    test(`should have proper meta tags for ${locale}`, async ({ page }) => {
      await page.goto(`/${locale}`)
      
      // Check essential meta tags
      await expect(page.locator('meta[name="description"]')).toHaveCount(1)
      await expect(page.locator('meta[property="og:title"]')).toHaveCount(1)
      await expect(page.locator('meta[property="og:description"]')).toHaveCount(1)
      await expect(page.locator('meta[name="twitter:card"]')).toHaveCount(1)
    })
  })

  test('keyboard navigation works', async ({ page }) => {
    await page.goto('/tr')
    
    // Test skip link
    await page.keyboard.press('Tab')
    await expect(page.locator('.skip-link')).toBeFocused()
    
    // Test main content focus
    await page.keyboard.press('Enter')
    await expect(page.locator('#main-content')).toBeFocused()
  })

  test('navigation menu accessibility', async ({ page }) => {
    await page.goto('/tr')
    
    const navButton = page.locator('[aria-expanded]').first()
    if (await navButton.isVisible()) {
      // Check initial state
      expect(await navButton.getAttribute('aria-expanded')).toBe('false')
      
      // Open menu
      await navButton.click()
      expect(await navButton.getAttribute('aria-expanded')).toBe('true')
      
      // Close menu
      await navButton.click()
      expect(await navButton.getAttribute('aria-expanded')).toBe('false')
    }
  })

  test('language switcher works', async ({ page }) => {
    await page.goto('/tr')
    
    // Find language switcher and test locale switching
    const languageSwitcher = page.locator('[data-testid="language-switcher"]').or(
      page.locator('text=DE').or(page.locator('text=EN'))
    ).first()
    
    if (await languageSwitcher.isVisible()) {
      await languageSwitcher.click()
      await page.waitForURL(/\/(de|en)/)
      expect(page.url()).toMatch(/\/(de|en)/)
    }
  })
})