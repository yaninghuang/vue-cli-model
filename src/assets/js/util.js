/**
 * @author yaninghuang<黄亚宁>
 * @email 1036616721@qq.com
 * @create date 2018-06-29 17:37:00
 * @modify date 2018-06-29 17:37:00
 * @desc [description]
*/


export default{
    getQueryString: (key) => {
        // 获取URL中?之后的字符
        var strArr = location.href.split('?');

        var str = '';
        if (strArr.length == 2) {
            str = strArr[1];
        } else {
            return '';
        }

        // 以&分隔字符串，获得类似name=xiaoli这样的元素数组
        var arr = str.split("&");
        var obj = new Object();

        // 将每一个数组元素以=分隔并赋给obj对象    
        for (var i = 0; i < arr.length; i++) {
            var tmp_arr = arr[i].split("=");
            obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
        }
        return obj[key];
    },

    //随机生成 字符串
    randomString: (len) => {
        var len = len || 32;
        var pwd= '';
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        var maxPos = $chars.length;
        for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    },

    getNow:(time) => {
        var now = '';
        var myDate = new Date();
        var xq = myDate.getDay();
        var year = myDate.getFullYear(); //获取当前年
        var month = myDate.getMonth() + 1 < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1; //获取当前月
        var date = myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate(); //获取当前日
        var h = myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours(); //获取当前小时数(0-23)
        var m = myDate.getMinutes() < 10 ? '0' + myDate.getHours() : myDate.getHours(); //获取当前分钟数(0-59)
        var s = myDate.getSeconds() < 10 ? '0' + myDate.getHours() : myDate.getHours();
        if(time == 'year'){
            now = year;
        }
        else if(time == 'month'){
            now = month;
        }
        else if(time == 'day'){
            now = date;
        }
        else if(time == '星期'){
            now = xq;
        }
        else if(time == '小时'){
            now = h;
        }
        else if(time == '分'){
            now = m;
        }
        else if(time == '秒'){
            now = s;
        }
        else if(time == 'time'){
            now = h +':' + m + ":" + s;
        }
        else if(time == 'date'){
            now = year + '-' + month + "-" + date;
        }
        else if(time == 'now'){
            now = year + '-' + month + "-" + date + " " + h + ':' + m + ":" + s;
        }
        return now;
    },

    //倒计时
    timer: (yuyinTime) => {
        let t = '';
        t = setTimeout(function () {
            if (yuyinTime > 1) {
                yuyinTime--;
                $('.syTime').html(yuyinTime);
                timer(yuyinTime);
            }
            else {
                $('.yuyin').find('.floatOn').removeClass('floatOn').addClass('floatOff');
                $('.yuyin .time').hide().find('.syTime').html('0');
            }
        }, 1000);
    }

}