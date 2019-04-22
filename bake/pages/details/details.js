// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglist:[],//详情页图片标题
    products:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options)
    var id=options.id
    wx.request({
      url: 'http://127.0.0.1:3000/details',
      data:{id},
      success: (res) => {
        var rows = res.data.data;
        //console.log(rows);
        this.setData({
          imglist: rows, //保存数据
        });
        //console.log(this.data.imglist);
      }
    });
    wx.request({
      url: 'http://127.0.0.1:3000/pre',
      data: { id },
      success: (res) => {
        var rows = res.data.data;
        //console.log(rows);
        this.setData({
          products:rows, //保存数据
        });
        //console.log(this.data. products);
      }
    });

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})