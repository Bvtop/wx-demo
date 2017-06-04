//index.js
//获取应用实例
Page({
 
  onLoad:function(){
    this.loadInfo();

  },
  // 先获取经纬度
  loadInfo:function(){
    var page = this;
      wx.getLocation({
        type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
        success: function(res){
          // success
            var latitude =res.latitude;
            var longitude =res.longitude;
            console.log(latitude,longitude);
            page.loadCity(latitude,longitude);
        }
      })
  },
  // 根据经纬度定位当前是城市
  loadCity:function(latitude,longitude){
      var page=this;
      wx.request({
        url: 'http://api.map.baidu.com/geocoder/v2/?&location='+ latitude +','+longitude+'&output=json&pois=1&ak=WPqu5UPIasgmpudDTKur5Wszh0DEkh3P',
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
         header: {
           "Content-type":"application/json"
         }, // 设置请求的 header
        success: function(res){
          // success
          console.log(res.data);
          var city = res.data.result.addressComponent.city;
          city=city.replace("市","");
          page.setData({
            city:city
          });
        page.loadWeather(city);
        },

      })
  },
  // 根据当前城市获取天气
  loadWeather:function(city){
      var page=this;
      wx.request({
        url: 'http://api.avatardata.cn/Weather/Query?key=63a9304db7ba458ba8a761ba0ba10755&cityname='+city,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          "Content-type":"application/json"
        }, // 设置请求的 header
        success: function(res){
          // success
          console.log(res);
          var data = res.data.result;
          // 获取当天的天气
          var today = data.realtime;
          // 获取当天的生活指数
          var life = data.life;
          // 未来的天气情况
          var future = data.weather;
          // 未来六天的天气
          var futureInfo = future.slice(1,7);
          page.setData({
            today:today,
            life:life,
            future:future,
            futureInfo:futureInfo
          })
        }
      })
  }
})
