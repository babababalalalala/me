window.addEventListener('load', function () {

    var focus = document.querySelector('.focus');

    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
     // 创建一个小li
     var li = document.createElement('li');
            // 把小li插入到ol里面
    ol.appendChild(li);
    // 记录当前小圆圈的索引号 通过自定义属性来做
        li.setAttribute('index', i)
        
     var focusWidth = focus.offsetWidth;
    li.addEventListener('click', function () {
            // 将所有的li 清除current 类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        this.className = 'current';

        var index = this.getAttribute('index');
        
        
        // 当我们点击了某个小圆圈时，就要把这个小圆圈的索引号给num和circle
        num = index;
        circle = index;

        animate(ul,-index * focusWidth);
        })
    }
    // 把ol里面的第一个小li设置类名为current
    ol.children[0].className = 'current';

    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 自动轮播图
    var num = 0;
    var circle = 0;
    var auto = document.querySelector('.auto')
    auto.addEventListener('click', function () {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        if (circle == ol.children.length - 1) {
            circle = 0;
        }
        circle++;
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前小圆圈的current类名
        ol.children[circle].className = 'current';
        animate(ul, -num * focusWidth);

    })
    var timer = setInterval(function () {
        auto.click();
    }, 2500);
    
    
    focus.addEventListener('mouseenter', function () {
        clearInterval(timer);
        timer = null;  //清除定时器变量
    })
    focus.addEventListener('mouseleave', function () {
        timer = setInterval(function () {
        auto.click();
    }, 2500); 
    })

    var search = document.querySelector('.search');
    var input = search.querySelector('input');
    input.addEventListener('focus', function () {
        if (this.value == '请搜索') {
            this.value = '';
        }
    })
    input.addEventListener('blur', function () {
        if (this.value == '') {
            this.value = '请搜索';
        }
    })
})