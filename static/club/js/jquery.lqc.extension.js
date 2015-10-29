/**
 * Created by albert on 15-10-29.
 */
/*类似于继承了jquery扩展jquery

函数(全局变量不介绍)      功能
 lqcGetUrlParam        获取get请求地址栏的参数




*/
(function($){
    //定义全局变量
    //config
    //每次加载帖子个数
    $.LQC_POST_LOAD_COUNT = 5;
    //每次加载评论数目
    $.LQC_COMMENT_LOAD_COUNT = 3;

    //获取GET请求的参数:正则表达式
    //参考来源：http://www.cnblogs.com/fishtreeyu/archive/2011/02/27/1966178.html
    $.lqcGetUrlParam = function(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)
            return  unescape(r[2]);
        return null;
    }

    //提示窗口
    //TODO 添加图标例如加载图标啥的
    $.showLoadDialog = function(str){
        $('#dia-load').css(
            'background', 'url(../image/...gif) no-repeat 20px center'
        )
            .html(str)
            .dialog('open');
    }

    $.showOKDialog = function(str, func){
        var len = arguments.length; //获取参数个数，爽
        $('#dia-load').css('background', 'url(../image/...gif) no-repeat 20px center')
            .html(str)
            .dialog('open')
        //1s后自动关闭窗口
        setTimeout(function () {
            $('#dia-load').dialog('close')
            if(len==2) func();
        }, 1000)
    }
    $.showErrorDialog = function(str, func){
        var len = arguments.length;
        $('#dia-load').css('background', 'url(image/...gif) no-repeat 20px center')
            .html(str)
            .dialog('open');
        //1s后自动关闭窗口
        setTimeout(function(){
            $('#dia-load').dialog('close');
            if(len==2) func();
        }, 1000)
    }
})(jQuery);

