(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{1010:function(e,s,a){"use strict";var t=function(){var e=this;var s=e.$createElement;var a=e._self._c||s;return a("div",{staticClass:"course-icon"},[a("a",{attrs:{href:e.absoluteUrl},on:{click:e.trackCourseClick}},[a("div",{staticClass:"removed-text"},[e.isArchived?a("p",[e._v("Removed")]):e._e()]),e._v(" "),a("img",{class:{"is-archived":e.isArchived},attrs:{src:e.imageUrl}}),e._v(" "),a("div",{staticClass:"course-name"},[a("p",{class:{"is-archived":e.isArchived}},[e._v(e._s(e.name))])]),e._v(" "),e.completionPercentages?a("div",{staticClass:"progress"},[a("span",{style:{width:e.userState==="completed"?"100%":e.getCompletionPercentage()+"%","background-color":"#00BC8E"}})]):e._e()])])};var o=[];t._withStripped=true;var n=a(0);var r=a(3);var c=a(1);var i=a(29);let l=class e extends r["default"]{trackCourseClick(){if(this.classroomId&&this.courseId){Object(i["e"])("ui",{element_type:"link",element_id:"clicked_schools_course_card",course_id:this.courseId,course_name:this.name,classroom_id:this.classroomId,action:"click"})}}getCompletionPercentage(){for(const e of this.completionPercentages.percentages){if(this.courseId===e[0]){return e[1]}}return 0}};Object(n["b"])([Object(c["c"])({type:Boolean,default:false})],l.prototype,"isArchived",void 0);Object(n["b"])([Object(c["c"])({type:Number,default:null})],l.prototype,"courseId",void 0);Object(n["b"])([Object(c["c"])({type:Number,default:null})],l.prototype,"classroomId",void 0);Object(n["b"])([Object(c["c"])({type:Object,default:null})],l.prototype,"completionPercentages",void 0);Object(n["b"])([Object(c["c"])(String)],l.prototype,"absoluteUrl",void 0);Object(n["b"])([Object(c["c"])(String)],l.prototype,"imageUrl",void 0);Object(n["b"])([Object(c["c"])(String)],l.prototype,"name",void 0);l=Object(n["b"])([c["a"]],l);var d=l;var v=d;var u=a(1207);var p=a(5);var m=Object(p["a"])(v,t,o,false,null,"33f5e29e",null);if(false){var _}m.options.__file="frontend/views/classrooms/components/CourseIcon.vue";var f=s["a"]=m.exports},1207:function(e,s,a){"use strict";var t=a(910);var o=a.n(t);var n=o.a},1208:function(e,s,a){s=e.exports=a(14)(false);s.push([e.i,'@use "sass:map";\n.no-scroll[data-v-33f5e29e] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.course-icon[data-v-33f5e29e] {\n  display: flex;\n  width: 160px;\n  flex-direction: column;\n  padding: 0 16px 16px 0;\n}\n.course-icon a[data-v-33f5e29e] {\n    color: black;\n    font-size: 16px;\n}\n.course-icon img[data-v-33f5e29e] {\n    width: 140px;\n    height: auto;\n}\n.course-icon .is-archived[data-v-33f5e29e] {\n    opacity: 0.3;\n}\n.course-icon p[data-v-33f5e29e] {\n    font-weight: bold;\n    font-size: 16px;\n    margin: 0px;\n}\n.course-icon .removed-text[data-v-33f5e29e] {\n    text-align: center;\n    position: relative;\n    display: inline;\n    top: 80px;\n}\n.course-icon .course-name[data-v-33f5e29e] {\n    width: 100%;\n}\n.course-icon .course-name p[data-v-33f5e29e] {\n      font-weight: 600;\n      line-height: 1em;\n}\n.progress[data-v-33f5e29e] {\n  flex: none;\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n  height: 4px;\n  background: rgba(0, 0, 0, 0.06);\n}\n.progress span[data-v-33f5e29e] {\n    flex: none;\n    background: rgba(0, 0, 0, 0.2);\n}\n',""])},1209:function(e,s,a){"use strict";var t=a(911);var o=a.n(t);var n=o.a},1210:function(e,s,a){s=e.exports=a(14)(false);s.push([e.i,'@use "sass:map";\n.no-scroll[data-v-11b9c5c4] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.expand-btn-container[data-v-11b9c5c4] {\n  background-color: white;\n  position: relative;\n  bottom: 16px;\n}\n.expand-btn-container .expand-btn[data-v-11b9c5c4] {\n    text-align: center;\n    color: #000000;\n    font-size: 12px;\n    opacity: 0.3;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n.expand-btn-container .expand-btn[data-v-11b9c5c4]:hover {\n      opacity: 0.1;\n}\n',""])},1211:function(e,s,a){var t=a(2351);if(typeof t==="string")t=[[e.i,t,""]];if(t.locals)e.exports=t.locals;var o=a(15).default;var n=o("05a33eea",t,false,{});if(false){}},1212:function(e,s,a){var t=a(2353);if(typeof t==="string")t=[[e.i,t,""]];if(t.locals)e.exports=t.locals;var o=a(15).default;var n=o("5dbc7a81",t,false,{});if(false){}},1213:function(e,s,a){var t=a(2355);if(typeof t==="string")t=[[e.i,t,""]];if(t.locals)e.exports=t.locals;var o=a(15).default;var n=o("0301b5b7",t,false,{});if(false){}},1214:function(e,s,a){var t=a(2357);if(typeof t==="string")t=[[e.i,t,""]];if(t.locals)e.exports=t.locals;var o=a(15).default;var n=o("4bbe2813",t,false,{});if(false){}},1306:function(e,s,a){"use strict";var t=function(){var e=this;var s=e.$createElement;var a=e._self._c||s;return e._m(0)};var o=[function(){var e=this;var s=e.$createElement;var a=e._self._c||s;return a("div",{staticClass:"expand-btn-container"},[a("div",{staticClass:"expand-btn"},[a("div",[e._v("Expand")]),e._v(" "),a("div",{staticClass:"b-sprite-art-and-design-chevron-down"})])])}];t._withStripped=true;var n=a(0);var r=a(3);var c=a(1);var i=a(9);let l=class e extends r["default"]{};l=Object(n["b"])([Object(c["a"])({computed:Object.assign({},Object(i["mapState"])("globals",["user"]))})],l);var d=l;var v=d;var u=a(1209);var p=a(5);var m=Object(p["a"])(v,t,o,false,null,"11b9c5c4",null);if(false){var _}m.options.__file="frontend/views/classrooms/components/ExpandGradebookButton.vue";var f=s["a"]=m.exports},2350:function(e,s,a){"use strict";var t=a(1211);var o=a.n(t);var n=o.a},2351:function(e,s,a){s=e.exports=a(14)(false);s.push([e.i,'@use "sass:map";\n.no-scroll[data-v-c37ac05c] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\ntable[data-v-c37ac05c] {\n  border-collapse: collapse;\n  border-spacing: 0px;\n  border-bottom: solid;\n  border-width: 1px;\n  border-color: #E6E6E6;\n  margin: 24px 0px 0px 0px;\n}\ntable th[data-v-c37ac05c] {\n    background-color: #F8F8F8;\n    height: 32px;\n    border: solid;\n    border-width: 1px;\n    margin: none;\n    font-size: 12px;\n    text-transform: uppercase;\n    font-weight: normal;\n    color: #727272;\n    border-color: #E6E6E6;\n}\ntable td[data-v-c37ac05c] {\n    font-size: 14px;\n    border-left: solid;\n    border-right: solid;\n    border-width: 1px;\n    border-color: #E6E6E6;\n}\n.course-progress[data-v-c37ac05c] {\n  margin: 16px 0 16px 0;\n}\nth[data-v-c37ac05c], td[data-v-c37ac05c] {\n  padding: 4px;\n  text-align: center;\n}\nth[data-v-c37ac05c] {\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.student-link[data-v-c37ac05c] {\n  color: black;\n}\n',""])},2352:function(e,s,a){"use strict";var t=a(1212);var o=a.n(t);var n=o.a},2353:function(e,s,a){s=e.exports=a(14)(false);s.push([e.i,'@use "sass:map";\n.no-scroll[data-v-0110fbf2] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.remove-icon[data-v-0110fbf2] {\n  width: 32px;\n  height: 32px;\n  border-radius: 16px;\n  background-color: #EDEDED;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 8px;\n}\n',""])},2354:function(e,s,a){"use strict";var t=a(1213);var o=a.n(t);var n=o.a},2355:function(e,s,a){s=e.exports=a(14)(false);s.push([e.i,'@use "sass:map";\n.no-scroll[data-v-37ff2882] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.remove-course-btn[data-v-37ff2882] {\n  padding: 0px;\n  margin-left: 120px;\n  background-color: transparent;\n  border: none;\n  position: relative;\n  top: 80px;\n}\n.add-course-btn[data-v-37ff2882] {\n  border-width: 0px;\n  border-radius: 3px;\n  background-color: #EDEDED;\n  height: 32px;\n  position: relative;\n  top: 40px;\n}\n',""])},2356:function(e,s,a){"use strict";var t=a(1214);var o=a.n(t);var n=o.a},2357:function(e,s,a){s=e.exports=a(14)(false);s.push([e.i,'@use "sass:map";\n.no-scroll[data-v-d3fa46ae] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\nmain[data-v-d3fa46ae] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain > div[data-v-d3fa46ae] {\n    margin-bottom: 64px;\n}\nmain > div[data-v-d3fa46ae]:last-child {\n      margin-bottom: 0;\n}\nmain[data-v-d3fa46ae] .btn {\n    font-family: "Soleil", Arial, sans-serif;\n}\nmain.mobile.nux[data-v-d3fa46ae] {\n  margin-top: -45px;\n}\nmain.mobile .cover[data-v-d3fa46ae] {\n  padding: 32px 0;\n}\nmain.mobile .nux-header[data-v-d3fa46ae] {\n  margin-top: 0;\n  margin-bottom: 40px;\n  padding: 0 24px;\n}\n.cover[data-v-d3fa46ae] {\n  padding: 60px 0 84px;\n  background: #F8F8F8;\n}\n@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx) {\n.cover[data-v-d3fa46ae] {\n      background: #F8F8F8;\n}\n}\n.nux-header[data-v-d3fa46ae] {\n  margin-top: 20px;\n  margin-bottom: 64px;\n  font-size: 30px;\n  line-height: 1em;\n  color: #000000;\n}\n.classrooms[data-v-d3fa46ae] {\n  padding: 48px 4px 48px 4px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 30%;\n}\n.add-new-course-btn[data-v-d3fa46ae],\n.new-classroom-button[data-v-d3fa46ae] {\n  width: 400px;\n  height: 100px;\n  border: 1px dashed rgba(0, 0, 0, 0.14);\n  box-sizing: border-box;\n  display: flex;\n  background-color: white;\n  text-align: center;\n}\n.add-new-course-btn-container[data-v-d3fa46ae] {\n  padding: 24px;\n}\n.courses-list-container[data-v-d3fa46ae] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\nh3[data-v-d3fa46ae] {\n  margin: 0 16px 0 0;\n  font-size: 24px;\n}\n.details[data-v-d3fa46ae] {\n  font-size: 16px;\n  line-height: 30px;\n  color: rgba(0, 0, 0, 0.4);\n  width: 100%;\n  text-align: center;\n  margin-top: 35px;\n}\n.classroom[data-v-d3fa46ae] {\n  display: flex;\n  flex-direction: row;\n  background-color: #F7F7F8;\n  border: none;\n  width: 100%;\n  align-items: center;\n}\n.classroom-name[data-v-d3fa46ae] {\n  display: flex;\n  padding: 8px;\n  flex-direction: column;\n  font-size: 18px;\n  text-align: left;\n}\n.courses-in-classroom[data-v-d3fa46ae] {\n  background-color: white;\n  padding: 48px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 70%;\n}\n.courses-without-progress[data-v-d3fa46ae] {\n  display: flex;\n  flex-direction: row;\n}\n',""])},2544:function(e,s,a){"use strict";a.r(s);var t=function(){var e=this;var s=e.$createElement;var a=e._self._c||s;return a("ClassroomBase",{key:e.$route.path},[a("div",{staticClass:"courses-in-classroom"},[e.selected_classroom?a("div",[a("a",{attrs:{name:"classroom-courses"}}),e._v(" "),a("ClassroomHeader",{key:e.$route.path,attrs:{name:e.selected_classroom.name,color:e.selected_classroom.color,"classroom-id":e.selected_classroom.id,"show-links":true,"showing-courses":true,"has-edit-mode":e.user_is_teacher},on:{editMode:e.toggleEditMode}}),e._v(" "),e.high_level_courses_progress&&e.high_level_courses_progress.courses_progress_list.length>0?a("div",e._l(e.high_level_courses_progress.courses_progress_list,(function(s){return a("div",{key:s.absolute_url},[e.editMode?a("CourseEditButtons",{attrs:{"is-archived":e.isArchived(e.selected_classroom.archived_course_ids,s.course_id),"selected-classroom":e.selected_classroom,"course-id":s.course_id,"course-name":s.course_name,"can-add-course":e.user_is_teacher&&e.selected_classroom.courses.length-e.selected_classroom.archived_course_ids.length<e.teacher.max_courses_per_classroom}}):e._e(),e._v(" "),a("CourseProgress",{attrs:{"selected-classroom":e.selected_classroom,"progress-data":s,isArchived:e.isArchived(e.selected_classroom.archived_course_ids,s.course_id)}})],1)})),0):a("div",[e.selected_classroom&&e.selected_classroom.courses.length>0?a("div",{staticClass:"courses-without-progress"},e._l(e.selected_classroom.courses,(function(s){return a("div",{key:s.course_id},[e.editMode?a("CourseEditButtons",{attrs:{"is-archived":e.isArchived(e.selected_classroom.archived_course_ids,s.course_id),"selected-classroom":e.selected_classroom,"course-id":s.course_id,"course-name":s.name,"can-add-course":e.user_is_teacher&&e.selected_classroom.courses.length-e.selected_classroom.archived_course_ids.length<e.teacher.max_courses_per_classroom}}):e._e(),e._v(" "),a("CourseIcon",{attrs:{"absolute-url":s.absolute_url,"image-url":s.intro_image_url,name:s.name,"course-id":s.course_id,"classroom-id":e.selected_classroom.id,isArchived:e.isArchived(e.selected_classroom.archived_course_ids,s.course_id),completionPercentages:e.student_course_completion}})],1)})),0):a("div",{staticClass:"group container courses-list-container"},[a("p",[e._v("No courses chosen yet.")])])]),e._v(" "),e.user_is_teacher&&e.selected_classroom.courses.length-e.selected_classroom.archived_course_ids.length<e.teacher.max_courses_per_classroom?a("div",{staticClass:"add-new-course-btn-container"},[a("button",{staticClass:"add-new-course-btn",on:{click:function(s){return e.scrollToCourses("courses-listing")}}},[a("p",{staticClass:"details"},[e._v("\n            + Add a new course\n          ")])])]):e._e()],1):a("div",{staticClass:"no-classrooms"},[a("div",[a("button",{staticClass:"new-classroom-button",on:{click:e.toggleShowCreateNewClassroomModal}},[a("p",{staticClass:"details"},[e._v("\n            + Add a new classroom\n          ")])])])])]),e._v(" "),e.showCreateNewClassroomModal?a("CreateNewClassroomModal",{attrs:{teacher:e.teacher},on:{close:function(s){e.showCreateNewClassroomModal=false}}}):e._e()],1)};var o=[];t._withStripped=true;var n=a(0);var r=a(3);var c=a(1);var i=a(9);var l=a(957);var d=a(1010);var v=a(960);var u=function(){var e=this;var s=e.$createElement;var a=e._self._c||s;return a("div",{staticClass:"course-progress"},[a("CourseIcon",{staticClass:"course-icon",attrs:{"absolute-url":e.progressData.absolute_url,"image-url":e.progressData.intro_image_url,name:e.progressData.course_name,"is-archived":e.isArchived}}),e._v(" "),a("table",[e._m(0),e._v(" "),e.showExpandedGradebook?a("tbody",e._l(e.progressData.course_progress_list,(function(s){return a("tr",{key:s.student_name},[a("td",[a("router-link",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_schools_student_from_course_progress",axType:"link"},expression:"{\n              axId: 'clicked_schools_student_from_course_progress',\n              axType: 'link',\n            }",arg:"click"}],key:"classroom_by_student_"+e.selectedClassroom.id+"_"+s.student_id,staticClass:"student-link",attrs:{to:{name:"classroom_by_student",params:{classroomId:e.selectedClassroom.id,studentId:s.student_id}}}},[e._v("\n            "+e._s(s.student_name)+"\n          ")])],1),e._v(" "),a("td",[s.last_active_ts?a("span",[e._v("\n            "+e._s(s.last_active_ts)+"\n          ")]):a("span",[e._v("\n            N/A\n          ")])]),e._v(" "),a("td",[e._v("\n          "+e._s(s.in_progress)+"\n        ")]),e._v(" "),a("td",[e._v("\n          "+e._s(s.completed_last_week)+"\n        ")]),e._v(" "),a("td",[e._v("\n          "+e._s(s.completed_total)+"\n        ")])])})),0):a("tbody",e._l(e.progressData.course_progress_list.slice(0,3),(function(s){return a("tr",{key:s.student_name},[a("td",[a("router-link",{key:"classroom_by_student_"+e.selectedClassroom.id+"_"+s.student_id,staticClass:"student-link",attrs:{to:{name:"classroom_by_student",params:{classroomId:e.selectedClassroom.id,studentId:s.student_id}}}},[e._v("\n            "+e._s(s.student_name)+"\n          ")])],1),e._v(" "),a("td",[s.last_active_ts?a("span",[e._v("\n            "+e._s(s.last_active_ts)+"\n          ")]):a("span",[e._v("\n            N/A\n          ")])]),e._v(" "),a("td",[e._v("\n          "+e._s(s.in_progress)+"\n        ")]),e._v(" "),a("td",[e._v("\n          "+e._s(s.completed_last_week)+"\n        ")]),e._v(" "),a("td",[e._v("\n          "+e._s(s.completed_total)+"\n        ")])])})),0)]),e._v(" "),!e.showExpandedGradebook&&e.progressData.course_progress_list.length>3?a("div",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_schools_expand_course_progress",axType:"link",axExtra:{classroom_id:e.selectedClassroom.id,course_id:e.progressData.course_id,course_name:e.progressData.course_name}},expression:"{\n      axId: 'clicked_schools_expand_course_progress',\n      axType: 'link',\n      axExtra: {\n        classroom_id: selectedClassroom.id,\n        course_id: progressData.course_id,\n        course_name: progressData.course_name,\n      },\n    }",arg:"click"}],on:{click:e.viewExpandedGradebook}},[a("ExpandGradebookButton")],1):e._e()],1)};var p=[function(){var e=this;var s=e.$createElement;var a=e._self._c||s;return a("thead",[a("tr",[a("th",{attrs:{rowspan:"2"}},[e._v("Student")]),e._v(" "),a("th",{attrs:{rowspan:"2"}},[e._v("Last Active Timestamp")]),e._v(" "),a("th",{attrs:{colspan:"3"}},[e._v("Quiz activity")])]),e._v(" "),a("tr",[a("th",[e._v("In Progress")]),e._v(" "),a("th",[e._v("Completed Last Week")]),e._v(" "),a("th",[e._v("Total Completed")])])])}];u._withStripped=true;var m=a(1306);let _=class e extends r["default"]{constructor(){super(...arguments);this.showExpandedGradebook=false}viewExpandedGradebook(){this.showExpandedGradebook=true}};Object(n["b"])([Object(c["c"])({type:Boolean,default:false})],_.prototype,"isArchived",void 0);Object(n["b"])([Object(c["c"])(Object)],_.prototype,"selectedClassroom",void 0);Object(n["b"])([Object(c["c"])(Object)],_.prototype,"progressData",void 0);_=Object(n["b"])([Object(c["a"])({components:{CourseIcon:d["a"],ExpandGradebookButton:m["a"]},computed:Object.assign({},Object(i["mapState"])("globals",["user"]))})],_);var f=_;var h=f;var b=a(2350);var x=a(5);var g=Object(x["a"])(h,u,p,false,null,"c37ac05c",null);if(false){var k}g.options.__file="frontend/views/classrooms/components/CourseProgress.vue";var w=g.exports;var C=a(1406);var y=function(){var e=this;var s=e.$createElement;var a=e._self._c||s;return a("div",[!e.isArchived?a("button",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_schools_delete_course",axType:"link",axExtra:{classroom_id:e.selectedClassroom.id,course_id:e.courseId,course_name:e.courseName}},expression:"{\n      axId: 'clicked_schools_delete_course',\n      axType: 'link',\n      axExtra: {\n        classroom_id: selectedClassroom.id,\n        course_id: courseId,\n        course_name: courseName,\n      },\n    }",arg:"click"}],staticClass:"remove-course-btn",on:{click:function(s){return e.toggleArchiveCourse(e.selectedClassroom.id,e.courseId,true)}}},[a("RemoveIcon")],1):e.canAddCourse?a("button",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_schools_add_course",axType:"link",axExtra:{classroom_id:e.selectedClassroom.id,course_id:e.courseId,course_name:e.courseName}},expression:"{\n      axId: 'clicked_schools_add_course',\n      axType: 'link',\n      axExtra: {\n        classroom_id: selectedClassroom.id,\n        course_id: courseId,\n        course_name: courseName,\n      },\n    }",arg:"click"}],staticClass:"add-course-btn",on:{click:function(s){return e.toggleArchiveCourse(e.selectedClassroom.id,e.courseId,false)}}},[e._v("\n    Add to classroom\n  ")]):e._e()])};var j=[];y._withStripped=true;var O=function(){var e=this;var s=e.$createElement;var a=e._self._c||s;return e._m(0)};var E=[function(){var e=this;var s=e.$createElement;var a=e._self._c||s;return a("div",{staticClass:"remove-icon"},[a("span",{staticClass:"b-sprite-classrooms-garbage"})])}];O._withStripped=true;let I=class e extends r["default"]{};I=Object(n["b"])([c["a"]],I);var N=I;var M=N;var A=a(2352);var S=Object(x["a"])(M,O,E,false,null,"0110fbf2",null);if(false){var z}S.options.__file="frontend/views/classrooms/components/RemoveIcon.vue";var D=S.exports;let B=class e extends r["default"]{toggleArchiveCourse(e,s,a){return Object(n["a"])(this,void 0,void 0,(function*(){yield this.$store.dispatch("classrooms/toggleArchiveCourseInClassroom",{archive:a,classroom_id:e,course_id:s})}))}};Object(n["b"])([Object(c["c"])(Boolean)],B.prototype,"isArchived",void 0);Object(n["b"])([Object(c["c"])(Object)],B.prototype,"selectedClassroom",void 0);Object(n["b"])([Object(c["c"])(Number)],B.prototype,"courseId",void 0);Object(n["b"])([Object(c["c"])(String)],B.prototype,"courseName",void 0);Object(n["b"])([Object(c["c"])(Boolean)],B.prototype,"canAddCourse",void 0);B=Object(n["b"])([Object(c["a"])({components:{RemoveIcon:D},computed:Object.assign({},Object(i["mapState"])("globals",["user"])),metaInfo(){return{title:"Classroom Courses"}}})],B);var T=B;var $=T;var F=a(2354);var P=Object(x["a"])($,y,j,false,null,"37ff2882",null);if(false){var G}P.options.__file="frontend/views/classrooms/components/CourseEditButtons.vue";var L=P.exports;var R=a(98);let U=class e extends r["default"]{constructor(){super(...arguments);this.editMode=false;this.showCreateNewClassroomModal=false}toggleEditMode(){this.editMode=!this.editMode;this.$emit("editMode")}isArchived(e,s){for(const a of e){if(s===a){return true}}return false}toggleShowCreateNewClassroomModal(){this.showCreateNewClassroomModal=!this.showCreateNewClassroomModal}scrollToCourses(){return Object(n["a"])(this,void 0,void 0,(function*(){yield Object(R["b"])("courses-listing")}))}};U=Object(n["b"])([Object(c["a"])({components:{ClassroomBase:l["a"],CourseIcon:d["a"],ClassroomHeader:v["a"],CourseProgress:w,CreateNewClassroomModal:C["a"],CourseEditButtons:L},computed:Object.assign(Object.assign({},Object(i["mapState"])("globals",["user"])),Object(i["mapState"])("classrooms",["classrooms","high_level_courses_progress","selected_classroom","teacher","user_is_teacher","student_course_completion"])),metaInfo(){return{title:"Classroom Courses"}}})],U);var H=U;var J=H;var Q=a(2356);var W=Object(x["a"])(J,t,o,false,null,"d3fa46ae",null);if(false){var q}W.options.__file="frontend/views/classrooms/ClassroomsCourses.vue";var K=s["default"]=W.exports},871:function(e,s,a){var t=a(956);if(typeof t==="string")t=[[e.i,t,""]];if(t.locals)e.exports=t.locals;var o=a(15).default;var n=o("3f3d90f4",t,false,{});if(false){}},910:function(e,s,a){var t=a(1208);if(typeof t==="string")t=[[e.i,t,""]];if(t.locals)e.exports=t.locals;var o=a(15).default;var n=o("20b2d06f",t,false,{});if(false){}},911:function(e,s,a){var t=a(1210);if(typeof t==="string")t=[[e.i,t,""]];if(t.locals)e.exports=t.locals;var o=a(15).default;var n=o("0c9e5ded",t,false,{});if(false){}},955:function(e,s,a){"use strict";var t=a(871);var o=a.n(t);var n=o.a},956:function(e,s,a){s=e.exports=a(14)(false);s.push([e.i,'@use "sass:map";\n.no-scroll[data-v-bf77cc74] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.classroom-name[data-v-bf77cc74] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.classroom-name .classroom-name-text h2[data-v-bf77cc74] {\n    margin: 0px;\n    font-size: 24px;\n    font-weight: normal;\n}\n.header-items[data-v-bf77cc74] {\n  display: flex;\n  font-size: 24px;\n}\n.content-links[data-v-bf77cc74] {\n  display: flex;\n  flex-direction: row;\n  margin: 8px;\n}\n.content-links .content-link[data-v-bf77cc74] {\n    display: flex;\n    color: lightgrey;\n    margin-right: 48px;\n}\n.content-links .content-link[data-v-bf77cc74]:hover {\n      font-weight: bold;\n}\n.content-links .selected[data-v-bf77cc74] {\n    color: black;\n    font-weight: 600;\n}\nhr[data-v-bf77cc74] {\n  color: lightgrey;\n  opacity: 0.5;\n  margin: 8px;\n}\n.edit-mode[data-v-bf77cc74] {\n  text-align: right;\n  margin: 0px;\n  padding: 0px;\n  cursor: pointer;\n}\n.edit-mode[data-v-bf77cc74]:hover {\n    opacity: 0.7;\n}\ninput[data-v-bf77cc74] {\n  height: 48px;\n  font-size: 24px;\n}\n',""])},960:function(e,s,a){"use strict";var t=function(){var e=this;var s=e.$createElement;var a=e._self._c||s;return a("div",[a("span",{staticClass:"classroom-name"},[a("ClassroomDot",{key:e.classroomId,staticClass:"header-items",attrs:{color:e.color}}),e._v(" "),e.hasEditMode&&e.editMode?a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newName,expression:"newName"}],attrs:{type:"text",placeholder:e.name},domProps:{value:e.newName},on:{input:function(s){if(s.target.composing){return}e.newName=s.target.value}}})]):a("div",{staticClass:"classroom-name-text"},[a("h2",{staticClass:"header-items"},[e._v(e._s(e.name))])])],1),e._v(" "),e.hasEditMode?a("div",{staticClass:"edit-mode"},[e.editMode?a("span",{on:{click:e.toggleEditMode}},[e._v("\n      Done\n    ")]):a("span",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_schools_edit_class",axType:"link",axExtra:{classroom_id:e.classroomId}},expression:"{\n        axId: 'clicked_schools_edit_class',\n        axType: 'link',\n        axExtra: {\n          classroom_id: classroomId,\n        },\n      }",arg:"click"}],on:{click:e.toggleEditMode}},[e._v("\n      Edit\n    ")])]):e._e(),e._v(" "),e.showLinks?a("div",[a("span",{staticClass:"content-links"},[a("router-link",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_schools_courses_tab",axType:"link",axExtra:{classroom_id:e.classroomId}},expression:"{\n          axId: 'clicked_schools_courses_tab',\n          axType: 'link',\n          axExtra: {\n            classroom_id: classroomId,\n          },\n        }",arg:"click"}],key:"classroom_with_id_"+e.classroomId,class:{selected:e.showingCourses,"content-link":true},attrs:{to:{name:"classroom_with_id",params:{classroomId:e.classroomId}}}},[e._v("\n        Courses\n      ")]),e._v(" "),a("router-link",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_schools_daily_challenges_tab",axType:"link",axExtra:{classroom_id:e.classroomId}},expression:"{\n          axId: 'clicked_schools_daily_challenges_tab',\n          axType: 'link',\n          axExtra: {\n            classroom_id: classroomId,\n          },\n        }",arg:"click"}],key:"classroom_dc_view_"+e.classroomId,class:{selected:!e.showingCourses&&!e.showingStudentList,"content-link":true},attrs:{to:{name:"classroom_dc_view",params:{classroomId:e.classroomId}}}},[e._v("\n        Daily Challenges\n      ")])],1),e._v(" "),a("hr")]):e._e()])};var o=[];t._withStripped=true;var n=a(0);var r=a(3);var c=a(1);var i=a(921);let l=class e extends r["default"]{constructor(){super(...arguments);this.editMode=false;this.newName=""}toggleEditMode(){this.editMode=!this.editMode;this.$emit("editMode");if(this.newName&&this.newName!==this.name){this.updateClassroomName()}this.newName=""}updateClassroomName(){return Object(n["a"])(this,void 0,void 0,(function*(){yield this.$store.dispatch("classrooms/updateClassroomName",{classroom_id:this.classroomId,new_name:this.newName})}))}};Object(n["b"])([Object(c["c"])(String)],l.prototype,"name",void 0);Object(n["b"])([Object(c["c"])(String)],l.prototype,"color",void 0);Object(n["b"])([Object(c["c"])(Number)],l.prototype,"classroomId",void 0);Object(n["b"])([Object(c["c"])(Boolean)],l.prototype,"showingCourses",void 0);Object(n["b"])([Object(c["c"])(Boolean)],l.prototype,"showLinks",void 0);Object(n["b"])([Object(c["c"])({type:Boolean,default:false})],l.prototype,"hasEditMode",void 0);Object(n["b"])([Object(c["c"])({type:Boolean,default:false})],l.prototype,"showingStudentList",void 0);l=Object(n["b"])([Object(c["a"])({components:{ClassroomDot:i["a"]}})],l);var d=l;var v=d;var u=a(955);var p=a(5);var m=Object(p["a"])(v,t,o,false,null,"bf77cc74",null);if(false){var _}m.options.__file="frontend/views/classrooms/components/ClassroomHeader.vue";var f=s["a"]=m.exports}}]);
//# sourceMappingURL=ClassroomsCourses.fa9d288e13054d239f43.js.map