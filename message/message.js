// pages/message/message.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    information: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({ pid: options.recommend_id })
    // this.setData({information.headLink: '../../icons/head.jpg'})
    var that = this;
    var id = 13;
    wx.request({
      url: 'https://www.forestj.top:11451/post/get',
      method: 'GET',
      data: {
        postId: id
      },
      success: function (res) {
        if( res.data.status==200 ){
          console.log(res.data)
          that.setData({
            information: res.data.data,
          })
        }
      },
      fail: function (res) {
        if(res.data.status!=200){
          console.log('failed')
        }
      }
    })
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