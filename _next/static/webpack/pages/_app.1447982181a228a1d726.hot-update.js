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
    router.push(router.pathname.replace("/".concat(currentLocale, "/"), "/".concat(locale, "/")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xvY2FsZVNlbGVjdG9yL0xvY2FsZVNlbGVjdG9yLnRzeCJdLCJuYW1lcyI6WyJMb2NhbGVTZWxlY3RvciIsIlJlYWN0Iiwic2hvd1NlbGVjdG9yIiwic2V0U2hvd1NlbGVjdG9yIiwiY3VycmVudExvY2FsZSIsInVzZUxvY2FsZSIsInJvdXRlciIsInVzZVJvdXRlciIsImNoYW5nZUxvY2FsZSIsImxvY2FsZSIsImNvbnNvbGUiLCJsb2ciLCJhc1BhdGgiLCJyZXBsYWNlIiwicHVzaCIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsY0FBd0IsR0FBRyxTQUEzQkEsY0FBMkIsR0FBTTtBQUFBOztBQUFBLHdCQUNLQyw4Q0FBQSxDQUFlLEtBQWYsQ0FETDtBQUFBO0FBQUEsTUFDNUJDLFlBRDRCO0FBQUEsTUFDZEMsZUFEYzs7QUFFbkMsTUFBTUMsYUFBYSxHQUFHQyxxRUFBUyxFQUEvQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFvQjtBQUNyQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlMLE1BQU0sQ0FBQ00sTUFBUCxDQUFjQyxPQUFkLFlBQTBCVCxhQUExQixtQkFBZ0RLLE1BQWhELE9BQVo7QUFDQUgsVUFBTSxDQUFDUSxJQUFQLENBQVlSLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQkYsT0FBaEIsWUFBNEJULGFBQTVCLG1CQUFrREssTUFBbEQsT0FBWjtBQUNBTixtQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNILEdBSkQ7O0FBS0Esc0JBQ0k7QUFBQSw0QkFDSTtBQUFRLGVBQVMsRUFBQyxpQkFBbEI7QUFBb0MsYUFBTyxFQUFFO0FBQUEsZUFBTUEsZUFBZSxDQUFDLENBQUNELFlBQUYsQ0FBckI7QUFBQSxPQUE3QztBQUFBLDZCQUNJLHFFQUFDLDZEQUFEO0FBQVksbUJBQVcsRUFBRUU7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUlLRixZQUFZLGlCQUNUO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQUEsZ0NBQ0kscUVBQUMsNkRBQUQ7QUFBWSxxQkFBVyxFQUFFLElBQXpCO0FBQStCLGlCQUFPLEVBQUU7QUFBQSxtQkFBTU0sWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUkscUVBQUMsNkRBQUQ7QUFBWSxxQkFBVyxFQUFFLElBQXpCO0FBQStCLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUEsWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBS0k7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKO0FBQUEsb0JBTFI7QUFBQSxrQkFESjtBQWdCSCxDQTFCRDs7R0FBTVIsYztVQUVvQkssNkQsRUFDUEUscUQ7OztLQUhiUCxjO0FBNEJTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjE0NDc5ODIxODFhMjI4YTFkNzI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tIFwiaTE4bi9Mb2NhbGVQcm92aWRlclwiO1xuaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tIFwicmVhY3QtYnVsbWEtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQ2lyY2xlRmxhZyB9IGZyb20gXCJyZWFjdC1jaXJjbGUtZmxhZ3NcIjtcblxuY29uc3QgTG9jYWxlU2VsZWN0b3I6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzaG93U2VsZWN0b3IsIHNldFNob3dTZWxlY3Rvcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgY3VycmVudExvY2FsZSA9IHVzZUxvY2FsZSgpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgY2hhbmdlTG9jYWxlID0gKGxvY2FsZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvdXRlci5hc1BhdGgucmVwbGFjZShgLyR7Y3VycmVudExvY2FsZX0vYCwgYC8ke2xvY2FsZX0vYCkpO1xuICAgICAgICByb3V0ZXIucHVzaChyb3V0ZXIucGF0aG5hbWUucmVwbGFjZShgLyR7Y3VycmVudExvY2FsZX0vYCwgYC8ke2xvY2FsZX0vYCkpO1xuICAgICAgICBzZXRTaG93U2VsZWN0b3IoZmFsc2UpO1xuICAgIH0gXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD4gICAgICAgXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxvY2FsZS1zZWxlY3RvclwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dTZWxlY3Rvcighc2hvd1NlbGVjdG9yKX0+XG4gICAgICAgICAgICAgICAgPENpcmNsZUZsYWcgY291bnRyeUNvZGU9e2N1cnJlbnRMb2NhbGV9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHtzaG93U2VsZWN0b3IgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYWxlLXNlbGVjdG9yX19kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENpcmNsZUZsYWcgY291bnRyeUNvZGU9e1wiZXNcIn0gb25DbGljaz17KCkgPT4gY2hhbmdlTG9jYWxlKFwiZXNcIil9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2lyY2xlRmxhZyBjb3VudHJ5Q29kZT17XCJnYlwifSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VMb2NhbGUoXCJlblwiKX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhbGUtc2VsZWN0b3JfX2JhY2tncm91bmRcIiAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhbGVTZWxlY3RvcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=