// pages/ShoppingCart/sc.js
Page({
  data:{
    goods: [
      {
      GID:1008,
        storeName:'华为商城',
        storen:'中国大陆',
        storepicture:'data:image/png;base64,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',
        goodsTitle:'HUAWEI Mate 20 Pro (UD) 8GB+128GB 全网通版（翡冷翠）',
        picture:'https://res.vmallres.com/pimages//product/6901443261611/group//78_78_1539242990422.png',
        goodsNumber:'1',
        goodsPrice:'5300',
        sum:'5300',
        selected:false
      },
      {
      GID: 1010,
        storeName: 'Apple Store 官方旗舰店',
        storen: '美国',
        storepicture:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAEkklEQVR4Xu2cgbEMQRCG+0WACBABIkAEiAARIAJEQAaI4BEBIkAEyIAIqK9qR+3b2r3pnundu247VVf3qt7szs43f89098zemeyli8BZ19X7xZIV4G0RuSIi79ce4ywAL4vIQxG5LyJ3BmifR3+vxjE6wGsi8lxEHs0Q2gFWZPNERF4fqPNuAayrGiMqEHM9V5jnSxF54Upr5mbRAALvo4jcVIC5KyKfFPW6qkQDiPJYKDSFVfiXpmJPnUgAn4rIK2VnPxhAK285Xy0KQEz3u4jwrSmPReStpmJvnSgAWQxwVzTlp4jg3mxSogBEfVoom6mPEYoAkBX3i1JOm8195XkiANSa77fBN1x95R0PZgSA+HIkBw6Vo8CLYsK1+Q+zJRbeVHmRTPjPgvRYbfENV09ZHZJ+BBOeAiTLgo+3iZ9XW7wiAGQO/DHEtajtKKa6BHILgEQPN4YoApcEAF9F5PfwXRtk7f/xE2mHNmiTb9qhPQYB5bqXtQDSGfJ1ZIdrmRM6h7JYDFCapdwb2iDBUHO0AUk75AndsjTeAAFGyFXS6hYY1EUxJEmBuWSq3Luk77Wx8fQ5APjMwwK8ANIRMiVzqXUrROoXtaAYTP2SQWmW9hgsQDYXD4CYKHm6mgk1P+TKF6J6kq9Ni1MvQOCRIW41pZXZqG/P3PugxaR7AGaBVyijwOtWJbYCRHFkSKKa7ZI0Medbat12pLPeOC4Yluddsy6LFYuKaSevRYGW/NyaHfa8N3E1viQKNJUWgMSg+GFZSlcqzAqQOY/0UpbSBQ8IVoCWrcVTh8ycR1RjNttxx6wAiQyIPzMUIpBDZ2tUfbQCXEpuqho7oUpuW58WgMidqCNDcdv6tADMMv8x97mFnhaAzBfk+KIX13ODFoCa7cUIcN3M1+rG1LYXI8DjGYl1u1yXVjcmywpssbqqKCw32wHO4NwBVjV2uMIOcAdoJrAvImZkFy84mhuTZRE5miOdBSA7cGweuRTLIpIlEgGcmxlbAGbKBSIGNtO7iwWg9qxy90NtdAMXFVoAcu6F7cwshY10XBrribAL/bcAzLahBIiuczHWbAz1GTVOSmUqzIeci9nkcFGmhWQsgmYlWkyYBrOk9ecsCAWysJhO/VsBZpwHpzAxad52Vx0DtgIsEy+HubMXFRtVpQmpzGZcuqqOl1sA/g9mrE55tQBklLKd0Bobmen3ZloBZjqlMJ3LTSFeK0AazZSdKRDNZ2Z6AGZUoUl9LaHcnM9Uexk6irtjVp8HwEwqNKvPA2CWFZmjvrWXImctqWcOLDfELyQYj5ylaf6dLQ+A0ZMMXT+V4gUwqlvDYUssqCkX6DUHRjblZtMtnfZUIPfkbR9efY1QjnJKXwMmwu6dOttS67C3Akt7p5xscIPnPQdOB6tViUzspNX54B6VbcfySxz4a+Qkr9bUMfP/Jmf5UDtrKbC0yZzI6f5aZ8fQtHsSBSRt1HxQUlRAdzsbvdYiMjdYKIdNeT7jrQC8fzI65WdPGgT17xLuTViJS1Ji8zIoTCeq/Y2WB1hbgS3PFOqaHWDncO0AOwH+BbfZy1HbzkKwAAAAAElFTkSuQmCC',
         
        goodsTitle: 'Apple/苹果 iPhone 8',
        picture:'https://img.alicdn.com/imgextra/i3/1917047079/O1CN01v87qqU22AEE2edObl_!!1917047079.png',
        goodsNumber: '1',
        goodsPrice: '5095',
        sum: '5095',
        selected: false
      }
  ],
    minusStatuses: ['disabled', 'disabled', 'normal', 'normal', 'disabled']
  },
  goodsdel: function (e) {
    this.data.goods.splice(e.target.id.substring(3), 1);
    // 更新data数据对象  
    if (this.data.goods.length > 0) {
      this.setData({
        goods: this.data.goods
      })
      wx.setStorageSync('goods', this.data.goods);
    } else {
      this.setData({
        goods: this.data.goods
      })
      wx.setStorageSync('goods', []);
    }
  },
    bindMinus: function(e) {
      var index = parseInt(e.currentTarget.dataset.index);//得到下标
      var goodsNumber = this.data.goods[index].goodsNumber;
      // 如果只有1件了，就不允许再减了
      if (goodsNumber > 1) {
         goodsNumber --;
      }
      // 只有大于一件的时候，才能normal状态，否则disable状态
      var minusStatus = goodsNumber <= 1 ? 'disabled' : 'normal';
      // 购物车数据
      var goods = this.data.goods;
      goods[index].goodsNumber = goodsNumber;
      // 按钮可用状态
      var minusStatuses = this.data.minusStatuses;
      minusStatuses[index] = minusStatus;
      // 将数值与状态写回
      this.setData({
        goods: goods,
        minusStatuses: minusStatuses
      });
      this.sum()
  },
  bindPlus: function(e) {
    var index = parseInt(e.currentTarget.dataset.index);
    
    var goodsNumber = this.data.goods[index].goodsNumber;
    // 自增
    goodsNumber ++;
    
    // 只有大于一件的m时候，才能normal状态，否则disable状态
    var minusStatus = goodsNumber <= 1 ? 'disabled' : 'normal';
    // 购物车数据
    var goods = this.data.goods;
    goods[index].goodsNumber = goodsNumber;
    // 按钮可用状态
    var minusStatuses = this.data.minusStatuses;
    minusStatuses[index] = minusStatus;
     console.log(minusStatuses[index])
    // 将数值与状态写回
    this.setData({
      goods: goods,
      minusStatuses: minusStatuses
    });
    this.sum()
  },
  bindCheckbox: function(e) {
    //绑定点击事件，将checkbox样式改变为选中与非选中
    //拿到下标值，以在goods作遍历指示用
    var index = parseInt(e.currentTarget.dataset.index);
    //原始的icon状态
    var selected = this.data.goods[index].selected;
    var goods = this.data.goods;
    // 对勾选状态取反
    goods[index].selected = !selected;
    // 写回经点击修改后的数组
    this.setData({
     goods: goods,
    });
    this.sum();
  },
  
   bindSelectAll: function(e) { 
   // 环境中目前已选状态 
   var selectedAllStatus = this.data.selectedAllStatus;
    // 取反操作 
    selectedAllStatus = !selectedAllStatus; 
    // 购物车数据，关键是处理selected值 
    var goods = this.data.goods; 

    // 遍历 
    for (var i = 0; i < goods.length; i++) { 
        goods[i].selected = selectedAllStatus;
    } 
       this.setData({ 
        selectedAllStatus: selectedAllStatus,
         goods: goods,
      }); 
       this.sum()
   },
   bindCheckout: function(e) {
      // 初始化toastStr字符串
      var toastStr = GID;
      // 遍历取出已勾选GID
      for (var i = 0; i < this.data.goods.length; i++) {
        if (this.data.goods[i].selected) {
          toastStr += this.data.goods[i].GID;
          toastStr += ' ';
        }
      }
      //存回data
      this.setData({
        toastHidden: false,
        toastStr: toastStr
      });
    },
    bindToastChange: function(e) {
      this.setData({
        toastHidden: true
      });
  },
  tobuy: function () {
    wx.navigateTo({
      url: '../ShoppingOrder/so'
    })
  },
  //总价
  sum: function(e) {
    var goods = this.data.goods;
    // 计算总金额
    var total = 0;
    for (var i = 0; i < goods.length; i++) {
      if (goods[i].selected) {
      total += goods[i].goodsNumber * goods[i].goodsPrice;
      }
    }
    // 写回经点击修改后的数组
    this.setData({
    goods: goods,
    total: '￥' + (total).toFixed(2)
    });
    },
  onLoad:function(options){
    this.bindSelectAll;
    wx.setNavigationBarTitle({
      title: '购物车(6)'
    })
    var that = this
    that.setData({
    })
    this.sum()
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})