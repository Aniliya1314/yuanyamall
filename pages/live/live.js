var start;
Page({ 
  data: {
    livetype: ['关注','精选', '时尚', '国际', '美妆', '母婴', '居家','服饰','特色'] ,
    currentTab: 1,
    "livers": [
      {
        "id": 1,
        "livestatus": "livenow",
        "anchorimg":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552626039280&di=45117958281fc4a1b80004e0b75aa429&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201512%2F13%2F20151213102616_rCiEx.thumb.700_0.jpeg",
        "anchorname":"你的哆啦A梦",
        "people": 4450,
        "likes": 111,
        "wangts": 0,
        "imgurl":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2789507741,1029991928&fm=26&gp=0.jpg",
        "livename":"中古彩宝首饰来一波",
        "livedescribe":"彩宝首饰",
        "address":"日本",
        "time":"13:00"
      },
      {
        "id": 2,
        "livestatus":"livenow",
        "anchorimg": "/image/anchorimg/2.jpg",
        "anchorname": "奥利奥扭不开呀",
        "people": 52,
        "likes": 0,
        "wangts": 1478,
        "imgurl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552626818001&di=a686fcf494771c68638ef4c0e5e6018c&imgtype=0&src=http%3A%2F%2Fcrawl.nosdn.127.net%2F8b279a0a2891635ce90583cdedc831be.jpg",
        "livename": "新货到！折扣仅限今天！",
        "livedescribe": "品牌箱包，包邮，可自动下单",
        "address": "加拿大",
        "time": "14:00"
      },
      {
        "id": 3,
        "livestatus": "livenext",
        "anchorimg": "http://h.hiphotos.baidu.com/zhidao/pic/item/8b13632762d0f7034e9eed1009fa513d2797c5ca.jpg",
        "anchorname": "junhuaye",
        "people": 0,
        "likes": 0,
        "wangts":554,
        "imgurl": "https://imgcache.dealmoon.com/thumbimg.dealmoon.com/dealmoon/a20/52b/998/3af6f16e863e4fb5c9b3bcb.jpg_300_0_13_eb7e.jpg",
        "livename": "Champion春季新款直播",
        "livedescribe": "Champion到今年刚好100年的历史了，今年会出几款100周年纪念款！今天我就会给大家介绍2款纪念款不容错过哟",
        "address": "美国",
        "time": "下午14:30"
      },
      {
        "id": 4,
        "livestatus": "livenext",
        "anchorimg": "http://5b0988e595225.cdn.sohucs.com/images/20180609/9f921df74b684cca8dc234bcd53e9088.jpeg",
        "anchorname": "霓虹买买买",
        "people": 0,
        "likes": 0,
        "wangts": 286,
        "imgurl": "https://img1.360buyimg.com/n6/jfs/t1/19063/25/9600/363443/5c80bf0eEc809864e/99a1e5f490bcfa6f.jpg",
        "livename": "东京特价中古珠宝来袭",
        "livedescribe": "珠宝达人带大家一起来体验高性价比的日本中古珠宝精品特价。红蓝宝祖母绿戒指项链等等。",
        "address": "日本",
        "time": "21:00"
      }
    ]
  },
 
  liveTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }, 
  onPullDownRefresh() {
    wx.showToast({
      title: 'loading...',
      icon: 'loading'
    })
    console.log('onPullDownRefresh', '下拉刷新')
  },
  liveol: function () {
      wx.navigateTo({
        url: '../live/liveol/liveol'
      })
  }
})