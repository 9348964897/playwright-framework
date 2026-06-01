import{USERNAME,PASSWORD} from '../utils/credentials';
export class Login{
    constructor(page){
this.page=page;
this.userName=page.locator('//input[@id="user-name"]');
this.password=page.locator('//input[@id="password"]');
this.login=page.locator('//input[@id="login-button"]');
    }

    async loginCheck(){
await this.userName.fill(USERNAME);
await this.password.fill(PASSWORD);
await this.login.click();
    }
}