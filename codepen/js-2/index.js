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
        /*   timer = setInterval(function () {
              arrow_down.click();//手动点击
          }, 2500) */
    })
    // 2.生成动态小圈圈
    var ul = document.querySelector("#photo");//根据ul中的li标签来创建ol中的li标签
    var ol = document.querySelector(".circle");
    // console.log(move.offsetWidth);//获取的就是自身盒子的宽度，包括左右padding，左右border
    var fouseHeight = move.offsetHeight;//200px
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
    //第二个轮播图
    var move_two = document.querySelector(".move_two");
    var arrowL = document.querySelector(".arrow_left");
    var arrowR = document.querySelector(".arrow_right");
    move_two.addEventListener('mouseenter', function () {
        arrowL.style.display = 'block';
        arrowR.style.display = 'block';
        clearInterval(timer);
        timers = null;
    })
    move_two.addEventListener('mouseleave', function () {
        arrowL.style.display = 'none';
        arrowR.style.display = 'none';
        /*  var timers = setInterval(function () {
             arrowR.click();//手动点击,控制自动的方向
         }, 2500) */
    })
    //设置小圆圈
    var ols = move_two.querySelector(".circle_two");//ol
    var uls = move_two.querySelector(".play_picture");//ul
    var num_two = 0;
    var circle_one = 0;
    var moveLeft = move_two.offsetWidth;//262
    var flags = true;
    console.log(moveLeft);
    for (var i = 0; i < uls.children.length; i++) {//看ul中li标签的个数设置ol中的li
        var lis = document.createElement("li");
        lis.setAttribute('index', i);//设置索引号
        ols.appendChild(lis);
        //给ol中的li标签添加点击事件
        console.log(ols.children.length);
        lis.addEventListener("click", function () {
            for (var i = 0; i < ols.children.length; i++) {
                ols.children[i].className = ' ';
            }
            this.className = 'change_two';
            var index_two = this.getAttribute('index')//得到当前点击li标签的索引号
            num_two = index_two;
            circle_one = index_two;//注意变量名字
            cartoon1(uls, -index_two * moveLeft);
        })
    }
    ols.children[0].className = 'change_two';
    var add = uls.children[0].cloneNode(true);
    uls.appendChild(add);
    //点击右箭头使之移动
    arrowR.addEventListener('click', function () {
        if (flags) {
            flags = false;
        }
        if (num_two == uls.children.length - 1) {
            uls.style.left = 0;//uls回到第一张，left就是等于0
            num_two = 0;
        }
        num_two++;
        //要移动起来
        cartoon1(uls, -num_two * moveLeft, function () {
            flags = true;
        });
        circle_one++;
        if (circle_one == ols.children.length) {
            circle_one = 0;
        }
        exclude_one();
    })
    //点击左箭头使之移动
    arrowL.addEventListener('click', function () {
        if (flags) {
            flags = false;
        }
        if (num_two == 0) {
            num_two = uls.children.length - 1;
            uls.style.left = -num_two * moveLeft + "px";
        }
        num_two--;
        cartoon1(uls, -num_two * moveLeft, function () {
            flags = true;
        });
        circle_one--;
        if (circle_one < 0) {//是可以等于0，但是小于0时，就换数字
            circle_one = ols.children.length - 1;
        }
        exclude_one();
    })
    //排它思想函数
    function exclude() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = " ";
        }
        ol.children[circle].className = 'change';
    }
    function exclude_one() {
        for (var i = 0; i < ols.children.length; i++) {
            ols.children[i].className = " ";
        }
        ols.children[circle_one].className = 'change_two';
    }
    //设置一个定时器函数
    var timer = setInterval(function () {
        arrow_down.click();//手动点击
    }, 2500)
    var timers = this.setInterval(function () {
        arrowR.click();
    }, 3000)
})
