// pages/mine/mine.js
const ajax = require('../../utils/ajax.js');
const utils = require('../../utils/util.js');
var sectionData = [];
var ifLoadMore = null;
var app = getApp()
var page = 1;//默认第一页
Page({
  data: {
    userInfo: {},
    motto: 'Hello World',
    goods:null,
    goodsWelfarelist: [
      {
        goodsid: 1000,
        goodsname: '华为HUAWEI/nova4官方手机',
        goodsimgUrl: 'https://img.alicdn.com/imgextra/i4/1684634320/O1CN01MKHZDI1hmbVB8VIQW_!!1684634320.jpg_430x430q90.jpg',
        goodsprice: 2945,
        goodsprivilegePrice: 3099,
        discount: 0.95,
      },
      {
        goodsid: 1001,
        goodsname: '华为HUAWEI/Mate20',
        goodsimgUrl: 'https://img.alicdn.com/imgextra/i1/2838892713/O1CN011VuazdHXcPo1CK3_!!2838892713.jpg_430x430q90.jpg',
        goodsprice: 5700,
        goodsprivilegePrice: 6000,
        discount: 0.95,
      },
      {
        goodsid: 1002,
        goodsname: 'HUAWEI/华为 P20',
        goodsimgUrl: 'https://img.alicdn.com/bao/uploaded/i6/TB1ZsyeikOWBuNjSsppZJtPgpXa_015433.jpg',
        goodsprice: 3229,
        goodsprivilegePrice: 3588,
        discount: 0.9,
      },
      {
        goodsid: 1003,
        goodsname: '博采男士自动机械时尚顶级运动手表',
        goodsimgUrl: 'https://ae01.alicdn.com/kf/HTB1oycob_Zmx1VjSZFGq6yx2XXa8.jpg_350x350.jpg',
        goodsprice: 653,
        goodsprivilegePrice: 688,
        discount: 0.95,
      },
      {
        goodsid: 1004,
        goodsname: 'Semir女式T恤衣服O领短袖女式T恤',
        goodsimgUrl: 'https://img.alicdn.com/imgextra/i4/127005503/TB2ZmimD79WBuNjSspeXXaz5VXa_!!0-saturn_solar.jpg_270x270.jpg_.webp',
        goodsprice: 89,
        goodsprivilegePrice: 69,
        discount: 0.8,
      },
      {
        goodsid: 1005,
        goodsname: '公主睡衣女春秋薄款长袖',
        goodsimgUrl: 'https://gw.alicdn.com/bao/uploaded/i1/2063567510/TB1Jk_vX4WYBuNjy1zkXXXGGpXa_!!0-item_pic.jpg_b.jpg',
        goodsprice: 199,
        goodsprivilegePrice: 398,
        discount: 0.5,
      },
      {
        goodsid: 1006,
        goodsname: '摩登主妇北欧风耐热玻璃花瓶创意干花香薰瓶插花水培瓶装饰摆件',
        goodsimgUrl: 'https://img.alicdn.com/tfscom/i1/413996455/TB2.ZJMXd_gFuJjy0FeXXapjFXa_!!413996455.jpg_280x380xz.jpg',
        goodsprice: 16,
        goodsprivilegePrice: 26,
        discount: 0.6,
      },
      {
        goodsid: 1007,
        goodsname: '纯手工实木松鼠电视柜摆件摆设小动物工艺品家居客厅装饰创意礼物',
        goodsimgUrl: 'https://img.alicdn.com/tfscom/i4/1984101866/TB2Byq6exRDOuFjSZFzXXcIipXa_!!1984101866.jpg_280x380xz.jpg',
        goodsprice: 169,
        goodsprivilegePrice: 288,
        discount: 0.6,
      },

    ]
  },
  //事件处理函数
  nopay: function () {
    app.globalData.currentLocation = 0,
    wx.navigateTo({
      url: '../PersonalCenter/order/order'
    })
  },
  nosend: function () {
    app.globalData.currentLocation = 1,
    wx.navigateTo({
      url: '../PersonalCenter/order/order'
    })
  },
  sended: function () {
    app.globalData.currentLocation = 2,
    wx.navigateTo({
      url: '../PersonalCenter/order/order'
    })
  },
  cardpackage: function(){
    wx.navigateTo({
      url: '../PersonalCenter/cardpackage/cardpackage'
    })
  },
  zeroget: function () {
    wx.navigateTo({
      url: '../PersonalCenter/zeroget/zeroget'
    })
  },
  groupget: function () {
    wx.navigateTo({
      url: '../PersonalCenter/groupget/groupget'
    })
  },
  identitycard: function () {
    wx.navigateTo({
      url: '../PersonalCenter/identitycard/identitycard'
    })
  },
  messagecenter: function () {
    wx.navigateTo({
      url: '../PersonalCenter/messagecenter/messagecenter'
    })
  },
  helporserver: function () {
    wx.navigateTo({
      url: '../PersonalCenter/helporserver/helporserver'
    })
  },
  scoremarket: function () {
    wx.navigateTo({
      url: '../PersonalCenter/scoremarket/scoremarket'
    })
  },
  vip: function () {
    wx.navigateTo({
      url: '../PersonalCenter/vip/vip'
    })
  },
  allorder: function () {
    app.globalData.currentLocation = 3,
    wx.navigateTo({
      url: '../PersonalCenter/order/order'
    })
  },
  /**
    * 生命周期函数--监听页面加载
    */
  onLoad: function (options) {
    var that = this;
    //加载福利专场
    //that.newGoodsShow();
    //that.goodsItems();
    that.nopaygoods();
    that.show();
  },

  newGoodsShow: function (success) {
    var that = this;
    ajax.request({
      method: 'GET',
      url: 'goods/getHotGoodsList?key=' + utils.key + '&page=' + page + '&size=10',
      success: data => {
        var newGoodsData = data.result.list;
        page += 1;
        if (ifLoadMore) {
          //加载更多
          if (newGoodsData.length > 0) {
            console.log(newGoodsData)
            //日期以及title长度处理
            for (var i in newGoodsData) {
              //商品名称长度处理
              var name = newGoodsData[i].name;
              if (name.length > 26) {
                newGoodsData[i].name = name.substring(0, 23) + '...';
              }
            }
            sectionData['newGoods'] = sectionData['newGoods'].concat(newGoodsData);

          } else {
            ifLoadMore = false;
            this.setData({
              hidden: true
            })
            wx.showToast({
              title: '暂无更多内容！',
              icon: 'loading',
              duration: 2000
            })
          }

        } else {
          if (ifLoadMore == null) {
            ifLoadMore = true;

            //日期以及title长度处理
            for (var i in newGoodsData) {
              //商品名称长度处理
              var name = newGoodsData[i].name;
              if (name.length > 26) {
                newGoodsData[i].name = name.substring(0, 23) + '...';
              }
            }
            sectionData['newGoods'] = newGoodsData;//刷新
          }

        }
        that.setData({
          newGoods: sectionData['newGoods'],
          // isHideLoadMore: true
        });
        wx.stopPullDownRefresh();//结束动画
      }
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉");
    var that = this;
    console.log('加载更多');
    if (ifLoadMore != null) {
      that.goodsItems();

    }
  },
  catchTapCategory: function (e) {
    wx.navigateTo({
      url: '../goodDetails/goodDetails',
    })
  },
  goSearch: function (e) {

    wx.navigateTo({
      url: '../searchPage/searchPage',
    })
  },
   goodsItems: function () {
    var that = this
    wx.request({
      url: 'http://yuanyam.com:8080/OceanMall1.0/servlet/goodsServlet',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          goodslist: res.data.goodslist
        })
        console.log(res.data.goodslist)
      }
    })
  },
  nopaygoods: function () {
    var that = this;
    wx.request({
      url: 'http://yuanyam.com:8080/OceanMall1.0/servlet/wxtestServlet',
      header: {
        'content-type': 'application/json'
      },
      success: function (res){
        that.setData({
          goods: res.data.goods,
          nopay: res.data.nopay,
          nosend: res.data.nosend,
          sended: res.data.sended,
          msg: res.data.msg
        })
        console.log(res.data)
      }
    })
  },
  show: function(){
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#f0145a',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  } 
})