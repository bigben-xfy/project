(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-test-index"],{"2d8b":function(t,e,n){"use strict";n.r(e);var a=n("7bc4"),i=n("6a15");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("594a");var u=n("2877"),s=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,"55352e3b",null);e["default"]=s.exports},5237:function(t,e,n){var a=n("bae3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("d5d62f94",a,!0,{sourceMap:!1,shadowMode:!1})},"594a":function(t,e,n){"use strict";var a=n("5237"),i=n.n(a);i.a},"6a15":function(t,e,n){"use strict";n.r(e);var a=n("9faa"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"7bc4":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-image",{staticClass:"logo",attrs:{src:"../../static/logo.png"}}),n("v-uni-view",[n("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))])],1),n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"item",on:{click:function(e){e=t.$handleEvent(e),t.showToastFunc(e)}}}),n("v-uni-view",{staticClass:"item",on:{click:function(e){e=t.$handleEvent(e),t.open(e)}}})],1),n("v-uni-view",{staticClass:"weui-btn-area"},[n("v-uni-picker",{attrs:{value:t.pickerIndex,range:t.pickerArr}},[n("v-uni-button",{staticClass:"weui-btn",attrs:{type:"default"}},[t._v("单列选择器")])],1),n("v-uni-button",{staticClass:"weui-btn",attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.chooseVideoSelf(e)}}},[t._v("交作业")]),n("v-uni-button",{attrs:{"open-type":"getUserInfo"},on:{getuserinfo:function(e){e=t.$handleEvent(e),t.getuserinfo(e)}}},[t._v("获取用户权限")]),n("v-uni-button",{attrs:{"open-type":"getPhoneNumber"},on:{getphonenumber:function(e){e=t.$handleEvent(e),t.getuserinfo(e)}}},[t._v("获取手机号")])],1)],1)},i=[];n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}))},"9faa":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("d225")),o=a(n("b0b4")),u=a(n("308d")),s=a(n("6bb5")),c=a(n("4e2b")),r=n("9ab4"),l=n("60a3"),f=n("2216"),v=function(t){function e(){var t;return(0,i.default)(this,e),t=(0,u.default)(this,(0,s.default)(e).apply(this,arguments)),t.title="Hello",t.showToast=!1,t.pickerIndex=0,t.pickerArr=["美国","中国","巴西","日本"],t}return(0,c.default)(e,t),(0,o.default)(e,[{key:"onLoad",value:function(){uni.getUserInfo({success:function(t){}})}},{key:"showToastFunc",value:function(){(0,f.showToast)("操作成功","success",3e3)}},{key:"open",value:function(){var t=["A","B","C"],e=function(t){};(0,f.showActionSheet)(t,e)}},{key:"chooseVideoSelf",value:function(){var t=["现在拍摄","从相机选择"],e=function(t){switch(t){case 0:(0,f.chooseVideo)(["camera"]);break;case 1:break}};(0,f.showActionSheet)(t,e)}},{key:"getuserinfo",value:function(t){}}]),e}(l.Vue);v=(0,r.__decorate)([l.Component],v);var d=v;e.default=d},bae3:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".content[data-v-55352e3b]{text-align:center;height:%?400?%}.logo[data-v-55352e3b]{height:%?200?%;width:%?200?%;margin-top:%?200?%}.title[data-v-55352e3b]{font-size:%?36?%;color:#8f8f94}.container[data-v-55352e3b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.container .item[data-v-55352e3b]{width:%?300?%;height:%?100?%;background-color:#4cd964}",""])}}]);