//app.js
App(
  {
    onLaunch: function () {
      //调用API从本地缓存中获取数据
      var logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)
    },
    getUserInfo: function (cb) {
      var that = this
      if (this.globalData.userInfo) {
        typeof cb == "function" && cb(this.globalData.userInfo)
      } else {
        //调用登录接口
        wx.login({
          success: function () {
            wx.getUserInfo({
              success: function (res) {
                that.globalData.userInfo = res.userInfo
                typeof cb == "function" && cb(that.globalData.userInfo)
              }
            })
          }
        })
      }
    },
    globalData: {
      userInfo: null,
      //第一种底部导航栏显示
      tabBar: {
        "color": "#7A7E83",
        "selectedColor": "#f0145a",
        "borderStyle": "black",
        "backgroundColor": "#ffffff",
        "list": [
          {
            "pagePath": "pages/home/home",
            "iconPath": "image/home-uncheck.png",
            "selectedIconPath": "image/home-check.png",
            "text": "首页"
          },
          {
            "pagePath": "pages/live/live",
            "iconPath": "image/live-uncheck.png",
            "selectedIconPath": "image/live-check.png",
            "text": "直播"
          },
          {
            "pagePath": "pages/classifyTabs/classifyTabs",
            "iconPath": "image/search-unchock.png",
            "selectedIconPath": "image/search-chock.png",
            "text": "分类"
          },
          {
            "pagePath": "pages/ShoppingCart/sc",
            "iconPath": "image/shoppingcart-uncheck.png",
            "selectedIconPath": "image/shoppingcart-check.png",
            "text": "购物车"
          },
          {
            "pagePath": "pages/PersonalCenter/mine",
            "iconPath": "image/personal-uncheck.png",
            "selectedIconPath": "image/personal-check.png",
            "text": "个人中心"
          }
        ],
        "position": "bottom"
      }
    },
    //第一种底部  
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
})