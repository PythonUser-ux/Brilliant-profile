(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[68],{1277:function(n,a,e){var t=e(2467);if(typeof t==="string")t=[[n.i,t,""]];if(t.locals)n.exports=t.locals;var i=e(15).default;var r=i("ed69ef7a",t,false,{});if(false){}},2466:function(n,a,e){"use strict";var t=e(1277);var i=e.n(t);var r=i.a},2467:function(n,a,e){a=n.exports=e(14)(false);a.push([n.i,'@use "sass:map";\n.no-scroll[data-v-06a29038] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.gift-promo-banner[data-v-06a29038] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 64px;\n  background: #EEA71F;\n  color: #000000;\n  font-size: 18px;\n  line-height: 20px;\n  z-index: 300;\n  text-decoration: none;\n}\n.gift-promo-banner[data-v-06a29038]:hover {\n    opacity: 1;\n    color: #000000;\n}\n.gift-promo-banner .container[data-v-06a29038] {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.gift-promo-banner .box[data-v-06a29038] {\n    flex: none;\n    margin-right: 32px;\n}\n.gift-promo-banner .text[data-v-06a29038] {\n    display: flex;\n    align-items: center;\n    font-weight: bold;\n}\n.gift-promo-banner strong[data-v-06a29038] {\n    margin-left: 24px;\n    font-weight: 600;\n    border-bottom: 1px solid #000000;\n    white-space: nowrap;\n}\n.gift-promo-banner .close-wrapper[data-v-06a29038] {\n    display: flex;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 100%;\n}\n.gift-promo-banner .close-btn[data-v-06a29038] {\n    transition: opacity 100ms linear;\n}\n.gift-promo-banner .close-btn[data-v-06a29038]:hover {\n      opacity: 0.8;\n}\n.gift-promo-banner.mobile[data-v-06a29038] {\n  font-size: 12px;\n  line-height: 14px;\n}\n.gift-promo-banner.mobile .container[data-v-06a29038] {\n    padding: 0 8px;\n}\n.gift-promo-banner.mobile .box[data-v-06a29038] {\n    margin-right: 8px;\n}\n.gift-promo-banner.mobile .text[data-v-06a29038] {\n    display: inline;\n    text-align: center;\n    font-weight: bold;\n}\n.gift-promo-banner.mobile strong[data-v-06a29038] {\n    margin: 4px 0 0 0;\n}\n.gift-promo-banner.mobile .close-wrapper[data-v-06a29038] {\n    position: static;\n    margin: 0 16px;\n}\n',""])},2592:function(n,a,e){"use strict";e.r(a);var t=function(){var n=this;var a=n.$createElement;var e=n._self._c||a;return e("router-link",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_gift_promo_header_banner",axType:"button"},expression:"{ axId: 'clicked_gift_promo_header_banner', axType: 'button' }",arg:"click"}],class:{"gift-promo-banner":true,mobile:n.isMobile(n.$mq)},attrs:{to:{name:"gift_purchase_plans"}}},[e("span",{staticClass:"container"},[e("span",{staticClass:"b-sprite-paywall-pix-gift-box box"}),n._v(" "),e("span",{staticClass:"text"},[n._v("\n      This holiday season, spark a lifelong love of learning.\n      "),e("strong",[n._v("Gift Brilliant Premium")])]),n._v(" "),n.isDismissible?e("span",{staticClass:"close-wrapper"},[e("span",{staticClass:"b-sprite-global-close-black close-btn",on:{click:function(a){a.preventDefault();return n.hideBanner(a)}}})]):n._e()])])};var i=[];t._withStripped=true;var r=e(0);var o=e(3);var s=e(1);var l=e(9);let p=class n extends o["default"]{get isDismissible(){return this.user.is_active&&this.$route.name!=="payment_brilliant_square_plans"}hideBanner(){this.$store.dispatch("pageHeader/hideGiftBanner")}};p=Object(r["b"])([Object(s["a"])({computed:Object.assign(Object.assign({},Object(l["mapGetters"])("pageHeader",["isMobile"])),Object(l["mapState"])("globals",["user"]))})],p);var c=p;var f=c;var b=e(2466);var d=e(5);var g=Object(d["a"])(f,t,i,false,null,"06a29038",null);if(false){var v}g.options.__file="frontend/components/header/GiftBanner.vue";var m=a["default"]=g.exports}}]);
//# sourceMappingURL=GiftBanner.4d5b40c922caf607d456.js.map