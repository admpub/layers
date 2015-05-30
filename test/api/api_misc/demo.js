/*! layer demo */

;!function(){

var gather = {
    htdy: $('html, body')
};

//全局配置
layer.config({
	path:'../../src/',
    extend: [
        'extend/layer.ext.js'
        ,'skin/moon/style.css'
    ]
    ,skin: 'layer-ext-moon'
});

//layer.config({skin: 'layui-layer-rim'});

//一睹为快
gather.demo1 = $('#demo1');
$('#chutiyan>a').on('click', function(){
    var othis = $(this), index = othis.index();
    var p = gather.demo1.children('p').eq(index);
    var top = p.position().top;
    gather.demo1.animate({scrollTop: gather.demo1.scrollTop() + top}, 0);
    switch(index){
        case 0:
            var icon = -1;
            (function changeIcon(){
                var index = layer.alert('点击确认更换图标', {
                    icon: icon,
                    shadeClose: true,
                    title: icon === -1 ? '初体验' : 'icon：'+icon
                }, changeIcon);
                if(8 === ++icon) layer.close(index);
            }());
        break;
        case 1:
            var icon = 0;
            (function changeIcon1(){
                var index = layer.alert('点击确认更换图标', {
                    icon: icon,
                    shadeClose: true,
                    skin: 'layer-ext-moon',
                    shift: 5,
                    title: icon === -1 ? '第三方扩展皮肤' : 'icon：'+icon
                }, changeIcon1);
                if(9 === ++icon) {
                    layer.confirm('怎么样，是否很喜欢该皮肤，去下载？', {
                        skin: 'layer-ext-moon'
                    }, function(index, layero){
                        layero.find('.layui-layer-btn0').attr({
                            href: 'http://layer.seaning.com/moon.html',
                            target: '_blank'
                        });
                        layer.close(index);
                    });
                };
            }());
        break;
        case 6:
            layer.open({
                type: 1,
                area: ['420px', '240px'],
                skin: 'layui-layer-rim', //加上边框
                content: '<div style="padding:20px;">即直接给content传入html字符<br>当内容宽高超过定义宽高，会自动出现滚动条。<br><br><br><br><br><br><br><br><br><br><br>很高兴在下面遇见你</div>'
            });
        break;
        case 7:
            layer.open({
                type: 1,
                skin: 'layui-layer-demo',
                closeBtn: false,
                area: '350px',
                shift: 2,
                shadeClose: true,
                content: '<div style="padding:20px;">即传入skin:"样式名"，然后你就可以为所欲为了。<br>你怎么样给她整容都行<br><br><br>我是华丽的酱油==。</div>'
            });
        break;
        case 8:
            layer.tips('Hi，我是tips', this);
        break;
        case 11:
            var ii = layer.load(0, {shade: false});
            setTimeout(function(){
                layer.close(ii)
            }, 5000);
        break;
        case 12:
            var iii = layer.load(1, {
                shade: [0.1,'#fff']
            });
            setTimeout(function(){
                layer.close(iii)
            }, 3000);
        break;
        case 13:
            layer.tips('我是另外一个tips，只不过我长得跟之前那位稍有些不一样。', this, {
                tips: [1, '#3595CC'],
                time: 4000
            });
        break;
        case 14:
            layer.prompt({title: '输入任何口令，并确认', formType: 1}, function(pass){
                layer.prompt({title: '随便写点啥，并确认', formType: 2}, function(text){
                    layer.msg('演示完毕！您的口令：'+ pass +'<br>您最后写下了：'+text);
                });
            });
        break;
        case 15:
            layer.tab({
                area: ['600px', '300px'],
                tab: [{
                    title: '无题',
                    content: '<div style="padding:20px; line-height:30px; text-align:center">欢迎体验layer.tab<br>此时此刻不禁让人吟诗一首：<br>一入前端深似海<br>从此妹纸是浮云<br>以下省略七个字<br>。。。。。。。<br>——贤心</div>'
                }, {
                    title: 'TAB2',
                    content: '<div style="padding:20px;">TAB2该说些啥</div>'
                }, {
                    title: 'TAB3',
                    content: '<div style="padding:20px;">有一种坚持叫：layer</div>'
                }]
            });
        break;
        case 16:
            if(gather.photoJSON){
                layer.photos({
                    photos: gather.photoJSON
                });
            } else {
                $.getJSON('test/photos.json?v='+new Date, {}, function(json){
                    gather.photoJSON = json;
                    layer.photos({
                        photos: json
                    });
                });
            }
        break;
        default:
            new Function(p.text())();
        break;
    }
});

//一往而深
$('#demore').on('click', function(){
    gather.htdy.animate({scrollTop : $('#yiwang').offset().top}, 200);
});
gather.demo2 = $('#demo2');
$('.layer-demolist').on('click', function(){
    var othis = $(this), index = othis.index('.layer-demolist');
    var p = gather.demo2.children('p').eq(index);
    var top = p.position().top;
    gather.demo2.animate({scrollTop: gather.demo2.scrollTop() + top}, 0);
    switch(index){
        case 15:
            layer.tips('上', this, {
                tips: [1, '#000']
            });
        break;
        case 16:
            layer.tips('默认就是向右的', this);
        break;
        case 17:
            layer.tips('下', this, {
                tips: 3
            });
        break;
        case 18:
            layer.tips('在很久很久以前，在很久很久以前，在很久很久以前……', this, {
                tips: [4, '#78BA32']
            });
        break;
        case 19:
            layer.tips('不会销毁之前的', this, {tipsMore: true});
        break;
         default:
            new Function(p.text())();
        break;
    }
});

//API页
gather.api = $('.layer-api');
gather.apiRun = $('.layer-api-run');
(function(){
    var lis = gather.api.find('li'), slecked = 'layer-api-slecked';
    lis.on('click', function(){
        lis.removeClass(slecked);
        $(this).addClass(slecked);
    });
    gather.api.find('h2').on('click', function(){
        var othis = $(this), i = othis.find('.layer-api-ico');
        if(i.hasClass('icon-shousuo')){
            i.addClass('icon-zhankai').removeClass('icon-shousuo');
            othis.next().hide();

        } else {
            i.addClass('icon-shousuo').removeClass('icon-zhankai');
            othis.next().show();
        }
    });
    layer.ready(function(){
        layer.photos({
            photos: '#layer-photos-demo'
        });
    });
}());

gather.skin = function(){
    var index = layer.open({
        type: 1,
        title: 'layer皮肤制作说明',
        skin: 'layui-layer-molv',
        area: '888px',
        content: $('#skinFabu'),
        shadeClose: true,
        btn: ['不大明白', '我知道了'],
        yes: function(){
            layer.confirm('OMG，是我的文档写的太烂了吗？好吧，是否去看看别人是如何制作的？', {
                icon: 8
            }, function(){
                location.href = 'http://layer.seaning.com';
            }, function(){
                layer.closeAll();
            });
        }
    });
    layer.full(index);
}

//发布皮肤
gather.pub = $('#skinPublish');
gather.pub.on('click', gather.skin);
if(gather.pub[0] && location.hash === '#publish'){
    layer.ready(function(){
        gather.skin();
    });
}

//窗口scroll
(function(){
    var conf = {};
    //返回顶部
    conf.gotop = $('.layer_gotop');
    conf.gotop.on('click',function(){
        $('html, body').animate({scrollTop : 0},$(this).offset().top/7);
    });
    conf.log = 0;
    $(window).on('scroll', function(){
        var stop = $(window).scrollTop();
        if(stop >= 60){
            if(!conf.log){
                conf.log = 1;
                conf.gotop.show();
                gather.api.addClass('layer-api-fix');
                gather.apiRun.css('top', 0);
            }
        } else {
            if(conf.log){
                conf.log = 0;
                conf.gotop.hide();
                gather.api.removeClass('layer-api-fix');
                gather.apiRun.css('top', '60px');
            }
        }
        stop = null;
    });
}());

//修饰代码
$('pre').each(function(i){
    var othis = $(this);
    othis.show().laycode({
        title: othis.attr('title') || '对应代码说明',
        height: othis.attr('heg') || 'auto',
        skin: othis.attr('skin') || 0
    });
});

//ie6
if(!-[1,] && !window.XMLHttpRequest){
    layer.ready(function(){
        layer.alert('如果您是用ietest的ie6模式，发现弹出背景一片黑色时，请不用惊慌，这并非layer未作兼容，而是你当前版本的ietest所模拟的ie6环境未对滤镜做支持，标准ie6将不会有此问题，所以请您不要担心。');
    });
}

gather.getDate = function(time){
    return new Date(parseInt(time)).toLocaleString()
};

}();