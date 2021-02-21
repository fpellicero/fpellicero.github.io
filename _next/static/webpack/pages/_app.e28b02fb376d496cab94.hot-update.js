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
/* harmony import */ var i18n_LocaleProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18n/LocaleProvider */ "./src/i18n/LocaleProvider.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_circle_flags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-circle-flags */ "./node_modules/react-circle-flags/dist/index.modern.js");




var _jsxFileName = "/home/fpellicero/projects/fpellicero.github.io/src/components/Layout/LocaleSelector/LocaleSelector.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var LocaleSelector = function LocaleSelector() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      showSelector = _React$useState2[0],
      setShowSelector = _React$useState2[1];

  var currentLocale = Object(i18n_LocaleProvider__WEBPACK_IMPORTED_MODULE_2__["useLocale"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var changeLocale = function changeLocale(locale) {
    console.log(router.asPath.replace("/".concat(currentLocale, "/"), "/".concat(locale, "/")));
    router.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("router", {
      className: "asP"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }, _this).replace("/".concat(currentLocale, "/"), "/".concat(locale, "/")));
    setShowSelector(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      className: "locale-selector",
      onClick: function onClick() {
        return setShowSelector(!showSelector);
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_circle_flags__WEBPACK_IMPORTED_MODULE_5__["CircleFlag"], {
        countryCode: currentLocale
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this), showSelector && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "locale-selector__dropdown",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_circle_flags__WEBPACK_IMPORTED_MODULE_5__["CircleFlag"], {
          countryCode: "es",
          onClick: function onClick() {
            return changeLocale("es");
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_circle_flags__WEBPACK_IMPORTED_MODULE_5__["CircleFlag"], {
          countryCode: "gb",
          onClick: function onClick() {
            return changeLocale("en");
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "locale-selector__background"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, _this)]
    }, void 0, true)]
  }, void 0, true);
};

_s(LocaleSelector, "RxNvNTW6JxMqw6p1dyCCDobH4iI=", false, function () {
  return [i18n_LocaleProvider__WEBPACK_IMPORTED_MODULE_2__["useLocale"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xvY2FsZVNlbGVjdG9yL0xvY2FsZVNlbGVjdG9yLnRzeCJdLCJuYW1lcyI6WyJMb2NhbGVTZWxlY3RvciIsIlJlYWN0Iiwic2hvd1NlbGVjdG9yIiwic2V0U2hvd1NlbGVjdG9yIiwiY3VycmVudExvY2FsZSIsInVzZUxvY2FsZSIsInJvdXRlciIsInVzZVJvdXRlciIsImNoYW5nZUxvY2FsZSIsImxvY2FsZSIsImNvbnNvbGUiLCJsb2ciLCJhc1BhdGgiLCJyZXBsYWNlIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGNBQXdCLEdBQUcsU0FBM0JBLGNBQTJCLEdBQU07QUFBQTs7QUFBQSx3QkFDS0MsOENBQUEsQ0FBZSxLQUFmLENBREw7QUFBQTtBQUFBLE1BQzVCQyxZQUQ0QjtBQUFBLE1BQ2RDLGVBRGM7O0FBRW5DLE1BQU1DLGFBQWEsR0FBR0MscUVBQVMsRUFBL0I7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBb0I7QUFDckNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxNQUFNLENBQUNNLE1BQVAsQ0FBY0MsT0FBZCxZQUEwQlQsYUFBMUIsbUJBQWdESyxNQUFoRCxPQUFaO0FBQ0FILFVBQU0sQ0FBQ1EsSUFBUCxDQUFZO0FBQVEsZUFBUyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBa0NELE9BQWxDLFlBQThDVCxhQUE5QyxtQkFBb0VLLE1BQXBFLE9BQVo7QUFDQU4sbUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDSCxHQUpEOztBQUtBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBUSxlQUFTLEVBQUMsaUJBQWxCO0FBQW9DLGFBQU8sRUFBRTtBQUFBLGVBQU1BLGVBQWUsQ0FBQyxDQUFDRCxZQUFGLENBQXJCO0FBQUEsT0FBN0M7QUFBQSw2QkFDSSxxRUFBQyw2REFBRDtBQUFZLG1CQUFXLEVBQUVFO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFJS0YsWUFBWSxpQkFDVDtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQywyQkFBZjtBQUFBLGdDQUNJLHFFQUFDLDZEQUFEO0FBQVkscUJBQVcsRUFBRSxJQUF6QjtBQUErQixpQkFBTyxFQUFFO0FBQUEsbUJBQU1NLFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUE7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJLHFFQUFDLDZEQUFEO0FBQVkscUJBQVcsRUFBRSxJQUF6QjtBQUErQixpQkFBTyxFQUFFO0FBQUEsbUJBQU1BLFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUE7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUtJO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBLG9CQUxSO0FBQUEsa0JBREo7QUFnQkgsQ0ExQkQ7O0dBQU1SLGM7VUFFb0JLLDZELEVBQ1BFLHFEOzs7S0FIYlAsYztBQTRCU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lMjhiMDJmYjM3NmQ0OTZjYWI5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSBcImkxOG4vTG9jYWxlUHJvdmlkZXJcIjtcbmltcG9ydCB7IFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSBcInJlYWN0LWJ1bG1hLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IENpcmNsZUZsYWcgfSBmcm9tIFwicmVhY3QtY2lyY2xlLWZsYWdzXCI7XG5cbmNvbnN0IExvY2FsZVNlbGVjdG9yOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCBbc2hvd1NlbGVjdG9yLCBzZXRTaG93U2VsZWN0b3JdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGN1cnJlbnRMb2NhbGUgPSB1c2VMb2NhbGUoKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IGNoYW5nZUxvY2FsZSA9IChsb2NhbGU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyb3V0ZXIuYXNQYXRoLnJlcGxhY2UoYC8ke2N1cnJlbnRMb2NhbGV9L2AsIGAvJHtsb2NhbGV9L2ApKTtcbiAgICAgICAgcm91dGVyLnB1c2goPHJvdXRlciBjbGFzc05hbWU9XCJhc1BcIj48L3JvdXRlcj4ucmVwbGFjZShgLyR7Y3VycmVudExvY2FsZX0vYCwgYC8ke2xvY2FsZX0vYCkpO1xuICAgICAgICBzZXRTaG93U2VsZWN0b3IoZmFsc2UpO1xuICAgIH0gXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD4gICAgICAgXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxvY2FsZS1zZWxlY3RvclwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dTZWxlY3Rvcighc2hvd1NlbGVjdG9yKX0+XG4gICAgICAgICAgICAgICAgPENpcmNsZUZsYWcgY291bnRyeUNvZGU9e2N1cnJlbnRMb2NhbGV9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHtzaG93U2VsZWN0b3IgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYWxlLXNlbGVjdG9yX19kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENpcmNsZUZsYWcgY291bnRyeUNvZGU9e1wiZXNcIn0gb25DbGljaz17KCkgPT4gY2hhbmdlTG9jYWxlKFwiZXNcIil9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2lyY2xlRmxhZyBjb3VudHJ5Q29kZT17XCJnYlwifSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VMb2NhbGUoXCJlblwiKX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhbGUtc2VsZWN0b3JfX2JhY2tncm91bmRcIiAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhbGVTZWxlY3RvcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=