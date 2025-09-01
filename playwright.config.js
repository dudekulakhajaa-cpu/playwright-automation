// @ts-check
import { defineConfig, devices } from '@playwright/test';

/*
  defineConfig:
  - Wraps the configuration object for Playwright.
  - Helps with TypeScript checking and auto-completion.
*/
export default defineConfig({
  // Directory where all test files are stored
  testDir: './tests',

  // Global timeout for each test (in ms) – default is 30,000 ms (30s)
  timeout: 40 * 1000, // 40 seconds

  // Timeout for expect() assertions
  expect: {
    timeout: 40 * 1000,
  },

  // Run tests in parallel by default
  fullyParallel: true,

  // Forbid usage of test.only in CI environments
  forbidOnly: !!process.env.CI,

  // Retry tests if they fail in CI (2 retries), 0 locally
  retries: process.env.CI ? 2 : 0,

  // Number of workers (parallel execution) – 1 in CI, auto locally
  workers: process.env.CI ? 1 : undefined,

  // Reporter configuration – HTML report for test results
  reporter: 'html',

  // Common settings for all projects (e.g., trace capture)
  use: {
    trace: 'on-first-retry', // Capture trace on first failure retry
  },

  /*
    Projects:
    - Allows running tests across multiple browsers/devices.
    - Each project defines a browser or device configuration.
  */
  projects: [
    {
      name: 'chromium', // Chrome browser
      use: { ...devices['Desktop Chrome'] },
    }
    // ,
    // {
    //   name: 'firefox', // Firefox browser
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit', // Safari browser
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
