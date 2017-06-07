Page({
    data:{},
    onLoad:function(){
        var that = this;
        // 轮播图的请求
        wx.request({
          url: 'https://www.ucaitop.com/douBanServer/GetMovies?type=coming_soon',
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {"Content-Type":"application/json"}, // 设置请求的 header
          success: function(res){
            // success
            var sliderData = res.data.result;
            that.setData({
                sliderData:sliderData
            })
          }
        })

        // 正在上映的请求
        wx.request({
          url: 'https://www.ucaitop.com/douBanServer/GetMovies?type=in_theaters',
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {"Content-Type":"application/json"}, // 设置请求的 header
          success: function(res){
            // success
            var moviesOn = res.data.result;
            that.setData({
                moviesOn:moviesOn
            })
          }
        })
        // 即将上映的请求
        wx.request({
          url: 'https://www.ucaitop.com/douBanServer/GetMovies?type=coming_soon',
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            // success
            var moviesComing = res.data.result;
            console.log(moviesComing);
            that.setData({
              moviesComing:moviesComing
            })
          },
          fail: function(res) {
            // fail
          },
          complete: function(res) {
            // complete
          }
        })


        wx.request({
          url: 'https://www.ucaitop.com/douBanServer/GetMovies?type=top250',
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            // success
            var moviesBest = res.data.result;
            console.log(moviesBest);
            that.setData({
              moviesBest:moviesComing
            })
          },
          fail: function(res) {
            // fail
          },
          complete: function(res) {
            // complete
          }
        })
    }
})