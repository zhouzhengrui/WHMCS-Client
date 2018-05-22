// jQuery ready
jQuery(document).ready(function($) {
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

    // tooltip
    $('[action="tooltip"]').tooltip();

    // waves
    Waves.init();
    Waves.attach('button.button, a.button');

    // 窗口加载完成
    $(window).on("load", function() {
        // nprogress完成
        // NProgress.done();
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
