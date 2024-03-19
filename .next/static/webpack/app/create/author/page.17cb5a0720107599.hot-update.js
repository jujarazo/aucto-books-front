"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/create/author/page",{

/***/ "(app-pages-browser)/./src/components/forms/author.tsx":
/*!*****************************************!*\
  !*** ./src/components/forms/author.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateAuthorForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/.pnpm/react-hook-form@7.51.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/.pnpm/zod@3.22.4/node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/.pnpm/@hookform+resolvers@3.3.4_react-hook-form@7.51.1/node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/form */ \"(app-pages-browser)/./src/components/ui/form.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst authorSchema = zod__WEBPACK_IMPORTED_MODULE_5__.z.object({\n    name: zod__WEBPACK_IMPORTED_MODULE_5__.z.string().min(2, {\n        message: \"Author name must be at least 2 characters long.\"\n    }).max(100, {\n        message: \"Author name must be shorter than 100 characters long\"\n    })\n});\nconst NameFormField = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormItem, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                children: \"Author's Name\"\n            }, void 0, false, {\n                fileName: \"/Users/julianjarazo/APIS/aucto-books-front/src/components/forms/author.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                    placeholder: \"Ex. Brandon Sanderson\",\n                    ...props\n                }, void 0, false, {\n                    fileName: \"/Users/julianjarazo/APIS/aucto-books-front/src/components/forms/author.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/julianjarazo/APIS/aucto-books-front/src/components/forms/author.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormDescription, {\n                children: \"This is the author's name as it will appear on the site.\"\n            }, void 0, false, {\n                fileName: \"/Users/julianjarazo/APIS/aucto-books-front/src/components/forms/author.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormMessage, {}, void 0, false, {\n                fileName: \"/Users/julianjarazo/APIS/aucto-books-front/src/components/forms/author.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/julianjarazo/APIS/aucto-books-front/src/components/forms/author.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NameFormField;\nfunction CreateAuthorForm(field) {\n    _s();\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__.zodResolver)(authorSchema),\n        defaultValues: {\n            name: \"\"\n        }\n    });\n    const onSubmit = (values)=>{\n        console.log(values);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_form__WEBPACK_IMPORTED_MODULE_3__.Form, {\n        ...form,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: form.handleSubmit(onSubmit),\n            className: \"space-y-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormField, {\n                    control: form.control,\n                    name: \"name\",\n                    render: (param)=>{\n                        let { field } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NameFormField, {\n                            ...field\n                        }, void 0, false, {\n                            fileName: \"/Users/julianjarazo/APIS/aucto-books-front/src/components/forms/author.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 34\n                        }, void 0);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/julianjarazo/APIS/aucto-books-front/src/components/forms/author.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    type: \"submit\",\n                    children: \"Create author\"\n                }, void 0, false, {\n                    fileName: \"/Users/julianjarazo/APIS/aucto-books-front/src/components/forms/author.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/julianjarazo/APIS/aucto-books-front/src/components/forms/author.tsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/julianjarazo/APIS/aucto-books-front/src/components/forms/author.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateAuthorForm, \"woqMTX6igxsX6/9vX4dQZlxR7yY=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm\n    ];\n});\n_c1 = CreateAuthorForm;\nvar _c, _c1;\n$RefreshReg$(_c, \"NameFormField\");\n$RefreshReg$(_c1, \"CreateAuthorForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Zvcm1zL2F1dGhvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUU4QztBQUNtQjtBQUN6QztBQUM4QjtBQVNsQztBQUNrQjtBQUV0QyxNQUFNWSxlQUFlVixrQ0FBQ0EsQ0FBQ1csTUFBTSxDQUFDO0lBQzVCQyxNQUFNWixrQ0FBQ0EsQ0FDSmEsTUFBTSxHQUNOQyxHQUFHLENBQUMsR0FBRztRQUNOQyxTQUFTO0lBQ1gsR0FDQ0MsR0FBRyxDQUFDLEtBQUs7UUFDUkQsU0FBUztJQUNYO0FBQ0o7QUFFQSxNQUFNRSxnQkFBZ0IsQ0FDcEJDO0lBT0EscUJBQ0UsOERBQUNaLDhDQUFRQTs7MEJBQ1AsOERBQUNDLCtDQUFTQTswQkFBQzs7Ozs7OzBCQUNYLDhEQUFDSixpREFBV0E7MEJBQ1YsNEVBQUNMLHVEQUFLQTtvQkFBQ3FCLGFBQVk7b0JBQXlCLEdBQUdELEtBQUs7Ozs7Ozs7Ozs7OzBCQUV0RCw4REFBQ2QscURBQWVBOzBCQUFDOzs7Ozs7MEJBR2pCLDhEQUFDSSxpREFBV0E7Ozs7Ozs7Ozs7O0FBR2xCO0tBcEJNUztBQXNCUyxTQUFTRyxpQkFDdEJDLEtBS0M7O0lBRUQsTUFBTUMsT0FBT3ZCLHdEQUFPQSxDQUErQjtRQUNqRHdCLFVBQVV0QixvRUFBV0EsQ0FBQ1M7UUFDdEJjLGVBQWU7WUFDYlosTUFBTTtRQUNSO0lBQ0Y7SUFFQSxNQUFNYSxXQUFXLENBQUNDO1FBQ2hCQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ3hCLDBDQUFJQTtRQUFFLEdBQUdvQixJQUFJO2tCQUNaLDRFQUFDQTtZQUFLRyxVQUFVSCxLQUFLTyxZQUFZLENBQUNKO1lBQVdLLFdBQVU7OzhCQUNyRCw4REFBQ3pCLCtDQUFTQTtvQkFDUjBCLFNBQVNULEtBQUtTLE9BQU87b0JBQ3JCbkIsTUFBSztvQkFDTG9CLFFBQVE7NEJBQUMsRUFBRVgsS0FBSyxFQUFFOzZDQUFLLDhEQUFDSjs0QkFBZSxHQUFHSSxLQUFLOzs7Ozs7Ozs7Ozs7OEJBRWpELDhEQUFDWiw4Q0FBTUE7b0JBQUN3QixNQUFLOzhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QjtHQS9Cd0JiOztRQVFUckIsb0RBQU9BOzs7TUFSRXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Zvcm1zL2F1dGhvci50c3g/MDc2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2lucHV0JztcbmltcG9ydCB7IENvbnRyb2xsZXJSZW5kZXJQcm9wcywgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcbmltcG9ydCB7IHpvZFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy96b2QnO1xuaW1wb3J0IHtcbiAgRm9ybSxcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1EZXNjcmlwdGlvbixcbiAgRm9ybUZpZWxkLFxuICBGb3JtSXRlbSxcbiAgRm9ybUxhYmVsLFxuICBGb3JtTWVzc2FnZSxcbn0gZnJvbSAnLi4vdWkvZm9ybSc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi91aS9idXR0b24nO1xuXG5jb25zdCBhdXRob3JTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHpcbiAgICAuc3RyaW5nKClcbiAgICAubWluKDIsIHtcbiAgICAgIG1lc3NhZ2U6ICdBdXRob3IgbmFtZSBtdXN0IGJlIGF0IGxlYXN0IDIgY2hhcmFjdGVycyBsb25nLicsXG4gICAgfSlcbiAgICAubWF4KDEwMCwge1xuICAgICAgbWVzc2FnZTogJ0F1dGhvciBuYW1lIG11c3QgYmUgc2hvcnRlciB0aGFuIDEwMCBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgIH0pLFxufSk7XG5cbmNvbnN0IE5hbWVGb3JtRmllbGQgPSAoXG4gIHByb3BzOiBDb250cm9sbGVyUmVuZGVyUHJvcHM8XG4gICAge1xuICAgICAgbmFtZTogc3RyaW5nO1xuICAgIH0sXG4gICAgJ25hbWUnXG4gID5cbikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGb3JtSXRlbT5cbiAgICAgIDxGb3JtTGFiZWw+QXV0aG9yJ3MgTmFtZTwvRm9ybUxhYmVsPlxuICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFeC4gQnJhbmRvbiBTYW5kZXJzb25cIiB7Li4ucHJvcHN9IC8+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgPEZvcm1EZXNjcmlwdGlvbj5cbiAgICAgICAgVGhpcyBpcyB0aGUgYXV0aG9yJ3MgbmFtZSBhcyBpdCB3aWxsIGFwcGVhciBvbiB0aGUgc2l0ZS5cbiAgICAgIDwvRm9ybURlc2NyaXB0aW9uPlxuICAgICAgPEZvcm1NZXNzYWdlIC8+XG4gICAgPC9Gb3JtSXRlbT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUF1dGhvckZvcm0oXG4gIGZpZWxkOiBDb250cm9sbGVyUmVuZGVyUHJvcHM8XG4gICAge1xuICAgICAgbmFtZTogc3RyaW5nO1xuICAgIH0sXG4gICAgJ25hbWUnXG4gID5cbikge1xuICBjb25zdCBmb3JtID0gdXNlRm9ybTx6LmluZmVyPHR5cGVvZiBhdXRob3JTY2hlbWE+Pih7XG4gICAgcmVzb2x2ZXI6IHpvZFJlc29sdmVyKGF1dGhvclNjaGVtYSksXG4gICAgZGVmYXVsdFZhbHVlczoge1xuICAgICAgbmFtZTogJycsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAodmFsdWVzOiB6LmluZmVyPHR5cGVvZiBhdXRob3JTY2hlbWE+KSA9PiB7XG4gICAgY29uc29sZS5sb2codmFsdWVzKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtIHsuLi5mb3JtfT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtLmhhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgY29udHJvbD17Zm9ybS5jb250cm9sfVxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IDxOYW1lRm9ybUZpZWxkIHsuLi5maWVsZH0gLz59XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZSBhdXRob3I8L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW5wdXQiLCJ1c2VGb3JtIiwieiIsInpvZFJlc29sdmVyIiwiRm9ybSIsIkZvcm1Db250cm9sIiwiRm9ybURlc2NyaXB0aW9uIiwiRm9ybUZpZWxkIiwiRm9ybUl0ZW0iLCJGb3JtTGFiZWwiLCJGb3JtTWVzc2FnZSIsIkJ1dHRvbiIsImF1dGhvclNjaGVtYSIsIm9iamVjdCIsIm5hbWUiLCJzdHJpbmciLCJtaW4iLCJtZXNzYWdlIiwibWF4IiwiTmFtZUZvcm1GaWVsZCIsInByb3BzIiwicGxhY2Vob2xkZXIiLCJDcmVhdGVBdXRob3JGb3JtIiwiZmllbGQiLCJmb3JtIiwicmVzb2x2ZXIiLCJkZWZhdWx0VmFsdWVzIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiY2xhc3NOYW1lIiwiY29udHJvbCIsInJlbmRlciIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/forms/author.tsx\n"));

/***/ })

});