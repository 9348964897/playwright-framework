import{test,expect} from '@playwright/test';
import{AnotherFaceBookWindow} from '../pages/anotherWindow';
test('TestInFacebookPage',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/?utm_source=chatgpt.com');
const anotherpgObj=new AnotherFaceBookWindow(page);
await anotherpgObj.navigateToNewFb();
await expect(anotherpgObj.closeButton).toBeHidden();
await anotherpgObj.closeFacebookPopup();
})