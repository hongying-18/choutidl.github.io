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
// 阻止浏览器的默认行为 这里是取消鼠标点击连接的默认事件
let getButtons = (e) => e.preventDefault()
let changeForm = (e) => {
    // 修改类名
    switchCtn.classList.add("is-gx");
    // 定时器
    setTimeout(function () {
        switchCtn.classList.remove("is-gx");
    }, 1500)
    // 如果有此元素删除 如果没有添加
    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z");
}
// 点击切换 点击第一个的时候才会切换 其他的不会切换
let shell = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons);
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}
window.addEventListener("load", shell);
