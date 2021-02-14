webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Layout/Layout.tsx":
/*!******************************************!*\
  !*** ./src/components/Layout/Layout.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bulma_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bulma-components */ "./node_modules/react-bulma-components/dist/index.js");
/* harmony import */ var react_bulma_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bulma_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _NavigationBar_NavigationBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavigationBar/NavigationBar */ "./src/components/Layout/NavigationBar/NavigationBar.tsx");
/* harmony import */ var dark_mode_react_hook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dark-mode-react-hook */ "./node_modules/dark-mode-react-hook/dist/index.js");
/* harmony import */ var dark_mode_react_hook__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dark_mode_react_hook__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _ThemeSelector_ThemeSelector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ThemeSelector/ThemeSelector */ "./src/components/Layout/ThemeSelector/ThemeSelector.tsx");




var _jsxFileName = "/home/fpellicero/projects/fpellicero.github.io/src/components/Layout/Layout.tsx",
    _this = undefined,
    _s = $RefreshSig$();













var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children,
      currentPage = _ref.currentPage;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])(),
      pathname = _useRouter.pathname;

  var _useDarkMode = dark_mode_react_hook__WEBPACK_IMPORTED_MODULE_9___default()({
    exceptions: ["pre"]
  }),
      _useDarkMode2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useDarkMode, 2),
      darkMode = _useDarkMode2[0],
      setDarkMode = _useDarkMode2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1 maximum-scale=1.0, user-scalable=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bulma_components__WEBPACK_IMPORTED_MODULE_4__["Columns"], {
      className: "main-container",
      centered: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bulma_components__WEBPACK_IMPORTED_MODULE_4__["Columns"].Column, {
        className: "main-container__column" // @ts-ignore
        ,
        tablet: {
          size: 10
        },
        widescreen: {
          size: 8
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bulma_components__WEBPACK_IMPORTED_MODULE_4__["Box"], {
          className: "main-container__box",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ThemeSelector_ThemeSelector__WEBPACK_IMPORTED_MODULE_12__["default"], {
            darkMode: darkMode,
            setDarkMode: setDarkMode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_NavigationBar_NavigationBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
            currentPage: currentPage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_11__["AnimatePresence"], {
            initial: false,
            exitBeforeEnter: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
              className: "main-container__content",
              initial: {
                opacity: 0,
                translateY: 25
              },
              animate: {
                opacity: 1,
                translateY: 0
              },
              exit: {
                opacity: 0,
                translateY: 25
              },
              transition: {
                ease: "easeInOut",
                duration: .3
              },
              children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bulma_components__WEBPACK_IMPORTED_MODULE_4__["Footer"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bulma_components__WEBPACK_IMPORTED_MODULE_4__["Content"], {
                  textAlignment: "centered",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    children: ["Built with ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faHeart"],
                      width: "1rem"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 56
                    }, _this), " ", "with", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                      href: "https://nextjs.org/",
                      target: "_blank",
                      children: "NextJS"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 45
                    }, _this), " ", "and", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                      href: "https://bulma.io",
                      target: "_blank",
                      children: "Bulma.io"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    children: ["You can check the source for this page on", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                      href: "https://github.com/fpellicero/fpellicero.github.io",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGithub"],
                        width: "1rem"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 71,
                        columnNumber: 49
                      }, _this), " Github"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 33
              }, _this)]
            }, "layout-".concat(pathname), true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Layout, "PdMoW7FckucLI6KsJi2SWkUG4uY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"], dark_mode_react_hook__WEBPACK_IMPORTED_MODULE_9___default.a];
});

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3giXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJjdXJyZW50UGFnZSIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwidXNlRGFya01vZGUiLCJleGNlcHRpb25zIiwiZGFya01vZGUiLCJzZXREYXJrTW9kZSIsInNpemUiLCJvcGFjaXR5IiwidHJhbnNsYXRlWSIsImVhc2UiLCJkdXJhdGlvbiIsImZhSGVhcnQiLCJmYUdpdGh1YiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLElBQU1BLE1BQThCLEdBQUcsU0FBakNBLE1BQWlDLE9BQTZDO0FBQUE7O0FBQUEsTUFBMUNDLFFBQTBDLFFBQTFDQSxRQUEwQztBQUFBLE1BQWhDQyxXQUFnQyxRQUFoQ0EsV0FBZ0M7O0FBQUEsbUJBQzNEQyw4REFBUyxFQURrRDtBQUFBLE1BQ3hFQyxRQUR3RSxjQUN4RUEsUUFEd0U7O0FBQUEscUJBRWhEQywyREFBVyxDQUFDO0FBQUNDLGNBQVUsRUFBRSxDQUFDLEtBQUQ7QUFBYixHQUFELENBRnFDO0FBQUE7QUFBQSxNQUV6RUMsUUFGeUU7QUFBQSxNQUUvREMsV0FGK0Q7O0FBR2hGLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDSTtBQUNJLFlBQUksRUFBQyxVQURUO0FBRUksZUFBTyxFQUFDO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU9JLHFFQUFDLDhEQUFEO0FBQVMsZUFBUyxFQUFDLGdCQUFuQjtBQUFvQyxjQUFRLEVBQUUsSUFBOUM7QUFBQSw2QkFDSSxxRUFBQyw4REFBRCxDQUFTLE1BQVQ7QUFDSSxpQkFBUyxFQUFDLHdCQURkLENBRUk7QUFGSjtBQUdJLGNBQU0sRUFBRTtBQUFFQyxjQUFJLEVBQUU7QUFBUixTQUhaO0FBSUksa0JBQVUsRUFBRTtBQUFFQSxjQUFJLEVBQUU7QUFBUixTQUpoQjtBQUFBLCtCQU1JLHFFQUFDLDBEQUFEO0FBQUssbUJBQVMsRUFBQyxxQkFBZjtBQUFBLGtDQUNJLHFFQUFDLHFFQUFEO0FBQWUsb0JBQVEsRUFBRUYsUUFBekI7QUFBbUMsdUJBQVcsRUFBRUM7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLHFFQUFDLG9FQUFEO0FBQWUsdUJBQVcsRUFBRU47QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJLHFFQUFDLDhEQUFEO0FBQWlCLG1CQUFPLEVBQUUsS0FBMUI7QUFBaUMsMkJBQWUsRUFBRSxJQUFsRDtBQUFBLG1DQUNJLHFFQUFDLHFEQUFELENBQVEsR0FBUjtBQUVJLHVCQUFTLEVBQUUseUJBRmY7QUFHSSxxQkFBTyxFQUFFO0FBQUVRLHVCQUFPLEVBQUUsQ0FBWDtBQUFjQywwQkFBVSxFQUFFO0FBQTFCLGVBSGI7QUFJSSxxQkFBTyxFQUFFO0FBQUVELHVCQUFPLEVBQUUsQ0FBWDtBQUFjQywwQkFBVSxFQUFFO0FBQTFCLGVBSmI7QUFLSSxrQkFBSSxFQUFFO0FBQUVELHVCQUFPLEVBQUUsQ0FBWDtBQUFjQywwQkFBVSxFQUFFO0FBQTFCLGVBTFY7QUFNSSx3QkFBVSxFQUFFO0FBQUVDLG9CQUFJLEVBQUUsV0FBUjtBQUFxQkMsd0JBQVEsRUFBRTtBQUEvQixlQU5oQjtBQUFBLHlCQVNLWixRQVRMLGVBVUkscUVBQUMsNkRBQUQ7QUFBQSx1Q0FDSSxxRUFBQyw4REFBRDtBQUFTLCtCQUFhLEVBQUMsVUFBdkI7QUFBQSwwQ0FDSTtBQUFBLDJEQUNlLHFFQUFDLDhFQUFEO0FBQWlCLDBCQUFJLEVBQUVhLHlFQUF2QjtBQUFnQywyQkFBSyxFQUFDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRGYsRUFDK0QsR0FEL0QsVUFFQyxHQUZELGVBR0k7QUFDSSwwQkFBSSxFQUFDLHFCQURUO0FBRUksNEJBQU0sRUFBQyxRQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUhKLEVBUUMsR0FSRCxTQVNBLEdBVEEsZUFVSTtBQUFHLDBCQUFJLEVBQUMsa0JBQVI7QUFBMkIsNEJBQU0sRUFBQyxRQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosZUFlSTtBQUFBLDRFQUM4QyxHQUQ5QyxlQUVJO0FBQUcsMEJBQUksRUFBQyxvREFBUjtBQUFBLDhDQUNJLHFFQUFDLDhFQUFEO0FBQWlCLDRCQUFJLEVBQUVDLDJFQUF2QjtBQUFpQyw2QkFBSyxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZKO0FBQUEsZ0NBQ21CWCxRQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBKO0FBQUEsa0JBREo7QUE2REgsQ0FoRUQ7O0dBQU1KLE07VUFDbUJHLHNELEVBQ1dFLDJEOzs7S0FGOUJMLE07QUFtRVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzc4ODQ5MjZhZmI0Mzc4NDFkYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEJveCwgQ29sdW1ucywgRm9vdGVyLCBDb250ZW50IH0gZnJvbSBcInJlYWN0LWJ1bG1hLWNvbXBvbmVudHNcIlxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFIZWFydCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IGZhR2l0aHViIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gXCIuL05hdmlnYXRpb25CYXIvTmF2aWdhdGlvbkJhclwiXG5pbXBvcnQgeyBFUGFnZXMgfSBmcm9tIFwidXRpbHMvRVBhZ2VzXCJcbmltcG9ydCB1c2VEYXJrTW9kZSBmcm9tIFwiZGFyay1tb2RlLXJlYWN0LWhvb2tcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBBbmltYXRlU2hhcmVkTGF5b3V0LCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IFRoZW1lU2VsZWN0b3IgZnJvbSBcIi4vVGhlbWVTZWxlY3Rvci9UaGVtZVNlbGVjdG9yXCI7XG5cblxuaW50ZXJmYWNlIElMYXlvdXRQcm9wcyB7XG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgICBjdXJyZW50UGFnZTogRVBhZ2VzO1xufVxuXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZDPElMYXlvdXRQcm9wcz4gPSAoeyBjaGlsZHJlbiwgY3VycmVudFBhZ2UgfTogSUxheW91dFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSB1c2VEYXJrTW9kZSh7ZXhjZXB0aW9uczogW1wicHJlXCJdfSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT1ub1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxDb2x1bW5zIGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCIgY2VudGVyZWQ9e3RydWV9PlxuICAgICAgICAgICAgICAgIDxDb2x1bW5zLkNvbHVtblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lcl9fY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICB0YWJsZXQ9e3sgc2l6ZTogMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgd2lkZXNjcmVlbj17eyBzaXplOiA4IH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyX19ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVNlbGVjdG9yIGRhcmtNb2RlPXtkYXJrTW9kZX0gc2V0RGFya01vZGU9e3NldERhcmtNb2RlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25CYXIgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0gZXhpdEJlZm9yZUVudGVyPXt0cnVlfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgbGF5b3V0LSR7cGF0aG5hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcIm1haW4tY29udGFpbmVyX19jb250ZW50XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgdHJhbnNsYXRlWTogMjUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB0cmFuc2xhdGVZOiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgdHJhbnNsYXRlWTogMjUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBlYXNlOiBcImVhc2VJbk91dFwiLCBkdXJhdGlvbjogLjMgfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnQgdGV4dEFsaWdubWVudD1cImNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnVpbHQgd2l0aCA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSGVhcnR9IHdpZHRoPVwiMXJlbVwiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHRKU1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYnVsbWEuaW9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1bG1hLmlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGNhbiBjaGVjayB0aGUgc291cmNlIGZvciB0aGlzIHBhZ2Ugb257XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZnBlbGxpY2Vyby9mcGVsbGljZXJvLmdpdGh1Yi5pb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdpdGh1Yn0gd2lkdGg9XCIxcmVtXCIgLz4gR2l0aHViXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvQ29sdW1ucy5Db2x1bW4+XG4gICAgICAgICAgICA8L0NvbHVtbnM+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXSwic291cmNlUm9vdCI6IiJ9