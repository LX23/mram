/**
 * Created by hxsd on 2016/8/11.
 */
//------------------------------轮播图插件--------------------------------
$(function(){
    var ul=$("#ul_pic");
    $("#left").click(function(){
        //将第一张放在最后面
        var first=ul.find("li:eq(0)");//找到第一张图片
        //ul.find("li:animated").stop().appendTo(ul).css("margin-left","0px");//点击之前停止上一个动画
        if(ul.find("li:animated").length>0){
            return
        }
        first.animate({"margin-left":"-219px"},"slow",function(){//设置动画
            ul.append(first);//将第一张插到最后
            first.css("margin-left","0px");
        });
    });

    $("#right").click(function(){
        //将最后一张放在最前面
        var last=ul.find("li:last");//找到最后一张图片
        //ul.find("li:animated").stop().css("margin-left", "0px");//点击之前停止上一个动画
        if(ul.find("li:animated").length>0){
            return
        }
        ul.prepend(last);//把最后一张插到最前面
        last.css("margin-left","-219px");//将插到最前面的那张图片放到盒子外面去
        last.animate({"margin-left":"0px"},"slow");//设置动画
    });

    function scroll_news(){
        var firstNode = $('.banner_img img');
        firstNode.eq(0).animate({
            "margin-left":"-100%"
        },1000, function(){
            $(this).css("margin-left","0px");
            $(this).clone().appendTo($(this).parent()).show();
            $(this).remove();
        });
    }
    var timer="";
    timer=setInterval(scroll_news,2000);
    var banner=$(".banner");
    banner.mousemove(function(){
        $(".banner_left,.banner_right").stop().fadeIn(200);
        clearInterval(timer);
    });
    banner.mouseout(function(){
        $(".banner_left,.banner_right").stop().fadeOut(200);
        timer=setInterval(scroll_news,2000);
    });
    $(".banner_left").click(function(){
        scroll_news();
    });
    $(".banner_right").click(function(){
        //将最后一张放在最前面
        var last=$(".banner_img").find("img:last");//找到最后一张图片
        //ul.find("img:animated").stop().css("margin-left", "0px");//点击之前停止上一个动画
        if($(".banner_img").find("img:animated").length>0){
            return
        }
        $(".banner_img").prepend(last);//把最后一张插到最前面
        last.css("margin-left","-100%");//将插到最前面的那张图片放到盒子外面去
        last.animate({"margin-left":"0px"},"slow");//设置动画
    });

    //选项卡切换
    run("tabs");
    run("tab1");
    run("tab2");


    js_tab("_box_");

    $('#marquee6').kxbdSuperMarquee({
        isMarquee:true,
        isEqual:false,
        scrollDelay:50,
        controlBtn:{up:'#goUM',down:'#goDM'},
        direction:'up'
    });



});











































