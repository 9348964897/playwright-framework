import {test,expect} from '@playwright/test';
import {PractiseAnotherWindow} from '../pages/anotherWindow';
test('TestNewPageWindow', async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/?utm_source=chatgpt.com');
const Winobj=new PractiseAnotherWindow(page);
await Winobj.newWindowActivity();
await expect(Winobj.closeButton).toBeVisible();
await Winobj.closeAnotherPopup ();
await expect(Winobj.loginButton).toBeVisible();


})