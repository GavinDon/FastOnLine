/**
 * Created by liNan on 2017/5/22.
 */
var jq = jQuery.noConflict();
jq(document).ready(function () {
    jq("#dbClick").dblclick(function () {
        jq(this).hide();
        setInterval(function () {
            alert("i")
               } ,3000)
    })
    jq("#image").click(function () {
        jq(this).hide();
    })
    /**
     *鼠标事件
     */
    /*   jq("#my_mouse_enter").mouseenter(function () {
     jq(this).css({"color": "blue"});
     }).mouseleave(function () {
     jq(this).css({"color": "red"});
     }).mousedown(function () {
     jq(this).innerHTML = "我被按在水里了";
     }).mouseup(function () {
     jq(this).innerHTML = "呼 终于出来 了";
     })*/
    /**
     * 使用hover 代替 mouseEnter 与mouseLeave
     */
    jq("#my_mouse_enter").hover(function () {
        jq(this).css({"color": "green"});
    }, function () {
        jq(this).css({"color": "red"});
    })
    /**
     * focus blur当元素失去焦点时，发生 blur 事件。
     */
    jq("#account,#psw").focus(function () {
        jq(this).css({"background-color": "#c2c2c2"})
            .blur(function () {
                jq(this).css({"background-color": "#ffff"});
            });
    })
    /**
     * fade_in fade_out ...
     */
    jq("#fade").click(function () {
        jq(this).fadeTo("slow", 0.5, null, null);
        jq(this).html("<b style='background-color: blueviolet'>我们的 button</b>")
        jq(this).html(function () {
            return "<b style='border-color: brown'>希望你好好的</b> "
        });
        var mUrl = "http://v.juhe.cn/toutiao/index?type=top&key=bc05474dd386731c3ffc5946620ec1a6";
        jq.get(mUrl, function (data, status) {
            window.alert(status)

        });
    })
    jq("#request").click(function () {
        $.ajax({
            type:"GET",
            url:"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20%3D%202151330&format=json",
            dataType:"json",
            success:function(data){
                var abc = JSON.stringify(data,null," ");
                console.log(abc);
                alert(abc);
            },
            error:function(def){
                alert("json数据出错：" + def.status);
            }
        }).done(function (data) {
            alert('成功, 收到的数据: ' + JSON.stringify(data));
        }).fail(function (xhr, status) {
            alert('失败: ' + xhr.status + ', 原因: ' + status);
        }).always(function () {
            alert('请求完成: 无论成功或失败都会调用');
        });

    });
    /**
     * input 输入框内内容变化时 onchange 不会触发只有在失去焦点的时候才会触发
     */
    jq("#year").on('input', function () {
        var mValue = jq(this).val();
        //能被4整除且不能被100整除
        //或
        //能被100整除且能被400整除
        if (mValue.length == 4) {
            if ((mValue % 4 == 0 && mValue % 100 != 0) || (mValue % 100 == 0 && mValue % 400 == 0)) {
                window.alert('润年')
            } else {
                window.alert('平年')
            }
        }
    });
    jq("#next").on('click',function () {
    })

})
