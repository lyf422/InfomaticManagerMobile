(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/labComponent/labStepInfo"],{"31b8":function(t,n,e){"use strict";e.r(n);var a=e("9a38"),u=e("4c12");for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);e("e4af");var r,o=e("f0c5"),i=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);n["default"]=i.exports},"3cb9":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;e("5682");var a={name:"LabStepInfo",props:{value:{required:!0,type:Array,default:function(){}}},data:function(){return{colorDic:{0:"",10:"text-cyan",20:"text-blue",30:"text-red"},iconDic:{0:"",10:"loading",20:"",30:"err"},steps:[]}},watch:{value:{deep:!0,immediate:!0,handler:function(t){var n=this;this.steps=this.value.map(function(t){return t.icon=n.iconDic[t.status],t.color=n.colorDic[t.status],t})}}}};n.default=a},"4c12":function(t,n,e){"use strict";e.r(n);var a=e("3cb9"),u=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);n["default"]=u.a},"9a38":function(t,n,e){"use strict";var a,u=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return a})},"9b93":function(t,n,e){},e4af:function(t,n,e){"use strict";var a=e("9b93"),u=e.n(a);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/labComponent/labStepInfo-create-component',
    {
        'components/labComponent/labStepInfo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("31b8"))
        })
    },
    [['components/labComponent/labStepInfo-create-component']]
]);
