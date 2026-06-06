export class PractiseAnotherWindow{
    constructor(page){
this.page=page;
this.facebookIcon=page.locator('//a[@href="https://www.facebook.com/OrangeHRM/"]');
    }

    async newWindowActivity(){
        const[newPage]=await Promise.all([this.page.waitForEvent('popup'),this.facebookIcon.click()]);
        this.newPage=newPage;
    }

    get closeButton(){
        return this.newPage.locator('//div[@aria-label="Close"]');
    }

    async closeAnotherPopup (){
await this.closeButton.click();
    }
}