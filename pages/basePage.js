export class BasePage {
    constructor(page) {
        this.page = page;
    }

    async acessar(url) {
        await this.page.goto(url);
    }
}
