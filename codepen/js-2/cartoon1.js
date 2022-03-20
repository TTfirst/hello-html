function cartoon1(obj, target, callback) {
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
}