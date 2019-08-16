'use strict';//严格模式

const env = 'dec';

const defaultAlertMessage = '好像哪里出了问题~请再试一次哦'

const defaultShareTest = {
  en:'ikcamp英语口语听力四六级'
}

const defaultBarTitle = {
  en:'ikcamp英语学习'
}

const defaultImg = {
  articleIma:'https://n1image.hjfile.cn/mh/2017/06/07/7e8f7b63dba6fa3849b628c0ce2c2a46.png',
  coverIma:'https://n1image.hjfile.cn/mh/2017/06/07/7472c035ad7fe4b8db5d2b20e84f9374.png'
}

let core = {
  env:env,
  defaultAlertMessage: defaultAlertMessage,
  defaultImg: defaultImg,
  defaultShareTest: defaultShareTest['en'],
  defaultBarTitle: defaultBarTitle['en'],
  isDev:env === 'dev',
  isProduction:env === 'produaction'
}
export default core