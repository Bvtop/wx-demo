var app = getApp();
Page({
    data:{

    },
    onLoad:function(){
        var that = this;
        wx.request({
          url: 'https://www.ucaitop.com/WeiPiaoServer/GetInfo?type=image',
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
           header: {
               "Accept":"application-json"
           }, // 设置请求的 header
          success: function(res){
            // success
            console.log(res.data);
            var data = res.data.images;
            that.setData({
                image:data
            })
          }
        }),
        // 请求电影信息
        wx.request({
          url: 'https://www.ucaitop.com/WeiPiaoServer/GetInfo?type=wp',
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
           header: {
               "Accept":"application-json"
           }, // 设置请求的 header
          success: function(res){
            // success
            console.log(res.data);
            var data = res.data.result;
            that.setData({
                movies:data
            })
          }
        })
    }
})