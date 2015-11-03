/**
 * Created by albert on 15-11-1.
 */
// 主要是cookie上的操作

$(function () {

    //判断cookie
    if($.cookie().id !=undefined && $.cookie().user != undefined){
        //用cookie缓存 显示信息
        $(".tips-reg-login").hide()

    }else{
        $(".tips-reg-login").show();
    }

})