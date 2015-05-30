/*! layer demo */

;!function(){

var gather = {
    htdy: $('html, body')
};

//ȫ������
layer.config({
	path:'../../src/',
    extend: [
        'extend/layer.ext.js'
        ,'skin/moon/style.css'
    ]
    ,skin: 'layer-ext-moon'
});

//layer.config({skin: 'layui-layer-rim'});

//һ��Ϊ��
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
                var index = layer.alert('���ȷ�ϸ���ͼ��', {
                    icon: icon,
                    shadeClose: true,
                    title: icon === -1 ? '������' : 'icon��'+icon
                }, changeIcon);
                if(8 === ++icon) layer.close(index);
            }());
        break;
        case 1:
            var icon = 0;
            (function changeIcon1(){
                var index = layer.alert('���ȷ�ϸ���ͼ��', {
                    icon: icon,
                    shadeClose: true,
                    skin: 'layer-ext-moon',
                    shift: 5,
                    title: icon === -1 ? '��������չƤ��' : 'icon��'+icon
                }, changeIcon1);
                if(9 === ++icon) {
                    layer.confirm('��ô�����Ƿ��ϲ����Ƥ����ȥ���أ�', {
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
                skin: 'layui-layer-rim', //���ϱ߿�
                content: '<div style="padding:20px;">��ֱ�Ӹ�content����html�ַ�<br>�����ݿ�߳��������ߣ����Զ����ֹ�������<br><br><br><br><br><br><br><br><br><br><br>�ܸ���������������</div>'
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
                content: '<div style="padding:20px;">������skin:"��ʽ��"��Ȼ����Ϳ���Ϊ����Ϊ�ˡ�<br>����ô���������ݶ���<br><br><br>���ǻ����Ľ���==��</div>'
            });
        break;
        case 8:
            layer.tips('Hi������tips', this);
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
            layer.tips('��������һ��tips��ֻ�����ҳ��ø�֮ǰ��λ����Щ��һ����', this, {
                tips: [1, '#3595CC'],
                time: 4000
            });
        break;
        case 14:
            layer.prompt({title: '�����κο����ȷ��', formType: 1}, function(pass){
                layer.prompt({title: '���д��ɶ����ȷ��', formType: 2}, function(text){
                    layer.msg('��ʾ��ϣ����Ŀ��'+ pass +'<br>�����д���ˣ�'+text);
                });
            });
        break;
        case 15:
            layer.tab({
                area: ['600px', '300px'],
                tab: [{
                    title: '����',
                    content: '<div style="padding:20px; line-height:30px; text-align:center">��ӭ����layer.tab<br>��ʱ�˿̲���������ʫһ�ף�<br>һ��ǰ�����ƺ�<br>�Ӵ���ֽ�Ǹ���<br>����ʡ���߸���<br>��������������<br>��������</div>'
                }, {
                    title: 'TAB2',
                    content: '<div style="padding:20px;">TAB2��˵Щɶ</div>'
                }, {
                    title: 'TAB3',
                    content: '<div style="padding:20px;">��һ�ּ�ֽУ�layer</div>'
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

//һ������
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
            layer.tips('��', this, {
                tips: [1, '#000']
            });
        break;
        case 16:
            layer.tips('Ĭ�Ͼ������ҵ�', this);
        break;
        case 17:
            layer.tips('��', this, {
                tips: 3
            });
        break;
        case 18:
            layer.tips('�ںܾúܾ���ǰ���ںܾúܾ���ǰ���ںܾúܾ���ǰ����', this, {
                tips: [4, '#78BA32']
            });
        break;
        case 19:
            layer.tips('��������֮ǰ��', this, {tipsMore: true});
        break;
         default:
            new Function(p.text())();
        break;
    }
});

//APIҳ
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
        title: 'layerƤ������˵��',
        skin: 'layui-layer-molv',
        area: '888px',
        content: $('#skinFabu'),
        shadeClose: true,
        btn: ['��������', '��֪����'],
        yes: function(){
            layer.confirm('OMG�����ҵ��ĵ�д��̫�����𣿺ðɣ��Ƿ�ȥ������������������ģ�', {
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

//����Ƥ��
gather.pub = $('#skinPublish');
gather.pub.on('click', gather.skin);
if(gather.pub[0] && location.hash === '#publish'){
    layer.ready(function(){
        gather.skin();
    });
}

//����scroll
(function(){
    var conf = {};
    //���ض���
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

//���δ���
$('pre').each(function(i){
    var othis = $(this);
    othis.show().laycode({
        title: othis.attr('title') || '��Ӧ����˵��',
        height: othis.attr('heg') || 'auto',
        skin: othis.attr('skin') || 0
    });
});

//ie6
if(!-[1,] && !window.XMLHttpRequest){
    layer.ready(function(){
        layer.alert('���������ietest��ie6ģʽ�����ֵ�������һƬ��ɫʱ���벻�þ��ţ��Ⲣ��layerδ�����ݣ������㵱ǰ�汾��ietest��ģ���ie6����δ���˾���֧�֣���׼ie6�������д����⣬����������Ҫ���ġ�');
    });
}

gather.getDate = function(time){
    return new Date(parseInt(time)).toLocaleString()
};

}();