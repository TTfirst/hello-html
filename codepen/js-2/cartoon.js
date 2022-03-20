/* function cartoon(obj, target, callback) {
    clearInterval(obj.timer);//当使用一个按钮来控制他时,需要先把原先的定时器清除
    obj.timer = setInterval(function () {//使用对象
        var step = (target - obj.offsetLeft) / 10;//控制速度
        step > 0 ? step = Math.ceil(step) : step = Math.floor(step);//有可能是负数，就要向下取整
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // if (callback) {
            //     callback();
            // }第一种方法
            callback && callback();
        }
        else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 30)
} cartoon(ul, -index * focusHeight); */
//************************* */
function cartoon(obj, target, callback) {//实现动画必须要给盒子添加定位，否则将无法实现
    clearInterval(obj.timer);//如果有一个点击事件，这样就会出现bug，我们在开启定时器之前先清除这个定时器，这样就只会调用一次定时器，而不会一直重复调用定时器
    obj.timer = setInterval(function () {//设置定时器
        var step = (target - obj.offsetTop) / 10;
        step > 0 ? step = Math.ceil(step) : step = Math.floor(step);
        if (obj.offsetTop == target) {
            clearInterval(obj.timer);
            // if (callback) {
            //     callback();
            // }第一种方法，调用回调函数，如果你有则调用，没有则不调用
            callback && callback();//都为真则执行
        }
        else {
            obj.style.top = obj.offsetTop + step + 'px';//这是由快到慢
        }
    }, 30)
}