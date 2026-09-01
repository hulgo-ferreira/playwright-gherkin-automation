import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    fullyParallel: true,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined,

    reporter: 'html',

    use: {
        baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },

    projects: [
        {
            name: 'ui',
            testMatch: /.*\.spec\.js/,
            testDir: './tests/ui',
            use: {
                ...devices['Desktop Chrome']
            }
        },
        {
            name: 'api',
            testDir: './tests/api',
            use: {
                baseURL: process.env.API_URL || 'https://jsonplaceholder.typicode.com'
            }
        }
    ]
});
