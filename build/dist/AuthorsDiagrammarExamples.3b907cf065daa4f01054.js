(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{1266:function(e,a,t){"use strict";var n=t(916);var r=t.n(n);var i=r.a},1267:function(e,a,t){a=e.exports=t(14)(false);a.push([e.i,'@use "sass:map";\n.no-scroll[data-v-03ba6d3d] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\nmain[data-v-03ba6d3d] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n.page-header[data-v-03ba6d3d] {\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid #ccc;\n  background: #fff;\n}\n.page-header .nav-bar[data-v-03ba6d3d] {\n    display: flex;\n    align-items: center;\n    padding: 16px;\n}\n.page-header .back[data-v-03ba6d3d] {\n    display: flex;\n    align-items: center;\n    padding: 4px 8px;\n}\n.page-header .title-block[data-v-03ba6d3d] {\n    flex: 1;\n    padding: 0 16px;\n}\n.page-header .title-block h1[data-v-03ba6d3d] {\n      margin: 0;\n      font-size: 22px;\n}\n.page-header .btn[data-v-03ba6d3d] {\n    height: 38px;\n    border-color: #ccc;\n    border-radius: 6px;\n    font-size: 18px;\n    color: #000000;\n    background: #FFFFFF;\n}\n.page-content[data-v-03ba6d3d] {\n  height: 100%;\n}\n',""])},1269:function(e,a,t){var n=t(2452);if(typeof n==="string")n=[[e.i,n,""]];if(n.locals)e.exports=n.locals;var r=t(15).default;var i=r("55478423",n,false,{});if(false){}},1293:function(e,a,t){"use strict";var n=function(){var e=this;var a=e.$createElement;var t=e._self._c||a;return t("main",[t("header",{staticClass:"page-header"},[t("div",{staticClass:"nav-bar"},[t("router-link",{staticClass:"back btn",attrs:{to:e.backLocationFinal}},[e._v("\n        ←\n      ")]),e._v(" "),t("div",{staticClass:"title-block"},[t("h1",[e._v(e._s(e.title))])])],1)]),e._v(" "),t("div",{staticClass:"page-content"},[e._t("default")],2)])};var r=[];n._withStripped=true;var i=t(0);var s=t(3);var l=t(1);var d=t(9);let o=class e extends s["default"]{get backLocationFinal(){return this.backLocation?this.backLocation:{name:"explorations_menu"}}};Object(i["b"])([Object(l["c"])(String)],o.prototype,"title",void 0);Object(i["b"])([Object(l["c"])(Object)],o.prototype,"backLocation",void 0);o=Object(i["b"])([Object(l["a"])({computed:Object.assign({},Object(d["mapState"])("authorLessons",["authorLessons"]))})],o);var c=o;var p=c;var v=t(1266);var u=t(5);var m=Object(u["a"])(p,n,r,false,null,"03ba6d3d",null);if(false){var f}m.options.__file="frontend/components/EditorPageWrapper.vue";var g=a["a"]=m.exports},2451:function(e,a,t){"use strict";var n=t(1269);var r=t.n(n);var i=r.a},2452:function(e,a,t){a=e.exports=t(14)(false);a.push([e.i,'@use "sass:map";\n.no-scroll[data-v-c65c7bf6] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.content[data-v-c65c7bf6] {\n  display: grid;\n  grid-template-columns: 300px 1fr 1fr;\n  height: 100%;\n}\n.content ul[data-v-c65c7bf6] {\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.example-groups-nav[data-v-c65c7bf6] {\n  flex: none;\n  border-right: 1px solid #ccc;\n  list-style: none;\n  overflow-y: auto;\n  background: #f3f3f3;\n}\n.example-groups-nav li[data-v-c65c7bf6] {\n    display: flex;\n    flex-direction: column;\n}\n.example-groups-nav button[data-v-c65c7bf6] {\n    display: flex;\n    justify-content: left;\n    padding: 8px 16px;\n    border: 0;\n    border-bottom: 1px solid #ccc;\n    text-align: left;\n    background: transparent;\n}\n.example-groups-nav .button-example-group[data-v-c65c7bf6] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: -1px;\n    padding-top: 4px;\n    padding-bottom: 4px;\n    font-weight: bold;\n    background: #FFFFFF;\n}\n.example-groups-nav .button-example-group span[data-v-c65c7bf6] {\n      width: 16px;\n}\n.example-groups-nav .button-example-item[data-v-c65c7bf6] {\n    flex-direction: column;\n}\n.example-groups-nav .button-example-item.selected[data-v-c65c7bf6] {\n      font-weight: 600;\n      background: #ccc;\n}\n.example-group.hidden[data-v-c65c7bf6] {\n  display: none;\n}\n.example-details[data-v-c65c7bf6] {\n  display: flex;\n  flex-direction: column;\n  padding-top: 24px;\n  border-right: 1px solid #ccc;\n  overflow: hidden;\n}\n.example-details .text[data-v-c65c7bf6] {\n    padding: 0 16px;\n    margin-bottom: 24px;\n}\n.example-details .text h2[data-v-c65c7bf6] {\n      margin: 0;\n}\n.example-details .text p[data-v-c65c7bf6]:last-child {\n      margin: 0;\n}\n.example-details .code[data-v-c65c7bf6] {\n    flex: 1;\n    overflow: hidden;\n}\n.example-details .code-editor[data-v-c65c7bf6] {\n    height: 100%;\n}\n.example-preview[data-v-c65c7bf6] {\n  display: flex;\n  justify-content: center;\n  padding: 24px 24px;\n}\n.example-preview .preview-wrapper[data-v-c65c7bf6] {\n    width: 500px;\n    max-width: 100%;\n}\n.examples-empty[data-v-c65c7bf6] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  color: rgba(0, 0, 0, 0.5);\n}\n',""])},2559:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this;var a=e.$createElement;var t=e._self._c||a;return t("main",[t("EditorPageWrapper",{attrs:{title:"Diagrammar Examples","back-location":{name:"authors_dashboard"}}},[e.diagrammarExamples.length===0?t("div",{staticClass:"examples-empty"},[t("p",[e._v("Unable to display example diagrams.")])]):t("div",{staticClass:"content"},[t("ul",{staticClass:"example-groups-nav"},e._l(e.diagrammarExamples,(function(a,n){return t("li",{key:a.group_name},[t("button",{staticClass:"button-example-group",on:{click:function(a){return e.toggleGroup(n)}}},[t("span",[e._v(e._s(e.isGroupHidden(n)?"▸":"▾"))]),e._v("\n            "+e._s(a.group_name)+"\n          ")]),e._v(" "),t("ul",{class:{"example-group":true,hidden:e.isGroupHidden(n)}},e._l(a.items,(function(r,i){return t("li",{key:a.group_name+"__"+r.title},[t("button",{class:{"button-example-item":true,selected:e.isSelected([n,i])},on:{click:function(a){return e.selectExample([n,i])}}},[e._v("\n                "+e._s(r.title)+"\n              ")])])})),0)])})),0),e._v(" "),t("div",{staticClass:"example-details"},[t("div",{staticClass:"text"},[t("h2",[e._v(e._s(e.selectedExample.title))]),e._v(" "),t("p",[e._v(e._s(e.selectedExample.description))])]),e._v(" "),t("div",{staticClass:"code"},[t("CodeEditor",{staticClass:"code-editor",attrs:{value:e.selectedExample.diagram.elm,language:"elm",elmErrors:[],"show-lang-header":true,"read-only":true,"with-scroll":true},on:{"value-updated":function(){},"cursor-updated":function(){}}})],1)]),e._v(" "),t("div",{staticClass:"example-preview"},[t("div",{staticClass:"preview-wrapper"},[e.diagramError?t("p",[e._v("\n            "+e._s(e.diagramError)+"\n          ")]):t("DiagrammarPreview",{attrs:{asset:e.selectedDiagramAsset,"static-javascript":e.selectedExample.diagram.javascript,"interactive-key":"preview"},on:{"interactive-error":e.handleDiagramError,"loading-preview":function(){}}})],1)])])])],1)};var r=[];n._withStripped=true;var i=t(0);var s=t(1);var l=t(9);var d=t(1293);var o=t(930);var c=t(1403);let p=class e extends s["e"]{constructor(){super(...arguments);this.groupHiddenStatus={};this.selectedIndex=[0,0];this.diagramError=null}isGroupHidden(e){return this.groupHiddenStatus[e]===true}toggleGroup(e){this.$set(this.groupHiddenStatus,e,this.groupHiddenStatus[e]===true?false:true)}selectExample(e){this.selectedIndex=e}isSelected([e,a]){return this.selectedIndex[0]===e&&this.selectedIndex[1]===a}get selectedExample(){const[e,a]=this.selectedIndex;return this.diagrammarExamples[e].items[a]}get selectedDiagramAsset(){return{type:"diagrammar",alias:"diagrammar-preview",elm:this.selectedExample.diagram.elm}}handleDiagramError(e){this.diagramError=e}};p=Object(i["b"])([Object(s["a"])({components:{CodeEditor:o["a"],DiagrammarPreview:c["a"],EditorPageWrapper:d["a"]},computed:Object.assign(Object.assign({},Object(l["mapState"])("diagrammarExamples",["diagrammarExamples"])),Object(l["mapState"])("globals",["user"])),metaInfo:{title:"Diagrammar Examples"}})],p);var v=p;var u=v;var m=t(2451);var f=t(5);var g=Object(f["a"])(u,n,r,false,null,"c65c7bf6",null);if(false){var x}g.options.__file="frontend/views/authors/AuthorsDiagrammarExamples.vue";var b=a["default"]=g.exports},916:function(e,a,t){var n=t(1267);if(typeof n==="string")n=[[e.i,n,""]];if(n.locals)e.exports=n.locals;var r=t(15).default;var i=r("0b7eb0b4",n,false,{});if(false){}}}]);
//# sourceMappingURL=AuthorsDiagrammarExamples.3b907cf065daa4f01054.js.map