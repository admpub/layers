/*! layer mobile-v1.0 弹层组件移动版 2014-09-10 License LGPL http://sentsin.com/layui/layer/ By 贤心 */
;!function(a){"use strict";function b(a){var b=this;b.config=i.extend(a),b.view()}var c=document.scripts[document.scripts.length-1].src.match(/[\s\S]*\//)[0],d=document,e="createElement",f="getElementById",g="getElementsByClassName";document.head.appendChild(function(){var a=d[e]("link");return a.href=c+"need/layer.css",a.type="text/css",a.rel="styleSheet",a.id="layermcss",a}());var h={type:0,shade:!0,shadeClose:!0,fixed:!0,anim:!0},i={extend:function(a){var b=JSON.parse(JSON.stringify(h));for(var c in a)b[c]=a[c];return b},timer:{}},j=0,k=["layermbox"];b.prototype.view=function(){var a=this,b=a.config,c=d[e]("div");a.id=c.id=k[0]+j,c.setAttribute("class",k[0]+" "+k[0]+(b.type||0)),c.setAttribute("index",j);var h=function(){var a="object"==typeof b.title;return b.title?'<h3 style="'+(a?b.title[1]:"")+'">'+(a?b.title[0]:b.title)+'</h3><button class="layermend">x</button>':""}(),i=function(){var a,c=(b.btn||[]).length;return 0!==c&&b.btn?(a='<span type="1">'+b.btn[0]+"</span>",2===c&&(a='<span type="0">'+b.btn[1]+"</span>"+a),'<div class="layermbtn">'+a+"</div>"):""}();if(b.fixed||(b.top=b.hasOwnProperty("top")?b.top:100,b.style=b.style||"",b.style+=" top:"+(d.body.scrollTop+b.top)+"px"),2===b.type&&(b.content='<i></i><i class="laymloadtwo"></i><i></i><div>'+(b.content||"")+"</div>"),c.innerHTML=(b.shade?'<div class="laymshade"></div>':"")+'<div class="layermmain" '+(b.fixed?"":'style="position:static;"')+'><section><div class="layermchild '+(b.anim?"layermanim":"")+'" '+(b.style?'style="'+b.style+'"':"")+">"+h+'<div class="layermcont">'+b.content+"</div>"+i+"</div></section></div>",!b.type||2===b.type){var m=d[g](k[0]+b.type),n=m.length;n>=1&&l.close(m[0].getAttribute("index"))}document.body.appendChild(c),setTimeout(function(){try{d[f](a.id).className=d[f](a.id).className+" layermshow"}catch(c){return}b.success&&b.success(d[f](a.id))},1),a.index=j++,a.action(b)},b.prototype.action=function(a){var b=this;if(a.time&&(i.timer[b.index]=setTimeout(function(){l.close(b.index)},1e3*a.time)),a.title&&(d[f](b.id)[g]("layermend")[0].onclick=function(){a.cancel&&a.cancel(),l.close(b.index,a.end)}),a.btn&&(d[f](b.id)[g]("layermbtn")[0].onclick=function(c){var d=c.target.getAttribute("type");0==d?(a.no&&a.no(),l.close(b.index,a.end)):a.yes?a.yes(b.index):l.close(b.index,a.end)}),a.shade&&a.shadeClose){var c=d[f](b.id)[g]("laymshade")[0];c.onclick=function(){l.close(b.index,a.end)},c.ontouchmove=function(){l.close(b.index,a.end)}}};var l={v:"1.1",index:j,open:function(a){var c=new b(a||{});return c.index},close:function(a,b){var c=d[f](k[0]+a);c&&(c.innerHTML="",d.body.removeChild(c),clearTimeout(i.timer[a]),delete i.timer[a],b&&b())},closeAll:function(){for(var a=document.getElementsByClassName(k[0]),b=0,c=a.length;c>b;b++)l.close(a[b].getAttribute("index"))}};"function"==typeof define?define(function(){return l}):a.layer=l}(window);