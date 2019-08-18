const puppeteer = require('puppeteer');
const $ = require('cheerio'); 
const url = 'https://juejin.im/books';

async function run(){
    const brower = await puppeteer.launch();
    const page = await brower.newPage();
    await page.goto(url,{waitUntil:'networkidle2'});//加载到何种程度才goto
    const html = await page.content();
    //$('.text','')
    const books = $('.info',html);
    books.each(function(){
        const price = $('.price-text',this).text();
        console.log(price);
    })
}
run();