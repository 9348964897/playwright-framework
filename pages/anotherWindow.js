export class AnotherFaceBookWindow{
    constructor(page){
this.page=page;
this.facebookIcon=page.locator('//a[@href="https://www.facebook.com/OrangeHRM/"]');
    }

    async navigateToNewFb(){
        const[newPage]=await Promise.all([this.page.waitForEvent('popup'),this.facebookIcon.click()]);
        this.newPage=newPage;
    }

    get closeButton(){
        return this.newPage.locator('//div[@aria-label="Close"]');
    }

    async closeFacebookPopup(){
        await this.closeButton.click();
    }
}