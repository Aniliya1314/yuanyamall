Page({
  data: { 
    paystyle: ['微信支付','Paypal支付','支付宝','Facebook'],
    payselect:'微信支付',
    modalHidden1: true,
    order:{
    showModalStatus: false,
    appointmentNum: 5,
    hasData: true,
    cid: 1008, 
    freight:'50',
    title: 'HUAWEI Mate20 Pro(UD) 8GB+128GB 全网通版',
    size:'官方标配/翡冷翠',
      image: 'https://img.alicdn.com/imgextra/i1/2838892713/O1CN011VuazdHXcPo1CK3_!!2838892713.jpg_430x430q90.jpg',
    num: '1',
    price: '5300',
    allsum:'5300',
    sum: '5350',
  flag1:'false',
    addressInfoflag:false,

  },
   paypassword:{
     len: 0,
     payType: 'hb',
     checkhb: false,
     checkwx: true,
     checkqb: false,
     pay: false,
     focus: false
   }
  },
  address: function () {
    wx.navigateTo({
      url: '../addressList/addressList'
    })
  },
  binddel: function() {
    wx.redirectTo({
      //目的页面地址
      url: '../PersonalCenter/order/order',
      })
  },
  bindButtonTap: function () {
    var pay = this.data.checkwx;
    if (pay) {

      var timestamp = Date.parse(new Date());
      wx.requestPayment({
        'timeStamp': timestamp,
        'nonceStr': 'asd123123asd',
        'package': '12',
        'signType': 'MD5',
        'paySign': 'stringA&key=192006250b4c09247ec02edce69f6a2d',
        'success': function (res) {
        },
        'fail': function (res) {
        }
      })
    } else {
      this.setData({
        focus: true,
        pay: true
      })
    }
  },
  bindHideKeyboard: function (e) {
    var lens = e.detail.value.length;
    this.setData({
      len: lens
    })
    if (e.detail.cursor == 6) {
      wx.hideKeyboard();
      this.setData({
        focus: false,
        pay: false
      })
    }
  },
 powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },
  powerDrawer1: function (e) {   
    var textmess = e.currentTarget.dataset.paystyle;//得到下标
    this.setData({ payselect: textmess })
    this.setData(
      {
        showModalStatus: false
      }
    );

  },
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 200,  //动画时长
      timingFunction: "linear", //线性
      delay: 0  //0则不延迟
    });

    // 第2步：这个动画实例赋给当前的动画实例
    this.animation = animation;

    // 第3步：执行第一组动画：Y轴偏移240px后(盒子高度是240px)，停
    animation.translateY(240).step();

    // 第4步：导出动画对象赋给数据对象储存
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画
    setTimeout(function () {
      // 执行第二组动画：Y轴不偏移，停
      animation.translateY(0).step()
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
      this.setData({
        animationData: animation
      })

      //关闭抽屉
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)

    // 显示抽屉
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  },

  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  /**
* 显示弹窗
*/
  pay: function () {
    this.setData({
      modalHidden1: false
    })
  },
  /**
   * 点击取消
   */
  modalCancel: function () {
    // do something
    this.setData({
      modalHidden1: true
    })
  },
  /**
   *  点击确认
   */
  modalConfirm: function () {
    // do something
    this.setData({
      modalHidden1: true
    })
    wx.switchTab({
      url: '../PersonalCenter/mine'
    })
  },
})