webpackHotUpdate("static/development/pages/update.js",{

/***/ "./pages/update.js":
/*!*************************!*\
  !*** ./pages/update.js ***!
  \*************************/
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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout */ "./pages/layout.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_Ait__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/Ait */ "./ethereum/Ait.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var change =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(change, _Component);

  function change() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, change);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(change)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      name: "",
      rollno: "",
      branch: "",
      regno: "",
      dob: "",
      bloodGp: " ",
      nloading: false,
      rloading: false,
      bloading: false,
      dloading: false,
      gloading: false,
      lloading: false,
      nerrmsg: false,
      rerrmsg: false,
      berrmsg: false,
      derrmsg: false,
      gerrmsg: false,
      lerrmsg: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "changeName", function _callee() {
      var accounts;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              _this.setState({
                nloading: true
              });

              _context.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].eth.getAccounts());

            case 4:
              accounts = _context.sent;
              _context.next = 7;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_Ait__WEBPACK_IMPORTED_MODULE_12__["default"].methods.changeName(_this.state.name, _this.state.regno).send({
                from: accounts[0]
              }));

            case 7:
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);

              _this.setState({
                nerrmsg: _context.t0.message
              });

            case 12:
              _this.setState({
                nloading: false
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 9]]);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "changeRollNo", function _callee2() {
      var accounts;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              _this.setState({
                rloading: true
              });

              _context2.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].eth.getAccounts());

            case 4:
              accounts = _context2.sent;
              _context2.next = 7;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_Ait__WEBPACK_IMPORTED_MODULE_12__["default"].methods.changeRollno(_this.state.rollno, _this.state.regno).send({
                from: accounts[0]
              }));

            case 7:
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);

              _this.setState({
                rerrmsg: _context2.t0.message
              });

            case 12:
              _this.setState({
                rloading: false
              });

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 9]]);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "changeBranch", function _callee3() {
      var accounts;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;

              _this.setState({
                bloading: true
              });

              _context3.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].eth.getAccounts());

            case 4:
              accounts = _context3.sent;
              _context3.next = 7;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_Ait__WEBPACK_IMPORTED_MODULE_12__["default"].methods.changeBranch(_this.state.branch, _this.state.regno).send({
                from: accounts[0]
              }));

            case 7:
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);

              _this.setState({
                bloading: false
              });

            case 12:
              _this.setState({
                bloading: false
              });

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 9]]);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "changeDob", function _callee4() {
      var accounts;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this.setState({
                dloading: true
              });

              _context4.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].eth.getAccounts());

            case 3:
              accounts = _context4.sent;
              _context4.next = 6;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_Ait__WEBPACK_IMPORTED_MODULE_12__["default"].methods.changeDob(_this.state.dob, _this.state.regno).send({
                from: accounts[0]
              }));

            case 6:
              _this.setState({
                dloading: false
              });

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "changeBloodGp", function _callee5() {
      var accounts;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this.setState({
                gloading: true
              });

              _context5.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].eth.getAccounts());

            case 3:
              accounts = _context5.sent;
              _context5.next = 6;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_Ait__WEBPACK_IMPORTED_MODULE_12__["default"].methods.changeBloodGp(_this.state.bloodGp, _this.state.regno).send({
                from: accounts[0]
              }));

            case 6:
              _this.setState({
                gloading: false
              });

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "left", function _callee6() {
      var accounts;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _this.setState({
                lloading: true
              });

              _context6.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].eth.getAccounts());

            case 3:
              accounts = _context6.sent;
              _context6.next = 6;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_Ait__WEBPACK_IMPORTED_MODULE_12__["default"].methods.left(_this.state.regno).send({
                from: accounts[0]
              }));

            case 6:
              _this.setState({
                lloading: false
              });

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(change, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
        inline: true
      }, __jsx("label", null, "Reg No. "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        value: this.state.regno,
        onChange: function onChange(event) {
          return _this2.setState({
            regno: event.target.value
          });
        }
      }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.changeName
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
        inline: true
      }, __jsx("label", null, "Name :"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        value: this.state.name,
        onChange: function onChange(event) {
          return _this2.setState({
            name: event.target.value
          });
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        positive: true,
        style: {
          marginLeft: "10px"
        },
        loading: this.state.nloading
      }, "Submit"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.changeRollNo
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
        inline: true
      }, __jsx("label", null, "Roll No :"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        value: this.state.rollno,
        onChange: function onChange(event) {
          return _this2.setState({
            rollno: event.target.value
          });
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        positive: true,
        style: {
          marginLeft: "10px"
        },
        loading: this.state.rloading
      }, "Submit"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.changeBranch
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
        inline: true
      }, __jsx("label", null, "Branch :"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        value: this.state.branch,
        onChange: function onChange(event) {
          return _this2.setState({
            branch: event.target.value
          });
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        positive: true,
        style: {
          marginLeft: "10px"
        },
        loading: this.state.bloading
      }, "Submit"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.changeDob
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
        inline: true
      }, __jsx("label", null, "Date of Birth :"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        value: this.state.dob,
        onChange: function onChange(event) {
          return _this2.setState({
            dob: event.target.value
          });
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        positive: true,
        style: {
          marginLeft: "10px"
        },
        loading: this.state.dloading
      }, "Submit"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.changeBloodGp
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
        inline: true
      }, __jsx("label", null, "Blood Group :"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        value: this.state.bloodGp,
        onChange: function onChange(event) {
          return _this2.setState({
            bloodGp: event.target.value
          });
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        positive: true,
        style: {
          marginLeft: "10px"
        },
        loading: this.state.gloading
      }, "Submit"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.left
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        positive: true,
        style: {
          marginTop: "10px"
        },
        negative: true,
        loading: this.state.lloading
      }, "LEFT!!!!"))))));
    }
  }]);

  return change;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (change);

/***/ })

})
//# sourceMappingURL=update.js.529fea834dc579e17325.hot-update.js.map