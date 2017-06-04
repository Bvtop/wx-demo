var app = getApp();
Page({
    data: {

    },
    onLoad: function () {
        var that = this;
        wx.request({
            url: 'https://www.ucaitop.com/WeiPiaoServer/GetInfo?type=cinema',
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: {
                "Accept": "application-json"
            }, // 设置请求的 header
            success: function (res) {
                // success
                console.log(res.data);
                var data = res.data.cinemas;
                that.setData({
                    cinemas: data
                })
            }
        })
    }
})