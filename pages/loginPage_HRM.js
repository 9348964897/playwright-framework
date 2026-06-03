import {expect} from '@playwright/test';
export class LoginActivity{
    constructor(page){
        this.page= page;
        this.userName=page.locator('//input[@name="username"]');
        this.password=page.locator('//input[@name="password"]');
        this.loginButton=page.locator('//button[@type="submit"]');
        this.dashboard=page.locator('//h6[text()="Dashboard"]');
    }
    async successLogin(userId,pass){
       await this.userName.fill(userId);
       await this.password.fill(pass);
       await this.loginButton.click();
       await expect(this.dashboard).toBeVisible();
    }
}