import { test, expect } from '@playwright/test'

test('should navigate to the blog page', async ({ page }) => {
  await page.goto('/')
  // Find an element with the text 'Blog' and click on it
  await page.getByRole('button').filter({ hasText: 'Blog' }).click()
  // The new URL should be "/blog" (baseURL is used there)
  await expect(page).toHaveURL('/blog/')
  // The new page should contain an article
  await expect(page.locator('article')).toBeDefined()
})

test('should navigate to the tags page', async ({ page }) => {
  await page.goto('/')
  // Find an element with the text 'Tags' and click on it
  await page.getByRole('button').filter({ hasText: 'Tags' }).click()
  // The new URL should be "/tags" (baseURL is used there)
  await expect(page).toHaveURL('/tags/')
  // The new page should contain the Tag Heading
  await expect(page.locator('h1')).toHaveText('Tags')
})

const fs = require('fs')
const path = require('path')

const getFilesRecursively = (directory, files) => {
  const filesInDirectory = fs.readdirSync(directory)
  for (const file of filesInDirectory) {
    const absolute = path.join(directory, file)
    if (fs.statSync(absolute).isDirectory()) {
      getFilesRecursively(absolute, files)
    } else {
      files.push(file)
    }
  }

  return files
}

test('should show the correct number of blog articles', async ({ page }) => {
  const dir = './data/blog'
  const files = getFilesRecursively(dir, [])
  // Check the number of blog articles defined in data folder matches rendered routes
  await page.goto('/blog')
  await expect(page.locator('article')).toHaveCount(files.length)
})
