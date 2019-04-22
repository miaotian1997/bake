//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglist:[], //轮播图片
    products:[] //推荐学堂图片
  },
  //轮播九宫格
  loadMore:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/imglist',
      success:(res)=>{
        //console.log(res.data.data);
        var rows=this.data.imglist.concat(res.data.data);
        //console.log(rows);
        this.setData({
          imglist:rows, //保存数据
        });
      }
    })
  },
  //推荐学堂图片
  mouth:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/products',
      success:(res)=>{
        //console.log(res.data.data);
        var rows = this.data.products.concat(res.data.data);
        //console.log(rows);
        this.setData({
        products:rows, //保存数据
        });
      }
    })    
  },
  //跳转到对应的详情
  details: function (e) {
    var aa = e.target.dataset.list
    wx.navigateTo({
      url: '/pages/details/details?id=' + aa,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
    this.mouth();
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
  