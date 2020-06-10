Page({
  data: {
    showPop: false,
    animationData: {},
    num: 0,
    index:0,
    comment: [
      {
        "id": 1,
        "headimg": "http://mz.djmall.xmisp.cn/files/banner/20161222/14823895573.png",
        "nikename": "小改改",
        "detail": "五星好评！！，手机性价比非常高，支持！",
      },
      {
        "id": 2,
        "headimg": "http://img1.imgtn.bdimg.com/it/u=3281536845,3260054216&fm=26&gp=0.jpg",
        "nikename": "billstone",
        "detail": "Mobile phone is good, beautiful and supporti..",
      },
      {
        "id": 3,
        "headimg": "http://www.icosky.com/icon/png/Movie%20%26%20TV/Naruto%20Vol.%201/Uzumaki%20Naruto.png",
        "nikename": "maczhou",
        "detail": "made in China has become a brand",
      },
      {
        "id": 4,
        "headimg": "http://img4.imgtn.bdimg.com/it/u=4228873919,2736859917&fm=26&gp=0.jpg",
        "nikename": "csca",
        "detail": "手机漂亮，很好很好非常好，性价比非常高，支持",
      },
      {
        "id": 5,
        "headimg": "http://mz.djmall.xmisp.cn/files/banner/20161222/14823895573.png",
        "nikename": "远洋科技",
        "detail": "手机硬货，很好很好非常好",
      },
      {
        "id": 6,
        "headimg": "http://img3.imgtn.bdimg.com/it/u=2487135024,1685995119&fm=26&gp=0.jpg",
        "nikename": "小可爱",
        "detail": "物流很快性价比非常高，支持",
      },
    ],
    isLike: true,
    // banner
    imgUrls: [
      "https://img.alicdn.com/imgextra/i1/2838892713/O1CN010n6eDE1Vub1umvHF4_!!2838892713.jpg_430x430q90.jpg",
      "https://img.alicdn.com/imgextra/i1/2838892713/O1CN011VuazdHXcPo1CK3_!!2838892713.jpg_430x430q90.jpg",
      "https://img.alicdn.com/imgextra/i3/2838892713/O1CN011VuazeKxZIjozDb_!!2838892713.jpg_430x430q90.jpg",
      "https://img.alicdn.com/imgextra/i3/2838892713/O1CN01llOcDQ1Vub1oNk0Vg_!!0-item_pic.jpg_430x430q90.jpg",
      "https://img.alicdn.com/imgextra/i1/2838892713/O1CN011VuazcxnwTuUHoA_!!2838892713.jpg_430x430q90.jpg"
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

    // 商品详情介绍
    detailImg: [
      "https://img.alicdn.com/imgextra/i2/2838892713/O1CN011VuazeIrXil9Sir_!!2838892713.jpg?tdsourcetag=s_pcqq_aiomsg",
      "https://img.alicdn.com/imgextra/i3/2838892713/O1CN011Vuazt62LxyfS7i_!!2838892713.jpg",
      "https://img.alicdn.com/imgextra/i2/2838892713/TB2kF85tStYBeNjSspkXXbU8VXa_!!2838892713.jpg",
      "https://img.alicdn.com/imgextra/i3/2838892713/O1CN01Z1AJfT1Vub1G7CFyY_!!2838892713.jpg?tdsourcetag=s_pcqq_aiomsg",
      "https://img.alicdn.com/imgextra/i2/2838892713/O1CN01rhD6qo1Vub1FOTyzs_!!2838892713.jpg?tdsourcetag=s_pcqq_aiomsg",
      "https://img.alicdn.com/imgextra/i2/2838892713/O1CN01EwylLx1Vub18Z5cZr_!!2838892713.jpg?tdsourcetag=s_pcqq_aiomsg",
      "https://img.alicdn.com/imgextra/i4/2838892713/O1CN01BTrgUF1Vub1GzAyyC_!!2838892713.jpg",
      "https://img.alicdn.com/imgextra/i4/2838892713/O1CN01lsDAy11Vub1FOU7Lo_!!2838892713.jpg",
    ],
  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
  // 店铺
   toStore:function() {
     wx.navigateTo({
       url: '../store/store',
     })
  },
  // 收藏
  addLike() {
    this.setData({
      isLike: !this.data.isLike
    });
  },
  // 跳到购物车
  toCar:function() {
    wx.navigateTo({
      url: '../cart/cart'
    })
  },
    checkGoods: function() {
    this.setData({
      isShow: true,
    })
  },
  myshopCar:function(e) {
    wx.switchTab({
      url: '../ShoppingCart/sc'
    })
  },
  // 立即购买
  immeBuy() {
   wx.navigateTo({
     url: '../ShoppingOrder/so',
   })
  },
  showModal: function(e) {
    this.setData({
      index: e.currentTarget.id
    })
    var _this = this;
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
      delay: 0
    })
    _this.animation = animation
    animation.translateY(300).step()
    _this.setData({
      animationData: animation.export(),
      showPop: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      _this.setData({
        animationData: animation.export()
      })
    }.bind(_this), 50)
  },
  // 隐藏底部弹层
  hideModal: function () {
    var _this = this;
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: "ease",
      delay: 0
    })
    _this.animation = animation
    animation.translateY(300).step()
    _this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      _this.setData({
        animationData: animation.export(),
        showPop: false
      })
    }.bind(this), 200)
  },
  boxchange:function(e){
    this.setData({
      num:e.target.dataset.num
    })
  },
  boxchange2: function (e) {
    this.setData({
      icon: e.target.dataset.icon
    })
  },
  fook:function(e){
    if(this.data.index==0){
      wx.showToast({
        title: '已添加至购物车'
      }),
      this.setData({
        showPop:false
      })
    }else{
      wx.navigateTo({
        url: '../ShoppingOrder/so',
      })
    }
  }
})
