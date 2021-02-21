webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Layout/LocaleSelector/LocaleSelector.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/Layout/LocaleSelector/LocaleSelector.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var i18n_LocaleProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18n/LocaleProvider */ "./src/i18n/LocaleProvider.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_circle_flags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-circle-flags */ "./node_modules/react-circle-flags/dist/index.modern.js");




var _jsxFileName = "/home/fpellicero/projects/fpellicero.github.io/src/components/Layout/LocaleSelector/LocaleSelector.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var LocaleSelector = function LocaleSelector() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      showSelector = _React$useState2[0],
      setShowSelector = _React$useState2[1];

  var currentLocale = Object(i18n_LocaleProvider__WEBPACK_IMPORTED_MODULE_3__["useLocale"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var changeLocale = function changeLocale(locale) {
    router.push(router.asPath.replace("/".concat(currentLocale), "/".concat(locale)));
    setShowSelector(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      className: "locale-selector",
      onClick: function onClick() {
        return setShowSelector(!showSelector);
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_circle_flags__WEBPACK_IMPORTED_MODULE_6__["CircleFlag"], {
        countryCode: currentLocale === "es" ? "es" : "gb"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], {
      children: showSelector && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "locale-selector__dropdown",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_circle_flags__WEBPACK_IMPORTED_MODULE_6__["CircleFlag"], {
            countryCode: "es",
            onClick: function onClick() {
              return changeLocale("es");
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].span, {
            initial: {
              opacity: 0,
              translateY: "-100%"
            },
            animate: {
              opacity: 1,
              translateY: 0
            },
            exit: {
              opacity: 0,
              translateY: "-100%"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_circle_flags__WEBPACK_IMPORTED_MODULE_6__["CircleFlag"], {
              countryCode: "gb",
              onClick: function onClick() {
                return changeLocale("en");
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
          className: "locale-selector__background",
          onClick: function onClick() {
            return setShowSelector(false);
          },
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(LocaleSelector, "RxNvNTW6JxMqw6p1dyCCDobH4iI=", false, function () {
  return [i18n_LocaleProvider__WEBPACK_IMPORTED_MODULE_3__["useLocale"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = LocaleSelector;
/* harmony default export */ __webpack_exports__["default"] = (LocaleSelector);

var _c;

$RefreshReg$(_c, "LocaleSelector");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xvY2FsZVNlbGVjdG9yL0xvY2FsZVNlbGVjdG9yLnRzeCJdLCJuYW1lcyI6WyJMb2NhbGVTZWxlY3RvciIsIlJlYWN0Iiwic2hvd1NlbGVjdG9yIiwic2V0U2hvd1NlbGVjdG9yIiwiY3VycmVudExvY2FsZSIsInVzZUxvY2FsZSIsInJvdXRlciIsInVzZVJvdXRlciIsImNoYW5nZUxvY2FsZSIsImxvY2FsZSIsInB1c2giLCJhc1BhdGgiLCJyZXBsYWNlIiwib3BhY2l0eSIsInRyYW5zbGF0ZVkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxjQUF3QixHQUFHLFNBQTNCQSxjQUEyQixHQUFNO0FBQUE7O0FBQUEsd0JBQ0tDLDhDQUFBLENBQWUsS0FBZixDQURMO0FBQUE7QUFBQSxNQUM1QkMsWUFENEI7QUFBQSxNQUNkQyxlQURjOztBQUVuQyxNQUFNQyxhQUFhLEdBQUdDLHFFQUFTLEVBQS9CO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxNQUFELEVBQW9CO0FBQ3JDSCxVQUFNLENBQUNJLElBQVAsQ0FBWUosTUFBTSxDQUFDSyxNQUFQLENBQWNDLE9BQWQsWUFBMEJSLGFBQTFCLGNBQStDSyxNQUEvQyxFQUFaO0FBQ0FOLG1CQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0gsR0FIRDs7QUFJQSxzQkFDSTtBQUFBLDRCQUNJO0FBQVEsZUFBUyxFQUFDLGlCQUFsQjtBQUFvQyxhQUFPLEVBQUU7QUFBQSxlQUFNQSxlQUFlLENBQUMsQ0FBQ0QsWUFBRixDQUFyQjtBQUFBLE9BQTdDO0FBQUEsNkJBQ0kscUVBQUMsNkRBQUQ7QUFBWSxtQkFBVyxFQUFFRSxhQUFhLEtBQUssSUFBbEIsR0FBeUIsSUFBekIsR0FBZ0M7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJLHFFQUFDLDZEQUFEO0FBQUEsZ0JBQ0tGLFlBQVksaUJBQ1Q7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsMkJBQWY7QUFBQSxrQ0FFSSxxRUFBQyw2REFBRDtBQUFZLHVCQUFXLEVBQUUsSUFBekI7QUFBK0IsbUJBQU8sRUFBRTtBQUFBLHFCQUFNTSxZQUFZLENBQUMsSUFBRCxDQUFsQjtBQUFBO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSSxxRUFBQyxvREFBRCxDQUFRLElBQVI7QUFDSSxtQkFBTyxFQUFFO0FBQUNLLHFCQUFPLEVBQUUsQ0FBVjtBQUFhQyx3QkFBVSxFQUFFO0FBQXpCLGFBRGI7QUFFSSxtQkFBTyxFQUFFO0FBQUNELHFCQUFPLEVBQUUsQ0FBVjtBQUFhQyx3QkFBVSxFQUFFO0FBQXpCLGFBRmI7QUFHSSxnQkFBSSxFQUFFO0FBQUNELHFCQUFPLEVBQUUsQ0FBVjtBQUFhQyx3QkFBVSxFQUFFO0FBQXpCLGFBSFY7QUFBQSxtQ0FLSSxxRUFBQyw2REFBRDtBQUFZLHlCQUFXLEVBQUUsSUFBekI7QUFBK0IscUJBQU8sRUFBRTtBQUFBLHVCQUFNTixZQUFZLENBQUMsSUFBRCxDQUFsQjtBQUFBO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVlJLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNJLG1CQUFTLEVBQUMsNkJBRGQ7QUFFSSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1MLGVBQWUsQ0FBQyxLQUFELENBQXJCO0FBQUEsV0FGYjtBQUdJLGlCQUFPLEVBQUU7QUFBQ1UsbUJBQU8sRUFBRTtBQUFWLFdBSGI7QUFJSSxpQkFBTyxFQUFFO0FBQUNBLG1CQUFPLEVBQUU7QUFBVixXQUpiO0FBS0ksY0FBSSxFQUFFO0FBQUNBLG1CQUFPLEVBQUU7QUFBVjtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWko7QUFBQTtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBLGtCQURKO0FBK0JILENBeENEOztHQUFNYixjO1VBRW9CSyw2RCxFQUNQRSxxRDs7O0tBSGJQLGM7QUEwQ1NBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjU5YzYxYTQ0ZTVkNmMwMTgzMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gXCJpMThuL0xvY2FsZVByb3ZpZGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gXCJyZWFjdC1idWxtYS1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBDaXJjbGVGbGFnIH0gZnJvbSBcInJlYWN0LWNpcmNsZS1mbGFnc1wiO1xuXG5jb25zdCBMb2NhbGVTZWxlY3RvcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Nob3dTZWxlY3Rvciwgc2V0U2hvd1NlbGVjdG9yXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBjdXJyZW50TG9jYWxlID0gdXNlTG9jYWxlKCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBjaGFuZ2VMb2NhbGUgPSAobG9jYWxlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2gocm91dGVyLmFzUGF0aC5yZXBsYWNlKGAvJHtjdXJyZW50TG9jYWxlfWAsIGAvJHtsb2NhbGV9YCkpO1xuICAgICAgICBzZXRTaG93U2VsZWN0b3IoZmFsc2UpO1xuICAgIH0gXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD4gICAgICAgXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxvY2FsZS1zZWxlY3RvclwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dTZWxlY3Rvcighc2hvd1NlbGVjdG9yKX0+XG4gICAgICAgICAgICAgICAgPENpcmNsZUZsYWcgY291bnRyeUNvZGU9e2N1cnJlbnRMb2NhbGUgPT09IFwiZXNcIiA/IFwiZXNcIiA6IFwiZ2JcIn0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICB7c2hvd1NlbGVjdG9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYWxlLXNlbGVjdG9yX19kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaXJjbGVGbGFnIGNvdW50cnlDb2RlPXtcImVzXCJ9IG9uQ2xpY2s9eygpID0+IGNoYW5nZUxvY2FsZShcImVzXCIpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uc3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7b3BhY2l0eTogMCwgdHJhbnNsYXRlWTogXCItMTAwJVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e29wYWNpdHk6IDEsIHRyYW5zbGF0ZVk6IDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0PXt7b3BhY2l0eTogMCwgdHJhbnNsYXRlWTogXCItMTAwJVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaXJjbGVGbGFnIGNvdW50cnlDb2RlPXtcImdiXCJ9IG9uQ2xpY2s9eygpID0+IGNoYW5nZUxvY2FsZShcImVuXCIpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9jYWxlLXNlbGVjdG9yX19iYWNrZ3JvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U2VsZWN0b3IoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OiAwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7b3BhY2l0eTogMX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdD17e29wYWNpdHk6IDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsZVNlbGVjdG9yO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==