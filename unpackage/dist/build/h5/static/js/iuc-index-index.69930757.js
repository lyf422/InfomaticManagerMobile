(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["iuc-index-index"],{"43f7":function(t,n,e){"use strict";e.r(n);var a=e("d0b5"),r=e("af3f");for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);var c=e("2877"),u=Object(c["a"])(r["default"],a["a"],a["b"],!1,null,"750d91dc",null);n["default"]=u.exports},af3f:function(t,n,e){"use strict";e.r(n);var a=e("b4c2"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=r.a},b4c2:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("6faa"),r={methods:{goCreate:function(){uni.navigateTo({url:"/iuc/softwareInstall/v1/list"})},go:function(t){uni.post("/uc/getCurrentUserGuid",{id:t},function(t){uni.setStorage({key:"currentUserGuid",data:t.currentUserGuid}),a.currentUserGuid=t.currentUserGuid,a.userInfo=t.userInfo;var n=a.userInfo.permissons;a.checkPermission=function(t){return n&&n.indexOf(t)>=0},uni.navigateTo({url:"/iuc/softwareInstall/v1/list"})})}},data:function(){return{app:a}}};n.default=r},d0b5:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"flex flex-direction padding"},[e("a",{staticClass:"cu-btn bg-green lg margin-top",attrs:{href:"javascript:;"},on:{click:function(n){n=t.$handleEvent(n),t.goCreate(n)}}},[t._v("列表页面")]),e("a",{staticClass:"cu-btn bg-green lg margin-top",attrs:{href:"javascript:;"},on:{click:function(n){n=t.$handleEvent(n),t.go("44213f8a-c90a-422b-88c0-815f4de5a000")}}},[t._v("以管理员身份登录")]),e("a",{staticClass:"cu-btn bg-green lg margin-top",attrs:{href:"javascript:;"},on:{click:function(n){n=t.$handleEvent(n),t.go("d9824e8c-c998-45e2-8156-34d723049855")}}},[t._v("以普通老师身份登录")]),e("a",{staticClass:"cu-btn bg-green lg margin-top",attrs:{href:"javascript:;"},on:{click:function(n){n=t.$handleEvent(n),t.go("8094cf84-01e6-484d-bb01-04a299f5ef5b")}}},[t._v("以维修者主管身份登录")]),e("a",{staticClass:"cu-btn bg-green lg margin-top",attrs:{href:"javascript:;"},on:{click:function(n){n=t.$handleEvent(n),t.go("b15f7cdb-9f96-4041-a7b2-4cfeebabaa8d")}}},[t._v("以普通维修者身份登录")])])},r=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r})}}]);