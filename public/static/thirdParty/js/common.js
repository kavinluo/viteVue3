var stateChangeIE=function(e){"complete"==e.readyState&&top.$._deLoading()},stateChangeFirefox=function(e){top.$._deLoading()};function getClient_wh(){return[$("body")[0].clientWidth,document.all?document.getElementsByTagName("html")[0].offsetHeight:window.innerHeight]}function getBdScroll_h(){var e=document.all?document.getElementsByTagName("html")[0].offsetHeight:window.innerHeight;return Math.max(e,document.getElementsByTagName("body")[0].scrollHeight)}function dealWithSth(){"function"==typeof setTabCss&&setTabCss(),"function"==typeof setIE7IframeH&&setIE7IframeH()}$(function(){$("input[type='text']").addClass("commInput"),$("input.inputFile").attr("size","1")}),$(function(){myzyc_w=document.body.clientWidth,myzyc_h=document.all?document.getElementsByTagName("html")[0].offsetHeight:window.innerHeight,"function"==typeof setTabCss&&setTabCss(),setIE7IframeH()});var myzyc_w=0,myzyc_h=0,pResizeTimer=null;function is360se(){return navigator.userAgent.toLowerCase().indexOf("360se")>-1}$(window).bind("resize",function(){var e=document.getElementsByTagName("html")[0].clientWidth,t=document.all?document.getElementsByTagName("html")[0].offsetHeight:window.innerHeight;myzyc_w==e&&myzyc_h==t||(myzyc_w=e,myzyc_h=t,pResizeTimer&&clearTimeout(pResizeTimer),pResizeTimer=setTimeout("dealWithSth()",10))});var setIE7IframeH=function(){try{$.browser.msie&&(7==parseInt($.browser.version)||is360se())&&null==$(".homeTopBox").html()&&$("body").attr("scroll","no")}catch(e){}};function createPrompt(e){var t='<div id="promptDiv" style="position:absolute;border:1px solid #cf6600;background-color:#fffbb7;font-weight:bold;text-align:center;top:50%;;left:50%;width:350px;height:30px;line-height:30px;margin:15px 0 0 -150px;display:none;z-index:100000">'+e+'&nbsp;<iframe style=\'position:absolute; left:0px; filter:alpha(opacity=0);-moz-opacity:0; z-index:-1;\' width="350" height="30" align="center" frameborder="0" scrolling="no" border="0"></iframe></div>';parent?(top.$("body").append(t),top.$("#promptDiv").stop(),top.$("#promptDiv").show(),setTimeout("top.$('#promptDiv').remove()",3e3)):($("body").append(t),$("#promptDiv").stop(),$("#promptDiv").show(),setTimeout("$('#promptDiv').remove()",3e3))}function delPrompt(){parent?top.$("#promptDiv").remove():$("#promptDiv").remove()}var _$arr={repeatIndexArr:[],toObject:function(e){for(var t={},o=[],n=0,r=e.length;n<r;n+=1)t[e[n]]&&o.push(n),t[e[n]]=!0;return _$arr.repeatIndexArr=o,t},keys:function(e){var t,o=[];for(t in e)e.hasOwnProperty(t)&&o.push(t);return o},uniq:function(e){return _$arr.keys(_$arr.toObject(e))},getIndexByValue:function(e,t){for(var o=-1,n=0;n<e.length;n++)if(e[n]==t){o=n;break}return o},remove:function(e,t){try{if(isNaN(t)||t>e.length)return!1;e.splice(t,1)}catch(e){alert(e.message)}},getObjectIndexById:function(e,t){var o=-1;if("object"!=typeof t)return o;for(var n=0;n<e.length;n++)if(e[n].id==t.id){o=n;break}return o}};Array.prototype._arrUniq=function(){return _$arr.uniq(this)},Array.prototype._arrRemove=function(e){return _$arr.remove(this,e)},Array.prototype.getIndexByValue=function(e){return _$arr.getIndexByValue(this,e)},Array.prototype.getObjectIndexById=function(e){return _$arr.getObjectIndexById(this,e)};var $searPopup={};function ymWinMaxMinValue(){var e=1e3,t=540;screen.width>1024?e+=(screen.width-1024)/2:e=e,screen.height>768?t+=(screen.height-768)/2:t=t,$ymExtend._w=e,$ymExtend._h=t}function setNewPageBg(){if(null!=$(".DivScrollH408").html()&&null!=$(".newWrapper").html()){var e=$(".newWrapper").find("table:first").height();e>$(".DivScrollH408").height()&&$(".leftFieldBg").css("height",e)}}function isExistBoxModel(){return jQuery.support.boxModel}function openwindow(e,t,o,n){var r=(window.screen.availHeight-30-n)/2,i=(window.screen.availWidth-10-o)/2;window.open(e,t,"height="+n+",,innerHeight="+n+",width="+o+",innerWidth="+o+",top="+r+",left="+i+",toolbar=no,menubar=no,scrollbars=yes,resizeable=no,location=no,status=no")}$searPopup.createPopFont=function(e,t,o,n,r,i,s,a,c,l){r||(r=!1),c||(c=!1);var d="noButton";c&&(d="popupDivButon");var p="";r&&(p='<div class="searchAdvanced"><a href="javascript:void(0)" onclick="$searPopup.searchAdvanced(\''+n+"','"+e+"')\">高级查询</a>&nbsp;&nbsp;</div>");var u,h,m,f,v,b="";b=r?'<div id="searchUserId" class="searchUsBox" onmouseover="$searPopup.showPop();"><div class="searchTop"><div class="searchTit">&nbsp;<strong>数据查询</strong></div><div class="searchAdvanced"><a href="javascript:void(0)" onclick="$searPopup.hidePop();">关闭</a></div></div>'+"<div class=\"searchCont\"><iframe id=\"searchIframe\" width='100%' height='100%' border='0' frameborder='0' src='"+o+"'></iframe></div><div class=\"searchBotm\"><div class=\"searchTit\">&nbsp;&nbsp;&nbsp;<a onmouseover=this.style.color='#FF0000' onmouseout=this.style.color='#000000' id=\""+d+'" class="editBut1" ><span>&nbsp;&nbsp;&nbsp;查&nbsp;&nbsp;询&nbsp;&nbsp;&nbsp;</span></a></div>'+p+'</div></div><form action="'+$searPopup.getRootPath+'/accountController!findAccountListPage.action" method="post" name="myDataForm" id="myDataForm"><input type="hidden" name="actUrl" id="actUrl"/></form>':i?'<div id="searchUserId" class="searchUsBox" onmouseover="$searPopup.showPop();"><div class="searchTop"></div>'+"<div class=\"searchCont\"><iframe id=\"searchIframe\" width='100%' height='100%' border='0' frameborder='0' src='"+o+'\'></iframe></div><div class="searchBotm"></div>':'<div id="searchUserId" class="searchUsBox" onmouseover="$searPopup.showPop();"><div class="searchTop"><div class="searchTit">&nbsp;<strong>数据查询</strong></div><div class="searchAdvanced"><a href="javascript:void(0)" onclick="$searPopup.hidePop();">关闭</a></div></div>'+"<div class=\"searchCont\"><iframe id=\"searchIframe\" width='100%' height='100%' border='0' frameborder='0' src='"+o+"'></iframe></div><div class=\"searchBotm\"><a onmouseover=this.style.color='#FF0000' onmouseout=this.style.color='#000000' id=\""+d+'" class="editBut1" ><span>&nbsp;&nbsp;&nbsp;查&nbsp;&nbsp;询&nbsp;&nbsp;&nbsp;</span></a>'+p+'</div></div><form action="'+$searPopup.getRootPath+'/accountController!findAccountListPage.action" method="post" name="myDataForm" id="myDataForm"><input type="hidden" name="actUrl" id="actUrl"/></form>',$searPopup.menuObj=m=$(t),u=m.height(),obj_w=m.width(),m.offset().top,h=m.offset().left,null==$("#searchUserId").html()?$("body").append(b):$searPopup.showPop(),f=h-((v=s||$("#searchUserId").width())-obj_w)/2>0?h-(v-obj_w)/2:h,getClient_wh()[0]-h+obj_w-v<0&&h-v<0&&(f=(getClient_wh()[0]-v)/2),$("#searchUserId").css("left",f).css("top",u+5),$("#searchUserId").css("width",v),a&&$(".searchCont").css("height",a),$("#searchUserId").click(function(e){e.stopPropagation()}),$(document).click(function(e){$searPopup.hidePop()}),$("#popupDivButon").unbind("click"),$("#popupDivButon").click(function(){if(r)if("function"==typeof l){var e=$("#searchUserId").find("#searchIframe").contents().find("#cxform");$searPopup.hidePop();var t=$(e).serialize().replace(/=/g,"*").replace(/&/g,"@");$("#actUrl").val(t),$("#myDataForm").submit()}else{e=$("#searchUserId").find("#searchIframe").contents().find("#cxform");var o=tbl.fnSettings();o.sAjaxSource=$searPopup.getRootPath+"/accountInfoController!findAccountListData.action",o.sAjaxSource=e.attr("action")+"?"+$(e).serialize(),tbl.fnClearTable(0),tbl.fnDraw(),$searPopup.hidePop()}else"function"==typeof l&&l(),$searPopup.hidePop()})},$searPopup.createPop=function(e,t,o,n,r,i,s,a,c){r||(r=!1),a||(a=!1);var l="noButton";a&&(l="popupDivButon");var d="";r&&(d='<div class="searchAdvanced"><a href="javascript:void(0)" onclick="$searPopup.searchAdvanced(\''+n+"','"+e+"')\">高级查询</a>&nbsp;&nbsp;</div>");var p,u,h,m,f="";if(f=r?'<div id="searchUserId" class="searchUsBox" onmouseover="$searPopup.showPop();"><div class="searchTop"><div class="searchTit">&nbsp;<strong>数据查询</strong></div><div class="searchAdvanced"><a href="javascript:void(0)" onclick="$searPopup.hidePop();">关闭</a></div></div>'+"<div class=\"searchCont\"><iframe id=\"searchIframe\" width='100%' height='100%' border='0' frameborder='0' src='"+o+"'></iframe></div><div class=\"searchBotm\"><div class=\"searchTit\">&nbsp;&nbsp;&nbsp;<a onmouseover=this.style.color='#FF0000' onmouseout=this.style.color='#000000' id=\""+l+"\" class=\"editBut1\" ><span>&nbsp;&nbsp;&nbsp;查&nbsp;&nbsp;询&nbsp;&nbsp;&nbsp;</span></a>&nbsp;&nbsp;&nbsp;<a onmouseover=this.style.color='#FF0000' onmouseout=this.style.color='#000000' id='resetButton' class=\"editBut1\" ><span>&nbsp;&nbsp;&nbsp;重&nbsp;&nbsp;置&nbsp;&nbsp;&nbsp;</span></a></div>"+d+'</div></div><form action="'+$searPopup.getRootPath+'/accountController!findAccountListPage.action" method="post" name="myDataForm" id="myDataForm"><input type="hidden" name="actUrl" id="actUrl"/></form>':'<div id="searchUserId" class="searchUsBox" onmouseover="$searPopup.showPop();"><div class="searchTop"><div class="searchTit">&nbsp;<strong>数据查询</strong></div><div class="searchAdvanced"><a href="javascript:void(0)" onclick="$searPopup.hidePop();">关闭</a></div></div>'+"<div class=\"searchCont\"><iframe id=\"searchIframe\" width='100%' height='100%' border='0' frameborder='0' src='"+o+"'></iframe></div><div class=\"searchBotm\"><a onmouseover=this.style.color='#FF0000' onmouseout=this.style.color='#000000' id=\""+l+"\" class=\"editBut1\" ><span>&nbsp;&nbsp;&nbsp;查&nbsp;&nbsp;询&nbsp;&nbsp;&nbsp;</span></a>&nbsp;&nbsp;&nbsp;<a onmouseover=this.style.color='#FF0000' onmouseout=this.style.color='#000000' id='resetButton' class=\"editBut1\" ><span>&nbsp;&nbsp;&nbsp;重&nbsp;&nbsp;置&nbsp;&nbsp;&nbsp;</span></a>"+d+'</div></div><form action="'+$searPopup.getRootPath+'/accountController!findAccountListPage.action" method="post" name="myDataForm" id="myDataForm"><input type="hidden" name="actUrl" id="actUrl"/></form>',$searPopup.menuObj=h=$(t),p=h.height(),obj_w=h.width(),h.offset().top,u=h.offset().left,null==$("#searchUserId").html())$("body").append(f),v=u-((m=i||$("#searchUserId").width())-obj_w)/2>0?u-(m-obj_w)/2:u,getClient_wh()[0]-u+obj_w-m<0&&u-m<0&&(v=(getClient_wh()[0]-m)/2,getClient_wh()[0]-v<m&&(v+=m-(getClient_wh()[0]-v))),$("#searchUserId").css("left",v).css("top",p+5);else{m=i||$("#searchUserId").width();var v=(getClient_wh()[0]-m)/2;getClient_wh()[0]-v<m?(v+=m-(getClient_wh()[0]-v),$("#searchUserId").css("left",v)):(v=u-(m-obj_w)/2>0?u-(m-obj_w)/2:u,getClient_wh()[0]-u+obj_w-m<0&&u-m<0&&(v=(getClient_wh()[0]-m)/2),$("#searchUserId").css("left",v)),$searPopup.showPop()}$("#searchUserId").css("width",m),s&&$(".searchCont").css("height",s),$("#searchUserId").click(function(e){e.stopPropagation()}),$(document).click(function(e){$searPopup.hidePop()}),$("#popupDivButon").unbind("click"),$("#popupDivButon").click(function(){if(r)if("function"==typeof c){var e=$("#searchUserId").find("#searchIframe").contents().find("#cxform");$searPopup.hidePop();var t=$(e).serialize().replace(/=/g,"*").replace(/&/g,"@");$("#actUrl").val(t),$("#myDataForm").submit()}else{e=$("#searchUserId").find("#searchIframe").contents().find("#cxform");tbl.fnSettings().sAjaxSource=e.attr("action")+"?"+decodeURIComponent($(e).serialize(),!0),tbl.fnClearTable(0),tbl.fnDraw(),$searPopup.hidePop()}else"function"==typeof c&&(c(),$searPopup.hidePop())}),$("#resetButton").unbind("click"),$("#resetButton").click(function(){PageForm=$("#searchUserId").find("#searchIframe").contents().find("#cxform"),$(":input",PageForm).not(":button, :submit, :reset, :hidden").val("").removeAttr("checked").removeAttr("selected")})},$searPopup.searchAdvanced=function(e,t){top.ymPrompt.win({message:e,width:600,height:570,title:"高级查询",handler:function(e){if("ok"==e)if(t){var o=top.ymPrompt.getPage().contentWindow,n=$(o.document.body).find("#cxform");$searPopup.hidePop();var r=$(n).serialize().replace(/=/g,"*").replace(/&/g,"@");$("#actUrl").val(r),$("#myDataForm").submit(),top.ymPrompt.close()}else{o=top.ymPrompt.getPage().contentWindow,n=$(o.document.body).find("#cxform");tbl.fnSettings().sAjaxSource=n.attr("action")+"?"+decodeURIComponent($(n).serialize(),!0),tbl.fnClearTable(0),tbl.fnDraw(),$searPopup.hidePop(),top.ymPrompt.close()}else top.ymPrompt.close()},iframe:!0,autoClose:!1}),$searPopup.hidePop()},$searPopup.showPop=function(){$("#searchUserId").show()},$searPopup.hidePop=function(){$("#searchUserId").hide()},$searPopup.getRootPath=function(){var e=window.location.pathname.substring(1),t=""==e?"":e.substring(0,e.indexOf("/")),o=window.location.protocol+"//"+window.location.host;return""!=t&&(o=o+"/"+t),o},$ymExtend={},ymWinMaxMinValue(),$ymExtend.subData=function(e){e||(e=top),e.ymPrompt.doHandler("ok")},$(function(){setNewPageBg()}),$("a").bind("keypress",function(e){var t;if(!e)e=window.event;if(e.keyCode?t=e.keyCode:e.which&&(t=e.which),13==t)return!1});var $fckobj={};function publicShowFCK(e,t,o,n){var r=new FCKeditor(e);$fckobj.inputId=e,r.BasePath=t+"/FCKeditor/",r.ToolbarSet="public",r.Width=""==o||void 0===o?"96%":n,r.Height=""==o||void 0===o?251:o,r.ImageBrowser=!0,r.ImageBrowserURL=$searPopup.getRootPath+"/FCKeditor/editor/filemanager/browser/default/browser.html?Type=Image&Connector=connectors/jsp/connector",r.LinkBrowserURL=$searPopup.getRootPath+"/FCKeditor/editor/filemanager/browser/default/browser.html?Connector=connectors/jsp/connector",r.FlashBrowserURL=$searPopup.getRootPath+"/FCKeditor/editor/filemanager/browser/default/browser.html?Type=Flash&Connector=connectors/jsp/connector",r.ImageUploadURL=$searPopup.getRootPath+"/FCKeditor/editor/filemanager/upload/simpleuploader?Type=Image",r.LinkUploadURL=$searPopup.getRootPath+"/FCKeditor/editor/filemanager/upload/simpleuploader?Type=File",r.FlashUploadURL=$searPopup.getRootPath+"/FCKeditor/editor/filemanager/upload/simpleuploader?Type=Flash",r.ReplaceTextarea()}function publicSetFCKVal(e){($fckobj.htmlStr=e,null==publicFCKIsExit())?interTimer=setTimeout("setFCKValFun()",10):(clearTimeout(interTimer),FCKeditorAPI.GetInstance($fckobj.inputId).InsertHtml($fckobj.htmlStr))}function setFCKValFun(){publicSetFCKVal($fckobj.htmlStr)}function publicFCKValue(){var e=FCKeditorAPI.GetInstance($fckobj.inputId).GetXHTML();return $("#"+$fckobj.inputId).text(e),e}function publicFCKNull(){return"<br />"==publicFCKValue()||""==publicFCKValue()?"":publicFCKValue()}function publicFCKIsExit(){try{return FCKeditorAPI.GetInstance($fckobj.inputId).EditorDocument.body}catch(e){return null}}function deleteuploadfile(e,t,o,n,r,i,s){var a="",c="";i&&(a=i),s&&(c=s);var l=document.getElementById(a+"fileName"+c).value,d=document.getElementById(a+"fileUrl"+c).value,p=document.getElementById(a+"fileSize"+c).value,u="";null!=document.getElementById(a+"customPath"+c)&&(u=document.getElementById(a+"customPath"+c).value);for(var h=l.split("@#@"),m=d.split("@#@"),f=p.split("@#@"),v="",b="",$="",g=0;g<m.length-1;g++)m[g]!=o&&(v+=h[g]+"@#@",b+=m[g]+"@#@",$+=f[g]+"@#@");document.getElementById(a+"fileName"+c).value=v,document.getElementById(a+"fileUrl"+c).value=b,document.getElementById(a+"fileSize"+c).value=$,document.getElementById(t).removeChild(document.getElementById(o));var w=$searPopup.getRootPath+"/common/fileControl!delete.action",y={newFileName:o,customPath:u};jQuery.ajax({url:w,type:"POST",data:y,beforeSend:function(){},error:function(e){},success:function(e){}})}function subStrLength(e,t){for(var o=0,n=e.length,r=-1,i=0;i<n;i++)o+=(r=e.charCodeAt(i))>=0&&r<=128?1:2;return""!=e&&null!=e&&o>t&&(e=e.substring(0,t)+"..."),e}function showKeyPress(e){var t=(e=e||window.event).srcElement||e.target,o=e.keyCode;if(37!=o&&38!=o&&39!=o&&40!=o){if("INPUT"!=t.tagName.toLocaleUpperCase()&&"TEXTAREA"!=t.tagName.toLocaleUpperCase())return;return checkSpecificKey(t,t.value)}}function checkSpecificKey(e,t){for(var o=[],n=0;n<t.length;n++)"#$%^*'\"+\\/?".indexOf(t.substring(n,n+1))<0&&o.push(t.substring(n,n+1));t!=o.join("")&&(e.value=o.join(""))}function isFirstSubmit(){return 0!=_wzk_firstSubmit?(_wzk_firstSubmit+=1,!1):(_wzk_firstSubmit=1,!0)}function resetFirstSubmit(){_wzk_firstSubmit=0}$fckobj.htmlStr="",interTimer=0,$moreMenu={menuTotal_w:0,leftValue:0},$moreMenu.init=function(e,t){if(void 0===t)t="a";if($moreMenu.isContObj=e.find(t).length>0,$moreMenu.isContObj){0==$moreMenu.menuTotal_w&&e.find(t).each(function(){$moreMenu.menuTotal_w+=$(this).outerWidth(!0)+10}),0==$moreMenu.leftValue&&($moreMenu.leftValue=e.css("padding-left")),e.css("padding-left",0);var o=e.width(),n=$moreMenu.menuTotal_w>o,r=e.find(".v_content_list").html();null!=r&&e.html(r),n?$moreMenu.createSrollMold(e,o):e.css("padding-left",$moreMenu.leftValue)}},$moreMenu.createSrollMold=function(e,t){var o=e.html(),n=t-42-2,r=e.attr("id")?e.attr("id"):e.attr("class"),i='<div id="leftScrollLink'+r+'" class="leftScrollLink" style="float:left;"></div>',s='<div class="v_show" style="width:'+n+'px;float:left;"><div class="v_content" style="width:'+n+'px"><div id="v_content_list'+r+'" class="v_content_list"><label>'+o+"</label></div></div></div>",a='<div id="rightScrollLink'+r+'" class="rightScrollLink" style="float:right;"></div>';e.css("padding",0).html(i+s+a),$moreMenu.bindEvent(e,$("#leftScrollLink"+r),$("#rightScrollLink"+r),$("#v_content_list"+r))},$moreMenu.bindEvent=function(e,t,o,n){var r=e.find(".v_content_list"),i=100,s=1,a=e.width(),c=Math.ceil($moreMenu.menuTotal_w/a),l=c>1?c:1;o.bind("click",function(){i=$moreMenu.menuTotal_w-e.width()-parseInt(r.css("left"))>e.width()?e.width():$moreMenu.menuTotal_w-e.width(),r.is(":animated")||(s==l?(r.animate({left:"0px"},"slow"),s=1):(r.animate({left:"-="+i},"slow"),s++))}),t.bind("click",function(){i=$moreMenu.menuTotal_w-e.width()-parseInt(r.css("left"))>e.width()?e.width():$moreMenu.menuTotal_w-e.width(),r.is(":animated")||(1==s?(r.animate({left:"-="+($moreMenu.menuTotal_w-e.width())},"slow"),s=l):(r.animate({left:"+="+i},"slow"),s--))}),t.hover(function(){$(this).attr("class","leftScrollOver")},function(){$(this).attr("class","leftScrollLink")}),o.hover(function(){$(this).attr("class","rightScrollOver")},function(){$(this).attr("class","rightScrollLink")})},Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var o in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[o]:("00"+t[o]).substr((""+t[o]).length)));return e},_wzk_firstSubmit=0,$(function(){
/*! 底部公用 - v1.1.2 - 2015-04-07*/
var e=document.body.clientWidth;if(e<1200){var t=e-14;$("#home-menu-wrapper,#ambuf-prd-ml-id").css("width",t)}$("#prdAndServeicsId").click(function(e){e.stopPropagation(),$(".ambuf-prd-ml").show(),$(".ambuf-prd-maker").show()}),$(".ambuf-prd-ml").hover(function(){$(this).show(),$(".ambuf-prd-maker").show()}).click(function(e){e.stopPropagation()}),$(window).click(function(){$(".ambuf-prd-ml").hide(),$(".ambuf-prd-maker").hide()})});