(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{1011:function(n,t,e){"use strict";var i=function(){var n=this;var t=n.$createElement;var e=n._self._c||t;return e("NuxStep",{key:n.currentStepContent.title,class:n.currentStepContent.stepClass,attrs:{title:n.currentStepContent.title,text:n.currentStepContent.text,"continue-button-text":n.continueButtonText,"button-disabled":n.choice==="",loading:n.loading,"current-step":this.currentStep,"steps-count":this.stepCount,"hide-button":this.hideButton,"hide-continue-ui":this.hideContinueUi},on:{next:n.bubbleNext,"nav-back":function(t){return n.bubbleNavBack(t)}}},[e("NuxStepSurvey",{attrs:{choices:n.currentStepContent.choices,"current-selection":n.choice},on:{chosen:function(t){return n.bubbleSelectChoice(t)}}})],1)};var a=[];i._withStripped=true;var o=e(0);var c=e(3);var s=e(1);var r=e(889);var d=e(1301);let l=class n extends c["default"]{bubbleNext(){this.$emit("next")}bubbleNavBack(n){this.$emit("nav-back",n)}bubbleSelectChoice(n){this.$emit("chosen",n)}};Object(o["b"])([Object(s["c"])({required:true})],l.prototype,"currentStepContent",void 0);Object(o["b"])([Object(s["c"])({default:"Continue"})],l.prototype,"continueButtonText",void 0);Object(o["b"])([Object(s["c"])()],l.prototype,"choice",void 0);Object(o["b"])([Object(s["c"])({required:true})],l.prototype,"currentStep",void 0);Object(o["b"])([Object(s["c"])({required:true})],l.prototype,"stepCount",void 0);Object(o["b"])([Object(s["c"])({required:false})],l.prototype,"loading",void 0);Object(o["b"])([Object(s["c"])({default:false})],l.prototype,"hideButton",void 0);Object(o["b"])([Object(s["c"])({default:false})],l.prototype,"hideContinueUi",void 0);l=Object(o["b"])([Object(s["a"])({components:{NuxStep:r["a"],NuxStepSurvey:d["a"]},computed:{}})],l);var u=l;var p=u;var b=e(2424);var x=e(5);var v=Object(x["a"])(p,i,a,false,null,"1e77724c",null);if(false){var h}v.options.__file="frontend/views/nux/components/SegmentationQuestionNuxStep.vue";var f=t["a"]=v.exports},1247:function(n,t,e){"use strict";var i=e(915);var a=e.n(i);var o=a.a},1248:function(n,t,e){t=n.exports=e(14)(false);t.push([n.i,".choices li p span p {\n  margin: 0 !important;\n}\n",""])},1249:function(n,t,e){"use strict";var i=e(916);var a=e.n(i);var o=a.a},1250:function(n,t,e){t=n.exports=e(14)(false);t.push([n.i,'@use "sass:map";\n.no-scroll[data-v-26f2391c] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n@use "sass:map";\n.no-scroll[data-v-26f2391c] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\nh1[data-v-26f2391c] {\n  font-size: 30px;\n  margin-bottom: 16px;\n  font-weight: 700;\n  line-height: 1.2;\n}\np[data-v-26f2391c] {\n  line-height: 1.5;\n  color: #535353;\n}\nbutton[data-v-26f2391c] {\n  font-family: "Soleil", Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.btn[data-v-26f2391c] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 270px;\n  max-width: 100%;\n  height: 48px;\n  background: #000000;\n  color: #FFFFFF;\n  font-size: 18px;\n  border: 0;\n  border-radius: 6px;\n  line-height: 32px;\n  font-weight: 600;\n}\n.btn[data-v-26f2391c]:hover, .btn[data-v-26f2391c]:active, .btn[data-v-26f2391c]:focus {\n    box-shadow: none;\n    background: #000000;\n    color: #FFFFFF;\n}\n.btn .disabled[data-v-26f2391c], .btn[disabled][data-v-26f2391c] {\n    color: #FFFFFF;\n    opacity: .1;\n}\n.most-popular-badge[data-v-26f2391c] {\n  background: #F2B135;\n  padding: 6px 10px;\n  border-radius: 40px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.375;\n  white-space: nowrap;\n  color: black;\n}\n.nux-container[data-v-26f2391c] {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  min-height: calc(var(--vh, 1vh) * 100);\n  background: #F8F8F8;\n  margin-top: -45px;\n}\n@media screen and (min-width: 700.08px) {\n.nux-container[data-v-26f2391c] {\n      justify-content: center;\n      margin-top: -60px;\n}\n}\n.nux-container .nux-content[data-v-26f2391c] {\n    background: #FFFFFF;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    padding: 16px;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n@media screen and (min-width: 700.08px) {\n.nux-container .nux-content[data-v-26f2391c] {\n        margin: 48px auto;\n        height: 675px;\n        flex: initial;\n}\n}\n@media screen and (min-width: 700.08px) and (max-width: 960px) {\n.nux-container .nux-content[data-v-26f2391c] {\n        width: 700.08px;\n}\n}\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n.nux-container .nux-content[data-v-26f2391c] {\n        width: 960px;\n}\n}\n@media screen and (min-width: 1200px) {\n.nux-container .nux-content[data-v-26f2391c] {\n        width: 1200px;\n}\n}\n@media screen and (min-width: 700.08px) {\nh1[data-v-26f2391c] {\n    font-size: 36px;\n    line-height: 1.3;\n}\n.btn[data-v-26f2391c] {\n    width: 380px;\n}\n}\n.survey[data-v-26f2391c] {\n  height: 100%;\n}\nul.choices[data-v-26f2391c] {\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 100%;\n}\nul.choices li[data-v-26f2391c] {\n    border-radius: 6px;\n    padding: 16px 24px;\n    display: flex;\n    align-items: center;\n    border: 0.5px solid #E6E6E6;\n    cursor: pointer;\n    margin: 0 0 12px;\n    width: 570px;\n    max-width: 100%;\n}\nul.choices li.selected[data-v-26f2391c] {\n      border-color: #EEA71F;\n}\nul.choices li p[data-v-26f2391c] {\n      margin: 0;\n      font-size: 14px;\n      line-height: 1.4285;\n      color: black;\n}\nul.choices li img[data-v-26f2391c] {\n      width: 32px;\n      margin-right: 24px;\n}\n@media screen and (min-width: 700.08px) {\nul.choices li p[data-v-26f2391c] {\n    font-size: 16px;\n    line-height: 1.5;\n}\n}\n',""])},1255:function(n,t,e){var i=e(2425);if(typeof i==="string")i=[[n.i,i,""]];if(i.locals)n.exports=i.locals;var a=e(15).default;var o=a("5a854538",i,false,{});if(false){}},1301:function(n,t,e){"use strict";var i=function(){var n=this;var t=n.$createElement;var e=n._self._c||t;return e("div",{staticClass:"survey"},[e("ul",{staticClass:"choices"},n._l(n.choices,(function(t){return e("li",{key:t.identifier,class:{selected:t.identifier===n.currentSelection,popular:t.is_most_popular},on:{click:function(e){return n.chosen(t.identifier)}}},[t.image_url?e("img",{attrs:{src:t.image_url,alt:t.title}}):n._e(),n._v(" "),t.is_most_popular?e("span",{staticClass:"most-popular-badge"},[n._v("Most popular")]):n._e(),n._v(" "),e("p",[t.title?e("strong",[n._v(n._s(t.title))]):n._e(),n._v(" "),e("span",{domProps:{innerHTML:n._s(t.text)}})])])})),0)])};var a=[];i._withStripped=true;var o=e(0);var c=e(3);var s=e(1);let r=class n extends c["default"]{chosen(n){this.$emit("chosen",n)}};Object(o["b"])([Object(s["c"])()],r.prototype,"title",void 0);Object(o["b"])([Object(s["c"])()],r.prototype,"choices",void 0);Object(o["b"])([Object(s["c"])()],r.prototype,"currentSelection",void 0);r=Object(o["b"])([Object(s["a"])({components:{},computed:{}})],r);var d=r;var l=d;var u=e(1247);var p=e(1249);var b=e(5);var x=Object(b["a"])(l,i,a,false,null,"26f2391c",null);if(false){var v}x.options.__file="frontend/views/nux/components/NuxStepSurvey.vue";var h=t["a"]=x.exports},2424:function(n,t,e){"use strict";var i=e(1255);var a=e.n(i);var o=a.a},2425:function(n,t,e){t=n.exports=e(14)(false);t.push([n.i,'@use "sass:map";\n.no-scroll[data-v-1e77724c] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n@use "sass:map";\n.no-scroll[data-v-1e77724c] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\nh1[data-v-1e77724c] {\n  font-size: 30px;\n  margin-bottom: 16px;\n  font-weight: 700;\n  line-height: 1.2;\n}\np[data-v-1e77724c] {\n  line-height: 1.5;\n  color: #535353;\n}\nbutton[data-v-1e77724c] {\n  font-family: "Soleil", Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.btn[data-v-1e77724c] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 270px;\n  max-width: 100%;\n  height: 48px;\n  background: #000000;\n  color: #FFFFFF;\n  font-size: 18px;\n  border: 0;\n  border-radius: 6px;\n  line-height: 32px;\n  font-weight: 600;\n}\n.btn[data-v-1e77724c]:hover, .btn[data-v-1e77724c]:active, .btn[data-v-1e77724c]:focus {\n    box-shadow: none;\n    background: #000000;\n    color: #FFFFFF;\n}\n.btn .disabled[data-v-1e77724c], .btn[disabled][data-v-1e77724c] {\n    color: #FFFFFF;\n    opacity: .1;\n}\n.most-popular-badge[data-v-1e77724c] {\n  background: #F2B135;\n  padding: 6px 10px;\n  border-radius: 40px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.375;\n  white-space: nowrap;\n  color: black;\n}\n.nux-container[data-v-1e77724c] {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  min-height: calc(var(--vh, 1vh) * 100);\n  background: #F8F8F8;\n  margin-top: -45px;\n}\n@media screen and (min-width: 700.08px) {\n.nux-container[data-v-1e77724c] {\n      justify-content: center;\n      margin-top: -60px;\n}\n}\n.nux-container .nux-content[data-v-1e77724c] {\n    background: #FFFFFF;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    padding: 16px;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n@media screen and (min-width: 700.08px) {\n.nux-container .nux-content[data-v-1e77724c] {\n        margin: 48px auto;\n        height: 675px;\n        flex: initial;\n}\n}\n@media screen and (min-width: 700.08px) and (max-width: 960px) {\n.nux-container .nux-content[data-v-1e77724c] {\n        width: 700.08px;\n}\n}\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n.nux-container .nux-content[data-v-1e77724c] {\n        width: 960px;\n}\n}\n@media screen and (min-width: 1200px) {\n.nux-container .nux-content[data-v-1e77724c] {\n        width: 1200px;\n}\n}\n@media screen and (min-width: 700.08px) {\nh1[data-v-1e77724c] {\n    font-size: 36px;\n    line-height: 1.3;\n}\n.btn[data-v-1e77724c] {\n    width: 380px;\n}\n}\n',""])},855:function(n,t,e){var i=e(914);if(typeof i==="string")i=[[n.i,i,""]];if(i.locals)n.exports=i.locals;var a=e(15).default;var o=a("bd716016",i,false,{});if(false){}},889:function(n,t,e){"use strict";var i=function(){var n=this;var t=n.$createElement;var e=n._self._c||t;return e("div",{staticClass:"nux-container"},[n.showBackLink?e("a",{staticClass:"back-button",attrs:{href:"#"},on:{click:function(t){return n.navBack()}}},[e("svg",{attrs:{width:"6",height:"9",viewBox:"0 0 6 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0.664062 3.92188C0.537109 4.04883 0.537109 4.22656 0.664062 4.35352L4.39648 8.11133C4.49805 8.23828 4.70117 8.23828 4.82812 8.11133L5.31055 7.60352C5.4375 7.47656 5.4375 7.29883 5.31055 7.17188L2.31445 4.125L5.31055 1.10352C5.4375 0.976562 5.4375 0.773438 5.31055 0.671875L4.82812 0.164062C4.70117 0.0371094 4.49805 0.0371094 4.39648 0.164062L0.664062 3.92188Z",fill:"#535353"}})]),n._v("\n    Back\n  ")]):n._e(),n._v(" "),e("div",{staticClass:"nux-content"},[e("transition",{attrs:{name:n.transitionName,appear:""}},[e("div",{key:n.title,staticClass:"nux-step",class:{reverse:n.reverseTextAndContent}},[!n.contentOnly?e("div",{staticClass:"step-text",class:n.textClass},[e("h1",[n._v(n._s(n.title))]),n._v(" "),e("p",{domProps:{innerHTML:n._s(n.text)}})]):n._e(),n._v(" "),e("div",{staticClass:"step-content",class:n.contentClass},[n._t("default")],2)])]),n._v(" "),!n.hideContinueUi?e("ContinueUi",{attrs:{"hide-progress-ui":n.hideProgressUi,"hide-button":n.hideButton,"button-text":n.continueButtonText,"button-disabled":n.buttonDisabled,loading:n.loading,"continue-ui-help-text":n.continueUiHelpText,"current-step":n.currentStep,"steps-count":n.stepsCount},on:{next:n.advanceToNextStep,"nav-back":function(t){return n.navigateToPreviousStep(t)}}}):n._e()],1)])};var a=[];i._withStripped=true;var o=e(0);var c=e(3);var s=e(1);var r=e(9);var d=e(958);var l=e(929);let u=class n extends c["default"]{mounted(){window.addEventListener("resize",l["b"]);this.$nextTick(()=>{Object(l["b"])()})}destroy(){window.removeEventListener("resize",l["b"])}advanceToNextStep(){this.$emit("next")}navigateToPreviousStep(n){this.$emit("nav-back",n)}navBack(){this.$router.go(-1)}};Object(o["b"])([Object(s["c"])()],u.prototype,"title",void 0);Object(o["b"])([Object(s["c"])()],u.prototype,"text",void 0);Object(o["b"])([Object(s["c"])()],u.prototype,"textClass",void 0);Object(o["b"])([Object(s["c"])()],u.prototype,"contentClass",void 0);Object(o["b"])([Object(s["c"])({default:false})],u.prototype,"reverseTextAndContent",void 0);Object(o["b"])([Object(s["c"])({default:"Continue"})],u.prototype,"continueButtonText",void 0);Object(o["b"])([Object(s["c"])({type:Number})],u.prototype,"currentStep",void 0);Object(o["b"])([Object(s["c"])({type:Number})],u.prototype,"stepsCount",void 0);Object(o["b"])([Object(s["c"])({type:Boolean,default:false})],u.prototype,"loading",void 0);Object(o["b"])([Object(s["c"])({type:Boolean,default:false})],u.prototype,"buttonDisabled",void 0);Object(o["b"])([Object(s["c"])({type:Boolean,default:false})],u.prototype,"hideButton",void 0);Object(o["b"])([Object(s["c"])({type:Boolean,default:false})],u.prototype,"hideContinueUi",void 0);Object(o["b"])([Object(s["c"])({type:Boolean,default:false})],u.prototype,"hideProgressUi",void 0);Object(o["b"])([Object(s["c"])({type:Boolean,default:false})],u.prototype,"showBackLink",void 0);Object(o["b"])([Object(s["c"])({type:Boolean,default:false})],u.prototype,"contentOnly",void 0);Object(o["b"])([Object(s["c"])()],u.prototype,"continueUiHelpText",void 0);Object(o["b"])([Object(s["c"])({default:"side-slide"})],u.prototype,"transitionName",void 0);u=Object(o["b"])([Object(s["a"])({components:{ContinueUi:d["a"]},computed:Object.assign({},Object(r["mapGetters"])("pageHeader",["isMobile"]))})],u);var p=u;var b=p;var x=e(913);var v=e(5);var h=Object(v["a"])(b,i,a,false,null,"91817bbc",null);if(false){var f}h.options.__file="frontend/views/nux/components/NuxStep.vue";var m=t["a"]=h.exports},913:function(n,t,e){"use strict";var i=e(855);var a=e.n(i);var o=a.a},914:function(n,t,e){t=n.exports=e(14)(false);t.push([n.i,'@use "sass:map";\n.no-scroll[data-v-91817bbc] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n@use "sass:map";\n.no-scroll[data-v-91817bbc] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\nh1[data-v-91817bbc] {\n  font-size: 30px;\n  margin-bottom: 16px;\n  font-weight: 700;\n  line-height: 1.2;\n}\np[data-v-91817bbc] {\n  line-height: 1.5;\n  color: #535353;\n}\nbutton[data-v-91817bbc] {\n  font-family: "Soleil", Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.btn[data-v-91817bbc] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 270px;\n  max-width: 100%;\n  height: 48px;\n  background: #000000;\n  color: #FFFFFF;\n  font-size: 18px;\n  border: 0;\n  border-radius: 6px;\n  line-height: 32px;\n  font-weight: 600;\n}\n.btn[data-v-91817bbc]:hover, .btn[data-v-91817bbc]:active, .btn[data-v-91817bbc]:focus {\n    box-shadow: none;\n    background: #000000;\n    color: #FFFFFF;\n}\n.btn .disabled[data-v-91817bbc], .btn[disabled][data-v-91817bbc] {\n    color: #FFFFFF;\n    opacity: .1;\n}\n.most-popular-badge[data-v-91817bbc] {\n  background: #F2B135;\n  padding: 6px 10px;\n  border-radius: 40px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.375;\n  white-space: nowrap;\n  color: black;\n}\n.nux-container[data-v-91817bbc] {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  min-height: calc(var(--vh, 1vh) * 100);\n  background: #F8F8F8;\n  margin-top: -45px;\n}\n@media screen and (min-width: 700.08px) {\n.nux-container[data-v-91817bbc] {\n      justify-content: center;\n      margin-top: -60px;\n}\n}\n.nux-container .nux-content[data-v-91817bbc] {\n    background: #FFFFFF;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    padding: 16px;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n@media screen and (min-width: 700.08px) {\n.nux-container .nux-content[data-v-91817bbc] {\n        margin: 48px auto;\n        height: 675px;\n        flex: initial;\n}\n}\n@media screen and (min-width: 700.08px) and (max-width: 960px) {\n.nux-container .nux-content[data-v-91817bbc] {\n        width: 700.08px;\n}\n}\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n.nux-container .nux-content[data-v-91817bbc] {\n        width: 960px;\n}\n}\n@media screen and (min-width: 1200px) {\n.nux-container .nux-content[data-v-91817bbc] {\n        width: 1200px;\n}\n}\n@media screen and (min-width: 700.08px) {\nh1[data-v-91817bbc] {\n    font-size: 36px;\n    line-height: 1.3;\n}\n.btn[data-v-91817bbc] {\n    width: 380px;\n}\n}\n.side-slide-enter-active[data-v-91817bbc] {\n  transition: all .4s ease;\n}\n.side-slide-enter[data-v-91817bbc] {\n  -webkit-transform: translateX(300px);\n          transform: translateX(300px);\n  opacity: 0;\n}\n.back-button[data-v-91817bbc] {\n  color: #535353;\n  font-size: 16px;\n  line-height: 1.40625;\n  margin: 24px auto -24px;\n}\n@media screen and (min-width: 700.08px) and (max-width: 960px) {\n.back-button[data-v-91817bbc] {\n      width: 700.08px;\n}\n}\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n.back-button[data-v-91817bbc] {\n      width: 960px;\n}\n}\n@media screen and (min-width: 1200px) {\n.back-button[data-v-91817bbc] {\n      width: 1200px;\n}\n}\n.nux-step[data-v-91817bbc] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.nux-step.reverse[data-v-91817bbc] {\n    flex-direction: column-reverse;\n}\n.nux-step .step-text[data-v-91817bbc] {\n    text-align: center;\n    margin: 24px 0 16px;\n}\n.nux-step .step-text p[data-v-91817bbc] {\n      margin-bottom: 0;\n}\n.nux-step .step-content figure[data-v-91817bbc] {\n    margin: 0 0 24px 0;\n}\n@media screen and (min-width: 700.08px) {\n.nux-step .step-text[data-v-91817bbc] {\n    margin-bottom: 32px;\n}\n}\n',""])},915:function(n,t,e){var i=e(1248);if(typeof i==="string")i=[[n.i,i,""]];if(i.locals)n.exports=i.locals;var a=e(15).default;var o=a("586d1592",i,false,{});if(false){}},916:function(n,t,e){var i=e(1250);if(typeof i==="string")i=[[n.i,i,""]];if(i.locals)n.exports=i.locals;var a=e(15).default;var o=a("09ed9f86",i,false,{});if(false){}},930:function(n,t,e){"use strict";var i=e(0);var a=e(3);var o=e(35);var c=e.n(o);var s=e(9);var r=e(86);var d=e(8);var l=e(25);let u=class n extends a["default"]{constructor(){super(...arguments);this.nextRoute="nux_welcome";this.nextRouteQuery={};this.questionClass="nux-survey";this.loading=false;this.continueButtonText="Continue";this.answeredTrackId="clicked_nux_general_segmentation_question_continue";this.choice="";this.choiceObject=null}get originalChoices(){return this.segmentationQuestion.answers.map(n=>{return{image_url:n.image_url,title:"",text:n.text,identifier:n.slug}})}get choices(){return this.originalChoices}get currentStepContent(){return{title:this.questionText,text:this.questionSubtext,choices:this.choices,stepType:"survey",stepClass:this.questionClass}}get questionText(){return this.segmentationQuestion.text}get questionSubtext(){return this.segmentationQuestion.subtext||""}next(){return Object(i["a"])(this,void 0,void 0,(function*(){this.loading=true;Object(r["b"])(this.answeredTrackId);yield this.postUsersAnswer();yield this.navigateTo(this.getNextStepPath())}))}navBack(n){this.$router.go(-1)}postUsersAnswer(){return Object(i["a"])(this,void 0,void 0,(function*(){const n={segmentation_answer_slug:this.choice,segmentation_question_slug:this.segmentationQuestion.slug};yield Object(d["c"])(this.$route.path,Object(l["c"])(n))}))}getNextStepPath(){return this.nextRoute}getAnswerToQuestion(n){var t;return(t=this.userSegmentations)===null||t===void 0?void 0:t.find(t=>{return t.question_slug===n})}setChoice(n){this.choice=n;this.selectChoice(n)}selectChoice(n){this.choice=n;this.choiceObject=this.segmentationQuestion.answers.find(t=>{return t.slug===n})}navigateTo(n){return Object(i["a"])(this,void 0,void 0,(function*(){let t={name:n};if(this.nextRouteQuery){t=Object.assign(Object.assign({},t),{query:this.nextRouteQuery})}return yield this.$router.push(t)}))}};u=Object(i["b"])([c()({computed:Object.assign(Object.assign({},Object(s["mapGetters"])("segmentationQuestion",["segmentationQuestion"])),Object(s["mapGetters"])("userSegmentations",["userSegmentations"]))})],u);t["a"]=u}}]);
//# sourceMappingURL=NuxAcademicSurvey-NuxCareerSurvey-NuxTrySurvey-NuxWhereToStartSurvey.45f61cf3a4b78fe21125.js.map