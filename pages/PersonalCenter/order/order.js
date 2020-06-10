// pages/order/order.js
var app = getApp()
Page( {
  data: {
    currentTab: 0,
    txtOrderCode:'',
    modalHidden:true,
    goodsid:'',
    goods:[],
    carts: [
      {
        cid: 1008,
        title: '小米Note2 全网通 标准版 4GB内存 64GB ROM 亮黑色',
        image: 'http://m.360buyimg.com/babel/s390x390_jfs/t3544/28/568416609/135582/af801e4f/580f1296N69590b3b.jpg!q50.jpg.webp',
        num: '1',
        price: '2799',
        sum: '2799'
      }
    ],
  },
  onLoad:function(option){
    var that = this;
    that.nopaygoods();
  },
  nopaygoods: function(){
    var that = this;
    wx.request({
      url: 'http://yuanyam.com:8080/OceanMall1.0/servlet/wxtestServlet',
      header: {
        'content-type': 'application/json'
      },
      data:{
        
      },
      success: function (res) {
        that.setData({
          goods: res.data.goods,
        })
        console.log(res.data.goods)
      }
    })
  },
  CancelOrder(e) {
    var that = this;
    wx.showModal({
      content: '你是否需要取消订单',
      showCancel: true,
       success: (res) => {
        if (res.cancel) {
          
        }
        else{
          var goodsorder = e.currentTarget.dataset.id;
          wx.request({
            url: 'http://yuanyam.com:8080/OceanMall1.0/servlet/cancelOrderServlet',
            header: {
              'content-type': 'application/json'
            },
            data: {
              goodsid: goodsorder
            },
            success: function (res) {
              that.setData({
                goods: res.data.goods,
              })
              wx.showToast({
                title: '订单取消成功'
              })
            }
          })
        }
       }
    })
  },
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  clicktab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  onShow: function () {
    if (app.globalData.currentLocation == '') {
      this.setData({
        currentTab: 0
      });
    } else {
      var i = app.globalData.currentLocation;
      this.setData({
        currentTab: i
      });
    }
  },
  /**
 * 显示弹窗
 */
  pay: function () {
    this.setData({
      modalHidden: false
    })
  },

  /**
   * 点击取消
   */
  modalCancel: function () {
    // do something
    this.setData({
      modalHidden: true
    })
  },
  /**
   *  点击确认
   */
  modalConfirm: function () {
    // do something
    this.setData({
      modalHidden: true
    })
  },
});