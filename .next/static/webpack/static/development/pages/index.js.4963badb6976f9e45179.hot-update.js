webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout */ "./pages/layout.js");
/* harmony import */ var _ethereum_Ait__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/Ait */ "./ethereum/Ait.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      regno: 0,
      name: " ",
      rollno: "",
      branch: " ",
      dob: " ",
      bloodGp: "",
      loading: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSubmit", function _callee(event) {
      var student;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();

              _this.setState({
                loading: true
              });

              _context.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_Ait__WEBPACK_IMPORTED_MODULE_11__["default"].methods.student(_this.state.regno).call());

            case 4:
              student = _context.sent;

              _this.setState({
                name: student.name,
                rollno: student.rollno,
                branch: student.branch,
                dob: student.dob,
                bloodGp: student.bloodGp,
                isStudent: student.isStudent
              });

              _this.setState({
                loading: false
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "renderTable",
    value: function renderTable() {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Body, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, "Is Registered"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, this.state.isStudent ? "Yes" : "No")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, "Name"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, this.state.name)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, "Roll No"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, this.state.rollno)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, "Branch"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, this.state.branch)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, "Date of Birth"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, this.state.dob)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, "Blood Group"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, null, this.state.bloodGp))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // const { student } = this.state;
      return __jsx(_layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx("h1", null, "it is index page"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"], {
        onSubmit: this.onSubmit
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, null, __jsx("label", null, "regno"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        value: this.state.regno,
        onChange: function onChange(event) {
          return _this2.setState({
            regno: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        primary: true,
        loading: this.state.loading
      }, "Submit")), this.renderTable());
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.4963badb6976f9e45179.hot-update.js.map