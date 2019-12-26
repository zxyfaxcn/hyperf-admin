(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52b968ba"],{"0fd4":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cs-p"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.tableData,"highlight-current-row":!0},on:{"sort-change":t.sortChange}},[n("el-table-column",{attrs:{label:"账号",prop:"username",sortable:"custom","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"账号类型",prop:"client_type",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.group[e.row.client_type])+" ")]}}])}),n("el-table-column",{attrs:{label:"动作",prop:"action","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"路径",prop:"path",sortable:"custom","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"IP","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.ip?n("el-tooltip",{attrs:{content:e.row.ip,placement:"top"}},[n("i",{staticClass:"el-icon-location"})]):t._e(),t._v(" "+t._s(e.row.ip_region)+" ")]}}])}),n("el-table-column",{attrs:{label:"执行耗时","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.execution_time?n("el-tooltip",{attrs:{content:e.row.execution_time,placement:"top"}},[n("i",{staticClass:"el-icon-location"})]):t._e(),t._v(" ms ")]}}])}),n("el-table-column",{attrs:{label:"请求参数",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{staticClass:"cs-cp",attrs:{size:"mini",type:"info"},nativeOn:{click:function(n){return t.getObjectToJson(e.$index,"params")}}},[t._v("详细")])]}}])}),n("el-table-column",{attrs:{label:"处理结果",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{staticClass:"cs-cp",attrs:{size:"mini",type:"info"},nativeOn:{click:function(n){return t.getObjectToJson(e.$index,"result")}}},[t._v("详细")])]}}])}),n("el-table-column",{attrs:{label:"状态",align:"center",width:"75",prop:"status",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{size:"mini",type:e.row.status?"warning":"success",effect:"plain"}},[t._v(" "+t._s(t.statusMap[e.row.status])+" ")])]}}])}),n("el-table-column",{attrs:{label:"创建日期",prop:"create_time",align:"center",width:"160",sortable:"custom"}})],1),n("el-dialog",{attrs:{title:t.jsonMap[t.dialogStatus],visible:t.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("cs-highlight",{staticStyle:{"margin-top":"-25px"},attrs:{code:t.dialogJson}}),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("div",{staticClass:"cs-fl"},[n("el-button",{attrs:{size:"small"},on:{click:function(e){return t.copyData(t.dialogJson)}}},[t._v("复制")])],1),n("el-button",{attrs:{size:"small"},nativeOn:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),n("el-button",{attrs:{type:"primary",size:"small"},nativeOn:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确定")])],1)],1)],1)},a=[],i=n("2af7"),r={props:{loading:{default:!1},tableData:{default:function(){return[]}},group:{default:function(){return[]}}},data:function(){return{statusMap:{0:"成功",1:"失败"},jsonMap:{params:"请求参数",result:"处理结果"},dialogJson:"",dialogStatus:"",dialogFormVisible:!1}},methods:{sortChange:function(t){var e=t.column,n=t.prop,o=t.order,a={order_type:void 0,order_field:void 0};e&&o&&(a.order_type="ascending"===o?"asc":"desc",a.order_field=n),this.$emit("sort",a)},getObjectToJson:function(t,e){this.dialogJson=JSON.stringify(this.tableData[t][e],null,2),this.dialogStatus=e,this.dialogFormVisible=!0},copyData:function(t){var e=this;i["a"](t).then((function(){e.$message.success("已复制到剪贴板")})).catch((function(t){e.$message.error(t)}))}}},l=r,s=n("2877"),c=Object(s["a"])(l,o,a,!1,null,null,null);e["default"]=c.exports},"2af7":function(t,e,n){"use strict";function o(t,e,n,o){return new(n||(n=Promise))((function(a,i){function r(t){try{s(o.next(t))}catch(t){i(t)}}function l(t){try{s(o.throw(t))}catch(t){i(t)}}function s(t){t.done?a(t.value):new n((function(e){e(t.value)})).then(r,l)}s((o=o.apply(t,e||[])).next())}))}function a(t,e){var n,o,a,i,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(a=2&i[0]?o.return:i[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,i[1])).done)return a;switch(o=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,o=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!(a=(a=r.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){r=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){r.label=i[1];break}if(6===i[0]&&r.label<a[1]){r.label=a[1],a=i;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(i);break}a[2]&&r.ops.pop(),r.trys.pop();continue}i=e.call(t,r)}catch(t){i=[6,t],o=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}n.d(e,"a",(function(){return m}));var i=["text/plain","text/html"],r=function(){(console.warn||console.log).call(arguments)}.bind(console,"[clipboard-polyfill]"),l=!0,s=function(){function t(){this.m={}}return t.prototype.setData=function(t,e){l&&-1===i.indexOf(t)&&r("Unknown data type: "+t,"Call clipboard.suppressWarnings() to suppress this warning."),this.m[t]=e},t.prototype.getData=function(t){return this.m[t]},t.prototype.forEach=function(t){for(var e in this.m)t(this.m[e],e)},t}(),c=function(t){},u=!0,d=function(){(console.warn||console.log).apply(console,arguments)}.bind("[clipboard-polyfill]"),p="text/plain";function f(t){return o(this,void 0,void 0,(function(){var e;return a(this,(function(n){if(u&&!t.getData(p)&&d("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."),x()){if(function(t){var e=t.getData(p);if(void 0!==e)return window.clipboardData.setData("Text",e);throw new Error("No `text/plain` value was specified.")}(t))return[2];throw new Error("Copying failed, possibly because the user rejected it.")}if(g(t))return c("regular execCopy worked"),[2];if(navigator.userAgent.indexOf("Edge")>-1)return c('UA "Edge" => assuming success'),[2];if(v(document.body,t))return c("copyUsingTempSelection worked"),[2];if(function(t){var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important"),e.textContent="temporary element",document.body.appendChild(e);var n=v(e,t);return document.body.removeChild(e),n}(t))return c("copyUsingTempElem worked"),[2];if(void 0!==(e=t.getData(p))&&function(t){c("copyTextUsingDOM");var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important");var n=e;e.attachShadow&&(c("Using shadow DOM."),n=e.attachShadow({mode:"open"}));var o=document.createElement("span");o.innerText=t,n.appendChild(o),document.body.appendChild(e),h(o);var a=document.execCommand("copy");return w(),document.body.removeChild(e),a}(e))return c("copyTextUsingDOM worked"),[2];throw new Error("Copy command failed.")}))}))}function m(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){return navigator.clipboard&&navigator.clipboard.writeText?(c("Using `navigator.clipboard.writeText()`."),[2,navigator.clipboard.writeText(t)]):[2,f(y(t))]}))}))}var b=function(){this.success=!1};function g(t){var e=new b,n=function(t,e,n){c("listener called"),t.success=!0,e.forEach((function(e,o){var a=n.clipboardData;a.setData(o,e),o===p&&a.getData(o)!==e&&(c("setting text/plain failed"),t.success=!1)})),n.preventDefault()}.bind(this,e,t);document.addEventListener("copy",n);try{document.execCommand("copy")}finally{document.removeEventListener("copy",n)}return e.success}function v(t,e){h(t);var n=g(e);return w(),n}function h(t){var e=document.getSelection();if(e){var n=document.createRange();n.selectNodeContents(t),e.removeAllRanges(),e.addRange(n)}}function w(){var t=document.getSelection();t&&t.removeAllRanges()}function y(t){var e=new s;return e.setData(p,t),e}function x(){return"undefined"==typeof ClipboardEvent&&void 0!==window.clipboardData&&void 0!==window.clipboardData.setData}}}]);