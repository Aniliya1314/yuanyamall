var app = getApp()
Page({
  a:function(){
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '远洋猫邀你来购！！',
      path: '/pages/home/home'
    }
  },
  data: 
  {
    currentTab: 0,
    goods: [
      {
        goodsTitle: 'HUAWEI Mate 20 Pro (UD) 8GB+128GB 全网通版（翡冷翠）',
        picture: 'https://res.vmallres.com/pimages//product/6901443261611/group//78_78_1539242990422.png',
        goodsPrice: '5999',
      },
      {
        goodsTitle: 'HUAWEI nova 4 2000万超广角三摄 6GB+128GB 全网通版（蜜语红·星耀版）',
        picture: 'https://res.vmallres.com/pimages//product/6901443290314/group//78_78_1551094060326.jpg',
        goodsPrice: '2799',
      },
      {
        goodsTitle: 'HUAWEI FreeBuds 2 Pro无线耳机（碳晶黑）',
        picture: 'https://res.vmallres.com/pimages//product/6901443257911/group//78_78_1538122964000.jpg',
        goodsPrice: '999',
      },
      {
        goodsTitle: '荣耀MagicBook 锐龙版 14英寸轻薄笔记本电脑 Ryzen R5-2500U 8GB 256GB（冰河银）',
        picture: 'https://res.vmallres.com/pimages//product/6901443233168/78_78_1538989229309mp.png',
        goodsPrice: '3999',
      },
      {
        goodsTitle: '荣耀平板5 8英寸 3GB+32GB WIFI标准版（苍穹灰）麒麟710芯片 杜比音效 全高清屏 ',
        picture: 'https://res.vmallres.com/pimages//product/6901443288359/78_78_1552053266691mp.png',
        goodsPrice: '999',
      },
      {
        goodsTitle: '【新品上市】华为子母路由 Q2 Pro（1母1子）（白色）',
        picture: 'https://res.vmallres.com/pimages//product/6901443273324/78_78_1550750224210mp.png',
        goodsPrice: '799',
      }
    ],
  },
  onLoad: function (option) {

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
  skiplive: function(){
    wx.switchTab({
      url: '../live/live',
      fail:function(){
        console.info("跳转失败")
      }
    })

  }
});