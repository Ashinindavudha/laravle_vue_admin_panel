(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{yRrX:function(t,e,i){"use strict";i.r(e);var a=i("L2JU"),r=i("+z1p"),s=i.n(r);function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var d={components:{ClassicEditor:s.a},data:function(){return{status:"",activeField:"",editor:s.a}},computed:c({},Object(a.c)("SandisSingle",["entry","loading","lists"])),beforeDestroy:function(){this.resetState()},watch:{"$route.params.id":{immediate:!0,handler:function(){this.resetState(),this.fetchEditData(this.$route.params.id)}}},methods:c(c({},Object(a.b)("SandisSingle",["fetchEditData","updateData","resetState","setChapter","setTitle","setDefinition","setRemark"])),{},{updateChapter:function(t){this.setChapter(t)},updateTitle:function(t){this.setTitle(t)},updateDefinition:function(t){this.setDefinition(t)},updateRemark:function(t){this.setRemark(t)},submitForm:function(){var t=this;this.updateData().then((function(){t.$router.push({name:"sandis.index"}),t.$eventHub.$emit("update-success")})).catch((function(e){t.status="failed",_.delay((function(){t.status=""}),3e3)}))},focusField:function(t){this.activeField=t},clearFocus:function(){this.activeField=""}})},u=i("KHd+"),l=Object(u.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid"},[i("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"card"},[t._m(0),t._v(" "),i("div",{staticClass:"card-body"},[i("back-button")],1),t._v(" "),i("div",{staticClass:"card-body"},[i("bootstrap-alert"),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"form-group bmd-form-group",class:{"has-items":null!==t.entry.chapter_id,"is-focused":"chapter"==t.activeField}},[i("label",{staticClass:"bmd-label-floating"},[t._v("သဒ္ဒါကဏ္ဍ")]),t._v(" "),i("v-select",{key:"chapter-field",attrs:{name:"chapter",label:"title",value:t.entry.chapter_id,options:t.lists.chapter,reduce:function(t){return t.id}},on:{input:t.updateChapter,search:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"focus",void 0,e.key,void 0)?null:t.focusField("chapter")},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"blur",void 0,e.key,void 0)?null:t.clearFocus(e)}]}})],1),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"required"},[t._v("သုတ်စဉ်")]),t._v(" "),i("ckeditor",{attrs:{editor:t.editor,value:t.entry.title,required:""},on:{input:t.updateTitle}})],1),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("သုတ်စဉ်အဖွင့်")]),t._v(" "),i("ckeditor",{attrs:{editor:t.editor,value:t.entry.definition},on:{input:t.updateDefinition}})],1),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Remark")]),t._v(" "),i("ckeditor",{attrs:{editor:t.editor,value:t.entry.remark},on:{input:t.updateRemark}})],1)])])],1),t._v(" "),i("div",{staticClass:"card-footer"},[i("vue-button-spinner",{staticClass:"btn-primary",attrs:{status:t.status,isLoading:t.loading,disabled:t.loading}},[t._v("\n              Save\n            ")])],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header card-header-primary card-header-icon"},[e("div",{staticClass:"card-icon"},[e("i",{staticClass:"material-icons"},[this._v("edit")])]),this._v(" "),e("h4",{staticClass:"card-title"},[this._v("Edit သန္ဓိပိုင်းကျမ်းရင်းပါဠိ")])])}],!1,null,null,null);e.default=l.exports}}]);