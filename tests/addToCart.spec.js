import {test, expect} from '@playwright/test';
import {Login} from '../pages/loginpage';
import {HomePageActivity} from '../pages/homepage';
test ('testLogin',async ({page})=>{
    await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');
    const logObj=new Login(page);
    await logObj.loginCheck();
    const homeObj=new HomePageActivity(page);
    await homeObj.homePageCart();
})