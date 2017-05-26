/**
 * Created by Administrator on 2017/5/24.
 */
var jq = jQuery.noConflict();
jq(document).ready(function () {
    var lstColor; //ul >li 下默认的字体颜色
    jq("#nav li a").hover(function () {
        lstColor = jq(this).css("color");
        jq(this).css({"color": "red", "cursor": "pointer"})
    }, function () {
        jq(this).css({"color": lstColor, "cursor": "pointer"});
    });
    jq("#scroll p:first").click(function () {
        var imgLength = jq("#scroll ul li").length - 1;
        console.log(imgLength);
        jq("#scroll ul li:eq(0)").slideToggle(1000);

    });
    jq("#scroll p:last").click(function () {
        jq("#scroll ul li:eq(1)").addClass("mBlock").fadeIn(1000).show();
        jq("#scroll ul li:eq(0)").fadeOut(1000).addClass("none").hide();
    });
    function autoPlayBanner() {
        var s=[];
     }

})

