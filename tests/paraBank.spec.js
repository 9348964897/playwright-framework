import{test,expect} from '@playwright/test';
import {ParaBankRegisterUser} from '../pages/register_User';
test('registerUser',async({browser})=>{
const page1= await browser.newPage();
await page1.goto('https://parabank.parasoft.com/parabank/index.htm?utm_source=chatgpt.com');
const paraBankObj=new ParaBankRegisterUser(page1);
await paraBankObj.register('Parul','Rout','Asui','Kulu','Bihar','456781','9346789123','3456','BAParulSina','BAparulA156');
await expect(paraBankObj.logOut).toBeVisible();
const page2=await browser.newPage();
await page2.goto('https://parabank.parasoft.com/parabank/index.htm?utm_source=chatgpt.com');
const regObj2=new ParaBankRegisterUser(page2);
await regObj2.login('BAParulSina','BAparulA156');
})