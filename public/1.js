(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AddClient.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/AddClient.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'add-client',
  data: function data() {
    var _client;

    return {
      client: (_client = {
        firstName: '',
        lastName: '',
        email: '',
        primaryLegalCounsel: '',
        dateOfBirth: '',
        profileImage: null
      }, _defineProperty(_client, "dateOfBirth", ''), _defineProperty(_client, "caseDetails", ''), _client)
    };
  },
  created: function created() {},
  methods: {
    onSubmit: function onSubmit(event) {
      var _this = this;

      event.preventDefault();
      this.axios.post("/api/client", this.client).then(function (response) {
        if (response.data.status) {
          _this.makeToast("Success", response.data.message, 'success');
        } else {
          _this.makeToast("Success", response.data.message, 'danger');
        } // this.$router.push({name: 'home'});

      })["catch"](function (err) {
        if (err.response && err.response.status == 422) {}
      });
    },
    makeToast: function makeToast(title, content, variant) {
      this.$bvToast.toast(content, {
        title: title,
        variant: variant,
        solid: true
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AddClient.vue?vue&type=template&id=760ff673&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/AddClient.vue?vue&type=template&id=760ff673& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-container",
        { staticClass: "bv-example-row mt-5" },
        [
          _c(
            "router-link",
            { staticClass: "btn btn-info text-white", attrs: { to: "/" } },
            [_vm._v("All Clients")]
          ),
          _vm._v(" "),
          _c(
            "b-form",
            { staticClass: "mt-5", on: { submit: _vm.onSubmit } },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "First Name:" } },
                        [
                          _c("b-form-input", {
                            attrs: {
                              type: "text",
                              placeholder: "Enter First Name",
                              required: "",
                            },
                            model: {
                              value: _vm.client.firstName,
                              callback: function ($$v) {
                                _vm.$set(_vm.client, "firstName", $$v)
                              },
                              expression: "client.firstName",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Last Name:" } },
                        [
                          _c("b-form-input", {
                            attrs: {
                              type: "text",
                              placeholder: "Enter Last name",
                              required: "",
                            },
                            model: {
                              value: _vm.client.lastName,
                              callback: function ($$v) {
                                _vm.$set(_vm.client, "lastName", $$v)
                              },
                              expression: "client.lastName",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "mt-3" },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "E-mail Address:" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          type: "email",
                          placeholder: "Enter email",
                          required: "",
                        },
                        model: {
                          value: _vm.client.email,
                          callback: function ($$v) {
                            _vm.$set(_vm.client, "email", $$v)
                          },
                          expression: "client.email",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "mt-3" },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Primary Legal Counsel:" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          type: "text",
                          placeholder: "Enter Primary Legal Counsel",
                          required: "",
                        },
                        model: {
                          value: _vm.client.primaryLegalCounsel,
                          callback: function ($$v) {
                            _vm.$set(_vm.client, "primaryLegalCounsel", $$v)
                          },
                          expression: "client.primaryLegalCounsel",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "mt-3" },
                [
                  _c(
                    "b-col",
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Date of Birth:" } },
                        [
                          _c("b-form-datepicker", {
                            staticClass: "mb-2",
                            attrs: { placeholder: "Choose a date" },
                            model: {
                              value: _vm.client.dateOfBirth,
                              callback: function ($$v) {
                                _vm.$set(_vm.client, "dateOfBirth", $$v)
                              },
                              expression: "client.dateOfBirth",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Profile Image:" } },
                        [
                          _c("b-form-file", {
                            attrs: {
                              state: Boolean(_vm.client.profileImage),
                              placeholder: "Select profile image",
                            },
                            model: {
                              value: _vm.client.profileImage,
                              callback: function ($$v) {
                                _vm.$set(_vm.client, "profileImage", $$v)
                              },
                              expression: "client.profileImage",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "mt-3" },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Case Details:" } },
                    [
                      _c("b-form-textarea", {
                        attrs: {
                          id: "textarea",
                          placeholder: "Enter case details...",
                          rows: "7",
                        },
                        model: {
                          value: _vm.client.caseDetails,
                          callback: function ($$v) {
                            _vm.$set(_vm.client, "caseDetails", $$v)
                          },
                          expression: "client.caseDetails",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "mt-3 text-white",
                  attrs: { type: "submit", variant: "info" },
                },
                [_vm._v("Create Profile")]
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/AddClient.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/AddClient.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddClient_vue_vue_type_template_id_760ff673___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddClient.vue?vue&type=template&id=760ff673& */ "./resources/js/Pages/AddClient.vue?vue&type=template&id=760ff673&");
/* harmony import */ var _AddClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddClient.vue?vue&type=script&lang=js& */ "./resources/js/Pages/AddClient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddClient_vue_vue_type_template_id_760ff673___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddClient_vue_vue_type_template_id_760ff673___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/AddClient.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/AddClient.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/AddClient.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddClient.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AddClient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/AddClient.vue?vue&type=template&id=760ff673&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/AddClient.vue?vue&type=template&id=760ff673& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddClient_vue_vue_type_template_id_760ff673___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AddClient.vue?vue&type=template&id=760ff673& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AddClient.vue?vue&type=template&id=760ff673&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddClient_vue_vue_type_template_id_760ff673___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddClient_vue_vue_type_template_id_760ff673___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);