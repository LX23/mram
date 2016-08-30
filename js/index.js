/**
 * Created by hxsd on 2016/8/9.
 */
$(function(){
    $(".particulars").click(function(){
        $(this).toggle().next("em").toggle();
        if($(".particulars").hide()){
            $(".warm_mein_mein_jq ul li:last-child").hide()
        }
    })
    $(".pack").click(function(){
        $(this).parent().toggle()
        if($(".shijian").hide()){
            $(".particulars").show()
            $(".warm_mein_mein_jq ul li:last-child").show()
        }
    })
    $("#particulars").click(function(){
        $(this).toggle().next("em").toggle();
        if($(this).hide()){
                $(".laise").css({
                    "bottom":"-48px",
                    "background":"#ffffff"
                })
        }
    })
    $("#pack").click(function(){
        $(this).parent().toggle()
        if($(".shijian").hide()){
            $("#particulars").show()
            $(".laise").css({
                "bottom":"0px",
                "background":""
            })
        }
    })
//    (ಥ _ ಥ)(ಥ _ ಥ)
    $(".specialist_top_left").click(function(){
        var ul = $(".specialist_list ul");
        var first = ul.find("li:first");
        first.finish().animate({
                "margin-left":"-165px"
        },function(){
            ul.append(first)
            first.css("margin-left","0px")
        })
    })


    $(".specialist_top_right").click(function(){
        var ul = $(".specialist_list ul");
        var last = ul.find("li:last");
        var first=ul.find("li:first")
        first.finish().animate({"margin-left":"165px"},function(){
            ul.prepend(last)
            first.css("margin-left","0px")
        })
    })
//    (ಥ _ ಥ)(ಥ _ ಥ)
    $(".control span").hover(function(){
        $(this).addClass("hover").children("em").show().parent().siblings().removeClass("hover").children("em").hide()
    })
//    (ಥ _ ಥ)(ಥ _ ಥ) 经典项目
    $(".massage li").hover(function(){
        $(".massage li").eq($(this).index()).addClass("hover").siblings().removeClass("hover");
        $(".knead").hide().eq($(this).index()).show();
    })
//特大幻灯
    function scroll_news(){
        var firstNode = $('.huandeng li');
        firstNode.eq(0).animate({
            "margin-left":"-100%"
        },1000, function(){
            $(this).css("margin-left","0px")
            $(this).clone().appendTo($(this).parent()).show();
            $(this).remove();

        });
    }
    setInterval(scroll_news,2000);
    $(".banner").mousemove(function(){
        $(".jiantouzuo,.jiantouyou").stop().fadeIn(1000)
    })
    $(".banner").mouseout(function(){
        $(".jiantouzuo,.jiantouyou").stop().fadeOut(1000)
    })
//    (ಥ _ ಥ)(ಥ _ ಥ) 健康知识
    function scroll(){
        var firstNode = $('.administrivia_pic');
        firstNode.eq(0).animate({
            "margin-top":"-100%"
        },1000,function(){
            $(this).css("margin-top","0px")
            $(this).clone().appendTo($(this).parent()).show();
            $(this).remove();
        });
    }
    setInterval(scroll,2000);
//    (ಥ _ ಥ)(ಥ _ ಥ) 侧边轮播
    var PicTotal = 5;// 当前图片总数
    var CurrentIndex;// 当前鼠标点击图片索引
    var ToDisplayPicNumber = 0;// 自动播放时的图片索引
    $(".num li").click(DisplayPic);
    function DisplayPic() {
// 测试是父亲的第几个儿子
        CurrentIndex = $(this).index();
// 删除所有同级兄弟的类属性
        $(this).parent().children().removeClass("hover")
// 为当前元素添加类
        $(this).addClass("hover");
// 隐藏全部图片
        var Pic = $("ul.slide");
        $(Pic).children().hide();
// 显示指定图片
        $(Pic).children("li").eq(CurrentIndex).show();
    }
    function PicNumClick() {
        $(".num li").eq(ToDisplayPicNumber).trigger("click");
        ToDisplayPicNumber = (ToDisplayPicNumber + 1) % PicTotal;
        setTimeout(PicNumClick,1000);
    }
    setTimeout(PicNumClick,1000);
})