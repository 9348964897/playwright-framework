import {expect} from "@playwright/test";
export class HomePageActivity{
    constructor(page){
        this.page=page;
        this.adminModule=page.locator('//span[text()="Admin"]');
        this.addButton=page.locator('//button[@type="button"]').nth(5);
        this.userRole=page.locator('//div[text()="-- Select --"]').nth(0);
        this.option1=page.getByRole('listbox').getByText('Admin');
        this.status=page.locator('//div[@class="oxd-select-text-input"]').nth(1);
        this.option2=page.getByRole("option",{name:"Enabled"});
        this.eName=page.locator('//input[@placeholder="Type for hints..."]');
        this.userName=page.locator('//input[@class="oxd-input oxd-input--active"]').nth(0);
        this.passwrd=page.locator('//input[@type="password"]').nth(0);
        this.confirmPasswrd=page.locator('//input[@type="password"]').nth(1);
        this.save=page.locator('//button[@type="submit"]');
        this.searchBtn=page.locator('//button[@type="submit"]');

    }
    async addUser(user,pass){
        await this.adminModule.click();
        await this.addButton.click();
        await this.userRole.click();
        await this.option1.click();
        await this.status.click();
        await this.option2.click();
        await this.eName.fill(user);
        await this.userName.fill(user);
        await this.passwrd.fill(pass);
        await this.confirmPasswrd.fill(pass);
        await this.save.click();
        await expect(this.searchBtn).toBeVisible();


    }
}