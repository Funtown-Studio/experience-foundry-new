"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/neuro-emote",{

/***/ "./components/elements/ArrowDown.js":
/*!******************************************!*\
  !*** ./components/elements/ArrowDown.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* eslint-disable react/no-unescaped-entities */ \nvar _s = $RefreshSig$();\n\nfunction ArrowDown() {\n    _s();\n    const [hasScrolled, setHasScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"false\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", onScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", onScroll);\n        };\n    });\n    // const scrollToTop = () => {\n    //     window.scrollTo({ top: 0, behavior: \"smooth\" });\n    // };\n    const onScroll = ()=>{\n        if (window.scrollY > 100 && !hasScrolled) {\n            setHasScrolled(true);\n        } else if (window.scrollY < 100 && hasScrolled) {\n            setHasScrolled(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: hasScrolled && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            id: \"scrollDown\",\n            href: \"#second-section\",\n            style: {\n                position: \"fixed\",\n                zIndex: 2147483647\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: \"icon-arrow-down\"\n            }, void 0, false, {\n                fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/elements/ArrowDown.js\",\n                lineNumber: 29,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/elements/ArrowDown.js\",\n            lineNumber: 28,\n            columnNumber: 17\n        }, this)\n    }, void 0, false);\n}\n_s(ArrowDown, \"VGIiQJuou1aHsi0J1GOdlfsV3qU=\");\n_c = ArrowDown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArrowDown);\nvar _c;\n$RefreshReg$(_c, \"ArrowDown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2VsZW1lbnRzL0Fycm93RG93bi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUE4Qzs7QUFDRjtBQUU1QyxTQUFTRTs7SUFDTCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0gsK0NBQVFBLENBQUM7SUFDL0NELGdEQUFTQSxDQUFDO1FBQ05LLE9BQU9DLGdCQUFnQixDQUFDLFVBQVVDO1FBQ2xDLE9BQU87WUFDSEYsT0FBT0csbUJBQW1CLENBQUMsVUFBVUQ7UUFDekM7SUFDSjtJQUVBLDhCQUE4QjtJQUM5Qix1REFBdUQ7SUFDdkQsS0FBSztJQUVMLE1BQU1BLFdBQVc7UUFDYixJQUFJRixPQUFPSSxPQUFPLEdBQUcsT0FBTyxDQUFDTixhQUFhO1lBQ3RDQyxlQUFlO1FBQ25CLE9BQU8sSUFBSUMsT0FBT0ksT0FBTyxHQUFHLE9BQU9OLGFBQWE7WUFDNUNDLGVBQWU7UUFDbkI7SUFDSjtJQUVBLHFCQUNJO2tCQUNLRCw2QkFDRyw4REFBQ087WUFBRUMsSUFBRztZQUFhQyxNQUFLO1lBQWtCQyxPQUFPO2dCQUFFQyxVQUFVO2dCQUFTQyxRQUFRO1lBQVc7c0JBQ3JGLDRFQUFDQztnQkFBRUMsV0FBVTs7Ozs7Ozs7Ozs7O0FBT2pDO0dBaENTZjtLQUFBQTtBQWlDVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2VsZW1lbnRzL0Fycm93RG93bi5qcz83ZGEwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVuZXNjYXBlZC1lbnRpdGllcyAqL1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBBcnJvd0Rvd24oKSB7XHJcbiAgICBjb25zdCBbaGFzU2Nyb2xsZWQsIHNldEhhc1Njcm9sbGVkXSA9IHVzZVN0YXRlKFwiZmFsc2VcIik7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDEwMCAmJiAhaGFzU2Nyb2xsZWQpIHtcclxuICAgICAgICAgICAgc2V0SGFzU2Nyb2xsZWQodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuc2Nyb2xsWSA8IDEwMCAmJiBoYXNTY3JvbGxlZCkge1xyXG4gICAgICAgICAgICBzZXRIYXNTY3JvbGxlZChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtoYXNTY3JvbGxlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YSBpZD1cInNjcm9sbERvd25cIiBocmVmPVwiI3NlY29uZC1zZWN0aW9uXCIgc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcsIHpJbmRleDogMjE0NzQ4MzY0NyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWFycm93LWRvd25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFycm93RG93bjsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcnJvd0Rvd24iLCJoYXNTY3JvbGxlZCIsInNldEhhc1Njcm9sbGVkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbFkiLCJhIiwiaWQiLCJocmVmIiwic3R5bGUiLCJwb3NpdGlvbiIsInpJbmRleCIsImkiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/elements/ArrowDown.js\n"));

/***/ }),

/***/ "./components/layout/HeroNeuro.js":
/*!****************************************!*\
  !*** ./components/layout/HeroNeuro.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _elements_ArrowDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/ArrowDown */ \"./components/elements/ArrowDown.js\");\n/* eslint-disable @next/next/no-img-element */ \n\n\n\nconst HeroNeuro = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"section-box\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"banner-neuro neuro-main gradient-bg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"clouds-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/assets/imgs/page/neuro/cloudneuro.png\",\n                            alt: \"Clouds\",\n                            layout: \"fill\",\n                            objectFit: \"cover\"\n                        }, void 0, false, {\n                            fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n                            lineNumber: 12,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ml-50\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"image-overlay\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: \"/assets/imgs/page/neuro/brainbulb.svg\",\n                                            alt: \"NeuroEmote Logo\",\n                                            width: 500,\n                                            height: 500\n                                        }, void 0, false, {\n                                            fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n                                            lineNumber: 17,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: \"/assets/imgs/page/neuro/neuroemote.svg\",\n                                            alt: \"NeuroEmote Logo\",\n                                            width: 500,\n                                            height: 500\n                                        }, void 0, false, {\n                                            fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n                                            lineNumber: 18,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-50 text-center mb-200\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        legacyBehavior: true,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_ArrowDown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n                                                lineNumber: 23,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"btn icon-arrow-down color-gray-900 ml-20 btn-mb mb-15\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n                                                lineNumber: 24,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n                                        lineNumber: 22,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n                            lineNumber: 15,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n                        lineNumber: 14,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-6 col-sm-6 col-12\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-heading-2 mb-50\",\n                                        children: \"What is it?\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-6 col-sm-6 col-12\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mb-20\",\n                                            children: \"Our EEG Classification Framework uses advanced signal processing and pattern-matching software to analyze electroencephalogram (EEG) data. Classifying the brain's neuro-electrical signals allows us to repeatedly measure how the brain responds to various stimuli, such as products, user interfaces, or stories.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Until recently, bulky equipment and primitive neuro- processing software kept EEG analysis within the confines of academic or clinical laboratories. NeuroEmote combines portable and user-friendly EEG brain activity monitoring with advanced software, delivering insights on emotional response collected in your product's natural environment.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 34\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n                            lineNumber: 30,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n                lineNumber: 10,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/catherinewhitehead/Desktop/dev/experience-foundry-new/components/layout/HeroNeuro.js\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_c = HeroNeuro;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroNeuro);\nvar _c;\n$RefreshReg$(_c, \"HeroNeuro\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9IZXJvTmV1cm8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw0Q0FBNEM7QUFDZjtBQUNFO0FBQ2U7QUFFOUMsTUFBTUcsWUFBWTtJQUNkLHFCQUNJO2tCQUNJLDRFQUFDQztZQUFRQyxXQUFVO3NCQUNmLDRFQUFDQztnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNYLDRFQUFDSixtREFBS0E7NEJBQUNNLEtBQUk7NEJBQXlDQyxLQUFJOzRCQUFTQyxRQUFPOzRCQUFPQyxXQUFVOzs7Ozs7Ozs7OztrQ0FFN0YsOERBQUNKO3dCQUFJRCxXQUFVO2tDQUNYLDRFQUFDQzs0QkFBSUQsV0FBVTs7OENBQ1gsOERBQUNDO29DQUFJRCxXQUFVOztzREFDWCw4REFBQ0osbURBQUtBOzRDQUFDTSxLQUFJOzRDQUF3Q0MsS0FBSTs0Q0FBa0JHLE9BQU87NENBQUtDLFFBQVE7Ozs7OztzREFDN0YsOERBQUNYLG1EQUFLQTs0Q0FBQ00sS0FBSTs0Q0FBeUNDLEtBQUk7NENBQWtCRyxPQUFPOzRDQUFLQyxRQUFROzs7Ozs7Ozs7Ozs7OENBR2xHLDhEQUFDTjtvQ0FBSUQsV0FBVTs4Q0FDWCw0RUFBQ0wsa0RBQUlBO3dDQUFDYSxNQUFLO3dDQUFJQyxjQUFjOzswREFDekIsOERBQUNaLDJEQUFTQTs7Ozs7MERBQ1YsOERBQUNhO2dEQUFFVixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUs3Qiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ1gsNEVBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDWCw4REFBQ0M7b0NBQUlELFdBQVU7OENBQ1gsNEVBQUNXO3dDQUFHWCxXQUFVO2tEQUF1Qjs7Ozs7Ozs7Ozs7OENBR3pDLDhEQUFDQztvQ0FBSUQsV0FBVTs7c0RBQ1gsOERBQUNZOzRDQUFFWixXQUFVO3NEQUFROzs7Ozs7c0RBSXBCLDhEQUFDWTtzREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZcEM7S0E5Q01kO0FBZ0ROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L0hlcm9OZXVyby5qcz81YzBkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBBcnJvd0Rvd24gZnJvbSBcIi4uL2VsZW1lbnRzL0Fycm93RG93blwiO1xyXG5cclxuY29uc3QgSGVyb05ldXJvID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItbmV1cm8gbmV1cm8tbWFpbiBncmFkaWVudC1iZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvdWRzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Fzc2V0cy9pbWdzL3BhZ2UvbmV1cm8vY2xvdWRuZXVyby5wbmdcIiBhbHQ9XCJDbG91ZHNcIiBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY292ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvYXNzZXRzL2ltZ3MvcGFnZS9uZXVyby9icmFpbmJ1bGIuc3ZnXCIgYWx0PVwiTmV1cm9FbW90ZSBMb2dvXCIgd2lkdGg9ezUwMH0gaGVpZ2h0PXs1MDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9hc3NldHMvaW1ncy9wYWdlL25ldXJvL25ldXJvZW1vdGUuc3ZnXCIgYWx0PVwiTmV1cm9FbW90ZSBMb2dvXCIgd2lkdGg9ezUwMH0gaGVpZ2h0PXs1MDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUwIHRleHQtY2VudGVyIG1iLTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgbGVnYWN5QmVoYXZpb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0Rvd24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGljb24tYXJyb3ctZG93biBjb2xvci1ncmF5LTkwMCBtbC0yMCBidG4tbWIgbWItMTVcIj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS02IGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWhlYWRpbmctMiBtYi01MFwiPldoYXQgaXMgaXQ/PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTYgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMjBcIj5PdXIgRUVHIENsYXNzaWZpY2F0aW9uIEZyYW1ld29yayB1c2VzIGFkdmFuY2VkIHNpZ25hbCBwcm9jZXNzaW5nIGFuZCBwYXR0ZXJuLW1hdGNoaW5nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2Z0d2FyZSB0byBhbmFseXplIGVsZWN0cm9lbmNlcGhhbG9ncmFtIChFRUcpIGRhdGEuIENsYXNzaWZ5aW5nIHRoZSBicmFpbidzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXVyby1lbGVjdHJpY2FsIHNpZ25hbHMgYWxsb3dzIHVzIHRvIHJlcGVhdGVkbHkgbWVhc3VyZSBob3cgdGhlIGJyYWluIHJlc3BvbmRzIHRvIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpb3VzIHN0aW11bGksIHN1Y2ggYXMgcHJvZHVjdHMsIHVzZXIgaW50ZXJmYWNlcywgb3Igc3Rvcmllcy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVudGlsIHJlY2VudGx5LCBidWxreSBlcXVpcG1lbnQgYW5kIHByaW1pdGl2ZSBuZXVyby0gcHJvY2Vzc2luZyBzb2Z0d2FyZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2VwdCBFRUcgYW5hbHlzaXMgd2l0aGluIHRoZSBjb25maW5lcyBvZiBhY2FkZW1pYyBvciBjbGluaWNhbCBsYWJvcmF0b3JpZXMuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXVyb0Vtb3RlIGNvbWJpbmVzIHBvcnRhYmxlIGFuZCB1c2VyLWZyaWVuZGx5IEVFRyBicmFpbiBhY3Rpdml0eSBtb25pdG9yaW5nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIGFkdmFuY2VkIHNvZnR3YXJlLCBkZWxpdmVyaW5nIGluc2lnaHRzIG9uIGVtb3Rpb25hbCByZXNwb25zZSBjb2xsZWN0ZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluIHlvdXIgcHJvZHVjdCdzIG5hdHVyYWwgZW52aXJvbm1lbnQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvTmV1cm87XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJBcnJvd0Rvd24iLCJIZXJvTmV1cm8iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3JjIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0Iiwid2lkdGgiLCJoZWlnaHQiLCJocmVmIiwibGVnYWN5QmVoYXZpb3IiLCJhIiwiaDIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/HeroNeuro.js\n"));

/***/ })

});