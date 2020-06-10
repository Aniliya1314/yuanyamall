// pages/home/home.js 
const ajax = require('../../utils/ajax.js');
const utils = require('../../utils/util.js');
var sectionData = [];
var ifLoadMore = null;
var app = getApp()
var page = 1;//默认第一页
Page({ 
  data: { 
    hidden:false,
    navbar: ['今日推荐', '时尚', '国际', '美妆', '母婴', '居家'], 
    currentTab: 0,
    
    indicatorDots: true,//设置是否显示面板指示点 
    autoplay: true,//是否开启自动切换
    interval: 3000, //设置自动切换时间间隔,3s 
    duration: 1000, //  设置滑动动画时长1s 
    imgUrls:[
      'http://r.photo.store.qq.com/psb?/V1440B7133vLh1/ghrlje386Reltgkh8Z02yBRMw2kVdf0vN1HWs9zP8xs!/r/dLkAAAAAAAAA',
      'http://r.photo.store.qq.com/psb?/V1440B7133vLh1/OdZVbptadqkDaqVgqgzyNSwzeH*nOSGX7jEFBwUlVRE!/r/dL8AAAAAAAAA',                                        
      'http://r.photo.store.qq.com/psb?/V1440B7133vLh1/JHrBWpKtqK99qwSa9fppTyH6lwowPfEeDwgUbFzkeJ4!/r/dFIBAAAAAAAA'
    ], 
    
  // 直播热卖
  goodsHotItems: [
      {
        goodId: 0,
      name: '华为 HUAWEI Mate 20',
        url: 'bill',
      imageurl: 'https://img.alicdn.com/imgextra/i1/96812084/O1CN01GwEdQJ1RGVuBwK3cl_!!0-saturn_solar.jpg_250x250.jpg_.webp',
        newprice: "32.00",
        oldprice: "59.00",
      },
      {
        goodId: 1,
        name: '流光水彩唇膏升级版 3.5g',
        url: 'bill',
        imageurl:   'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2058834337/O1CN01yWehyy1huODzXX51P_!!0-item_pic.jpg_250x250.jpg_.webp',
        newprice: "89.00",
        oldprice: "99.00",
      },
      {
        goodId: 2,
        name: '卡姿兰蜗牛氧气泡泡面膜',
        url: 'bill',
        imageurl: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/121935247/O1CN01GBG9eB1odAemDN5vU_!!121935247.png_250x250.jpg_.webp',
        newprice: "139.00",
        oldprice: "159.00",
      },
      {
        goodId: 3,
        name: '特效润肤露',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg',
        newprice: "30.00",
        oldprice: "80.00",
      },
      {
        goodId: 4,
        name: '御泥坊 | 美白嫩肤泥浆...',
        url: 'bill',
        imageurl: 'https://a4.vimage1.com/upload/merchandise/pdcvis/2017/11/03/98/f34a6c251abf45e5ba60a645f13c7757-5.jpg',
        newprice: "79.00",
        oldprice: "80.00",
      }, {
        goodId: 5,
        name: '日本资生堂洗颜',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg',
        newprice: "30.00",
        oldprice: "80.00",
      }
      , {
        goodId: 6,
        name: '玉兰油 | 水感透白光塑钻...',
        url: 'bill',
        imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/05/19/2/e5de903ab5ba4a6492f3574469fdfca9-5.jpg',
        newprice: "145.00",
        oldprice: "324.00",
      }
    ],
    //猜你喜欢
    goodsWelfarelist:[
      {
        goodsid:1000,
        goodsname:'华为HUAWEI/nova4官方手机',
        goodsimgUrl:'https://img.alicdn.com/imgextra/i4/1684634320/O1CN01MKHZDI1hmbVB8VIQW_!!1684634320.jpg_430x430q90.jpg',
        goodsprice:2945,
        goodsprivilegePrice:3099,
        discount:0.95,
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
  //点击自营分类
  selfSupport: function () {
    app.globalData.currentLocation = 0,
      wx.navigateTo({
        url: '../store/store'
      })
  },
  // 导航切换监听
  navbarTap: function (e) { 
    console.debug(e); 
    this.setData({ currentTab: e.currentTarget.dataset.idx 
    }) 
  }, 

  /**
    * 生命周期函数--监听页面加载
    */
  onLoad: function (options) {
    var that = this;
    //加载福利专场
   // that.newGoodsShow();
    //that.goodsItems();
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
  catchTapCategory:function(e){
    wx.navigateTo({
      url: '../goodDetails/goodDetails',
    })
  },
  goSearch: function (e) {
    wx.navigateTo({
      url: '../searchPage/searchPage',
    })
  },
  goodsItems: function(){
    var that = this
    wx.request({
      url: 'http://yuanyam.com:8080/OceanMall1.0/servlet/goodsServlet',
      header: {
        'content-type': 'application/json'
      },
      success:function(res){
       that.setData({
         goodslist:res.data.goodslist
       })
        console.log(res.data.goodslist)
      }
    }); 
  },
})


