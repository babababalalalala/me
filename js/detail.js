window.addEventListener('load', function () {
    var middle = document.querySelector('.middle');
    var dl = middle.querySelector('dl');
    var header = document.querySelector('.header');
    $.ajax({
        type: "post",
        url: "http://vtmer.cn/class",
        dataType: "json",
        success: function (xhr) {
          console.log(xhr);
        },
    });
  
})