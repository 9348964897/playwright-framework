import {expect} from '@playwright/test';
export class HomePageActivity{
    constructor(page){
        this.page=page;
        this.item=page.locator('//button[@id="add-to-cart-sauce-labs-fleece-jacket"]');
        this.cartIcon=page.locator('//a[@class="shopping_cart_link"]');
        this.itemInCart=page.locator('//div[text()="Sauce Labs Fleece Jacket"]');
    }

    async homePageCart(){
        await this.item.click();
        await this.cartIcon.click();
        await expect(this.itemInCart).toBeVisible();

    }
}