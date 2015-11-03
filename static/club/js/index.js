/**
 * Created by albert on 15-10-29.
 */

$(function(){

    //背景图片的个数
    $.LQC_BACKGROUNDS_COUNT = 12;

    //加载页面时候的效果
    loadPage();


    //点击登陆按钮
    $("#tips-login-button").click(function(){
        $(".jumbotron").hide();
        $("#dia-login").fadeIn("slow");
    })

    //点击注册按钮
    $("#tips-reg-button").click(function(){
        SignUpDialog();
    })

    //还没有账号，注册去
    $("#login2reg").click(function () {
        $("#dia-login").fadeOut();
        $("#dia-reg").fadeIn("slow");
    })

    //已经有账号？登陆去
    $("#reg2login").click(function () {
        $("#dia-reg").fadeOut();
        $("#dia-login").fadeIn("slow");
    })

    //先不注册
    $("#reg-cancel").click(function () {
        $("#dia-reg").hide();
        $(".jumbotron").fadeIn("slow");
    })

    //右边导航固定
    //TODO 函数有问题

    //$(window).scroll(function(){
    //    var dist_to_nav = $(".right-nav").scrollTop();
    //    if(dist_to_nav>=$('#navbar').height()){
    //        $(".right-nav").css({"position": "fixed"})
    //    }else{
    //        $(".right-nav").css({"position": "relative"})
    //    }
    //})



    /****************************
    * 主要上面调用的函数逻辑
    *
    * **********函数部分*********/

    //
    function loadPage(){
        //console.log($.cookie);
        //背景图片随机变换
        $(".mybody").css(
            'background-image', $.getRandomImageUrl()
        );
        //$("body").css('background-image', url("../../image/background/main_bg_4.jpg"))
        //$("body").css('background-image','url(\' \"../../image/background/main_bg_'+"5"+ '.jpg)\'');
        $("#editor").wangEditor()
            .html("<p>欢迎登陆游戏圈</p>");
    }

    // 弹出注册窗口
    function SignUpDialog() {
        //显示注册页面
        $(".jumbotron").hide();
        $("#dia-reg").fadeIn("slow");

        //初始化自动补全
        $('#reg-mail').autocomplete({
            delay: 0,
            autoFocus: true,
            //邮箱补全筛选
            source: function (request, response) {
                //response是一个方法，该方法改变下拉的补全列表的值
                hosts = ["@gmail.com", "@qq.com", "@163.com", "@126.com",
                    "@yahoo.com", "@yahoo.com.cn", "@sina.com", "@sohu.com"
                ];

                beforeAt = request.term.slice(0, request.term.indexOf("@"));

                afterAt = request.term.slice(request.term.indexOf("@"));

                emails = $.map(hosts, function (value, index) {
                    return beforeAt + value;
                });

                emails = request.term.indexOf("@") == -1 ?
                    $.map(hosts, function (value, index) {
                        return request.term + value;
                    }) :
                    $.grep(emails, function (value, index) {
                        return value.indexOf(afterAt) > -1;
                    });
                emails = [request.term].concat(emails);
                response(emails);
            },
        });
    }
})


