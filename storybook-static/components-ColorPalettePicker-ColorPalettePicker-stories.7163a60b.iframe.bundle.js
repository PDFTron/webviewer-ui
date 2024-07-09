/*! For license information please see components-ColorPalettePicker-ColorPalettePicker-stories.7163a60b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[1901],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.A)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen):void 0}}},"./src/components/ColorPalettePicker/ColorPalettePicker.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ColorPalettePicker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ColorPalettePicker/ColorPalettePicker.js"),react_i18next__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/ColorPalettePicker",component:_ColorPalettePicker__WEBPACK_IMPORTED_MODULE_1__.A};var color={R:100,G:0,B:0,A:1},customColors=["#000000","#ff1111","#ffffff"];function Basic(){function noop(){}var props={t:_sliced_to_array((0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.B)(),1)[0],color,customColors,getHexColor:noop,findCustomColorsIndex:noop,setColorToBeDeleted:noop};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ColorPalettePicker__WEBPACK_IMPORTED_MODULE_1__.A,props))}Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"function Basic() {\n  const [t] = useTranslation();\n  function noop() {}\n  const props = {\n    t,\n    color,\n    customColors,\n    getHexColor: noop,\n    findCustomColorsIndex: noop,\n    setColorToBeDeleted: noop\n  };\n  return <div>\n      <ColorPalettePicker {...props} />\n    </div>;\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType)if(arg.toString===Object.prototype.toString)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key);else classes.push(arg.toString())}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/ColorPalette/ColorPalette.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.ColorPalette{display:flex;flex-wrap:wrap;display:grid;grid-template-columns:repeat(7,1fr)}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.ColorPalette{width:196px}}.ColorPalette.padding{padding:4px 12px 8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ColorPalette{max-width:450px;width:auto}}@media(max-width:640px)and (-ms-high-contrast:active),(max-width:640px)and (-ms-high-contrast:none){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ColorPalette{width:308px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ColorPalette{max-width:450px;width:auto}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.App.is-web-component:not(.is-in-desktop-only-mode) .ColorPalette{width:308px}}}.ColorPalette .cell-container{padding:0;border:none;background-color:transparent;flex:1 0 14%;cursor:pointer;width:28px;height:28px;display:flex;align-items:center;justify-content:center}:host(:not([data-tabbing=true])) .ColorPalette .cell-container,html:not([data-tabbing=true]) .ColorPalette .cell-container{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ColorPalette .cell-container{width:44px;height:44px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ColorPalette .cell-container{width:44px;height:44px}}.ColorPalette .cell-container .cell-outer.active{border:1px solid var(--color-palette-border);width:26px;height:26px;border-radius:10000000px;display:flex;align-items:center;justify-content:center}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ColorPalette .cell-container .cell-outer.active{width:36px;height:36px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ColorPalette .cell-container .cell-outer.active{width:36px;height:36px}}.ColorPalette .cell-container .cell-outer .cell{width:18px;height:18px;border-radius:10000000px}.ColorPalette .cell-container .cell-outer .cell .transparent{border:2px solid var(--faded-text);border-radius:10000000px}.ColorPalette .cell-container .cell-outer .cell.border{border:1px solid var(--white-color-palette-border)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ColorPalette .cell-container .cell-outer .cell{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ColorPalette .cell-container .cell-outer .cell{width:24px;height:24px}}",""]),exports.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},module.exports=exports},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/ColorPalettePicker/ColorPalettePicker.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".colorPicker .colorPickerController{padding:5px;margin-top:4px;display:flex;align-items:center;justify-content:space-between;border-radius:4px}.colorPicker .cellIcon .Icon svg{height:100%}.colorPicker .cell-container:disabled{cursor:no-drop;opacity:.5}",""]),module.exports=exports},"./node_modules/react-i18next/dist/es/useTranslation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>useTranslation});var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-i18next/dist/es/context.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-i18next/dist/es/utils.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function useTranslation(ns){var props=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i18nFromProps=props.i18n,_ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.gJ)||{},i18nFromContext=_ref.i18n,defaultNSFromContext=_ref.defaultNS,i18n=i18nFromProps||i18nFromContext||(0,_context__WEBPACK_IMPORTED_MODULE_2__.TO)();if(i18n&&!i18n.reportNamespaces&&(i18n.reportNamespaces=new _context__WEBPACK_IMPORTED_MODULE_2__.hz),!i18n){(0,_utils__WEBPACK_IMPORTED_MODULE_3__.mc)("You will need to pass in an i18next instance by using initReactI18next");var notReadyT=function notReadyT(k){return Array.isArray(k)?k[k.length-1]:k},retNotReady=[notReadyT,{},!1];return retNotReady.t=notReadyT,retNotReady.i18n={},retNotReady.ready=!1,retNotReady}i18n.options.react&&void 0!==i18n.options.react.wait&&(0,_utils__WEBPACK_IMPORTED_MODULE_3__.mc)("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var i18nOptions=_objectSpread(_objectSpread(_objectSpread({},(0,_context__WEBPACK_IMPORTED_MODULE_2__.rV)()),i18n.options.react),props),useSuspense=i18nOptions.useSuspense,keyPrefix=i18nOptions.keyPrefix,namespaces=ns||defaultNSFromContext||i18n.options&&i18n.options.defaultNS;namespaces="string"==typeof namespaces?[namespaces]:namespaces||["translation"],i18n.reportNamespaces.addUsedNamespaces&&i18n.reportNamespaces.addUsedNamespaces(namespaces);var ready=(i18n.isInitialized||i18n.initializedStoreOnce)&&namespaces.every((function(n){return(0,_utils__WEBPACK_IMPORTED_MODULE_3__.NM)(n,i18n,i18nOptions)}));function getT(){return i18n.getFixedT(null,"fallback"===i18nOptions.nsMode?namespaces:namespaces[0],keyPrefix)}var _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getT),_useState2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.A)(_useState,2),t=_useState2[0],setT=_useState2[1],isMounted=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!0);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){var bindI18n=i18nOptions.bindI18n,bindI18nStore=i18nOptions.bindI18nStore;function boundReset(){isMounted.current&&setT(getT)}return isMounted.current=!0,ready||useSuspense||(0,_utils__WEBPACK_IMPORTED_MODULE_3__.dM)(i18n,namespaces,(function(){isMounted.current&&setT(getT)})),bindI18n&&i18n&&i18n.on(bindI18n,boundReset),bindI18nStore&&i18n&&i18n.store.on(bindI18nStore,boundReset),function(){isMounted.current=!1,bindI18n&&i18n&&bindI18n.split(" ").forEach((function(e){return i18n.off(e,boundReset)})),bindI18nStore&&i18n&&bindI18nStore.split(" ").forEach((function(e){return i18n.store.off(e,boundReset)}))}}),[i18n,namespaces.join()]);var isInitial=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!0);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){isMounted.current&&!isInitial.current&&setT(getT),isInitial.current=!1}),[i18n]);var ret=[t,i18n,ready];if(ret.t=t,ret.i18n=i18n,ret.ready=ready,ready)return ret;if(!ready&&!useSuspense)return ret;throw new Promise((function(resolve){(0,_utils__WEBPACK_IMPORTED_MODULE_3__.dM)(i18n,namespaces,(function(){resolve()}))}))}},"./node_modules/react-i18next/dist/es/utils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function warn(){if(console&&console.warn){for(var _console,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];"string"==typeof args[0]&&(args[0]="react-i18next:: ".concat(args[0])),(_console=console).warn.apply(_console,args)}}__webpack_require__.d(__webpack_exports__,{Mn:()=>getDisplayName,NM:()=>hasLoadedNamespace,dM:()=>loadNamespaces,mc:()=>warnOnce});var alreadyWarned={};function warnOnce(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];"string"==typeof args[0]&&alreadyWarned[args[0]]||("string"==typeof args[0]&&(alreadyWarned[args[0]]=new Date),warn.apply(void 0,args))}function loadNamespaces(i18n,ns,cb){i18n.loadNamespaces(ns,(function(){if(i18n.isInitialized)cb();else{i18n.on("initialized",(function initialized(){setTimeout((function(){i18n.off("initialized",initialized)}),0),cb()}))}}))}function hasLoadedNamespace(ns,i18n){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i18n.languages&&i18n.languages.length?void 0!==i18n.options.ignoreJSONStructure?i18n.hasLoadedNamespace(ns,{precheck:function precheck(i18nInstance,loadNotPending){if(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18nInstance.services.backendConnector.backend&&i18nInstance.isLanguageChangingTo&&!loadNotPending(i18nInstance.isLanguageChangingTo,ns))return!1}}):function oldI18nextHasLoadedNamespace(ns,i18n){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},lng=i18n.languages[0],fallbackLng=!!i18n.options&&i18n.options.fallbackLng,lastLng=i18n.languages[i18n.languages.length-1];if("cimode"===lng.toLowerCase())return!0;var loadNotPending=function loadNotPending(l,n){var loadState=i18n.services.backendConnector.state["".concat(l,"|").concat(n)];return-1===loadState||2===loadState};return!(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18n.services.backendConnector.backend&&i18n.isLanguageChangingTo&&!loadNotPending(i18n.isLanguageChangingTo,ns)||!i18n.hasResourceBundle(lng,ns)&&i18n.services.backendConnector.backend&&(!i18n.options.resources||i18n.options.partialBundledLanguages)&&(!loadNotPending(lng,ns)||fallbackLng&&!loadNotPending(lastLng,ns)))}(ns,i18n,options):(warnOnce("i18n.languages were undefined or empty",i18n.languages),!0)}function getDisplayName(Component){return Component.displayName||Component.name||("string"==typeof Component&&Component.length>0?Component:"Unknown")}},"./src/components/ColorPalette/ColorPalette.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/ColorPalette/ColorPalette.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/ColorPalettePicker/ColorPalettePicker.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/ColorPalettePicker/ColorPalettePicker.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/ColorPalettePicker/ColorPalettePicker.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),components_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/index.js"),react_i18next__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),constants_commonColors__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./src/components/ColorPalettePicker/ColorPalettePicker.scss"),__webpack_require__("./src/components/ColorPalette/ColorPalette.scss"),__webpack_require__("./src/constants/commonColors.js"));function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ColorPalettePicker=function(param){var color=param.color,_param_customColors=param.customColors,customColors=void 0===_param_customColors?[]:_param_customColors,getHexColor=param.getHexColor,openColorPicker=param.openColorPicker,handleColorOnClick=param.handleColorOnClick,openDeleteModal=param.openDeleteModal,colorToBeDeleted=param.colorToBeDeleted,setColorToBeDeleted=param.setColorToBeDeleted,enableEdit=param.enableEdit,_param_disableTitle=param.disableTitle,disableTitle=void 0!==_param_disableTitle&&_param_disableTitle,_param_colorsAreHex=param.colorsAreHex,colorsAreHex=void 0!==_param_colorsAreHex&&_param_colorsAreHex,t=_sliced_to_array((0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.B)(),1)[0];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var isNotInCustomColors=!customColors.includes(colorsAreHex?color:getHexColor(color));setColorToBeDeleted(isNotInCustomColors?"":colorsAreHex?color:getHexColor(color))}),[color]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"color-picker-container"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"colorPicker"},!disableTitle&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"colorPickerController"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,t("annotation.custom"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"colorPickerColors ColorPalette"},customColors.map((function(bg,i){var _color_toHexString,_color_toHexString1;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{key:bg,title:t("option.colorPalettePicker.selectColor"),className:"cell-container",onClick:function(){return handleColorOnClick(bg)},"aria-label":"".concat(t("option.colorPalette.colorLabel")," ").concat(i+1)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({"cell-outer":!0,active:colorsAreHex?(null==color?void 0:color.toLowerCase())===bg.toLowerCase():(null==color||null===(_color_toHexString1=color.toHexString)||void 0===_color_toHexString1||null===(_color_toHexString=_color_toHexString1.call(color))||void 0===_color_toHexString?void 0:_color_toHexString.toLowerCase())===bg.toLowerCase()})},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({cell:!0,border:bg.toLowerCase()===constants_commonColors__WEBPACK_IMPORTED_MODULE_5__.z.white.toLowerCase()||"transparency"===bg}),style:{backgroundColor:bg}},"transparency"===bg&&void 0)))})),enableEdit&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"cell-container",title:t("option.colorPalettePicker.addColor")},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"cell-outer"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"cellIcon",id:"addCustomColor",onClick:function(){openColorPicker&&openColorPicker(!0)}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Icon__WEBPACK_IMPORTED_MODULE_2__.A,{glyph:"icon-header-zoom-in-line"})))),enableEdit&&customColors.length>0&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"cell-container",id:"removeCustomColor",disabled:!colorToBeDeleted,onClick:openDeleteModal,title:t("warning.colorPalettePicker.deleteTitle")},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"cell-outer"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"cellIcon"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Icon__WEBPACK_IMPORTED_MODULE_2__.A,{glyph:"icon-delete-line"})))))))};const __WEBPACK_DEFAULT_EXPORT__=ColorPalettePicker;ColorPalettePicker.__docgenInfo={description:"",methods:[],displayName:"ColorPalettePicker",props:{customColors:{defaultValue:{value:"[]",computed:!1},required:!1},disableTitle:{defaultValue:{value:"false",computed:!1},required:!1},colorsAreHex:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./src/components/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.js");const __WEBPACK_DEFAULT_EXPORT__=_Icon__WEBPACK_IMPORTED_MODULE_0__.A;_Icon__WEBPACK_IMPORTED_MODULE_0__.A.__docgenInfo={description:"",methods:[{name:"updateSvg",docblock:null,modifiers:[],params:[],returns:null},{name:"isInlineSvg",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Icon",props:{className:{description:"",type:{name:"string"},required:!1},color:{description:"",type:{name:"string"},required:!1},glyph:{description:"",type:{name:"string"},required:!0},fillColor:{description:"",type:{name:"string"},required:!1},strokeColor:{description:"",type:{name:"string"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1}}}},"./src/constants/commonColors.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>BASIC_PALETTE,z:()=>COMMON_COLORS});var COMMON_COLORS={black:"#000000",white:"#FFFFFF",blue1LightMode:"#E7EDF3",blue1DarkDarkMode:"#192530",gray4:"#CFD4DA",gray5:"#ADB5BD",gray7:"#697077",gray8:"#485056",gray9:"#343A40",gray10:"#21242A"},BASIC_PALETTE=["#F1A099","#FFC67B","#FFE6A2","#80E5B1","#92E8E8","#A6A1E6","#E2A1E6","#E44234","#FF8D00","#FFCD45","#00CC63","#25D2D1","#4E7DE9","#C544CE","#88271F","#B54800","#F69A00","#007A3B","#167E7D","#2E4B8B","#76287B","#FFFFFF","#CDCDCD","#9C9C9C","#696969","#272727","#000000","transparency"]}}]);