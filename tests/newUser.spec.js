import {test,expect} from "@playwright/test";
import {LoginActivity} from "../pages/loginPage_HRM";
import {HomePageActivity} from "../pages/homePage_HRM";
test("LoginUsingNewUser",async({browser})=>{
const context1 = await browser.newContext();
const page1=await context1.newPage();
await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
const logObj=new LoginActivity(page1);
await logObj.successLogin('Admin','admin123');
const homeObj=new HomePageActivity(page1);
await homeObj.addUser('Rahul Das','Rahul@123');
const context2 = await browser.newContext();
const page2=await context2.newPage();
await page2.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
const logObj2=new LoginActivity(page2);
await logObj2.successLogin('Rahul Das','Rahul@123');


})