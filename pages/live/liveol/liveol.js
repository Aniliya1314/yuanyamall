var app = getApp()
Page({
  data: {
    "widths":0,
    "heights":0,
    "false": false,
    "fill":"fill"
  },
  //事件处理函数
 onLoad:function(){
  this.setData({
    "heights":wx.getSystemInfoSync().windowHeight,
    "widths":wx.getSystemInfoSync().windowWidth
  })
 },
  asfd:function(){
    console.log(wx.getSystemInfoSync().windowHeight)
    console.log(wx.getSystemInfoSync().windowWidth)
  }
})