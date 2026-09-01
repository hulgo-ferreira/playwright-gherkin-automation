import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { users } from '../../data/users';

test.describe('Login - UI', () => {

    test('deve realizar login com usuário válido', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.acessarPagina();
        await loginPage.realizarLogin(
            users.usuarioValido.username,
            users.usuarioValido.password
        );

        await expect(page).toHaveURL(/inventory.html/);
        await expect(page).toHaveTitle(/Swag Labs/);
    });

    test('deve exibir mensagem de erro para usuário bloqueado', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.acessarPagina();
        await loginPage.realizarLogin(
            users.usuarioBloqueado.username,
            users.usuarioBloqueado.password
        );

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toHaveText(
            'Epic sadface: Sorry, this user has been locked out.');     
    });

    test('não deve realizar login com usuário inválido', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.acessarPagina();
        await loginPage.realizarLogin(
            users.usuarioInvalido.username,
            users.usuarioInvalido.password
        );

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toHaveText(
            'Epic sadface: Username and password do not match any user in this service');
    });
});
