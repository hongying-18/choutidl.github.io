
window.addEventListener('DOMContentLoaded', function () {
    console.log('加载完毕')
    // 获取总副框
    let switchCtn = document.querySelector("#switch-cnt");
    // 获取登录和注册的副框
    let switchC1 = document.querySelector("#switch-c1");
    let switchC2 = document.querySelector("#switch-c2");
    // 上下两个圆圈
    let switchCircle = document.querySelectorAll(".switch_circle");
    // 副框的登录和注册两个按钮
    let switchBtn = document.querySelectorAll(".switch-btn");
    // 获取创建账号主框
    let aContainer = document.querySelector("#a-container");
    // 获取登录账号主框
    let bContainer = document.querySelector("#b-container");
    // 获取主框登录和注册按钮
    let allButtons = document.querySelectorAll(".submit");
    // 获取 获取邮箱验证码按钮
    let vCodeB = document.querySelector('.v_code_b');
    // 获取bidy
    let abody = document.querySelector('.abody');
    // 获取shell
    let ashell = document.querySelector('.shell');
    // 获取小圈
    let xiaoQvan = document.querySelector('.switch_circle-t')
    // 得到 switch_circle-t距离switch之间的距离
    var xiaoQvanLeft = xiaoQvan.offsetLeft;
    var xiaoQvanTop = xiaoQvan.offsetTop;
    console.log(xiaoQvanTop)
    console.log(xiaoQvanLeft)
    var ZFKLeft = ashell.offsetLeft;
    var ZFKTop = ashell.offsetTop;
    console.log(ZFKTop);
    console.log(ZFKLeft);
    var w0 = -(ZFKLeft + xiaoQvanLeft);
    var h0 = -(ZFKTop + xiaoQvanLeft);
    // xiaoQvan.style.backgroundPosition = ('-100px -100px');

    xiaoQvan.style.backgroundPosition = w0 + 'px' + ' ' + h0 + 'px';

    // 阻止浏览器的默认行为 这里是取消鼠标点击连接的默认事件
    let getButtons = (e) => {
        console.log('你正在点击主框')
        e.preventDefault()
        // 发送AJAX POST请求
        // 1. 创建AJAX核心对象
        var xhr = new XMLHttpRequest();
        // 2. 注册回调函数
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    document.getElementById("mydiv").innerHTML = this.responseText
                } else {
                    alert(this.status)
                }
            }
        }
        // 3. 开启通道
        xhr.open("POST", "http://localhost:8080/user/register", true)

        // 4. 发送请求
        // 怎么模拟AJAX提交form表单呢？设置请求头的内容类型(这行代码非常关键，是模拟form表单提交的关键代码。)
        // 设置请求头的内容类型时，必须在open之后。
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

        // 放到send()这个函数的小括号当中的数据，会自动在请求体当中提交数据。
        // 使用JS代码获取用户填写的用户名和密码
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var userAccount = document.getElementById("userAccount").value;
        var userEmail = document.getElementById("userEmail").value;
        var verificationCode = document.getElementById("verificationCode").value;
        this.alert(userAccount)
        //xhr.send("注意格式：放在这里的数据就是在请求体当中提交的，格式不能随便来，还是需要遵循HTTP的协议：name=value&name=value&name=value")
        xhr.send("userAccount=" + userAccount + "&password=" + password + "&userName=" + username + "&userEmail=" + userEmail + "&verificationCode=" + verificationCode)

    }


    let changeForm = (e) => {
        let n = 0;
        console.log(xiaoQvanLeft)
        console.log(xiaoQvanTop)
        console.log(ZFKTop);
        console.log(ZFKLeft);

        console.log('你正在点击副框')
        // 修改类名
        switchCtn.classList.add("is-gx");
        // 定时器
        setTimeout(function () {
            switchCtn.classList.remove("is-gx");
        }, 1500)
        // 如果有此元素删除 如果没有添加
        switchCtn.classList.toggle("is-txr");
        switchCircle[0].classList.toggle("is-txr1");
        switchCircle[1].classList.toggle("is-txr1");
        switchC1.classList.toggle("is-hidden");
        switchC2.classList.toggle("is-hidden");
        aContainer.classList.toggle("is-txl");
        bContainer.classList.toggle("is-txl");
        bContainer.classList.toggle("is-z");
        if (n) {
            xiaoQvan.style.backgroundSize('-100px -100px');
            n = 1;
        } else {
            xiaoQvan.style.backgroundSize('w1 h1');
            n = 0;
        }
    }
    let youxiang = (e) => {
        e.preventDefault()
        console.log('你正在点击邮箱')

    }
    // 将浏览器宽度高度赋值给背景图片
    // abody.style.backgroundSize(' ');
    // xiaoQvan.style.backgroundSize('webChuangKou_w webChuangKou_h');
    // 点击切换 点击第一个的时候才会切换 其他的不会切换
    let shell = (e) => {
        // 主框两个登录按钮
        for (var i = 0; i < allButtons.length; i++) {
            allButtons[i].addEventListener("click", getButtons);
        }

        // 副框两个登录按钮
        for (var i = 0; i < switchBtn.length; i++)
            switchBtn[i].addEventListener("click", changeForm)
        vCodeB.addEventListener('click', youxiang);
    }
    shell();
})