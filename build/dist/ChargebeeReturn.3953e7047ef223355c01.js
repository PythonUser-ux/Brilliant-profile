(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{1093:function(e,a,t){var r=t(2149);if(typeof r==="string")r=[[e.i,r,""]];if(r.locals)e.exports=r.locals;var s=t(15).default;var i=s("5a886d03",r,false,{});if(false){}},2148:function(e,a,t){"use strict";var r=t(1093);var s=t.n(r);var i=s.a},2149:function(e,a,t){a=e.exports=t(14)(false);a.push([e.i,'@use "sass:map";\n.no-scroll[data-v-e3e07526] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\nmain.chargebee-return[data-v-e3e07526] {\n  width: 100%;\n  max-width: 1200px;\n  margin: 20px auto;\n}\n',""])},2555:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this;var a=e.$createElement;var t=e._self._c||a;return t("div",{class:{"success-page":true,mobile:e.isMobile(e.$mq)}},[e._m(0)])};var s=[function(){var e=this;var a=e.$createElement;var t=e._self._c||a;return t("main",{staticClass:"chargebee-return"},[t("div",[t("h2",[e._v("Processing, please wait...")])])])}];r._withStripped=true;var i=t(0);var n=t(1);var c=t(9);var o=t(8);let u=class e extends n["e"]{mounted(){this.checkLoaded()}checkLoaded(){return Object(i["a"])(this,void 0,void 0,(function*(){const e=yield Object(o["b"])("/premium/chargebee/return-api/");const a=e.results.chargebee_return;if(a.is_subscribed){window.location.assign("/premium/success/")}else{setTimeout(()=>this.checkLoaded(),2e3)}}))}};u=Object(i["b"])([Object(n["a"])({computed:Object.assign({},Object(c["mapGetters"])("pageHeader",["isMobile"])),metaInfo:{title:"Processing..."}})],u);var l=u;var v=l;var d=t(2148);var f=t(5);var p=Object(f["a"])(v,r,s,false,null,"e3e07526",null);if(false){var b}p.options.__file="frontend/views/premium/checkout/ChargebeeReturn.vue";var h=a["default"]=p.exports}}]);
//# sourceMappingURL=ChargebeeReturn.3953e7047ef223355c01.js.map