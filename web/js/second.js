/**
 * Created by Administrator on 2017/5/24.
 */
var jq = jQuery.noConflict();
jq(document).ready(function () {
    var lstColor; //ul >li 下默认的字体颜色
   jq("#nav li a").hover(function () {
       lstColor=jq(this).css("color");
       jq(this).css({"color":"red","cursor" :"pointer"})
   },function () {
       jq(this).css({"color":lstColor,"cursor" :"pointer"});
   })
})

