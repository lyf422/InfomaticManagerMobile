(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["iuc-roomApplication-v2-seatFlowsCtrl"],{"230f":function(e,i,t){i=e.exports=t("2350")(!1),i.push([e.i,".form1>uni-view>uni-view[data-v-75528d47]{-webkit-flex-basis:30%;flex-basis:30%}uni-form>span>uni-view.cu-form-group>uni-view[data-v-75528d47]{-webkit-flex-basis:40%;flex-basis:40%}",""])},4791:function(e,i,t){"use strict";t.r(i);var s=t("eaef"),a=t.n(s);for(var o in s)"default"!==o&&function(e){t.d(i,e,function(){return s[e]})}(o);i["default"]=a.a},6581:function(e,i,t){"use strict";t.r(i);var s=t("ce76"),a=t("4791");for(var o in a)"default"!==o&&function(e){t.d(i,e,function(){return a[e]})}(o);t("a0f7");var n=t("2877"),c=Object(n["a"])(a["default"],s["a"],s["b"],!1,null,"75528d47",null);i["default"]=c.exports},a0f7:function(e,i,t){"use strict";var s=t("e041"),a=t.n(s);a.a},ce76:function(e,i,t){"use strict";var s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",[t("cu-custom",{attrs:{bgColor:"bg-informatic-brown",isBack:""}},[t("template",{attrs:{slot:"backText"},slot:"backText"},[e._v("返回")]),t("template",{attrs:{slot:"content"},slot:"content"},[e._v(e._s(e.io.isMyStep?"操作申请表":"查看申请表"))])],2),t("lab-Steps",{attrs:{value:e.io.allSteps}}),t("v-uni-form",[t("v-uni-view",{staticClass:"cu-bar bg-white solids-bottom"},[t("v-uni-view",{staticClass:"action text-xl"},[t("v-uni-text",{staticClass:"cuIcon-title text-blue text-xl"}),t("v-uni-text",{staticClass:"text-bold text-xl"},[e._v("个人申请实验室")])],1)],1),t("v-uni-view",{staticClass:"form1"},[t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.Owner,expression:"io.fieldAccess.Owner"}],staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[e._v("申请人名称")]),t("v-uni-input",{attrs:{placeholder:"请输入申请人名称",disabled:"r"===e.io.fieldAccess.Owner||!e.io.isMyStep},model:{value:e.io.data.Owner,callback:function(i){e.$set(e.io.data,"Owner",i)},expression:"io.data.Owner"}})],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.OwnerRoles,expression:"io.fieldAccess.OwnerRoles"}],staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[e._v("申请人身份")]),e._l(e.io.data.OwnerRoles,function(i,s){return t("v-uni-text",{key:s,staticStyle:{flex:"1"}},[e._v(e._s(i))])})],2),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.StartDate,expression:"io.fieldAccess.StartDate"}],staticClass:"cu-form-group",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.selectDateTime(e.io.fieldAccess.StartDate)}}},[t("v-uni-view",{staticClass:"title"},[e._v("申请时段")]),t("v-uni-text",{staticStyle:{flex:"1"}},[e._v(e._s(e.io.data.StartDate?e.io.data.StartDate+" 至 "+e.io.data.EndDate:"请选择申请时段"))])],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.Telephone,expression:"io.fieldAccess.Telephone"}],staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[e._v("申请人电话")]),t("v-uni-input",{attrs:{placeholder:"请输入申请人电话",disabled:"r"===e.io.fieldAccess.Telephone||!e.io.isMyStep},model:{value:e.io.data.Telephone,callback:function(i){e.$set(e.io.data,"Telephone",i)},expression:"io.data.Telephone"}})],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.ApplicationReason,expression:"io.fieldAccess.ApplicationReason"}],staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[e._v("申请事由")]),t("v-uni-input",{attrs:{placeholder:"请输入申请事由",disabled:"r"===e.io.fieldAccess.ApplicationReason||!e.io.isMyStep},model:{value:e.io.data.ApplicationReason,callback:function(i){e.$set(e.io.data,"ApplicationReason",i)},expression:"io.data.ApplicationReason"}})],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.SeatInfo,expression:"io.fieldAccess.SeatInfo"}],staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[e._v("机位信息")]),t("v-uni-text",{staticStyle:{flex:"1"}},[e._v(e._s(e.io.data.SeatInfo.building.Name+"-"+e.io.data.SeatInfo.room.Name+"-"+e.io.data.SeatInfo.seat.Code+"机位"))])],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.GuideTeacherId&&e.isStudent,expression:"io.fieldAccess.GuideTeacherId&&isStudent"}],staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[e._v("指导老师")]),t("v-uni-picker",{attrs:{range:e.assistInfo.teachers,"range-key":"RealName",disabled:"w"!==e.io.fieldAccess.GuideTeacherId||!e.io.isMyStep},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.selectTeacher.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"content"},[e._v(e._s(e.assistInfo.guideTeacherName))])],1)],1)],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.GuideTeacherOpinion,expression:"io.fieldAccess.GuideTeacherOpinion"}],staticClass:"cu-bar bg-white solids-bottom margin-top"},[t("v-uni-view",{staticClass:"action text-xl"},[t("v-uni-text",{staticClass:"cuIcon-title text-blue text-xl"}),t("v-uni-text",{staticClass:"text-bold text-xl"},[e._v("指导老师审核")])],1)],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.GuideTeacherOpinion,expression:"io.fieldAccess.GuideTeacherOpinion"}],staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[e._v("指导老师审核意见")]),t("v-uni-input",{attrs:{disabled:"w"!==e.io.fieldAccess.GuideTeacherOpinion||!e.io.isMyStep},model:{value:e.io.data.GuideTeacherOpinion,callback:function(i){e.$set(e.io.data,"GuideTeacherOpinion",i)},expression:"io.data.GuideTeacherOpinion"}})],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.GuideTeacher,expression:"io.fieldAccess.GuideTeacher"}],staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[e._v("指导老师姓名")]),t("v-uni-input",{attrs:{disabled:"w"!==e.io.fieldAccess.GuideTeacher||!e.io.isMyStep},model:{value:e.io.data.GuideTeacher,callback:function(i){e.$set(e.io.data,"GuideTeacher",i)},expression:"io.data.GuideTeacher"}})],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.GuideTeacherTime,expression:"io.fieldAccess.GuideTeacherTime"}],staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[e._v("指导老师审核时间")]),t("v-uni-input",{attrs:{disabled:"w"!==e.io.fieldAccess.GuideTeacherTime||!e.io.isMyStep},model:{value:e.io.data.GuideTeacherTime,callback:function(i){e.$set(e.io.data,"GuideTeacherTime",i)},expression:"io.data.GuideTeacherTime"}})],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.Reviewer,expression:"io.fieldAccess.Reviewer"}],staticClass:"cu-bar bg-white solids-bottom margin-top"},[t("v-uni-view",{staticClass:"action text-xl"},[t("v-uni-text",{staticClass:"cuIcon-title text-blue text-xl"}),t("v-uni-text",{staticClass:"text-bold text-xl"},[e._v("管理组老师审核")])],1)],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.Reviewer,expression:"io.fieldAccess.Reviewer"}],staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[e._v("管理组审核人名称")]),t("v-uni-input",{attrs:{disabled:"w"!==e.io.fieldAccess.Reviewer||!e.io.isMyStep},model:{value:e.io.data.Reviewer,callback:function(i){e.$set(e.io.data,"Reviewer",i)},expression:"io.data.Reviewer"}})],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.ReviewTime,expression:"io.fieldAccess.ReviewTime"}],staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[e._v("管理组审核时间")]),t("v-uni-input",{attrs:{disabled:"w"!==e.io.fieldAccess.ReviewTime||!e.io.isMyStep},model:{value:e.io.data.ReviewTime,callback:function(i){e.$set(e.io.data,"ReviewTime",i)},expression:"io.data.ReviewTime"}})],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.ExpertOpinion,expression:"io.fieldAccess.ExpertOpinion"}],staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[e._v("办公会意见")]),t("v-uni-input",{attrs:{placeholder:"请填写",disabled:"w"!==e.io.fieldAccess.ExpertOpinion||!e.io.isMyStep},model:{value:e.io.data.ExpertOpinion,callback:function(i){e.$set(e.io.data,"ExpertOpinion",i)},expression:"io.data.ExpertOpinion"}})],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.DevDirector,expression:"io.fieldAccess.DevDirector"}],staticClass:"cu-bar bg-white solids-bottom margin-top"},[t("v-uni-view",{staticClass:"action text-xl"},[t("v-uni-text",{staticClass:"cuIcon-title text-blue text-xl"}),t("v-uni-text",{staticClass:"text-bold text-xl"},[e._v("分管科创副主任审批")])],1)],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.DevDirector,expression:"io.fieldAccess.DevDirector"}],staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[e._v("审核人名称")]),t("v-uni-input",{attrs:{disabled:"w"!==e.io.fieldAccess.DevDirector||!e.io.isMyStep},model:{value:e.io.data.DevDirector,callback:function(i){e.$set(e.io.data,"DevDirector",i)},expression:"io.data.DevDirector"}})],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.DevDirectorTime,expression:"io.fieldAccess.DevDirectorTime"}],staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[e._v("审核时间")]),t("v-uni-input",{attrs:{disabled:"w"!==e.io.fieldAccess.DevDirectorTime||!e.io.isMyStep},model:{value:e.io.data.DevDirectorTime,callback:function(i){e.$set(e.io.data,"DevDirectorTime",i)},expression:"io.data.DevDirectorTime"}})],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.ManageDirector,expression:"io.fieldAccess.ManageDirector"}],staticClass:"cu-bar bg-white solids-bottom margin-top"},[t("v-uni-view",{staticClass:"action text-xl"},[t("v-uni-text",{staticClass:"cuIcon-title text-blue text-xl"}),t("v-uni-text",{staticClass:"text-bold text-xl"},[e._v("分管实验室管理副主任审批")])],1)],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.ManageDirector,expression:"io.fieldAccess.ManageDirector"}],staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[e._v("审核人名称")]),t("v-uni-input",{attrs:{disabled:"w"!==e.io.fieldAccess.ManageDirector||!e.io.isMyStep},model:{value:e.io.data.ManageDirector,callback:function(i){e.$set(e.io.data,"ManageDirector",i)},expression:"io.data.ManageDirector"}})],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.ManageDirectorTime,expression:"io.fieldAccess.ManageDirectorTime"}],staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[e._v("审核时间")]),t("v-uni-input",{attrs:{disabled:"w"!==e.io.fieldAccess.ManageDirectorTime||!e.io.isMyStep},model:{value:e.io.data.ManageDirectorTime,callback:function(i){e.$set(e.io.data,"ManageDirectorTime",i)},expression:"io.data.ManageDirectorTime"}})],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.HandlerName,expression:"io.fieldAccess.HandlerName"}],staticClass:"cu-bar bg-white solids-bottom margin-top"},[t("v-uni-view",{staticClass:"action text-xl"},[t("v-uni-text",{staticClass:"cuIcon-title text-blue text-xl"}),t("v-uni-text",{staticClass:"text-bold text-xl"},[e._v("实验室管理员审核")])],1)],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.HandlerName,expression:"io.fieldAccess.HandlerName"}],staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[e._v("实验室管理人员名称")]),t("v-uni-input",{attrs:{disabled:"w"!==e.io.fieldAccess.HandlerName||!e.io.isMyStep},model:{value:e.io.data.HandlerName,callback:function(i){e.$set(e.io.data,"HandlerName",i)},expression:"io.data.HandlerName"}})],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.io.fieldAccess.HandleTime,expression:"io.fieldAccess.HandleTime"}],staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[e._v("审核时间")]),t("v-uni-input",{attrs:{disabled:"w"!==e.io.fieldAccess.HandleTime||!e.io.isMyStep},model:{value:e.io.data.HandleTime,callback:function(i){e.$set(e.io.data,"HandleTime",i)},expression:"io.data.HandleTime"}})],1)],1),t("timePicker",{attrs:{show:e.showPicker,type:"rangetime",color:"#6d3b5e"},on:{cancel:function(i){arguments[0]=i=e.$handleEvent(i),e.selectDateTime()},confirm:function(i){arguments[0]=i=e.$handleEvent(i),e.confirmDateTime.apply(void 0,arguments)}}}),t("v-uni-view",{staticClass:"cu-bar bg-white solids-bottom margin-top"},[t("v-uni-view",{staticClass:"action text-xl"},[t("v-uni-text",{staticClass:"cuIcon-title text-blue text-xl"}),t("v-uni-text",{staticClass:"text-bold text-xl"},[e._v("操作流程")])],1),t("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.foldUp.apply(void 0,arguments)}}},[t("v-uni-text",{staticClass:"text-df"},[e._v(e._s(e.displayTimeline?"收起":"展开"))]),t("v-uni-text",{staticClass:"padding-lr-xs text-bold",class:e.displayTimeline?"cuIcon-fold":"cuIcon-unfold"})],1)],1),t("labTimeLine",{directives:[{name:"show",rawName:"v-show",value:e.displayTimeline,expression:"displayTimeline"}],attrs:{timeline:e.io.timelines}}),e.io.isMyStep?t("v-uni-view",[1===e.io.submitBtns.length?t("v-uni-button",{staticClass:"flex-sub bg-cyan margin-top",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onSubmit()}}},[e._v(e._s(e.io.submitBtns[0].Text))]):t("v-uni-view",{staticStyle:{height:"180rpx",width:"100%"}},[t("v-uni-view",{staticClass:"flex-sub cu-list grid cu-bar foot",class:["col-"+e.io.submitBtns.length]},e._l(e.io.submitBtns,function(i,s){return t("v-uni-view",{key:s,staticClass:"cu-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmit(i)}}},[t("v-uni-view",{class:i.Icon}),t("v-uni-text",[e._v(e._s(i.Text))])],1)}),1)],1)],1):e._e()],1)},a=[];t.d(i,"a",function(){return s}),t.d(i,"b",function(){return a})},e041:function(e,i,t){var s=t("230f");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var a=t("4f06").default;a("3c177597",s,!0,{sourceMap:!1,shadowMode:!1})},eaef:function(e,i,t){"use strict";var s=t("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("ac6a"),t("3b2b");var a=s(t("cebc")),o={onLoad:function(e){var i=this;uni.post("/api/roomApp/v1/GetRoomAndTeacher",{},function(e){i.assistInfo=(0,a.default)({},i.assistInfo,e)}),e.create?(this.displayTimeline=!1,uni.getStorage({key:"seatid",success:function(e){var t=e.data;uni.post("/api/seatApp/v1/Applicate",{id:t},function(e){if(e.success){for(var t in i.io=e,i.io.data.OwnerRoles)if("老师"===i.io.data.OwnerRoles[t]){i.isStudent=!1;break}}else uni.showMessage(e.msg,1)})}})):uni.getStorage({key:"jmpInfo",success:function(e){uni.post("/api/workflow/LoadInstance",(0,a.default)({},e.data,{detail:!0}),function(e){for(var t in i.io=e,i.io.data.OwnerRoles)if("老师"===i.io.data.OwnerRoles[t]){i.isStudent=!1;break}if(5===i.io.intstanceState)for(var s in i.io.allSteps)if(0===i.io.allSteps[s].status){i.io.allSteps[s-1].status=30,i.io.timelines[0].steps[0].State=4;break}})}})},methods:{formValidate:function(){var e=[];if(this.isStudent&&"00000000-0000-0000-0000-000000000000"===this.io.data.GuideTeacherId&&"填写申请表"===this.io.currentStep&&e.push("必须选择指导老师"),void 0!==this.upLoad.Telephone&&"填写申请表"===this.io.currentStep){var i=new RegExp("^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$");!1===i.test(this.upLoad.Telephone)&&e.push("请输入正确的电话号码")}return e},onSubmit:function(e){var i=this;e&&(this.io.data[e.Field]=e.Value),this.io.shouldUpload.forEach(function(e){i.upLoad[e]=i.io[e]||i.io.data[e]});var t=this.formValidate();t.length>0?uni.showMessage(t[0]):uni.post("/api/workflow/SubmitInstance",(0,a.default)({},this.upLoad),function(e){e.success?uni.showMessage("提交成功",1,"","success"):uni.showMessage(e.msg)})},selectTeacher:function(e){var i=this.assistInfo.teachers[e.detail.value];this.io.data.GuideTeacherId=i.ID,this.assistInfo.guideTeacherName=i.RealName},selectSeat:function(e){var i=this.assistInfo.seats[e.detail.value];this.io.data.SeatId=i.ID,this.io.data.SeatInfo.seat=i},selectDateTime:function(e){e&&"w"!==e||!this.io.isMyStep||(this.showPicker=!this.showPicker)},confirmDateTime:function(e){this.io.data.StartDate=e.value[0],this.io.data.EndDate=e.value[1],this.selectDateTime()},foldUp:function(){this.displayTimeline=!this.displayTimeline}},data:function(){return{io:{allSteps:[],data:{SeatInfo:{building:{},room:{},seat:{}}},fieldAccess:{},intstanceState:"",isMyStep:!1,shouldUpload:[],submitBtns:[],timeLines:[]},assistInfo:{buildings:[],rooms:[],seats:[],teachers:[],roomtemp:[],roomIndex:[0,0],guideTeacherName:"请选择指导老师"},displayTimeline:!0,upLoad:[],roomDic:{},seatsDic:{},showPicker:!1,isStudent:!0}}};i.default=o}}]);