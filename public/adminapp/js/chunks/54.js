(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{OJ5A:function(t,e,s){"use strict";s.r(e);var i=s("L2JU");function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function a(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var o={data:function(){return{status:"",activeField:""}},computed:a({},Object(i.c)("RolesSingle",["entry","loading","lists"])),beforeDestroy:function(){this.resetState()},watch:{"$route.params.id":{immediate:!0,handler:function(){this.resetState(),this.fetchEditData(this.$route.params.id)}}},methods:a(a({},Object(i.b)("RolesSingle",["fetchEditData","updateData","resetState","setTitle","setPermissions"])),{},{updateTitle:function(t){this.setTitle(t.target.value)},updatePermissions:function(t){this.setPermissions(t)},submitForm:function(){var t=this;this.updateData().then((function(){t.$router.push({name:"roles.index"}),t.$eventHub.$emit("update-success")})).catch((function(e){t.status="failed",_.delay((function(){t.status=""}),3e3)}))},focusField:function(t){this.activeField=t},clearFocus:function(){this.activeField=""}})},c=s("KHd+"),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("div",{staticClass:"card-body"},[s("back-button")],1),t._v(" "),s("div",{staticClass:"card-body"},[s("bootstrap-alert"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.title,"is-focused":"title"==t.activeField}},[s("label",{staticClass:"bmd-label-floating required"},[t._v("Title")]),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.entry.title},on:{input:t.updateTitle,focus:function(e){return t.focusField("title")},blur:t.clearFocus}})]),t._v(" "),s("div",{staticClass:"form-group bmd-form-group",class:{"has-items":0!==t.entry.permissions.length,"is-focused":"permissions"==t.activeField}},[s("label",{staticClass:"bmd-label-floating required"},[t._v("Permissions")]),t._v(" "),s("v-select",{key:"permissions-field",attrs:{name:"permissions",label:"title",value:t.entry.permissions,options:t.lists.permissions,closeOnSelect:!1,multiple:""},on:{input:t.updatePermissions,search:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"focus",void 0,e.key,void 0)?null:t.focusField("permissions")},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"blur",void 0,e.key,void 0)?null:t.clearFocus(e)}]}})],1)])])],1),t._v(" "),s("div",{staticClass:"card-footer"},[s("vue-button-spinner",{staticClass:"btn-primary",attrs:{status:t.status,isLoading:t.loading,disabled:t.loading}},[t._v("\n              Save\n            ")])],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header card-header-primary card-header-icon"},[e("div",{staticClass:"card-icon"},[e("i",{staticClass:"material-icons"},[this._v("edit")])]),this._v(" "),e("h4",{staticClass:"card-title"},[this._v("Edit Role")])])}],!1,null,null,null);e.default=l.exports}}]);