"use strict";(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[4407],{"./src/components/StylePanel/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _StylePanelContainer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/StylePanel/StylePanelContainer.js");const __WEBPACK_DEFAULT_EXPORT__=_StylePanelContainer__WEBPACK_IMPORTED_MODULE_0__.A;_StylePanelContainer__WEBPACK_IMPORTED_MODULE_0__.A.__docgenInfo={description:"",methods:[],displayName:"StylePanelContainer"}},"./src/helpers/handleFreeTextAutoSizeToggle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/index.js");function __WEBPACK_DEFAULT_EXPORT__(annotation,setAutoSizeFont,isAutoSizeFont){var freeTextAnnot=annotation,calculatedFontSize=freeTextAnnot.getCalculatedFontSize();isAutoSizeFont?freeTextAnnot.FontSize=calculatedFontSize:freeTextAnnot.switchToAutoFontSize(),setAutoSizeFont(!isAutoSizeFont),core__WEBPACK_IMPORTED_MODULE_0__.A.getAnnotationManager().redrawAnnotation(freeTextAnnot)}}}]);