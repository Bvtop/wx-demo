var app=getApp();
Page({
    data:{
        subTitle:'请在此输入内容',
        movies:[],
        search:'',
        loading:false,
        hasMore:false
    },
    // input框触发的事件
    handleSearch:function(e){
        var that=this;
        // e.detail.value:获取输入框的值
        this.inputValue=e.detail.value;
        console.log(this.inputValue);
        wx.request({
        url: 'https://api.douban.com/v2/movie/search?q='+this.inputValue,
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
           header: {
               "Content-Type":"json"
           }, // 设置请求的 header
          success: function(res){
            // success
            console.log(res.data);
            var data = res.data.subjects;
            if(data.length){
                that.setData({
                    movies:data,
                    subtitle:data.title,
                    loading:false
                })
            }else{
                that.setData({
                    hasMore:false,
                    loading:false
                })
            }
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