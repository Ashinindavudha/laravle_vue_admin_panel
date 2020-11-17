(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Posts/Create.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Posts/Create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Attachments/Attachment */ "./resources/adminapp/js/components/Attachments/Attachment.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ClassicEditor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default.a,
    Attachment: _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      status: '',
      activeField: '',
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default.a
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('PostsSingle', ['entry', 'loading', 'lists'])),
  mounted: function mounted() {
    this.fetchCreateData();
  },
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('PostsSingle', ['storeData', 'resetState', 'setPostCategory', 'setPostTitle', 'setDescription', 'setSlug', 'insertPostImageFile', 'removePostImageFile', 'setUser', 'setPublish', 'fetchCreateData'])), {}, {
    updatePostCategory: function updatePostCategory(value) {
      this.setPostCategory(value);
    },
    updatePostTitle: function updatePostTitle(value) {
      this.setPostTitle(value);
    },
    updateDescription: function updateDescription(value) {
      this.setDescription(value);
    },
    updateSlug: function updateSlug(e) {
      this.setSlug(e.target.value);
    },
    updateUser: function updateUser(value) {
      this.setUser(value);
    },
    updatePublish: function updatePublish(e) {
      this.setPublish(e.target.checked);
    },
    getRoute: function getRoute(name) {
      return "".concat(axios.defaults.baseURL).concat(name, "/media");
    },
    submitForm: function submitForm() {
      var _this = this;

      this.storeData().then(function () {
        _this.$router.push({
          name: 'posts.index'
        });

        _this.$eventHub.$emit('create-success');
      })["catch"](function (error) {
        _this.status = 'failed';

        _.delay(function () {
          _this.status = '';
        }, 3000);
      });
    },
    focusField: function focusField(name) {
      this.activeField = name;
    },
    clearFocus: function clearFocus() {
      this.activeField = '';
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Posts/Create.vue?vue&type=template&id=439292b3&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Posts/Create.vue?vue&type=template&id=439292b3& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submitForm($event)
          }
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [_c("back-button")], 1),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c("bootstrap-alert"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("label", [_vm._v("Post Category")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.post_category_id !== null,
                            "is-focused": _vm.activeField == "post_category"
                          }
                        },
                        [
                          _c("label", { staticClass: "bmd-label-floating" }, [
                            _vm._v("Post Category")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "post_category-field",
                            attrs: {
                              name: "post_category",
                              label: "title",
                              value: _vm.entry.post_category_id,
                              options: _vm.lists.post_category,
                              reduce: function(entry) {
                                return entry.id
                              }
                            },
                            on: {
                              input: _vm.updatePostCategory,
                              search: [
                                function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "focus",
                                      undefined,
                                      $event.key,
                                      undefined
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.focusField("post_category")
                                },
                                function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "blur",
                                      undefined,
                                      $event.key,
                                      undefined
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.clearFocus($event)
                                }
                              ]
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "required" }, [
                          _vm._v("Post Title")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group has-items"
                          },
                          [
                            _c("label", { staticClass: "bmd-label-floating" }, [
                              _vm._v("Post Title")
                            ]),
                            _vm._v(" "),
                            _c("ckeditor", {
                              attrs: {
                                editor: _vm.editor,
                                value: _vm.entry.post_title,
                                required: ""
                              },
                              on: { input: _vm.updatePostTitle }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "required" }, [
                          _vm._v("Post Description")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group has-items"
                          },
                          [
                            _c("label", { staticClass: "bmd-label-floating" }, [
                              _vm._v("Post Description")
                            ]),
                            _vm._v(" "),
                            _c("ckeditor", {
                              attrs: {
                                editor: _vm.editor,
                                value: _vm.entry.description,
                                required: ""
                              },
                              on: { input: _vm.updateDescription }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "required" }, [
                          _vm._v("Slug")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "has-items": _vm.entry.slug,
                              "is-focused": _vm.activeField == "slug"
                            }
                          },
                          [
                            _c("label", { staticClass: "bmd-label-floating" }, [
                              _vm._v("Post Slug")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { type: "text", required: "" },
                              domProps: { value: _vm.entry.slug },
                              on: {
                                input: _vm.updateSlug,
                                focus: function($event) {
                                  return _vm.focusField("slug")
                                },
                                blur: _vm.clearFocus
                              }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v("Post Image")]),
                          _vm._v(" "),
                          _vm._m(1),
                          _vm._v(" "),
                          _c("attachment", {
                            attrs: {
                              route: _vm.getRoute("posts"),
                              "collection-name": "post_post_image",
                              media: _vm.entry.post_image,
                              "max-file-size": 10,
                              component: "pictures",
                              accept: "image/*"
                            },
                            on: {
                              "file-uploaded": _vm.insertPostImageFile,
                              "file-removed": _vm.removePostImageFile
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("label", [_vm._v("Post Uploader")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.user_id !== null,
                            "is-focused": _vm.activeField == "user"
                          }
                        },
                        [
                          _c("label", { staticClass: "bmd-label-floating" }, [
                            _vm._v("Post Uploader")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "user-field",
                            attrs: {
                              name: "user",
                              label: "name",
                              value: _vm.entry.user_id,
                              options: _vm.lists.user,
                              reduce: function(entry) {
                                return entry.id
                              }
                            },
                            on: {
                              input: _vm.updateUser,
                              search: [
                                function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "focus",
                                      undefined,
                                      $event.key,
                                      undefined
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.focusField("user")
                                },
                                function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "blur",
                                      undefined,
                                      $event.key,
                                      undefined
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.clearFocus($event)
                                }
                              ]
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group bmd-form-group form-check has-items"
                        },
                        [
                          _c("label", { staticClass: "bmd-label-floating" }, [
                            _vm._v("Publish Post")
                          ]),
                          _vm._v(" "),
                          _c("label", { staticClass: "form-check-label" }, [
                            _c("input", {
                              staticClass: "form-check-input",
                              attrs: { type: "checkbox" },
                              domProps: {
                                value: _vm.entry.publish,
                                checked: _vm.entry.publish
                              },
                              on: { change: _vm.updatePublish }
                            }),
                            _vm._m(2),
                            _vm._v("Publish")
                          ])
                        ]
                      )
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-footer" },
                [
                  _c(
                    "vue-button-spinner",
                    {
                      staticClass: "btn-primary",
                      attrs: {
                        status: _vm.status,
                        isLoading: _vm.loading,
                        disabled: _vm.loading
                      }
                    },
                    [_vm._v("\n              Save\n            ")]
                  )
                ],
                1
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header card-header-primary card-header-icon" },
      [
        _c("div", { staticClass: "card-icon" }, [
          _c("i", { staticClass: "material-icons" }, [_vm._v("add")])
        ]),
        _vm._v(" "),
        _c("h4", { staticClass: "card-title" }, [_vm._v("Create Post")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group bmd-form-group has-items" }, [
      _c("label", { staticClass: "bmd-label-floating" }, [_vm._v("Post Image")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "form-check-sign" }, [
      _c("span", { staticClass: "check" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/adminapp/js/cruds/Posts/Create.vue":
/*!******************************************************!*\
  !*** ./resources/adminapp/js/cruds/Posts/Create.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_439292b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=439292b3& */ "./resources/adminapp/js/cruds/Posts/Create.vue?vue&type=template&id=439292b3&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/Posts/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_439292b3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_439292b3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/Posts/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/Posts/Create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Posts/Create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Posts/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/Posts/Create.vue?vue&type=template&id=439292b3&":
/*!*************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Posts/Create.vue?vue&type=template&id=439292b3& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_439292b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=439292b3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Posts/Create.vue?vue&type=template&id=439292b3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_439292b3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_439292b3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);