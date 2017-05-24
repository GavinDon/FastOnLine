<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>封神</title>
    <script src="js/http_code.jquery.com_jquery-3.2.1.js"></script>
    <script src="js/basic_linan.js"></script>
    <link href="css/styles.css" media="screen" rel="stylesheet" type="text/css"/>
    <script>
        //jquery选择器
        $(document).ready(function () {
            $("input[submit]").click(function () {
                alert($(":text").val())
            })
        })

    </script>
</head>
<body>
<marquee direction="up" behavior="scroll" scrollamount="1" scrolldelay="0" loop="-1" width="1000" height="50" bgcolor="#0099FF" hspace="10" vspace="10">
    指整个Marquee对齐方式; (2)behavior:设置滚动的方式: scroll:表示由一端滚动到另一端,会重复,缺陷是不能无缝滚动。 slide:表示由一段滚动到另一端,不会重复...
</marquee>
<input type="text" name="txt" value="text">sd<br>
<input type="submit" name="btn" value="提交">

<p id="dbClick">双击隐藏</p>
<p id="my_mouse_enter" style="color: brown">改变字体颜色</p>
<img src="./image/non.jpg" width="500" height="890" id="image">
用户名：<input type="email" id="account" ></br>
密  码：<input type="password" id="psw">

<button id="fade" name="button" >动画出来</button>
<button id="request" name="button" >get 请求</button>
年份：<input  type="date" id="year" value="年份" >
<input type="button" value="下一页" id="next">
<a href="second.jsp">下一页</a>
<a href="#dbClick">上</a>

</body>
</html>
