(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[6463],{"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/MenuOverlay/MenuOverlay.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.FlyoutMenu[data-element=menuOverlay] .ActionButton{justify-content:flex-start}.FlyoutMenu[data-element=menuOverlay] .ActionButton .Icon{margin:4px}.FlyoutMenu[data-element=menuOverlay] .ActionButton span{margin:0 4px}.FlyoutMenu[data-element=menuOverlay] .ActionButton.row.disabled:hover{background:none;cursor:default}",""]),exports.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},module.exports=exports},"./src/components/MenuOverlay/MenuOverlay.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/MenuOverlay/MenuOverlay.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/MenuOverlay/MenuOverlay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/redux/actions/index.js"),components_ActionButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ActionButton/index.js"),components_CustomElement__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/CustomElement/index.js"),constants_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/constants/types.js"),core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/core/index.js"),helpers_downloadPdf__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/helpers/downloadPdf.js"),helpers_openFilePicker__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/helpers/openFilePicker.js"),helpers_toggleFullscreen__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/helpers/toggleFullscreen.js"),helpers_print__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/helpers/print.js"),react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react/index.js"),react_i18next__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),react_redux__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react-redux/es/index.js"),selectors__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/redux/selectors/index.js"),_FlyoutMenu_FlyoutMenu__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/FlyoutMenu/FlyoutMenu.js"),constants_dataElement__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/constants/dataElement.js"),helpers_loadDocument__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/helpers/loadDocument.js"),helpers_officeEditor__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/helpers/officeEditor.js");__webpack_require__("./src/components/MenuOverlay/MenuOverlay.scss");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var InitialMenuOverLayItem=function(param){var dataElement=param.dataElement,children=param.children,items=(0,react_redux__WEBPACK_IMPORTED_MODULE_9__.d4)((function(state){return selectors__WEBPACK_IMPORTED_MODULE_10__.A.getMenuOverlayItems(state,dataElement)}),react_redux__WEBPACK_IMPORTED_MODULE_9__.bN),childrenArray=react__WEBPACK_IMPORTED_MODULE_8__.Children.toArray(children);return items.map((function(item,i){var dataElement=item.dataElement,type=item.type,hidden=item.hidden,key="".concat(type,"-").concat(dataElement||i),mediaQueryClassName=null==hidden?void 0:hidden.map((function(screen){return"hide-in-".concat(screen)})).join(" "),component=childrenArray.find((function(child){return child.props.dataElement===dataElement}));if(!component){var props=_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},item),{mediaQueryClassName});switch(type){case"actionButton":component=react__WEBPACK_IMPORTED_MODULE_8__.createElement(components_ActionButton__WEBPACK_IMPORTED_MODULE_1__.A,props);break;case"customElement":component=react__WEBPACK_IMPORTED_MODULE_8__.createElement(components_CustomElement__WEBPACK_IMPORTED_MODULE_2__.A,props)}}return component?react__WEBPACK_IMPORTED_MODULE_8__.cloneElement(component,{key}):null}))};function MenuOverlay(){var dispatch=(0,react_redux__WEBPACK_IMPORTED_MODULE_9__.wA)(),t=_sliced_to_array((0,react_i18next__WEBPACK_IMPORTED_MODULE_16__.B)(),1)[0],_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(),2),documentType=_useState[0],setDocumentType=_useState[1],isEmbedPrintSupported=(0,react_redux__WEBPACK_IMPORTED_MODULE_9__.d4)(selectors__WEBPACK_IMPORTED_MODULE_10__.A.isEmbedPrintSupported),useClientSidePrint=(0,react_redux__WEBPACK_IMPORTED_MODULE_9__.d4)(selectors__WEBPACK_IMPORTED_MODULE_10__.A.useClientSidePrint),colorMap=(0,react_redux__WEBPACK_IMPORTED_MODULE_9__.d4)(selectors__WEBPACK_IMPORTED_MODULE_10__.A.getColorMap),sortStrategy=(0,react_redux__WEBPACK_IMPORTED_MODULE_9__.d4)(selectors__WEBPACK_IMPORTED_MODULE_10__.A.getSortStrategy),isFullScreen=(0,react_redux__WEBPACK_IMPORTED_MODULE_9__.d4)((function(state){return selectors__WEBPACK_IMPORTED_MODULE_10__.A.isFullScreen(state)})),timezone=(0,react_redux__WEBPACK_IMPORTED_MODULE_9__.d4)((function(state){return selectors__WEBPACK_IMPORTED_MODULE_10__.A.getTimezone(state)})),isCreatePortfolioButtonEnabled=!(0,react_redux__WEBPACK_IMPORTED_MODULE_9__.d4)((function(state){return selectors__WEBPACK_IMPORTED_MODULE_10__.A.isElementDisabled(state,constants_dataElement__WEBPACK_IMPORTED_MODULE_12__.A.CREATE_PORTFOLIO_BUTTON)}))&&core__WEBPACK_IMPORTED_MODULE_4__.A.isFullPDFEnabled(),closeMenuOverlay=(0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)((function(){return dispatch(actions__WEBPACK_IMPORTED_MODULE_0__.A.closeElements([constants_dataElement__WEBPACK_IMPORTED_MODULE_12__.A.MENU_OVERLAY]))}),[dispatch]);(0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)((function(){var onDocumentLoaded=function(){var _core_getDocument,type=null===(_core_getDocument=core__WEBPACK_IMPORTED_MODULE_4__.A.getDocument())||void 0===_core_getDocument?void 0:_core_getDocument.getType();setDocumentType(type)};return onDocumentLoaded(),core__WEBPACK_IMPORTED_MODULE_4__.A.addEventListener("documentLoaded",onDocumentLoaded),function(){core__WEBPACK_IMPORTED_MODULE_4__.A.removeEventListener("documentLoaded",onDocumentLoaded)}}),[]);var _ref,handleNewDocumentClick=(_ref=function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}((function(){return _ts_generator(this,(function(_state){return closeMenuOverlay(),(0,helpers_loadDocument__WEBPACK_IMPORTED_MODULE_13__.A)(dispatch,null,{filename:"Untitled.docx",enableOfficeEditing:!0}),[2]}))})),function handleNewDocumentClick(){return _ref.apply(this,arguments)});return react__WEBPACK_IMPORTED_MODULE_8__.createElement(_FlyoutMenu_FlyoutMenu__WEBPACK_IMPORTED_MODULE_11__.A,{menu:constants_dataElement__WEBPACK_IMPORTED_MODULE_12__.A.MENU_OVERLAY,trigger:constants_dataElement__WEBPACK_IMPORTED_MODULE_12__.A.MENU_OVERLAY_BUTTON,ariaLabel:t("component.menuOverlay")},react__WEBPACK_IMPORTED_MODULE_8__.createElement(InitialMenuOverLayItem,null,(0,helpers_officeEditor__WEBPACK_IMPORTED_MODULE_14__.p)()&&react__WEBPACK_IMPORTED_MODULE_8__.createElement(components_ActionButton__WEBPACK_IMPORTED_MODULE_1__.A,{dataElement:constants_dataElement__WEBPACK_IMPORTED_MODULE_12__.A.NEW_DOCUMENT_BUTTON,className:"row",img:"icon-plus-sign",label:t("action.newDocument"),ariaLabel:t("action.newDocument"),role:"option",onClick:handleNewDocumentClick}),react__WEBPACK_IMPORTED_MODULE_8__.createElement(components_ActionButton__WEBPACK_IMPORTED_MODULE_1__.A,{dataElement:constants_dataElement__WEBPACK_IMPORTED_MODULE_12__.A.FILE_PICKER_BUTTON,className:"row",img:"icon-header-file-picker-line",label:t("action.openFile"),ariaLabel:t("action.openFile"),role:"option",onClick:helpers_openFilePicker__WEBPACK_IMPORTED_MODULE_17__.A}),documentType!==constants_types__WEBPACK_IMPORTED_MODULE_3__._.XOD&&!(0,helpers_officeEditor__WEBPACK_IMPORTED_MODULE_14__.p)()&&react__WEBPACK_IMPORTED_MODULE_8__.createElement(components_ActionButton__WEBPACK_IMPORTED_MODULE_1__.A,{dataElement:constants_dataElement__WEBPACK_IMPORTED_MODULE_12__.A.DOWNLOAD_BUTTON,className:"row",img:"icon-download",label:t("action.download"),ariaLabel:t("action.download"),role:"option",onClick:function(){(0,helpers_downloadPdf__WEBPACK_IMPORTED_MODULE_5__.A)(dispatch)}}),(0,helpers_officeEditor__WEBPACK_IMPORTED_MODULE_14__.p)()&&react__WEBPACK_IMPORTED_MODULE_8__.createElement(components_ActionButton__WEBPACK_IMPORTED_MODULE_1__.A,{dataElement:constants_dataElement__WEBPACK_IMPORTED_MODULE_12__.A.FULLSCREEN_BUTTON,className:"row",img:isFullScreen?"icon-header-full-screen-exit":"icon-header-full-screen",label:t(isFullScreen?"action.exitFullscreen":"action.enterFullscreen"),ariaLabel:t(isFullScreen?"action.exitFullscreen":"action.enterFullscreen"),role:"option",onClick:helpers_toggleFullscreen__WEBPACK_IMPORTED_MODULE_6__.A}),documentType!==constants_types__WEBPACK_IMPORTED_MODULE_3__._.XOD&&react__WEBPACK_IMPORTED_MODULE_8__.createElement(components_ActionButton__WEBPACK_IMPORTED_MODULE_1__.A,{dataElement:constants_dataElement__WEBPACK_IMPORTED_MODULE_12__.A.SAVE_AS_BUTTON,className:"row",img:"icon-save",label:t("saveModal.saveAs"),ariaLabel:t("saveModal.saveAs"),role:"option",onClick:function(){closeMenuOverlay(),dispatch(actions__WEBPACK_IMPORTED_MODULE_0__.A.openElement(constants_dataElement__WEBPACK_IMPORTED_MODULE_12__.A.SAVE_MODAL))}}),react__WEBPACK_IMPORTED_MODULE_8__.createElement(components_ActionButton__WEBPACK_IMPORTED_MODULE_1__.A,{dataElement:constants_dataElement__WEBPACK_IMPORTED_MODULE_12__.A.PRINT_BUTTON,className:"row",img:"icon-header-print-line",label:t("action.print"),ariaLabel:t("action.print"),role:"option",onClick:function(){closeMenuOverlay(),(0,helpers_print__WEBPACK_IMPORTED_MODULE_7__.y)(dispatch,useClientSidePrint,isEmbedPrintSupported,sortStrategy,colorMap,{isGrayscale:core__WEBPACK_IMPORTED_MODULE_4__.A.getDocumentViewer().isGrayscaleModeEnabled(),timezone})}})),react__WEBPACK_IMPORTED_MODULE_8__.createElement("div",{className:"divider"}),isCreatePortfolioButtonEnabled&&react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_8__.createElement(components_ActionButton__WEBPACK_IMPORTED_MODULE_1__.A,{dataElement:constants_dataElement__WEBPACK_IMPORTED_MODULE_12__.A.CREATE_PORTFOLIO_BUTTON,className:"row",img:"icon-pdf-portfolio",label:t("portfolio.createPDFPortfolio"),ariaLabel:t("portfolio.createPDFPortfolio"),role:"option",onClick:function(){closeMenuOverlay(),dispatch(actions__WEBPACK_IMPORTED_MODULE_0__.A.openElement(constants_dataElement__WEBPACK_IMPORTED_MODULE_12__.A.CREATE_PORTFOLIO_MODAL))}}),react__WEBPACK_IMPORTED_MODULE_8__.createElement("div",{className:"divider"})),react__WEBPACK_IMPORTED_MODULE_8__.createElement(components_ActionButton__WEBPACK_IMPORTED_MODULE_1__.A,{dataElement:constants_dataElement__WEBPACK_IMPORTED_MODULE_12__.A.SETTINGS_BUTTON,className:"row",img:"icon-header-settings-line",label:t("option.settings.settings"),ariaLabel:t("option.settings.settings"),role:"option",onClick:function(){closeMenuOverlay(),dispatch(actions__WEBPACK_IMPORTED_MODULE_0__.A.openElement(constants_dataElement__WEBPACK_IMPORTED_MODULE_12__.A.SETTINGS_MODAL))}}))}const __WEBPACK_DEFAULT_EXPORT__=MenuOverlay;MenuOverlay.__docgenInfo={description:"",methods:[],displayName:"MenuOverlay"}},"./src/components/MenuOverlay/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _MenuOverlay__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/MenuOverlay/MenuOverlay.js");const __WEBPACK_DEFAULT_EXPORT__=_MenuOverlay__WEBPACK_IMPORTED_MODULE_0__.A;_MenuOverlay__WEBPACK_IMPORTED_MODULE_0__.A.__docgenInfo={description:"",methods:[],displayName:"MenuOverlay"}}}]);