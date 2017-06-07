
var app=getApp();
Page({
    data:{
        userInfo:{},
        y_menus:[
            {title:'观影记录'},
            {title:'消息通知'},
            {title:'我的卡券'},
            {title:'吐槽一下'}
        ],
        x_menus:[
            {title:'收藏',icon:'../../img/collection.png'},
            {title:'夜间',icon:'../../img/eve.png'},
            {title:'设置',icon:'../../img/set.png'}
        ]
    },
    onLoad:function(){
        var that=this;
        app.getUserInfo(function(userInfo){
            that.setData({
                userInfo:userInfo
            })
        })
    }
})