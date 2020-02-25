webpackHotUpdate("static/development/pages/register.js",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout */ "./pages/layout.js");
/* harmony import */ var _ethereum_Ait__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/Ait */ "./ethereum/Ait.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;







var register =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(register, _Component);

  function register() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, register);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(register)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      regno: "",
      name: " ",
      rollno: "",
      branch: " ",
      dob: " ",
      bloodGp: "",
      errmsg: "",
      loading: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSubmit", function _callee() {
      var _this$state, regno, name, rollno, branch, dob, bloodGp, accounts, manager;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();

              _this.setState({
                loading: true,
                errmsg: ""
              });

              _this$state = _this.state, regno = _this$state.regno, name = _this$state.name, rollno = _this$state.rollno, branch = _this$state.branch, dob = _this$state.dob, bloodGp = _this$state.bloodGp;
              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_9__["default"].eth.getAccounts());

            case 5:
              accounts = _context.sent;
              _context.next = 8;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_Ait__WEBPACK_IMPORTED_MODULE_12__["default"].methods.manager().call());

            case 8:
              manager = _context.sent;
              _context.prev = 9;
              _context.next = 12;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_Ait__WEBPACK_IMPORTED_MODULE_12__["default"].methods.register(regno, name, rollno, branch, dob, bloodGp).send({
                from: accounts[0]
              }));

            case 12:
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](9);

              _this.setState({
                errmsg: _context.t0.message
              });

            case 17:
              _this.setState({
                loading: false
              });

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[9, 14]]);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(register, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, {
        columns: 2
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        width: 13
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        onSubmit: this.onSubmit,
        error: !!this.state.errmsg
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, __jsx("label", null, "Registration No"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        value: this.state.regno,
        onChange: function onChange(event) {
          return _this2.setState({
            regno: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, __jsx("label", null, "Name"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        value: this.state.name,
        onChange: function onChange(event) {
          return _this2.setState({
            name: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, __jsx("label", null, "Roll No"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        value: this.state.rollno,
        onChange: function onChange(event) {
          return _this2.setState({
            rollno: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, __jsx("label", null, "Branch"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        value: this.state.branch,
        onChange: function onChange(event) {
          return _this2.setState({
            branch: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, __jsx("label", null, "Date of Birth"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        value: this.state.dob,
        onChange: function onChange(event) {
          return _this2.setState({
            dob: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, __jsx("label", null, "Blood Group"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        value: this.state.bloodGp,
        onChange: function onChange(event) {
          return _this2.setState({
            bloodGp: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Message"], {
        error: true,
        header: "opps",
        content: this.state.errmsg
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        primary: true,
        loading: this.state.loading
      }, "Submit"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        width: 3
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        route: "/change"
      }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        primary: true,
        floated: "right",
        loading: this.state.errmsg
      }, "Update!!")))))));
    }
  }]);

  return register;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (register);

/***/ })

})
//# sourceMappingURL=register.js.51aea075afdb4f945e2a.hot-update.js.map