/*
Copyright 2014, KISSY v1.49.10
MIT Licensed
build time: Sep 12 10:57
*/
KISSY.add("combobox/combobox-xtpl",[],function(){return function(f){var a,d=this;a=this.config.utils;var j=a.runBlockCommand,k=a.renderOutput,g=a.getProperty,h=a.runInlineCommand,e=a.getPropertyOrRunCommand;a='<div id="ks-combobox-invalid-el-';var c=e(d,f,{},"id",0,1);a+=k(c,!0);a+='"\n     class="';var c={},b=[];b.push("invalid-el");c.params=b;c=h(d,f,c,"getBaseCssClasses",2);a+=k(c,!0);a+='">\n    <div class="';c={};b=[];b.push("invalid-inner");c.params=b;c=h(d,f,c,"getBaseCssClasses",3);a+=k(c,
!0);a+='"></div>\n</div>\n\n';var c={},b=[],m=g(d,f,"hasTrigger",0,6);b.push(m);c.params=b;c.fn=function(c){var a;a='\n<div id="ks-combobox-trigger-';var b=e(d,c,{},"id",0,7);a+=k(b,!0);a+='"\n     class="';var b={},g=[];g.push("trigger");b.params=g;b=h(d,c,b,"getBaseCssClasses",8);a+=k(b,!0);a+='">\n    <div class="';b={};g=[];g.push("trigger-inner");b.params=g;c=h(d,c,b,"getBaseCssClasses",9);a+=k(c,!0);return a+'">&#x25BC;</div>\n</div>\n'};a+=j(d,f,c,"if",6);a+='\n\n<div class="';c={};b=[];b.push("input-wrap");
c.params=b;c=h(d,f,c,"getBaseCssClasses",13);a+=k(c,!0);a+='">\n\n    <input id="ks-combobox-input-';c=e(d,f,{},"id",0,15);a+=k(c,!0);a+='"\n           aria-haspopup="true"\n           aria-autocomplete="list"\n           aria-haspopup="true"\n           role="autocomplete"\n           aria-expanded="false"\n\n    ';c={};b=[];m=g(d,f,"disabled",0,22);b.push(m);c.params=b;c.fn=function(){return"\n    disabled\n    "};a+=j(d,f,c,"if",22);a+='\n\n    autocomplete="off"\n    class="';c={};b=[];b.push("input");
c.params=b;c=h(d,f,c,"getBaseCssClasses",27);a+=k(c,!0);a+='"\n\n    value="';c=e(d,f,{},"value",0,29);a+=k(c,!0);a+='"\n    />\n\n\n    <label id="ks-combobox-placeholder-';c=e(d,f,{},"id",0,33);a+=k(c,!0);a+='"\n           for="ks-combobox-input-';c=e(d,f,{},"id",0,34);a+=k(c,!0);a+="\"\n            style='display:";c={};b=[];g=g(d,f,"value",0,35);b.push(g);c.params=b;c.fn=function(){return"none"};c.inverse=function(){return"block"};a+=j(d,f,c,"if",35);a+=";'\n    class=\"";j={};g=[];g.push("placeholder");
j.params=g;j=h(d,f,j,"getBaseCssClasses",36);a+=k(j,!0);a+='">\n    ';f=e(d,f,{},"placeholder",0,37);a+=k(f,!0);return a+"\n    </label>\n</div>\n"}});
KISSY.add("combobox/render",["component/control","./combobox-xtpl"],function(f,a){var d=a("component/control"),j=a("./combobox-xtpl");return d.getDefaultRender().extend({beforeCreateDom:function(a,d){f.mix(d,{input:"#ks-combobox-input-{id}",trigger:"#ks-combobox-trigger-{id}",invalidEl:"#ks-combobox-invalid-el-{id}",placeholderEl:"#ks-combobox-placeholder-{id}"})},getKeyEventTarget:function(){return this.control.get("input")},_onSetCollapsed:function(a){this.control.get("input").attr("aria-expanded",
!a)},_onSetDisabled:function(a,d){this.callSuper(a,d);this.control.get("input").attr("disabled",a)}},{ATTRS:{contentTpl:{value:j}},HTML_PARSER:{value:function(a){return a.one("."+this.getBaseCssClass("input")).val()},input:function(a){return a.one("."+this.getBaseCssClass("input"))},trigger:function(a){return a.one("."+this.getBaseCssClass("trigger"))},invalidEl:function(a){return a.one("."+this.getBaseCssClass("invalid-el"))},placeholderEl:function(a){return a.one("."+this.getBaseCssClass("placeholder"))}}})});
KISSY.add("combobox/control",["node","component/control","./render","menu"],function(f,a){function d(a){for(var c=0;c<a.length;c++)if(!a[c].get("disabled"))return a[c];return null}function j(){b(this)}function k(){var a=this;setTimeout(function(){m(a)},0)}function g(){this.focus();m(this)}function h(){this.setValueFromAutocomplete(this.getValueForAutocomplete(),{force:1})}function e(a){a=a.target;a.isMenuItem&&(a=a.get("textContent"),this.setValueFromAutocomplete(a),this._savedValue=a,this.set("collapsed",
!0))}function c(a,c){var b=a.$el,e=a.view.getBaseCssClasses("invalid"),d=a.get("invalidEl");c?(b.addClass(e),d.attr("title",c),d.show()):(b.removeClass(e),d.hide())}function b(a){a._focusoutDismissTimer||(a._focusoutDismissTimer=setTimeout(function(){a._focusoutDismissTimer&&a.set("collapsed",!0)},50))}function m(a){var c=a._focusoutDismissTimer;c&&(clearTimeout(c),a._focusoutDismissTimer=null)}function s(a){this.set("value",a.newVal,{data:{causedByTimer:1}})}function i(a){var c,b=[],e,d,b=this.get("menu"),
a=this.normalizeData(a);b.set("highlightedItem",null);b.removeChildren(!0);(d=b.get("highlightedItem"))&&d.set("highlighted",!1);if(a&&a.length){for(d=0;d<a.length;d++)c=a[d],b.addChild(c);b=b.get("children");a=this.getValueForAutocomplete();if(this.get("highlightMatchItem"))for(d=0;d<b.length;d++)if(b[d].get("textContent")===a){b[d].set("highlighted",!0);e=!0;break}if(!e&&this.get("autoHighlightFirst"))for(d=0;d<b.length;d++)if(!b[d].get("disabled")){b[d].set("highlighted",!0);break}this.set("collapsed",
!1);this.fire("afterRenderData")}else this.set("collapsed",!0)}var t=a("node"),p=a("component/control"),o=a("./render");a("menu");var l=t.KeyCode;return p.extend([],{initializer:function(){this.publish("afterRenderData",{bubbles:!1})},_savedValue:null,normalizeData:function(a){var c,b,d;if(a&&a.length){a=a.slice(0,this.get("maxItemCount"));c=this.get("format")?this.get("format").call(this,this.getValueForAutocomplete(),a):[];for(d=0;d<a.length;d++)b=a[d],c[d]=f.mix({content:b,textContent:b,value:b},
c[d])}return c},bindUI:function(){var a=this;a.get("input").on("valuechange",s,a);a.on("click",e,a);a.get("menu").onRendered(function(c){var b=a.get("input"),d=c.get("el"),c=c.get("contentEl");b.attr("aria-owns",d.attr("id"));d.on("focusout",j,a);d.on("focusin",k,a);c.on("mouseover",g,a);c.on("mousedown",h,a)})},destructor:function(){this.get("menu").destroy()},getValueForAutocomplete:function(){return this.get("value")},setValueFromAutocomplete:function(a,c){this.set("value",a,c)},_onSetValue:function(a,
c){var b;c.causedByTimer?(b=this.getValueForAutocomplete(),void 0===b?this.set("collapsed",!0):(this._savedValue=b,this.sendRequest(b))):this.get("input").val(a)},handleFocusInternal:function(){var a;m(this);this.get("invalidEl")&&c(this,!1);(a=this.get("placeholderEl"))&&a.hide()},handleBlurInternal:function(a){var d=this,e=d.get("placeholderEl");d.callSuper(a);b(d);d.get("invalidEl")&&d.validate(function(a,b){a?!d.get("focused")&&b===d.get("value")&&c(d,a):c(d,!1)});e&&!d.get("value")&&e.show()},
handleMouseDownInternal:function(a){var c,b;this.callSuper(a);c=a.target;if((b=this.get("trigger"))&&(b[0]===c||b.contains(c)))this.get("collapsed")?(this.focus(),this.sendRequest("")):this.set("collapsed",!0),a.preventDefault()},handleKeyDownInternal:function(a){var c,b=a.keyCode,e,g,h=this.get("menu");this.get("input");c=this.get("updateInputOnDownUp");if(h.get("visible")){e=h.get("highlightedItem");if(c&&e&&(g=h.get("children"),b===l.DOWN&&e===d(g.concat().reverse())||b===l.UP&&e===d(g)))return this.setValueFromAutocomplete(this._savedValue),
e.set("highlighted",!1),!0;g=h.handleKeyDownInternal(a);e=h.get("highlightedItem");if(b===l.ESC)return this.set("collapsed",!0),c&&this.setValueFromAutocomplete(this._savedValue),!0;c&&f.inArray(b,[l.DOWN,l.UP])&&this.setValueFromAutocomplete(e.get("textContent"));return b===l.TAB&&e&&(e.handleClickInternal(a),this.get("multiple"))?!0:g}if(b===l.DOWN||b===l.UP)if(a=this.getValueForAutocomplete(),void 0!==a)return this.sendRequest(a),!0},validate:function(a){var c=this.get("validator"),b=this.getValueForAutocomplete();
c?c(b,function(c){a(c,b)}):a(!1,b)},sendRequest:function(a){this.get("dataSource").fetchData(a,i,this)},_onSetCollapsed:function(a){var c=this.$el,b=this.get("menu");a?b.hide():(m(this),b.get("visible")||(this.get("matchElWidth")&&(b.render(),a=b.get("el"),a=(parseInt(a.css("borderLeftWidth"))||0)+(parseInt(a.css("borderRightWidth"))||0),b.set("width",c[0].offsetWidth-a)),b.show()))}},{ATTRS:{input:{},value:{value:"",sync:0,view:1},trigger:{},placeholder:{view:1},placeholderEl:{},validator:{},invalidEl:{},
allowTextSelection:{value:!0},hasTrigger:{value:!0,view:1},menu:{value:{},getter:function(a){a.isControl||(a.xclass=a.xclass||"popupmenu",a=this.createComponent(a),this.setInternal("menu",a));return a},setter:function(a){if(a.isControl){a.setInternal("parent",this);var c={node:this.$el,points:["bl","tl"],overflow:{adjustX:1,adjustY:1}};f.mix(a.get("align"),c,!1)}}},collapsed:{view:1,value:!0},dataSource:{},maxItemCount:{value:99999},matchElWidth:{value:!0},format:{},updateInputOnDownUp:{value:!0},
autoHighlightFirst:{},highlightMatchItem:{value:!0},xrender:{value:o}},xclass:"combobox"})});
KISSY.add("combobox/cursor",["node"],function(f,a){function d(a){var c=g;c||(c=j(k));"textarea"===""+a[0].type.toLowerCase()?c.css("width",a.css("width")):c.css("width",9999);f.each(h,function(b){c.css(b,a.css(b))});g||c.insertBefore(a[0].ownerDocument.body.firstChild);return g=c}var j=a("node").all,k='<div style="z-index:-9999;overflow:hidden;position: fixed;left:-9999px;top:-9999px;opacity:0;white-space:pre-wrap;word-wrap:break-word;"></div>',g,h="paddingLeft,paddingTop,paddingBottom,paddingRight,marginLeft,marginTop,marginBottom,marginRight,borderLeftStyle,borderTopStyle,borderBottomStyle,borderRightStyle,borderLeftWidth,borderTopWidth,borderBottomWidth,borderRightWidth,line-height,outline,height,fontFamily,fontSize,fontWeight,fontVariant,fontStyle".split(",");
return function(a){var c=j(a),a=c[0],b=a.ownerDocument,g=j(b),h=a.scrollTop,i=a.scrollLeft;if(b.selection)return a=b.selection.createRange(),{left:a.boundingLeft+i+g.scrollLeft(),top:a.boundingTop+h+a.boundingHeight+g.scrollTop()};g=c.offset();if("textarea"!==a.type)return g.top+=a.offsetHeight,g;b=d(c);c=a.selectionStart;b.html(f.escapeHtml(a.value.substring(0,c-1))+"<span>x</span>");b.offset(g);g=b.last();a=g.offset();a.top+=g.height();0<c&&(a.left+=g.width());a.top-=h;a.left-=i;return a}});
KISSY.add("combobox/multi-value-combobox",["./cursor","./control"],function(f,a){function d(a,b){return b&&-1!==a.indexOf(b)}function j(a){a.newVal&&a.target===this.get("menu")&&this.alignWithCursor()}function k(a){var b=a.get("input"),e=a.get("value"),f=[],i=[],k=a.get("literal"),j=a.get("separator"),a=a.get("separatorType"),o=!1,l=a!==g,b=b.prop("selectionStart"),q,n,r=-1;for(q=0;q<e.length;q++)(n=e.charAt(q),k&&n===k&&(o=!o),o)?i.push(n):(q===b&&(r=f.length),l&&h.test(n))?(i.length&&f.push(i.join("")),
i=[],i.push(n)):d(j,n)?a===g?(i.push(n),i.length&&f.push(i.join("")),i=[]):(i.length&&f.push(i.join("")),i=[],i.push(n)):i.push(n);i.length&&f.push(i.join(""));f.length||f.push("");-1===r&&(a===g&&d(j,n)&&f.push(""),r=f.length-1);return{tokens:f,cursorPosition:b,tokenIndex:r}}var g="suffix",h=/\s|\xa0/,e=a("./cursor");return a("./control").extend({syncUI:function(){var a;this.get("alignWithCursor")&&(a=this.get("menu"),a.setInternal("align",null),a.on("beforeVisibleChange",j,this))},getValueForAutocomplete:function(){var a=
k(this),b=a.tokens,h=a.tokenIndex,a=this.get("separator"),f=this.get("separatorType"),b=b[h],h=b.length-1;if(f!==g)if(d(a,b.charAt(0)))b=b.slice(1);else return;else f===g&&d(a,b.charAt(h))&&(b=b.slice(0,h));return b},setValueFromAutocomplete:function(a,b){var f=this.get("input"),e=k(this),i=e.tokens,e=Math.max(0,e.tokenIndex),j=this.get("separator"),p;p=this.get("separatorType");var o=i[e+1]||"",l=i[e];if(p!==g){if(i[e]=l.charAt(0)+a,a&&(!o||!h.test(o.charAt(0))))i[e]+=" "}else i[e]=a,p=l.length-
1,d(j,l.charAt(p))?i[e]+=l.charAt(p):1===j.length&&(i[e]+=j);e=i.slice(0,e+1).join("").length;this.set("value",i.join(""),b);f.prop("selectionStart",e);f.prop("selectionEnd",e)},alignWithCursor:function(){var a=this.get("menu"),b;b=this.get("input");b=e(b);a.move(b.left,b.top)}},{ATTRS:{separator:{value:",;"},separatorType:{value:g},literal:{value:'"'},alignWithCursor:{}},xclass:"multi-value-combobox"})});
KISSY.add("combobox/filter-select",["./control"],function(f,a,d,j){f=a("./control");j.exports=f.extend({validate:function(a){var d=this;d.callSuper(function(h,e){h?a(h,e):d.get("dataSource").fetchData(e,function(c){a:{if(c=d.normalizeData(c))for(var b=0;b<c.length;b++)if(c[b].textContent===e){c=c[b];break a}c=!1}a(c?"":d.get("invalidMessage"),e,c)})})}},{ATTRS:{invalidMessage:{value:"invalid input"}}})});
KISSY.add("combobox/local-data-source",["attribute"],function(f,a){return a("attribute").extend({fetchData:function(a,f,k){var g=this.get("parse"),h=this.get("data"),h=g(a,h);f.call(k,h)}},{ATTRS:{data:{value:[]},parse:{value:function(a,j){var k=[],g=0;if(!a)return j;f.each(j,function(f){-1!==f.indexOf(a)&&k.push(f);g++});return k}}}})});
KISSY.add("combobox/remote-data-source",["io","attribute"],function(f,a){var d=a("io");return a("attribute").extend({fetchData:function(a,f,g){var h=this,e,c=h.get("paramName"),b=h.get("parse"),m=h.get("cache"),s=h.get("allowEmpty");h.caches=h.caches||{};h.io&&(h.io.abort(),h.io=null);if(!a&&!0!==s)return f.call(g,[]);if(m&&(e=h.caches[a]))return f.call(g,e);e=h.get("xhrCfg");e.data=e.data||{};e.data[c]=a;e.success=function(c){b&&(c=b(a,c));h.setInternal("data",c);m&&(h.caches[a]=c);f.call(g,c)};
h.io=d(e)}},{ATTRS:{paramName:{value:"q"},allowEmpty:{},cache:{},parse:{},xhrCfg:{value:{}}}})});
KISSY.add("combobox",["combobox/control","combobox/multi-value-combobox","combobox/filter-select","combobox/local-data-source","combobox/remote-data-source"],function(f,a){var d=a("combobox/control"),j=a("combobox/multi-value-combobox"),k=a("combobox/filter-select"),g=a("combobox/local-data-source"),h=a("combobox/remote-data-source");d.LocalDataSource=g;d.RemoteDataSource=h;d.FilterSelect=k;d.MultiValueComboBox=j;return d});
