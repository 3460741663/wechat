import config from './config.js'

import * as Mock from './mock.js'

let util = {
  isDEV:config.isDEV,
  log(){
    this.isDEV && console.log(...arguments)
  },
  alert(title = '提示', content = config.defaultAlertMessage){
    if('object' === typeof content){
      content = this.isDEV && JSON.stringify(content) || config.defaultAlertMessage
    }
    wx.showModal({
      title: title,
      content: content,
    })
  },
  setStorageData(key,value = '',cb){
    wx.setStorage({
      key: key,
      data: value,
      success(){
        cb&&cb()
      }
    })
  },
  getStorage(key,cb){
    wx.getStorage({
      key: key,
      success(res){
        cb&&cb();
      },
    })
  },
  request(opt){
    let{ url,data,hear,method,dataType,mock = false } = opt;
    let self = this;
    return new Promise((resolve,reject)=>{
      if(mock){
        let res = {
          statusCode:200,
          data:Mock[url]
        }
        if (res && res.statusCode == 200 && res.data) {
          resolve(res.data)
        } else {
          self.alert('提示', res)
          reject(res)
        }
      }else{
        wx.request({
          url: url,
          data : data,//传给数据源的数据，例如分页的数据
          header : header,//请求头，token
          method : method,
          dataType : dataType,
          success(){
            if (res && res.statusCode == 200 && res.data) {
              resolve(res.data)
            } else {
              self.alert('提示', res)
              reject(res)
            }
          },
          fail(err){
            self.log(err);
            self.alert('提示',err);
            reject(err);
          }
        })
      }
      
    })
  }
}

export default util;