
function renJiYanZhengTC(vCodeB, time) {
    let beijing = document.querySelector('.denglu_beijing');
    let queren = document.querySelector('#verification-button');
    beijing.style.display = 'block';
    console.log("wowowow");
    queren.addEventListener('click', function () {



        // 这里的true是前前面判断验证码是否正确的返回值
        if (true) {
            beijing.style.display = 'none';
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
            $.post("http://localhost:8080/user/sendEmail", { "emailAddress": userEmail }, function (resp) {
                console.log("发送成功");
                console.log(resp);
            })


        }


    });
    // return true
}

