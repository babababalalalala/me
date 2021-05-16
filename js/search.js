window.addEventListener('load', function () {
function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetTop) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetTop == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.top = obj.offsetTop + step + 'px';
    },15);
}

    var sidebar = document.querySelector('.sidebar');
    var dl = sidebar.querySelector('dl');
    var classify = sidebar.querySelector('.classify');
    var search = document.querySelector('.search');


    sidebar.addEventListener('mouseenter', function () {
        animate(dl, 30);
        dl.style.display = 'block';
    });
    sidebar.addEventListener('mouseleave', function () {
        animate(dl, -120);
        dl.style.display = 'none';
    });

    var search1 = document.querySelector('.search');
    var input = search1.querySelector('input');
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

    // $.ajax({
    //     type: "post",
    //     url: "http://127.0.0.1:8000/jQery-server",
    //     data: { a=100, b=200 },
    //     dataType: "json",
    //     success: function (data1) {
    //       console.log(dada1);
    //     },
    // });
    
    var column = document.querySelector('.column');
    var search2 = column.querySelector('.search');
    var content = document.querySelector('.content');
    var ul = content.querySelector('ul');
    var li = ul.querySelectorAll('li');
    var img = ul.querySelectorAll('img');
    var h4 = ul.querySelectorAll('h4');


      var url = 'http://vtmer.cn/search';
    // 1.创建对象
    var xhr = new XMLHttpRequest();
    // 2.初始化 设置请求方法和 url
    xhr.open("GET", url, true);
    // 3.发送
    xhr.send();
    // 4. 事件绑定 处理服务端返回的结果
            // on when 当...的时候
            // readystate 是 xhr 对象中的属性， 表示状态 0 1 2 3 4
            // change 改变
    xhr.onreadystatechange = function () {
        // 判断(服务端返回了所有的结果)
        if (xhr.readyState === 4) {
            // 判断响应状态码 200 404 403 401 500
            // 2xx 成功
            if (xhr.status >= 200 && xhr.status < 300) {
                //处理结果 行 头 空行 体
                //1．响应行
                // console.log(xhr.status); //状态码
                // console.log(xhr.statusText); //状态字符串
                // console.log(xhr.getAllResponseHeaders()); //所有响应头
                // console.log(xhr.response); //响应体
                var data1 = JSON.parse(xhr.response);
                console.log(data1);
                console.log(data1.bookInfo[1].cover);
                ul.innerHTML =
                    // 'for (i = 0;i <8; i++) {
                '<li><div class="image"><img src = "${data1.bookInfo[1].cover}" /></div><div class="star">${data1.bookInfo[1].socre}</div><h4>${data1.bookInfo[1].book}</h4><h4>作者</h4></li>'
                // console.log(data1);
                //     li[i]img[0].src = data1.bookclass.bookInfoli[i].cover;
                //    li[i] img[1].src = data1.bookclass.bookInfoli[i].socre;
                //     li[i]h4[0].innerHTML = data1.bookclass.bookInfoli[i].ahthor;
                //    li[i] h4[1].innerHTML = data1.bookclass.bookInfoli[i].book;
                // }'
            }
        }
    }
    })
