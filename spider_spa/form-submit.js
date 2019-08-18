const puppeteer = require('puppeteer');


async function formSubmit(){
    //async await 被标识为async函数则可以使用wait
    //await 后接promise 
    const brower = await puppeteer.launch({headless:false});
    const page = await brower.newPage();
    await page.goto('https://github.com/login');
    await page.setDefaultNavigationTimeout();
    await page.waitFor(2000);
    await page.type('#login_field','3460741663@qq.com');
    await page.type('#password','19991212dada');
    await page.click('input[type="submit"]');  
}
formSubmit();