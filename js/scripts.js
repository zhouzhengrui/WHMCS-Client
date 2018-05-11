// jQuery ready
jQuery(document).ready(function($) {

    // nprogress开始
    // NProgress.configure({
    //     showSpinner: false,
    //     speed: 300
    // });
    // NProgress.start();

    // pjax nprogress
    // $(document).on("pjax:start", function() {
    //     NProgress.start();
    //     $("main").removeClass("main-fadein");
    // });
    $(document).on("pjax:end", function() {
        NProgress.done();
        $("main").addClass("main-fadein");
        $("main").scrollTop(0);
        $("body.modal-open").removeClass();
        $(".modal-backdrop").remove();
        // tooltip
        $('[action="tooltip"]').tooltip();
        // tab
        $('[action="tab-body"]').tabbedContent();
        // waves
        Waves.init();
        Waves.attach('button.button, a.button');
    });

    // main滚动事件
    $('main').scroll(function(){
        $('[action="date"]').blur();
        $('.layui-laydate').remove();
    });

    // highcharts 全局设置
    Highcharts.setOptions({
        colors: [
            '#ffc000', '#27c24c', '#7266ba', '#18C29C', '#f05050', '#E67E22', '#eac459', '#ff5b77'
        ],
        xAxis: {
            gridLineWidth: -1,
        },
        credits: {
            enabled: false // 取消版权
        },
        tooltip: {
            useHTML: true // 使用html结构
        },
    });


    // 右侧边栏按钮激活样式
    $("#modal-sidebar").on("show.bs.modal", function() {
        $("#modal-sidebar-button").addClass("active");
    })
    $("#modal-sidebar").on("hide.bs.modal", function() {
        $("#modal-sidebar-button").removeClass("active")
    })

    // tooltip
    $('[action="tooltip"]').tooltip();


    // waves
    Waves.init();
    Waves.attach('button.button, a.button');

    // 窗口加载完成
    $(window).on("load", function() {
        // nprogress完成
        // NProgress.done();
        // 主导航滚动条

    });

});

// toast
function toast(message, duration, position, align) {
    if (typeof(position) != "undefined" && position != "") {
        position = "toast-" + position;
    } else {
        position = "";
    }
    if (typeof(align) != "undefined" && align != "") {
        align = "align-" + align;
    } else {
        align = "";
    }
    duration = duration || 3000;
    duration = isNaN(duration) ? 3000 : duration;
    var m = document.createElement('div');
    m.setAttribute("class", "toast " + position + " " + align);
    m.innerHTML = message;
    document.body.appendChild(m);
    setTimeout(function() {
        m.setAttribute("class", "toast show " + position + " " + align);
        setTimeout(function() {
            m.setAttribute("class", "toast  " + position + " " + align);
            setTimeout(function() {
                document.body.removeChild(m);
            }, 300);
        }, duration);
    }, 100);
}

// jQuery
jQuery(document).ready(function($) {

    // button
    $('.button').on('tap', function() {
        $(this).removeClass('active').addClass('active');
        var set = setTimeout(function() {
            $('.button').removeClass('active');
        }, 100)
    });

    // button wave
    $('.button-wave').on("tap", function() {
        $(this).removeClass('wave').addClass('wave');
        var set = setTimeout(function() {
            $('.button-wave').removeClass('wave');
        }, 500)
    });

    // label
    $('.label-cancel').on('tap', function() {
        $(this).removeClass('active').addClass('active');
        var set = setTimeout(function() {
            $('.label-cancel').removeClass('active');
        }, 100)
    });

    // image lazyload
    // $('img.lazyload').lazyload({
    //     container: $('.scroller'),
    //     threshold: 200,
    //     effect: 'fadeIn'
    // });

    // radio
    $('label.item').on('tap', function() {
        $(this).siblings(':radio').prop('checked', false);
        $(this).find(':radio').prop('checked', true);
    });

});
