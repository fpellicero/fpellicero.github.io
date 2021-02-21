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
    router.push(router.asPath.replace("/".concat(currentLocale), "/".concat(locale)), null, {
      shallow: true
    });
    setShowSelector(false);
  };

  var Flags = [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_circle_flags__WEBPACK_IMPORTED_MODULE_6__["CircleFlag"], {
    countryCode: "es",
    onClick: function onClick() {
      return changeLocale("es");
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_circle_flags__WEBPACK_IMPORTED_MODULE_6__["CircleFlag"], {
    countryCode: "gb",
    onClick: function onClick() {
      return changeLocale("en");
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, _this)];

  if (currentLocale === "en") {
    Flags = Flags.reverse();
  }

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
        lineNumber: 30,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], {
      children: showSelector && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
          className: "locale-selector__dropdown",
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0
          },
          children: [Flags[0], /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
            initial: {
              y: "-100%"
            },
            animate: {
              y: "0%"
            },
            transition: {
              delay: .1
            },
            children: Flags[1]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
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
          lineNumber: 50,
          columnNumber: 25
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xvY2FsZVNlbGVjdG9yL0xvY2FsZVNlbGVjdG9yLnRzeCJdLCJuYW1lcyI6WyJMb2NhbGVTZWxlY3RvciIsIlJlYWN0Iiwic2hvd1NlbGVjdG9yIiwic2V0U2hvd1NlbGVjdG9yIiwiY3VycmVudExvY2FsZSIsInVzZUxvY2FsZSIsInJvdXRlciIsInVzZVJvdXRlciIsImNoYW5nZUxvY2FsZSIsImxvY2FsZSIsInB1c2giLCJhc1BhdGgiLCJyZXBsYWNlIiwic2hhbGxvdyIsIkZsYWdzIiwicmV2ZXJzZSIsIm9wYWNpdHkiLCJ5IiwiZGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQSxJQUFNQSxjQUF3QixHQUFHLFNBQTNCQSxjQUEyQixHQUFNO0FBQUE7O0FBQUEsd0JBQ0tDLDhDQUFBLENBQWUsS0FBZixDQURMO0FBQUE7QUFBQSxNQUM1QkMsWUFENEI7QUFBQSxNQUNkQyxlQURjOztBQUVuQyxNQUFNQyxhQUFhLEdBQUdDLHFFQUFTLEVBQS9CO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxNQUFELEVBQW9CO0FBQ3JDSCxVQUFNLENBQUNJLElBQVAsQ0FBWUosTUFBTSxDQUFDSyxNQUFQLENBQWNDLE9BQWQsWUFBMEJSLGFBQTFCLGNBQStDSyxNQUEvQyxFQUFaLEVBQXNFLElBQXRFLEVBQTRFO0FBQUNJLGFBQU8sRUFBRTtBQUFWLEtBQTVFO0FBQ0FWLG1CQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0gsR0FIRDs7QUFLQSxNQUFJVyxLQUFLLEdBQUcsY0FDUixxRUFBQyw2REFBRDtBQUFZLGVBQVcsRUFBRSxJQUF6QjtBQUErQixXQUFPLEVBQUU7QUFBQSxhQUFNTixZQUFZLENBQUMsSUFBRCxDQUFsQjtBQUFBO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEUSxlQUVSLHFFQUFDLDZEQUFEO0FBQVksZUFBVyxFQUFFLElBQXpCO0FBQStCLFdBQU8sRUFBRTtBQUFBLGFBQU1BLFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUE7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZRLENBQVo7O0FBS0EsTUFBSUosYUFBYSxLQUFLLElBQXRCLEVBQTRCO0FBQ3hCVSxTQUFLLEdBQUdBLEtBQUssQ0FBQ0MsT0FBTixFQUFSO0FBQ0g7O0FBQ0Qsc0JBQ0k7QUFBQSw0QkFDSTtBQUFRLGVBQVMsRUFBQyxpQkFBbEI7QUFBb0MsYUFBTyxFQUFFO0FBQUEsZUFBTVosZUFBZSxDQUFDLENBQUNELFlBQUYsQ0FBckI7QUFBQSxPQUE3QztBQUFBLDZCQUNJLHFFQUFDLDZEQUFEO0FBQVksbUJBQVcsRUFBRUUsYUFBYSxLQUFLLElBQWxCLEdBQXlCLElBQXpCLEdBQWdDO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSSxxRUFBQyw2REFBRDtBQUFBLGdCQUNLRixZQUFZLGlCQUNUO0FBQUEsZ0NBQ0kscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0ksbUJBQVMsRUFBQywyQkFEZDtBQUVJLGlCQUFPLEVBQUU7QUFBQ2MsbUJBQU8sRUFBRTtBQUFWLFdBRmI7QUFHSSxpQkFBTyxFQUFFO0FBQUNBLG1CQUFPLEVBQUU7QUFBVixXQUhiO0FBSUksY0FBSSxFQUFFO0FBQUNBLG1CQUFPLEVBQUU7QUFBVixXQUpWO0FBQUEscUJBTUtGLEtBQUssQ0FBQyxDQUFELENBTlYsZUFPSSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDSSxtQkFBTyxFQUFFO0FBQUNHLGVBQUMsRUFBRTtBQUFKLGFBRGI7QUFFSSxtQkFBTyxFQUFFO0FBQUNBLGVBQUMsRUFBRTtBQUFKLGFBRmI7QUFHSSxzQkFBVSxFQUFFO0FBQUNDLG1CQUFLLEVBQUU7QUFBUixhQUhoQjtBQUFBLHNCQUtLSixLQUFLLENBQUMsQ0FBRDtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBZ0JJLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNJLG1CQUFTLEVBQUMsNkJBRGQ7QUFFSSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1YLGVBQWUsQ0FBQyxLQUFELENBQXJCO0FBQUEsV0FGYjtBQUdJLGlCQUFPLEVBQUU7QUFBQ2EsbUJBQU8sRUFBRTtBQUFWLFdBSGI7QUFJSSxpQkFBTyxFQUFFO0FBQUNBLG1CQUFPLEVBQUU7QUFBVixXQUpiO0FBS0ksY0FBSSxFQUFFO0FBQUNBLG1CQUFPLEVBQUU7QUFBVjtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJKO0FBQUE7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQSxrQkFESjtBQW1DSCxDQXJERDs7R0FBTWhCLGM7VUFFb0JLLDZELEVBQ1BFLHFEOzs7S0FIYlAsYztBQXVEU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45ODkxNzM4ZGU4MGIwNTdhYmM4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSBcImkxOG4vTG9jYWxlUHJvdmlkZXJcIjtcbmltcG9ydCB7IFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSBcInJlYWN0LWJ1bG1hLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IENpcmNsZUZsYWcgfSBmcm9tIFwicmVhY3QtY2lyY2xlLWZsYWdzXCI7XG5cblxuY29uc3QgTG9jYWxlU2VsZWN0b3I6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzaG93U2VsZWN0b3IsIHNldFNob3dTZWxlY3Rvcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgY3VycmVudExvY2FsZSA9IHVzZUxvY2FsZSgpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgY2hhbmdlTG9jYWxlID0gKGxvY2FsZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKHJvdXRlci5hc1BhdGgucmVwbGFjZShgLyR7Y3VycmVudExvY2FsZX1gLCBgLyR7bG9jYWxlfWApLCBudWxsLCB7c2hhbGxvdzogdHJ1ZX0pO1xuICAgICAgICBzZXRTaG93U2VsZWN0b3IoZmFsc2UpO1xuICAgIH1cblxuICAgIGxldCBGbGFncyA9IFtcbiAgICAgICAgPENpcmNsZUZsYWcgY291bnRyeUNvZGU9e1wiZXNcIn0gb25DbGljaz17KCkgPT4gY2hhbmdlTG9jYWxlKFwiZXNcIil9IC8+LFxuICAgICAgICA8Q2lyY2xlRmxhZyBjb3VudHJ5Q29kZT17XCJnYlwifSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VMb2NhbGUoXCJlblwiKX0vPlxuICAgIF1cblxuICAgIGlmIChjdXJyZW50TG9jYWxlID09PSBcImVuXCIpIHtcbiAgICAgICAgRmxhZ3MgPSBGbGFncy5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+ICAgICAgIFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsb2NhbGUtc2VsZWN0b3JcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U2VsZWN0b3IoIXNob3dTZWxlY3Rvcil9PlxuICAgICAgICAgICAgICAgIDxDaXJjbGVGbGFnIGNvdW50cnlDb2RlPXtjdXJyZW50TG9jYWxlID09PSBcImVzXCIgPyBcImVzXCIgOiBcImdiXCJ9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAge3Nob3dTZWxlY3RvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvY2FsZS1zZWxlY3Rvcl9fZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OiAwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7b3BhY2l0eTogMX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdD17e29wYWNpdHk6IDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtGbGFnc1swXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7eTogXCItMTAwJVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e3k6IFwiMCVcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkZWxheTogLjF9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0ZsYWdzWzFdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvY2FsZS1zZWxlY3Rvcl9fYmFja2dyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1NlbGVjdG9yKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7b3BhY2l0eTogMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e29wYWNpdHk6IDF9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQ9e3tvcGFjaXR5OiAwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhbGVTZWxlY3RvcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=