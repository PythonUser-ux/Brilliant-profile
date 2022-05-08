(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[101],{1172:function(e,n,a){var t=a(2285);if(typeof t==="string")t=[[e.i,t,""]];if(t.locals)e.exports=t.locals;var r=a(15).default;var i=r("ba000b6a",t,false,{});if(false){}},2284:function(e,n,a){"use strict";var t=a(1172);var r=a.n(t);var i=r.a},2285:function(e,n,a){n=e.exports=a(14)(false);n.push([e.i,'@use "sass:map";\n.no-scroll[data-v-6e0e9628] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.redeem[data-v-6e0e9628] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n.redeem > div[data-v-6e0e9628] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 740px;\n    max-width: 94vw;\n    min-height: 400px;\n    padding: 48px 90px;\n    margin-top: 40px;\n    border: 1px solid #C2C4CF;\n    border-radius: 10px;\n    background: #FFFFFF;\n}\n.fail p[data-v-6e0e9628] {\n  text-align: center;\n}\n.fail .btn[data-v-6e0e9628] {\n  width: 146px;\n}\n.confirm h2[data-v-6e0e9628] {\n  margin-bottom: 40px;\n}\n.confirm p[data-v-6e0e9628] {\n  margin-bottom: 40px;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.confirm div[data-v-6e0e9628] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 24px;\n}\n.confirm .btn[data-v-6e0e9628] {\n  width: 246px;\n  padding-left: 0;\n  padding-right: 0;\n}\n.confirm .btn[data-v-6e0e9628]:last-child {\n    margin-left: 8px;\n}\n.redeem.mobile > div[data-v-6e0e9628] {\n  padding: 16px 16px;\n}\n.redeem.mobile .confirm h2[data-v-6e0e9628],\n.redeem.mobile .confirm p[data-v-6e0e9628] {\n  margin-bottom: 24px;\n}\n',""])},2567:function(e,n,a){"use strict";a.r(n);var t=function(){var e=this;var n=e.$createElement;var a=e._self._c||n;return a("div",{class:{redeem:true,mobile:e.isMobile(e.$mq)}},[e.failure_reason?a("div",{staticClass:"fail"},[e.failure_reason==="already_in_group"?a("p",[e._v("\n      You are already in a Brilliant Premium group.\n    ")]):e.failure_reason==="group_admin"?a("p",[e._v("\n      Brilliant Premium group admins cannot redeem subscriptions.\n    ")]):e.failure_reason==="already_redeemed"?a("p",[e._v("\n      This Brilliant Premium group plan seat has already been redeemed.\n    ")]):e.failure_reason==="seat_removed"?a("p",[e._v("\n      This Brilliant Premium group plan seat has been removed.\n      "),a("br"),e._v("\n      Please contact your group administrator for more information.\n    ")]):a("p",[e._v("\n      You are unable to redeem this Brilliant Premium group subscription at this time.\n    ")]),e._v(" "),a("router-link",{staticClass:"btn btn-accent",attrs:{to:{name:"explorations_menu"}}},[e._v("\n      Back\n    ")])],1):a("div",{staticClass:"confirm"},[a("h2",[e._v("A quick note about your existing Premium account")]),e._v(" "),a("p",[e._v("\n      The "+e._s(e.credit_months)+" months remaining on your Premium subscription will be granted as a credit to your account after accepting "+e._s(e.group_admin_user.first_name)+" "+e._s(e.group_admin_user.last_name)+"'s group plan invitation.\n    ")]),e._v(" "),a("p",[e._v("\n      Your new group Premium subscription will begin after accepting this invitation, which will be managed by "+e._s(e.group_admin_email)+".\n    ")]),e._v(" "),a("div",[a("router-link",{staticClass:"btn",attrs:{to:{name:"explorations_menu"}}},[e._v("\n        Back\n      ")]),e._v(" "),a("a",{staticClass:"btn btn-accent",attrs:{href:e.confirmUrl}},[e._v("\n        Accept invite\n      ")])],1)])])};var r=[];t._withStripped=true;var i=a(0);var o=a(1);var s=a(9);let l=class e extends o["e"]{get confirmUrl(){const e=this.$router.resolve({name:"premium_group_redeem_seat_page",query:{token:this.$route.query.token,confirmed:"yes"}});return e.href}};l=Object(i["b"])([Object(o["a"])({metaInfo(){return{title:"Redeem group plan seat"}},computed:Object.assign(Object.assign({},Object(s["mapGetters"])("pageHeader",["isMobile"])),Object(s["mapState"])("premiumGroupSeatRedeem",["failure_reason","credit_months","group_admin_user","group_admin_email","redeem_page_url"]))})],l);var m=l;var d=m;var p=a(2284);var u=a(5);var c=Object(u["a"])(d,t,r,false,null,"6e0e9628",null);if(false){var v}c.options.__file="frontend/views/premium/group-plans/RedeemSeat.vue";var f=n["default"]=c.exports}}]);
//# sourceMappingURL=RedeemSeat.271652544abacae129ed.js.map