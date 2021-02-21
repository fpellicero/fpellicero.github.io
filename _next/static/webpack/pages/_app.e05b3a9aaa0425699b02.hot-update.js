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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_circle_flags__WEBPACK_IMPORTED_MODULE_6__["CircleFlag"], {
            countryCode: "es",
            onClick: function onClick() {
              return changeLocale("es");
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_circle_flags__WEBPACK_IMPORTED_MODULE_6__["CircleFlag"], {
              countryCode: "gb",
              onClick: function onClick() {
                return changeLocale("en");
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
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
          lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xvY2FsZVNlbGVjdG9yL0xvY2FsZVNlbGVjdG9yLnRzeCJdLCJuYW1lcyI6WyJMb2NhbGVTZWxlY3RvciIsIlJlYWN0Iiwic2hvd1NlbGVjdG9yIiwic2V0U2hvd1NlbGVjdG9yIiwiY3VycmVudExvY2FsZSIsInVzZUxvY2FsZSIsInJvdXRlciIsInVzZVJvdXRlciIsImNoYW5nZUxvY2FsZSIsImxvY2FsZSIsInB1c2giLCJhc1BhdGgiLCJyZXBsYWNlIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGNBQXdCLEdBQUcsU0FBM0JBLGNBQTJCLEdBQU07QUFBQTs7QUFBQSx3QkFDS0MsOENBQUEsQ0FBZSxLQUFmLENBREw7QUFBQTtBQUFBLE1BQzVCQyxZQUQ0QjtBQUFBLE1BQ2RDLGVBRGM7O0FBRW5DLE1BQU1DLGFBQWEsR0FBR0MscUVBQVMsRUFBL0I7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBb0I7QUFDckNILFVBQU0sQ0FBQ0ksSUFBUCxDQUFZSixNQUFNLENBQUNLLE1BQVAsQ0FBY0MsT0FBZCxZQUEwQlIsYUFBMUIsY0FBK0NLLE1BQS9DLEVBQVo7QUFDQU4sbUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDSCxHQUhEOztBQUlBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBUSxlQUFTLEVBQUMsaUJBQWxCO0FBQW9DLGFBQU8sRUFBRTtBQUFBLGVBQU1BLGVBQWUsQ0FBQyxDQUFDRCxZQUFGLENBQXJCO0FBQUEsT0FBN0M7QUFBQSw2QkFDSSxxRUFBQyw2REFBRDtBQUFZLG1CQUFXLEVBQUVFLGFBQWEsS0FBSyxJQUFsQixHQUF5QixJQUF6QixHQUFnQztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBSUkscUVBQUMsNkRBQUQ7QUFBQSxnQkFDS0YsWUFBWSxpQkFDVDtBQUFBLGdDQUNJLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNJLG1CQUFTLEVBQUMsMkJBRGQ7QUFFSSxpQkFBTyxFQUFFO0FBQUNXLG1CQUFPLEVBQUU7QUFBVixXQUZiO0FBR0ksaUJBQU8sRUFBRTtBQUFDQSxtQkFBTyxFQUFFO0FBQVYsV0FIYjtBQUlJLGNBQUksRUFBRTtBQUFDQSxtQkFBTyxFQUFFO0FBQVYsV0FKVjtBQUFBLGtDQU9JLHFFQUFDLDZEQUFEO0FBQVksdUJBQVcsRUFBRSxJQUF6QjtBQUErQixtQkFBTyxFQUFFO0FBQUEscUJBQU1MLFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUE7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSixlQVFJO0FBQUEsbUNBQ0kscUVBQUMsNkRBQUQ7QUFBWSx5QkFBVyxFQUFFLElBQXpCO0FBQStCLHFCQUFPLEVBQUU7QUFBQSx1QkFBTUEsWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFhSSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDSSxtQkFBUyxFQUFDLDZCQURkO0FBRUksaUJBQU8sRUFBRTtBQUFBLG1CQUFNTCxlQUFlLENBQUMsS0FBRCxDQUFyQjtBQUFBLFdBRmI7QUFHSSxpQkFBTyxFQUFFO0FBQUNVLG1CQUFPLEVBQUU7QUFBVixXQUhiO0FBSUksaUJBQU8sRUFBRTtBQUFDQSxtQkFBTyxFQUFFO0FBQVYsV0FKYjtBQUtJLGNBQUksRUFBRTtBQUFDQSxtQkFBTyxFQUFFO0FBQVY7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJKO0FBQUE7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQSxrQkFESjtBQWdDSCxDQXpDRDs7R0FBTWIsYztVQUVvQkssNkQsRUFDUEUscUQ7OztLQUhiUCxjO0FBMkNTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmUwNWIzYTlhYWEwNDI1Njk5YjAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tIFwiaTE4bi9Mb2NhbGVQcm92aWRlclwiO1xuaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tIFwicmVhY3QtYnVsbWEtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQ2lyY2xlRmxhZyB9IGZyb20gXCJyZWFjdC1jaXJjbGUtZmxhZ3NcIjtcblxuY29uc3QgTG9jYWxlU2VsZWN0b3I6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzaG93U2VsZWN0b3IsIHNldFNob3dTZWxlY3Rvcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgY3VycmVudExvY2FsZSA9IHVzZUxvY2FsZSgpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgY2hhbmdlTG9jYWxlID0gKGxvY2FsZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKHJvdXRlci5hc1BhdGgucmVwbGFjZShgLyR7Y3VycmVudExvY2FsZX1gLCBgLyR7bG9jYWxlfWApKTtcbiAgICAgICAgc2V0U2hvd1NlbGVjdG9yKGZhbHNlKTtcbiAgICB9IFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+ICAgICAgIFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsb2NhbGUtc2VsZWN0b3JcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U2VsZWN0b3IoIXNob3dTZWxlY3Rvcil9PlxuICAgICAgICAgICAgICAgIDxDaXJjbGVGbGFnIGNvdW50cnlDb2RlPXtjdXJyZW50TG9jYWxlID09PSBcImVzXCIgPyBcImVzXCIgOiBcImdiXCJ9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAge3Nob3dTZWxlY3RvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2NhbGUtc2VsZWN0b3JfX2Ryb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7b3BhY2l0eTogMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e29wYWNpdHk6IDF9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQ9e3tvcGFjaXR5OiAwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2lyY2xlRmxhZyBjb3VudHJ5Q29kZT17XCJlc1wifSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VMb2NhbGUoXCJlc1wiKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENpcmNsZUZsYWcgY291bnRyeUNvZGU9e1wiZ2JcIn0gb25DbGljaz17KCkgPT4gY2hhbmdlTG9jYWxlKFwiZW5cIil9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2NhbGUtc2VsZWN0b3JfX2JhY2tncm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dTZWxlY3RvcihmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6IDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tvcGFjaXR5OiAxfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0PXt7b3BhY2l0eTogMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxlU2VsZWN0b3I7XG4iXSwic291cmNlUm9vdCI6IiJ9