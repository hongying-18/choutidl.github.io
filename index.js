
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
    // 获取body
    let abody = document.querySelector('.abody');
    // 获取shell
    let ashell = document.querySelector('.shell');
    // 获取小圈
    let xiaoQvan = document.querySelector('.switch_circle-t')

    var n = 1;
    // 获取用户名
    var username = document.getElementById("username").value;
    // 获取密码
    var password = document.getElementById("password").value;
    var passwordpd = document.getElementById("password");
    // 获取确认密码
    var cdpassword = document.getElementById("qrpassword").value;
    var qrpasswordpd = document.getElementById("qrpassword");
    // 获取账号
    var userAccount = document.getElementById("userAccount").value;
    // 获取邮箱
    var userEmail = document.getElementById("userEmail").value;
    // 获取邮箱验证码
    var verificationCode = document.getElementById("verificationCode").value;
    // 判断条件是否合格
    var isQualified = 0

    //     ##             #  #   #         #  #    #            #       
    //     #    ##    #   ###### ######    ###### #######     #     ##   #  
    //    ##############    ##   ## ##        ##  ##  ##      ############# 
    //   ###   ## #  ##     ##   ## ##        ##  ######      ##  #   #     
    //    #  ## # ## #     ##    ## ##     #  ##  # # #       ##  ##  ## #  
    //     # ## ###        ##    ## ##     #####    ##        ############# 
    //    ## ####  # ##   ##   # ## ## #   ## #  #  ##  #     ##  ##  ##    
    //    #  ######## ##  ###### ########  ##    #########    ##  ######    
    //     ## ######  #    ## ## #    ##   ##  # ## ## ##     ##  #   # #   
    //   ##     #          ## ##      ##   ######## ## ##     ## #########  
    //     #    ##   #     ## ##    # ##      ## ########     ##  ##   ##   
    //     ##   ##   ##    ## ##########      ## #  ## #     ##    ## ##    
    //     ##   ##   ##    ## ##      ##      ##    ## #     ##     ###     
    //     ##   ##   ##    #####   #  ##   #  ##    #####    #     ## ###   
    //     ############    ## ##    ###     ### #####  ###  #     ##   #### 
    //     #         #               #       #   #      #       ##       #  
    let mimaqiangduwb = document.getElementById("mimaqiangduwb");
    passwordpd.addEventListener('input', function (e) {
        function getPasswordStrength(e) {
            let strength = 0;
            strength += Math.floor(e.target.value.length / 4);

            if (/[a-z]/.test(e.target.value)) { // 包含小写字母
                strength += 2;
            }

            if (/[A-Z]/.test(e.target.value)) { // 包含大写字母
                strength += 2;
            }

            if (/\d/.test(e.target.value)) { // 包含数字
                strength += 2;
            }

            if (/[^A-Za-z0-9]/.test(e.target.value)) { // 包含特殊字符
                strength += 2;
            }

            return strength;
        }
        const mimaqiangdu = getPasswordStrength(e)
        console.log(`Password strength:` + Math.floor(mimaqiangdu));
        if (mimaqiangdu === 2) {
            console.log('及弱密码');
            mimaqiangduwb.innerHTML = '及弱密码'
        }
        if (mimaqiangdu === 3) {
            mimaqiangduwb.innerHTML = '弱密码'
            console.log('弱密码');
        }
        if (mimaqiangdu === 4) {
            mimaqiangduwb.innerHTML = '中密码'
            console.log('中密码');
        }
        if (mimaqiangdu > 5) {
            mimaqiangduwb.innerHTML = '强密码'
            console.log('强密码');
        }
    })


    //     ##               #       #           #  #               #          #           #  
    //     ##        #     ##     ###         ### ###             ##         ############## 
    //     # # ########    ##     ##          ##  ##  #           ##         ##   ## #  ##  
    //  ####### ##  ##     ##    ##  #       ##   ##  ##          ##         ##  ###### ##  
    //      ##  ##  ##     #  # ##   ##      ##   ##  ##       #  ###        ##  #   #  ##  
    //     ## # ##  ##   ###############    ###   ## ##        ## ## #       ## # # ##  ##  
    //    ### ####  ##     # ## #     #     ###   ## ##       ##  ## ##      ###  ###   ##  
    //    ##### ##  ##     # ##            ####   ####        ##  ##  ##     ##  ## ##  ##  
    //   #####  ##  ##    ## #  #     #    # ##   ###        ##   ##  ###    ## ##   #####  
    //   # ## ####  ##    ####  ########  #  ##   ##         ##   ##   ###   ###  ##  # ##  
    //  #  ## # ##  ##     ##   ##   ##      ##  ###        ##    ##    ##   ##    ##   ##  
    //     ##   ##  ##      ##  ##   ##      ##  ###   #   #      ##    #    ##  ##     ##  
    //     ##  ##   ##     # ## ##   ##      ## # ##   #          ##         ##    ###  ##  
    //     ##  ##   ##    ## ## ##   ##      ##   ##   ##         ##         ##     #   ##  
    //     ## ##  ####    #  #  #######      ##   #######       ####         #############  
    //     # #      #    #      #    #       #     #####          #          #          #   

    // 初始化小图位置
    var xiaoQvanLeft = xiaoQvan.offsetLeft;
    var xiaoQvanTop = xiaoQvan.offsetTop;
    var ZFKLeft = ashell.offsetLeft;
    var ZFKTop = ashell.offsetTop;
    var w0 = -(ZFKLeft + xiaoQvanLeft);
    var h0 = -(ZFKTop + xiaoQvanTop);
    xiaoQvan.style.backgroundPosition = w0 + 'px' + ' ' + h0 + 'px';


    //         ##                                ##              #  #               #          #           #  
    //     #    ##    #                           ##    #       ### ###             ##         ############## 
    //    ##############    #         #     ##############      ##  ##  #           ##         ##   ## #  ##  
    //   ###  ## ##  ##     ############      # ##  ##         ##   ##  ##          ##         ##  ###### ##  
    //    #  ##   ####      ##       ##      #####  ###        ##   ##  ##       #  ###        ##  #   #  ##  
    //    ###  ##  ##       ##       ##      ## ##  ## ##     ###   ## ##        ## ## #       ## # # ##  ##  
    //     #  ##     #      ##       ##     ##  ##  ##  ##    ###   ## ##       ##  ## ##      ###  ###   ##  
    //     ############     ##       ##     #   ##  ### #    ####   ####        ##  ##  ##     ##  ## ##  ##  
    //     ##  ## # ##      ##       ##    #  ##########     # ##   ###        ##   ##  ###    ## ##   #####  
    //     ## ########      ##       ##        #     ##     #  ##   ##         ##   ##   ###   ###  ##  # ##  
    //     ####  ## ##      ##       ##         ##  ##         ##  ###        ##    ##    ##   ##    ##   ##  
    //     ## ####  ##      ##       ##          ####          ##  ###   #   #      ##    #    ##  ##     ##  
    //     ##  #### ##      ###########           ##           ## # ##   #          ##         ##    ###  ##  
    //     ## ## #  ##      ##       ##          ## ##         ##   ##   ##         ##         ##     #   ##  
    //     ###########      #        #         ##    #####     ##   #######       ####         #############  
    //     #        #                       ###        ##      #     #####          #          #          #   
    window.addEventListener("resize", function () {
        console.log("窗口大小已改变");
        xiaoQvanLeft = xiaoQvan.offsetLeft;
        xiaoQvanTop = xiaoQvan.offsetTop;
        ZFKLeft = ashell.offsetLeft;
        ZFKTop = ashell.offsetTop;
        w0 = -(ZFKLeft + xiaoQvanLeft);
        h0 = -(ZFKTop + xiaoQvanTop);
        xiaoQvan.style.backgroundPosition = w0 + 'px' + ' ' + h0 + 'px';

    });




    //        ##                 #   #      #  
    //        ###               ##  ######### 
    //         #                ##  ##        
    // #################        ##  ##    #   
    //        ##              ##############  
    //        ##                ##  ##  ##    
    //        ##               ###  ##  ##    
    //        ##               #### ########  
    //  ###############        #######  ##    
    //        ##              # ## ###  ##    
    //        ##              # ##  ##  ## #  
    //        ##                ##  ######### 
    //        ##                ##  ##        
    //        ##                ##  ##     #  
    // #####################    ##  ######### 
    //                         #   #         

    // 阻止浏览器的默认行为 这里是取消鼠标点击连接的默认事件
    let getButtons1 = (e) => {
        console.log('你正在点击主框注册')
        e.preventDefault()
        username = document.getElementById("username").value;
        // 获取密码
        password = document.getElementById("password").value;
        // 获取账号
        userAccount = document.getElementById("userAccount").value;
        // 获取邮箱
        userEmail = document.getElementById("userEmail").value;
        verificationCode = document.getElementById("verificationCode").value;
        alert(userAccount)
        $.ajax(
            {
                url: "http://localhost:8080/user/register",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({
                    "userAccount":userAccount,
                    "userPassword": password,
                    "userName": username,
                    "userEmail": userEmail,
                    "verificationCode": verificationCode
                }),
                success: function (resp) {
                    //code: 更新dom对象
                    console.log("成功");
                    console.log(resp);
                    document.getElementById("tiaozhuandenglu").click();
                },
                error: function () {
                    alert("请求错误")
                }
            }
        )
    }

    let getButtons2 = (e) => {
        console.log('你正在点击主框登录')
        e.preventDefault()
        $.ajax(
            {
                url: "http://localhost:8080/user/login",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({
                    "userAccount":$("#loginzh").val(),
                    "userPassword": $("#loginpassword").val(),
                }),
                success: function (resp) {
                    //code: 更新dom对象
                    console.log("成功");
                    console.log(resp);
                   alert(resp.message)
                },
                error: function () {
                    alert("请求错误")
                }
            }
        )
    }


    // #    #      #   #      #  
    // #########   ##     ##  ######### 
    //             ##     ##  ##        
    //  ######     ##     ##  ##    #   
    //  ##  ##  #  ##   ##############  
    //  ##  ##  ## ##     ##  ##  ##    
    //  ######  ## ##    ###  ##  ##    
    // #      # ## ##    #### ########  
    // ########### ##    #######  ##    
    // ## ## ## ## ##   # ## ###  ##    
    // ## ## ## ## ##   # ##  ##  ## #  
    // ########    ##     ##  ######### 
    // ## ## ##    ##     ##  ##        
    // ## ## ##  # ##     ##  ##     #  
    // ########   ###     ##  ######### 
    // #     #     #      #   #         

    // 副框的所有内容
    let changeForm = (e) => {
        if (n === 0) {
            xiaoQvan.style.backgroundPosition = w0 + 'px' + ' ' + h0 + 'px';
            n = 1;
            xiaoQvanLeft = xiaoQvan.offsetLeft;
            xiaoQvanTop = xiaoQvan.offsetTop;
            ZFKLeft = ashell.offsetLeft;
            ZFKTop = ashell.offsetTop;
            w0 = -(ZFKLeft + xiaoQvanLeft);
            h0 = -(ZFKTop + xiaoQvanTop);
        } else {
            xiaoQvanLeft = xiaoQvan.offsetLeft;
            xiaoQvanTop = xiaoQvan.offsetTop;
            ZFKLeft = ashell.offsetLeft;
            ZFKTop = ashell.offsetTop;
            w0 = -(ZFKLeft + xiaoQvanLeft);
            h0 = -(ZFKTop + xiaoQvanTop);
            xiaoQvan.style.backgroundPosition = (w0 - 410) + 'px' + ' ' + (h0 + 75) + 'px';
            n = 0;
        }


        //         #           ##############               #     ##     #         ### ######### 
        //         ##          ##   ## #  ##   ###############    ##  #  ##  #     ##    ##  ##  
        //         ##          ##  ###### ##         ##           ## ##########   #####  ##  ##  
        //         ##          ##  #   #  ##         ##         ####### #   ##    ##     ##  ##  
        //         ##  #       ## # # ##  ##         ##           ## #  ##  #     #      ##  ##  
        //         ######      ###  ###   ##         ####         ##    ##   #   #####   ##  ##  
        //         ##          ##  ## ##  ##         ## ###       ## ##########  # ##  ########  
        //         ##          ## ##   #####         ##  ###      ###  ##  ##      ##    ##  ##  
        //         ##          ###  ##  # ##         ##   #      ###   ##  ##    ######  ##  ##  
        //         ##          ##    ##   ##         ##         ####  ##  ##       ##    ##  ##  
        //         ##          ##  ##     ##         ##         # ##    ###        ##    ##  ##  
        //         ##          ##    ###  ##         ##           ##     ###       ## #  #   ##  
        //         ##     #    ##     #   ##         ##           ##    ## ###     ###   #   ##  
        //   ###############   #############         ##          ###   ##   ###   ###   #    ##  
        //                     #          #          #            #  ##      #     #   ######### 
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

    }

    //     #         #      #      #     
    //     ##   #######     ##     ##    
    //     ##    ## ##     ###### ###### 
    //  #  ##  # ## ##     ## ## ## ##   
    //  ########### ##    ##   ###   ##  
    //  ## ## ## ## #    #  ##  #     #  
    //  ## ## ## ###        ##  ######## 
    //  ## ## ## ## #    #########   ##  
    //  ## ## ## ##  #      ##  ##   ##  
    //  ######## ##  ##    #### #######  
    //  ## ## ## ##  ##    #######   ##  
    //  ## ## ## ### ##   #### ########  
    //  ## ## ## ## ##    # ##  ##   ##  
    //  ## ## ## ##  #   #  ##  ##   ##  
    //  ######## ##         ##  #######  
    //  #     ##  #         #   #    #   
    var time = 300;
    let youxiang = (e) => {
        e.preventDefault()
        console.log('你正在点击邮箱')
        vCodeB.disabled = true;
        vCodeB.innerHTML = time + "秒后可发送";
        var timer = setInterval(function () {
            if (time == 1) {
                clearInterval(timer);
                vCodeB.disabled = false;
                vCodeB.innerHTML = "获取验证码";
                time = 300;
            } else {
                vCodeB.innerHTML = time - 1 + "秒后可发送";
                time--;
            }
        }, 1000)
        userEmail = document.getElementById("userEmail").value;
        //$.post(url, 请求参数, success函数, dataType)
        $.post("http://localhost:8080/user/sendEmail",{"emailAddress":userEmail},function (resp) {
            console.log("发送成功");
            console.log(resp);
        })


    }

    //     ##               #                ##            #     #                  #     #  ## #   #     
    //     ##  #            ##               ##    #       ## #  ##         ##########     # ## ##  ##    
    //     ######           ##  #      ##############      ## ## ##                ##      ######   #     
    //     ##           ##########       #   ##   #       ##  ## ## #             ##      ######## ##  #  
    //  #  ##   #           ##           ###########      #   ########           ##         ####   ###### 
    //  ##########          ##           ##  ##  ##      ### ##  ##         ##  ##  #      #### #  # ##   
    //  ##     ##           ##    #      ##########      ### #   ##       #  ##### ####    # ## # ## ##   
    //  ##     ##     ##############     #   ##  #      # ###    ##       ##  # ####  #   #  #    #  ##   
    //  ##     ##           ##          ############      ##     ##  #    ##   ####   ##     ##  # # #    
    //  #########       #   ##  #            ##   ##      ## ##########   ##  ######  ##  #######  ###    
    //  #      #        ##  ##  ##     ###############    ##     ##       ## ## ## ## ##    #  #    #     
    // #  #  #  #       ##  ##  ##           ##   ##      ##     ##       ##### ##  ####   ## ##   ###    
    // ## ## ##  #      ##  ##  ##      ############      ##     ##       ## # ###  # ##    ###    ####   
    // ##   ## ## ##    ##  ##  ##           ##   #       ##     ##       ##    #     ##     #### ##  ##  
    // #    ## ##  ##   ##########         ####           ##     ##       ##############    ## # ##   ### 
    // #     #  #   #    #       #            #            #      #        #           #   ##    #      #  
    let shell = (e) => {
        // 主框两个登录按钮
        for (var i = 0; i < allButtons.length; i++) {
            if (i === 0)
                allButtons[i].addEventListener("click", getButtons1);
            else
                allButtons[i].addEventListener("click", getButtons2);
        }

        // 副框两个登录按钮
        for (var i = 0; i < switchBtn.length; i++)
            switchBtn[i].addEventListener("click", changeForm)
        vCodeB.addEventListener('click', youxiang);
    }
    // if ( )
    shell();
})