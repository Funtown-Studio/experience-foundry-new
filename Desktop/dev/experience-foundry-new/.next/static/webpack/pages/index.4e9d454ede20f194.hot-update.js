"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements_BackToTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/BackToTop */ \"./components/elements/BackToTop.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ \"./components/layout/Footer.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"./components/layout/Header.js\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sidebar */ \"./components/layout/Sidebar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Layout = (param)=>{\n    let { children, headerStyle } = param;\n    _s();\n    const [openClass, setOpenClass] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleOpen = ()=>{\n        document.body.classList.add(\"mobile-menu-active\");\n        setOpenClass(\"sidebar-visible\");\n    };\n    const handleRemove = ()=>{\n        if (openClass === \"sidebar-visible\") {\n            setOpenClass(\"\");\n            document.body.classList.remove(\"mobile-menu-active\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: openClass && \"body-overlay-1\",\n                onClick: handleRemove\n            }, void 0, false, {\n                fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/Layout.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                handleOpen: handleOpen,\n                headerStyle: headerStyle\n            }, void 0, false, {\n                fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/Layout.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sidebar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                openClass: openClass\n            }, void 0, false, {\n                fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/Layout.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"main\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/Layout.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_BackToTop__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/Layout.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/Layout.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Layout, \"+TrzOYkJOvtRlGbOPi1eE/JVTGQ=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUM7QUFDYTtBQUNoQjtBQUNBO0FBQ0U7QUFFaEMsTUFBTUssU0FBUztRQUFDLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFOztJQUNyQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFFM0MsTUFBTVUsYUFBYTtRQUNmQyxTQUFTQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1FBQzVCTCxhQUFhO0lBQ2pCO0lBRUEsTUFBTU0sZUFBZTtRQUNqQixJQUFJUCxjQUFjLG1CQUFtQjtZQUNqQ0MsYUFBYTtZQUNiRSxTQUFTQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0csTUFBTSxDQUFDO1FBQ25DO0lBQ0o7SUFDQSxxQkFDSTs7MEJBQ0ksOERBQUNDO2dCQUFLQyxXQUFXVixhQUFhO2dCQUFrQlcsU0FBU0o7Ozs7OzswQkFFekQsOERBQUNaLCtDQUFNQTtnQkFBQ08sWUFBWUE7Z0JBQVlILGFBQWFBOzs7Ozs7MEJBQzdDLDhEQUFDSCxnREFBT0E7Z0JBQUNJLFdBQVdBOzs7Ozs7MEJBQ3BCLDhEQUFDWTtnQkFBS0YsV0FBVTswQkFDWFo7Ozs7OzswQkFFTCw4REFBQ0wsMkRBQVNBOzs7OzswQkFDViw4REFBQ0MsK0NBQU1BOzs7Ozs7O0FBR25CO0dBM0JNRztLQUFBQTtBQTZCTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanM/YzBmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhY2tUb1RvcCBmcm9tIFwiLi4vZWxlbWVudHMvQmFja1RvVG9wXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL1NpZGViYXJcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBoZWFkZXJTdHlsZSB9KSA9PiB7XHJcbiAgICBjb25zdCBbb3BlbkNsYXNzLCBzZXRPcGVuQ2xhc3NdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLW1lbnUtYWN0aXZlXCIpO1xyXG4gICAgICAgIHNldE9wZW5DbGFzcyhcInNpZGViYXItdmlzaWJsZVwiKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlbW92ZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAob3BlbkNsYXNzID09PSBcInNpZGViYXItdmlzaWJsZVwiKSB7XHJcbiAgICAgICAgICAgIHNldE9wZW5DbGFzcyhcIlwiKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGUtbWVudS1hY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e29wZW5DbGFzcyAmJiBcImJvZHktb3ZlcmxheS0xXCJ9IG9uQ2xpY2s9e2hhbmRsZVJlbW92ZX0gLz5cclxuXHJcbiAgICAgICAgICAgIDxIZWFkZXIgaGFuZGxlT3Blbj17aGFuZGxlT3Blbn0gaGVhZGVyU3R5bGU9e2hlYWRlclN0eWxlfSAvPlxyXG4gICAgICAgICAgICA8U2lkZWJhciBvcGVuQ2xhc3M9e29wZW5DbGFzc30gLz5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDxCYWNrVG9Ub3AvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQmFja1RvVG9wIiwiRm9vdGVyIiwiSGVhZGVyIiwiU2lkZWJhciIsIkxheW91dCIsImNoaWxkcmVuIiwiaGVhZGVyU3R5bGUiLCJvcGVuQ2xhc3MiLCJzZXRPcGVuQ2xhc3MiLCJoYW5kbGVPcGVuIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwiaGFuZGxlUmVtb3ZlIiwicmVtb3ZlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Layout.js\n"));

/***/ })

});