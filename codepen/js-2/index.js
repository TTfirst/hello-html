window.addEventListener('load', function () {
    var move = document.querySelector(".move");
    var arrow_up = this.document.querySelector(".arrow_up");
    var arrow_down = this.document.querySelector(".arrow_down");
    var timer;
    //1.鼠标经过显示左右按钮，鼠标移开隐藏左右按钮
    move.addEventListener('mouseenter', function () {
        arrow_up.style.display = 'block';
        arrow_down.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    move.addEventListener('mouseleave', function () {
        arrow_up.style.display = 'none';
        arrow_down.style.display = 'none';
        timer = setInterval(function () {
            arrow_down.click();//手动点击
        }, 2500)
    })
    // 2.生成动态小圈圈
    var ul = document.querySelector("#photo");//根据ul中的li标签来创建ol中的li标签
    var ol = document.querySelector(".circle");
    // console.log(move.offsetWidth);//获取的就是自身盒子的宽度，包括左右padding，左右border
    var fouseHeight = move.offsetHeight;//200px
    console.log(ul.offsetTop);
    console.log(ul.offsetLeft);
    var num = 0;
    var circle = 0;
    var flag = true;
    // console.log(move.offsetHeight);//获取高度
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement("li");
        li.setAttribute('index', i);//给ol中的li设置索引号
        ol.appendChild(li);

        //给ol中的li标签添加样式，利用排它思想，给小圆圈添加点击事件
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {//排它思想
                ol.children[i].className = '';
            }
            this.className = 'change'//点击的这个改变样式
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            cartoon(ul, -index * fouseHeight);
        })
    }
    ol.children[0].className = "change";//给第一个小圆圈固定的样式
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //给箭头设置点击事件
    var up = document.querySelector(".arrow_up");
    var down = document.querySelector(".arrow_down");
    //点击上箭头开始移动
    up.addEventListener('click', function () {
        if (flag) {
            flag = false;
        }
        if (num == 0) {//
            num = ul.children.length - 1;
            ul.style.top = -num * fouseHeight + "px";
        }
        num--;
        //调用动画函数
        cartoon(ul, -num * fouseHeight, function () {
            flag = true;
        });
        circle--;
        if (circle < 0) {
            circle = ul.children.length - 2;
        }
        exclude();

    })
    //点击下方按钮开始移动
    down.addEventListener('click', function () {
        if (flag) {
            flag = false;
        }
        if (num == ul.children.length - 1) {//
            ul.style.top = 0;
            num = 0;
        }
        num++;
        //调用动画函数
        cartoon(ul, -num * fouseHeight, function () {
            flag = true;
        });
        circle++;
        if (circle == ul.children.length - 1) {//如果不减一个1，那么ul有四个li标签，所以circle会取到3
            circle = 0;
        }
        exclude();

    })
    //排它思想函数
    function exclude() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = " ";
        }
        ol.children[circle].className = 'change';
    }
    //设置一个定时器函数
    var timer = setInterval(function () {
        arrow_down.click();//手动点击
    }, 2500)
})
