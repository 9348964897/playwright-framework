export class ParaBankRegisterUser{
    constructor(page){
        this.page=page;
        this.registerBtn=page.getByRole('link',{'name':'Register'});
        this.firstName=page.locator('//input[@name="customer.firstName"]');
        this.lastName=page.locator('//input[@name="customer.lastName"]');
        this.address=page.locator('//input[@id="customer.address.street"]');
        this.city=page.locator('//input[@name="customer.address.city"]');
        this.state=page.locator('//input[@id="customer.address.state"]');
        this.zip=page.locator('//input[@name="customer.address.zipCode"]');
        this.phone=page.locator('//input[@name="customer.phoneNumber"]');
        this.ssn=page.locator('//input[@id="customer.ssn"]');
        this.userName=page.locator('//input[@id="customer.username"]');
        this.pass=page.locator('//input[@id="customer.password"]');
        this.passConfirm=page.locator('//input[@id="repeatedPassword"]');
        this.regButton=page.locator('//input[@type="submit"]').nth(1);
        this.logOut=page.locator('//a[text()="Log Out"]');
        this.userid=page.locator('//input[@name="username"]');
        this.pas=page.locator('//input[@name="password"]');
        this.logbtn=page.locator('//input[@value="Log In"]');
    }
    async register(fname,lname,add,ct,stat,zp,phn,sasn,user,passkey){
        await this.registerBtn.click();
        await this.firstName.fill(fname);
        await this.lastName.fill(lname);
        await this.address.fill(add);
        await this.city.fill(ct);
        await this.state.fill(stat);
        await this.zip.fill(zp);
        await this.phone.fill(phn);
        await this.ssn.fill(sasn);
        await this.userName.fill(user);
        await this.pass.fill(passkey);
        await this.passConfirm.fill(passkey);
        await this.regButton.click();
    }
    async login(user,passkey){
await this.userid.fill(user);
await this.pas.fill(passkey);
await this.logbtn.click();
    }
}