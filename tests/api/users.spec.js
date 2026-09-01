import { test, expect } from '@playwright/test';

test.describe('Users - API', () => {

    test('deve consultar um usuário', async ({ request }) => {
        const response = await request.get('/users/1');

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.id).toBe(1);
        expect(body).toHaveProperty('name');
        expect(body).toHaveProperty('email');
    });
});
