webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/next/dist/client/image.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/to-base-64.js":
false,

/***/ "./node_modules/next/dist/next-server/server/image-config.js":
false,

/***/ "./node_modules/next/image.js":
false,

/***/ "./src/components/Layout/NavigationBar/NavigationBar.tsx":
/*!***************************************************************!*\
  !*** ./src/components/Layout/NavigationBar/NavigationBar.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bulma_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bulma-components */ "./node_modules/react-bulma-components/dist/index.js");
/* harmony import */ var react_bulma_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bulma_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _profile_image_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile_image.jpg */ "./src/components/Layout/NavigationBar/profile_image.jpg");
/* harmony import */ var _profile_image_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_profile_image_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var utils_EPages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/EPages */ "./src/utils/EPages.ts");



var _jsxFileName = "/home/fpellicero/projects/fpellicero.github.io/src/components/Layout/NavigationBar/NavigationBar.tsx",
    _this = undefined;








var NavigationBar = function NavigationBar(_ref) {
  var currentPage = _ref.currentPage;

  var NavigationItem = function NavigationItem(_ref2) {
    var page = _ref2.page,
        children = _ref2.children;
    var isActive = page === currentPage;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])("navigation-bar__tab", isActive && "is-active"),
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "navigation-bar",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "navigation-bar__logo-wrapper",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bulma_components__WEBPACK_IMPORTED_MODULE_2__["Image"], {
          className: "navigation-bar__logo",
          src: _profile_image_jpg__WEBPACK_IMPORTED_MODULE_3___default.a
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bulma_components__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
        className: "is-centered is-fullwidth",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationItem, {
          page: utils_EPages__WEBPACK_IMPORTED_MODULE_6__["EPages"].AboutMe,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/",
            children: "About me"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationItem, {
          page: utils_EPages__WEBPACK_IMPORTED_MODULE_6__["EPages"].Portfolio,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/portfolio",
            children: "Portfolio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationItem, {
          page: utils_EPages__WEBPACK_IMPORTED_MODULE_6__["EPages"].Blog,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/blog",
            children: "Blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_c = NavigationBar;
/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

var _c;

$RefreshReg$(_c, "NavigationBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L05hdmlnYXRpb25CYXIvTmF2aWdhdGlvbkJhci50c3giXSwibmFtZXMiOlsiTmF2aWdhdGlvbkJhciIsImN1cnJlbnRQYWdlIiwiTmF2aWdhdGlvbkl0ZW0iLCJwYWdlIiwiY2hpbGRyZW4iLCJpc0FjdGl2ZSIsImNsc3giLCJwcm9maWxlSW1hZ2UiLCJFUGFnZXMiLCJBYm91dE1lIiwiUG9ydGZvbGlvIiwiQmxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBTUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUE2QjtBQUFBLE1BQTFCQyxXQUEwQixRQUExQkEsV0FBMEI7O0FBQy9DLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsUUFNakI7QUFBQSxRQUxGQyxJQUtFLFNBTEZBLElBS0U7QUFBQSxRQUpGQyxRQUlFLFNBSkZBLFFBSUU7QUFDRixRQUFNQyxRQUFRLEdBQUdGLElBQUksS0FBS0YsV0FBMUI7QUFDQSx3QkFDSTtBQUNJLGVBQVMsRUFBRUssb0RBQUksQ0FDWCxxQkFEVyxFQUVYRCxRQUFRLElBQUksV0FGRCxDQURuQjtBQUFBLGdCQU1LRDtBQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQVVILEdBbEJEOztBQW9CQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLDhCQUFmO0FBQUEsK0JBQ0kscUVBQUMsNERBQUQ7QUFDSSxtQkFBUyxFQUFDLHNCQURkO0FBRUksYUFBRyxFQUFFRyx5REFBWUE7QUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQU9JLHFFQUFDLDJEQUFEO0FBQU0saUJBQVMsRUFBQywwQkFBaEI7QUFBQSxnQ0FDSSxxRUFBQyxjQUFEO0FBQWdCLGNBQUksRUFBRUMsbURBQU0sQ0FBQ0MsT0FBN0I7QUFBQSxpQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFJSSxxRUFBQyxjQUFEO0FBQWdCLGNBQUksRUFBRUQsbURBQU0sQ0FBQ0UsU0FBN0I7QUFBQSxpQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUMsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosZUFPSSxxRUFBQyxjQUFEO0FBQWdCLGNBQUksRUFBRUYsbURBQU0sQ0FBQ0csSUFBN0I7QUFBQSxpQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUF1QkgsQ0E1Q0Q7O0tBQU1YLGE7QUE4Q1NBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjBhZDA1YjJkNTI4M2U2ZjMzZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBJbWFnZSwgVGFicyB9IGZyb20gXCJyZWFjdC1idWxtYS1jb21wb25lbnRzXCJcbmltcG9ydCBwcm9maWxlSW1hZ2UgZnJvbSBcIi4vcHJvZmlsZV9pbWFnZS5qcGdcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiXG5pbXBvcnQgeyBFUGFnZXMgfSBmcm9tIFwidXRpbHMvRVBhZ2VzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGN1cnJlbnRQYWdlOiBFUGFnZXM7XG59XG5cbmNvbnN0IE5hdmlnYXRpb25CYXIgPSAoeyBjdXJyZW50UGFnZSB9OiBJUHJvcHMpID0+IHtcbiAgICBjb25zdCBOYXZpZ2F0aW9uSXRlbSA9ICh7XG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgIH06IHtcbiAgICAgICAgcGFnZTogRVBhZ2VzXG4gICAgICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgICB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gcGFnZSA9PT0gY3VycmVudFBhZ2U7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgICAgIFwibmF2aWdhdGlvbi1iYXJfX3RhYlwiLFxuICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSAmJiBcImlzLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1iYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tYmFyX19sb2dvLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWJhcl9fbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2ZpbGVJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8VGFicyBjbGFzc05hbWU9XCJpcy1jZW50ZXJlZCBpcy1mdWxsd2lkdGhcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25JdGVtIHBhZ2U9e0VQYWdlcy5BYm91dE1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+QWJvdXQgbWU8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uSXRlbSBwYWdlPXtFUGFnZXMuUG9ydGZvbGlvfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCI+UG9ydGZvbGlvPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkl0ZW0gcGFnZT17RVBhZ2VzLkJsb2d9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+QmxvZzwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uSXRlbT5cbiAgICAgICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQmFyXG4iXSwic291cmNlUm9vdCI6IiJ9