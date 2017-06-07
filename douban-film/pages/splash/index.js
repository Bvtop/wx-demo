//index.js
//获取应用实例
var app = getApp()
Page({
    data:{},
    onLoad:function(){
        var that = this;
        wx.request({
          url: 'https://www.ucaitop.com/douBanServer/GetMovies?type=coming_soon',
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {"Content-Type":"application/json"}, // 设置请求的 header
          success: function(res){
            // success
            console.log(res.data);
            var moviesComing=res.data.result;
            // slice()
            var movieC=moviesComing.slice(3,6);
            that.setData({
                movies:movieC
            })
          }
        })
    },
    handleStart:function(){
        wx.switchTab({
          url: '../board/index',
        })
    }
})