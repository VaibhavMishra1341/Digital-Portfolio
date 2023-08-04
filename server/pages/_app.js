/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/theme-context.tsx":
/*!***************************************!*\
  !*** ./src/context/theme-context.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeProvider\": () => (/* binding */ ThemeProvider),\n/* harmony export */   \"default\": () => (/* binding */ ThemeContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst initialState = {\n    isDark: false,\n    toggleTheme: ()=>{},\n    setIsDarkMode: (_)=>{}\n};\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);\nconst ThemeProvider = ({ children  })=>{\n    const [isDark, setIsDark] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const toggleTheme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setIsDark((prev)=>!prev);\n    }, []);\n    const setIsDarkMode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((theme)=>{\n        setIsDark(theme);\n    }, []);\n    // SETTING THEMES ACCORDING TO DEVICE\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (window.matchMedia && window.matchMedia(\"(prefers-color-scheme: dark)\").matches) {\n            setIsDarkMode(true);\n        }\n        window.matchMedia(\"(prefers-color-scheme: dark)\").addEventListener(\"change\", (e)=>{\n            setIsDarkMode(e.matches);\n        });\n    }, [\n        setIsDarkMode\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isDark === undefined) return;\n        if (isDark) {\n            document.documentElement.classList.add(\"dark\");\n        } else {\n            document.documentElement.classList.remove(\"dark\");\n        }\n    }, [\n        isDark\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            isDark: isDark === undefined ? false : isDark,\n            toggleTheme,\n            setIsDarkMode\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vaibh\\\\OneDrive\\\\Desktop\\\\portfolio-website-main\\\\portfolio-website-main\\\\src\\\\context\\\\theme-context.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC90aGVtZS1jb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF3RTtBQUV4RSxNQUFNSSxlQUFlO0lBQ25CQyxRQUFRLEtBQUs7SUFDYkMsYUFBYSxJQUFNLENBQUM7SUFDcEJDLGVBQWUsQ0FBQ0MsSUFBZSxDQUFDO0FBQ2xDO0FBRUEsTUFBTUMsNkJBQWVULG9EQUFhQSxDQUFDSTtBQUVuQyxNQUFNTSxnQkFBZ0IsQ0FBQyxFQUFFQyxTQUFRLEVBQWlDLEdBQUs7SUFDckUsTUFBTSxDQUFDTixRQUFRTyxVQUFVLEdBQUdULCtDQUFRQTtJQUVwQyxNQUFNRyxjQUFjTCxrREFBV0EsQ0FBQyxJQUFNO1FBQ3BDVyxVQUFVLENBQUNDLE9BQVMsQ0FBQ0E7SUFDdkIsR0FBRyxFQUFFO0lBRUwsTUFBTU4sZ0JBQWdCTixrREFBV0EsQ0FBQyxDQUFDYSxRQUFtQjtRQUNwREYsVUFBVUU7SUFDWixHQUFHLEVBQUU7SUFFTCxxQ0FBcUM7SUFDckNaLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUNFYSxPQUFPQyxVQUFVLElBQ2pCRCxPQUFPQyxVQUFVLENBQUMsZ0NBQWdDQyxPQUFPLEVBQ3pEO1lBQ0FWLGNBQWMsSUFBSTtRQUNwQixDQUFDO1FBRURRLE9BQ0dDLFVBQVUsQ0FBQyxnQ0FDWEUsZ0JBQWdCLENBQUMsVUFBVSxDQUFDQyxJQUFNO1lBQ2pDWixjQUFjWSxFQUFFRixPQUFPO1FBQ3pCO0lBQ0osR0FBRztRQUFDVjtLQUFjO0lBRWxCTCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSUcsV0FBV2UsV0FBVztRQUUxQixJQUFJZixRQUFRO1lBQ1ZnQixTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1FBQ3pDLE9BQU87WUFDTEgsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQztRQUM1QyxDQUFDO0lBQ0gsR0FBRztRQUFDcEI7S0FBTztJQUVYLHFCQUNFLDhEQUFDSSxhQUFhaUIsUUFBUTtRQUNwQkMsT0FBTztZQUNMdEIsUUFBUUEsV0FBV2UsWUFBWSxLQUFLLEdBQUdmLE1BQU07WUFDN0NDO1lBQ0FDO1FBQ0Y7a0JBRUNJOzs7Ozs7QUFHUDtBQUVrRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250ZXh0L3RoZW1lLWNvbnRleHQudHN4P2RmMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNEYXJrOiBmYWxzZSxcbiAgdG9nZ2xlVGhlbWU6ICgpID0+IHt9LFxuICBzZXRJc0RhcmtNb2RlOiAoXzogYm9vbGVhbikgPT4ge30sXG59O1xuXG5jb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSk7XG5cbmNvbnN0IFRoZW1lUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xuICBjb25zdCBbaXNEYXJrLCBzZXRJc0RhcmtdID0gdXNlU3RhdGU8Ym9vbGVhbj4oKTtcblxuICBjb25zdCB0b2dnbGVUaGVtZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc0RhcmsoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNldElzRGFya01vZGUgPSB1c2VDYWxsYmFjaygodGhlbWU6IGJvb2xlYW4pID0+IHtcbiAgICBzZXRJc0RhcmsodGhlbWUpO1xuICB9LCBbXSk7XG5cbiAgLy8gU0VUVElORyBUSEVNRVMgQUNDT1JESU5HIFRPIERFVklDRVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhICYmXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXNcbiAgICApIHtcbiAgICAgIHNldElzRGFya01vZGUodHJ1ZSk7XG4gICAgfVxuXG4gICAgd2luZG93XG4gICAgICAubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgc2V0SXNEYXJrTW9kZShlLm1hdGNoZXMpO1xuICAgICAgfSk7XG4gIH0sIFtzZXRJc0RhcmtNb2RlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNEYXJrID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgIGlmIChpc0RhcmspIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XG4gICAgfVxuICB9LCBbaXNEYXJrXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBpc0Rhcms6IGlzRGFyayA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBpc0RhcmssXG4gICAgICAgIHRvZ2dsZVRoZW1lLFxuICAgICAgICBzZXRJc0RhcmtNb2RlLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgeyBUaGVtZUNvbnRleHQgYXMgZGVmYXVsdCwgVGhlbWVQcm92aWRlciB9O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwiaXNEYXJrIiwidG9nZ2xlVGhlbWUiLCJzZXRJc0RhcmtNb2RlIiwiXyIsIlRoZW1lQ29udGV4dCIsIlRoZW1lUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldElzRGFyayIsInByZXYiLCJ0aGVtZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ1bmRlZmluZWQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/theme-context.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_theme_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/theme-context */ \"./src/context/theme-context.tsx\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_theme_context__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\vaibh\\\\OneDrive\\\\Desktop\\\\portfolio-website-main\\\\portfolio-website-main\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vaibh\\\\OneDrive\\\\Desktop\\\\portfolio-website-main\\\\portfolio-website-main\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDMEI7QUFHMUMsU0FBU0MsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQ2hFLHFCQUNFLDhEQUFDSCxpRUFBYUE7a0JBQ1osNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L3RoZW1lLWNvbnRleHQnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();