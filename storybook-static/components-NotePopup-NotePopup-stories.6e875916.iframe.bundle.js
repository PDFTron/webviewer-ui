(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[2547],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.A)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen):void 0}}},"./src/components/NotePopup/NotePopup.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,DifferentLanguages:()=>DifferentLanguages,DifferentStates:()=>DifferentStates,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_NotePopup__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/NotePopup/NotePopup.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/NotesPanel/NotePopup",component:_NotePopup__WEBPACK_IMPORTED_MODULE_2__.A};function noop(){}function handleEdit(){console.log("Would handle Edit")}function handleDelete(){console.log("Would handle Delete")}function open(){console.log("Would open the popup")}function close(){console.log("Would close the popup")}function Basic(){var _React_useState=_sliced_to_array(react__WEBPACK_IMPORTED_MODULE_1__.useState(!1),2),isOpen=_React_useState[0],setOpen=_React_useState[1];return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{style:{width:200}},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_NotePopup__WEBPACK_IMPORTED_MODULE_2__.A,{annotation:{},handleEdit,handleDelete,closePopup:function closePopup(){console.log("Closing the popup"),setOpen(!1)},openPopup:function openPopup(){console.log("Opening the popup"),setOpen(!0)},isOpen,isDisable:!1,isEditable:!0,isDeletable:!0}))}function DifferentLanguages(){var annotation={};return i18next__WEBPACK_IMPORTED_MODULE_0__.A.changeLanguage("zh_cn"),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{style:{width:200,display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:10,rowGap:15}},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",null,"Popup closed"),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",null,"Popup open"),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{style:{justifySelf:"start"}},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_NotePopup__WEBPACK_IMPORTED_MODULE_2__.A,{annotation,handleEdit:noop,closePopup:close,openPopup:open,isDisable:!1,isEditable:!0,isDeletable:!0})),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{style:{justifySelf:"end"}},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_NotePopup__WEBPACK_IMPORTED_MODULE_2__.A,{annotation,handleEdit:noop,closePopup:noop,openPopup:noop,isOpen:!0,isDisable:!1,isEditable:!0,isDeletable:!0})))}function DifferentStates(){var annotation={};return i18next__WEBPACK_IMPORTED_MODULE_0__.A.changeLanguage("en"),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{style:{width:200,display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:10,rowGap:15}},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",null,"Popup closed"),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",null,"Popup open"),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{style:{justifySelf:"start"}},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_NotePopup__WEBPACK_IMPORTED_MODULE_2__.A,{annotation,handleEdit:noop,closePopup:close,openPopup:open,isDisable:!1,isEditable:!0,isDeletable:!0})),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{style:{justifySelf:"end"}},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_NotePopup__WEBPACK_IMPORTED_MODULE_2__.A,{annotation,handleEdit:noop,closePopup:noop,openPopup:noop,isOpen:!0,isDisable:!1,isEditable:!0,isDeletable:!0})))}Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"function Basic() {\n  const [isOpen, setOpen] = React.useState(false);\n  function closePopup() {\n    console.log('Closing the popup');\n    setOpen(false);\n  }\n  function openPopup() {\n    console.log('Opening the popup');\n    setOpen(true);\n  }\n  const annotation = {};\n  const style = {\n    width: 200\n  };\n  return <div style={style}>\n      <NotePopup annotation={annotation} handleEdit={handleEdit} handleDelete={handleDelete} closePopup={closePopup} openPopup={openPopup} isOpen={isOpen} isDisable={false} isEditable isDeletable />\n    </div>;\n}",...Basic.parameters?.docs?.source}}},DifferentLanguages.parameters={...DifferentLanguages.parameters,docs:{...DifferentLanguages.parameters?.docs,source:{originalSource:"function DifferentLanguages() {\n  const annotation = {};\n  const style = {\n    width: 200,\n    display: 'grid',\n    gridTemplateColumns: '1fr 1fr',\n    columnGap: 10,\n    rowGap: 15\n  };\n  i18next.changeLanguage('zh_cn');\n  return <div style={style}>\n      <div>Popup closed</div>\n      <div>Popup open</div>\n      <div style={{\n      justifySelf: 'start'\n    }}>\n        <NotePopup annotation={annotation} handleEdit={noop} closePopup={close} openPopup={open} isDisable={false} isEditable isDeletable />\n      </div>\n      <div style={{\n      justifySelf: 'end'\n    }}>\n        <NotePopup annotation={annotation} handleEdit={noop} closePopup={noop} openPopup={noop} isOpen isDisable={false} isEditable isDeletable />\n      </div>\n    </div>;\n}",...DifferentLanguages.parameters?.docs?.source}}},DifferentStates.parameters={...DifferentStates.parameters,docs:{...DifferentStates.parameters?.docs,source:{originalSource:"function DifferentStates() {\n  const annotation = {};\n  const style = {\n    width: 200,\n    display: 'grid',\n    gridTemplateColumns: '1fr 1fr',\n    columnGap: 10,\n    rowGap: 15\n  };\n  i18next.changeLanguage('en');\n  return <div style={style}>\n      <div>Popup closed</div>\n      <div>Popup open</div>\n      <div style={{\n      justifySelf: 'start'\n    }}>\n        <NotePopup annotation={annotation} handleEdit={noop} closePopup={close} openPopup={open} isDisable={false} isEditable isDeletable />\n      </div>\n      <div style={{\n      justifySelf: 'end'\n    }}>\n        <NotePopup annotation={annotation} handleEdit={noop} closePopup={noop} openPopup={noop} isOpen isDisable={false} isEditable isDeletable />\n      </div>\n    </div>;\n}",...DifferentStates.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","DifferentLanguages","DifferentStates"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/NotePopup/NotePopup.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.NotePopup{flex-grow:0;justify-content:flex-end;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative}.NotePopup,.NotePopup .overflow{display:flex;width:28px;height:28px}.NotePopup .overflow{border-radius:4px;justify-content:center;align-items:center}.NotePopup .overflow .Icon{width:24px;height:24px}.NotePopup .overflow:hover{background:var(--blue-1)}.NotePopup .overflow.active{background:var(--popup-button-active)}.NotePopup .options{display:flex;flex-direction:column;box-shadow:0 0 3px 0 var(--box-shadow);z-index:80;position:absolute;border-radius:4px;background:var(--component-background);top:40px;width:-moz-max-content;width:max-content}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.NotePopup .options{right:0}}.NotePopup .options .note-popup-option{padding:0;border:none;background-color:transparent;align-items:flex-start}:host(:not([data-tabbing=true])) .NotePopup .options .note-popup-option,html:not([data-tabbing=true]) .NotePopup .options .note-popup-option{outline:none}.NotePopup .options.options-reply{top:30px}.NotePopup .options .option{display:flex;flex-direction:column;justify-content:center;height:28px;padding-left:8px;padding-right:17px;border-radius:0}.NotePopup .options .option:hover{background-color:var(--popup-button-hover)}.NotePopup .options .option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.NotePopup .options .option:last-child{border-bottom-right-radius:4px}.NotePopup .Button.active{background:var(--popup-button-active)}",""]),exports.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},module.exports=exports},"./node_modules/react-i18next/dist/es/useTranslation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>useTranslation});var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-i18next/dist/es/context.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-i18next/dist/es/utils.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function useTranslation(ns){var props=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i18nFromProps=props.i18n,_ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.gJ)||{},i18nFromContext=_ref.i18n,defaultNSFromContext=_ref.defaultNS,i18n=i18nFromProps||i18nFromContext||(0,_context__WEBPACK_IMPORTED_MODULE_2__.TO)();if(i18n&&!i18n.reportNamespaces&&(i18n.reportNamespaces=new _context__WEBPACK_IMPORTED_MODULE_2__.hz),!i18n){(0,_utils__WEBPACK_IMPORTED_MODULE_3__.mc)("You will need to pass in an i18next instance by using initReactI18next");var notReadyT=function notReadyT(k){return Array.isArray(k)?k[k.length-1]:k},retNotReady=[notReadyT,{},!1];return retNotReady.t=notReadyT,retNotReady.i18n={},retNotReady.ready=!1,retNotReady}i18n.options.react&&void 0!==i18n.options.react.wait&&(0,_utils__WEBPACK_IMPORTED_MODULE_3__.mc)("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var i18nOptions=_objectSpread(_objectSpread(_objectSpread({},(0,_context__WEBPACK_IMPORTED_MODULE_2__.rV)()),i18n.options.react),props),useSuspense=i18nOptions.useSuspense,keyPrefix=i18nOptions.keyPrefix,namespaces=ns||defaultNSFromContext||i18n.options&&i18n.options.defaultNS;namespaces="string"==typeof namespaces?[namespaces]:namespaces||["translation"],i18n.reportNamespaces.addUsedNamespaces&&i18n.reportNamespaces.addUsedNamespaces(namespaces);var ready=(i18n.isInitialized||i18n.initializedStoreOnce)&&namespaces.every((function(n){return(0,_utils__WEBPACK_IMPORTED_MODULE_3__.NM)(n,i18n,i18nOptions)}));function getT(){return i18n.getFixedT(null,"fallback"===i18nOptions.nsMode?namespaces:namespaces[0],keyPrefix)}var _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getT),_useState2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.A)(_useState,2),t=_useState2[0],setT=_useState2[1],isMounted=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!0);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){var bindI18n=i18nOptions.bindI18n,bindI18nStore=i18nOptions.bindI18nStore;function boundReset(){isMounted.current&&setT(getT)}return isMounted.current=!0,ready||useSuspense||(0,_utils__WEBPACK_IMPORTED_MODULE_3__.dM)(i18n,namespaces,(function(){isMounted.current&&setT(getT)})),bindI18n&&i18n&&i18n.on(bindI18n,boundReset),bindI18nStore&&i18n&&i18n.store.on(bindI18nStore,boundReset),function(){isMounted.current=!1,bindI18n&&i18n&&bindI18n.split(" ").forEach((function(e){return i18n.off(e,boundReset)})),bindI18nStore&&i18n&&bindI18nStore.split(" ").forEach((function(e){return i18n.store.off(e,boundReset)}))}}),[i18n,namespaces.join()]);var isInitial=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!0);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){isMounted.current&&!isInitial.current&&setT(getT),isInitial.current=!1}),[i18n]);var ret=[t,i18n,ready];if(ret.t=t,ret.i18n=i18n,ret.ready=ready,ready)return ret;if(!ready&&!useSuspense)return ret;throw new Promise((function(resolve){(0,_utils__WEBPACK_IMPORTED_MODULE_3__.dM)(i18n,namespaces,(function(){resolve()}))}))}},"./node_modules/react-i18next/dist/es/utils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function warn(){if(console&&console.warn){for(var _console,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];"string"==typeof args[0]&&(args[0]="react-i18next:: ".concat(args[0])),(_console=console).warn.apply(_console,args)}}__webpack_require__.d(__webpack_exports__,{Mn:()=>getDisplayName,NM:()=>hasLoadedNamespace,dM:()=>loadNamespaces,mc:()=>warnOnce});var alreadyWarned={};function warnOnce(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];"string"==typeof args[0]&&alreadyWarned[args[0]]||("string"==typeof args[0]&&(alreadyWarned[args[0]]=new Date),warn.apply(void 0,args))}function loadNamespaces(i18n,ns,cb){i18n.loadNamespaces(ns,(function(){if(i18n.isInitialized)cb();else{i18n.on("initialized",(function initialized(){setTimeout((function(){i18n.off("initialized",initialized)}),0),cb()}))}}))}function hasLoadedNamespace(ns,i18n){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i18n.languages&&i18n.languages.length?void 0!==i18n.options.ignoreJSONStructure?i18n.hasLoadedNamespace(ns,{precheck:function precheck(i18nInstance,loadNotPending){if(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18nInstance.services.backendConnector.backend&&i18nInstance.isLanguageChangingTo&&!loadNotPending(i18nInstance.isLanguageChangingTo,ns))return!1}}):function oldI18nextHasLoadedNamespace(ns,i18n){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},lng=i18n.languages[0],fallbackLng=!!i18n.options&&i18n.options.fallbackLng,lastLng=i18n.languages[i18n.languages.length-1];if("cimode"===lng.toLowerCase())return!0;var loadNotPending=function loadNotPending(l,n){var loadState=i18n.services.backendConnector.state["".concat(l,"|").concat(n)];return-1===loadState||2===loadState};return!(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18n.services.backendConnector.backend&&i18n.isLanguageChangingTo&&!loadNotPending(i18n.isLanguageChangingTo,ns)||!i18n.hasResourceBundle(lng,ns)&&i18n.services.backendConnector.backend&&(!i18n.options.resources||i18n.options.partialBundledLanguages)&&(!loadNotPending(lng,ns)||fallbackLng&&!loadNotPending(lastLng,ns)))}(ns,i18n,options):(warnOnce("i18n.languages were undefined or empty",i18n.languages),!0)}function getDisplayName(Component){return Component.displayName||Component.name||("string"==typeof Component&&Component.length>0?Component:"Unknown")}},"./src/components/NotePopup/NotePopup.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/NotePopup/NotePopup.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/DataElementWrapper/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>components_DataElementWrapper});var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),selectors=__webpack_require__("./src/redux/selectors/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var propTypes={id:prop_types_default().string,children:prop_types_default().node,dataElement:prop_types_default().string,type:prop_types_default().string};var DataElementWrapper=react.forwardRef((function(_param,ref){var _param_type=_param.type,type=void 0===_param_type?"div":_param_type,children=_param.children,dataElement=_param.dataElement,props=_object_without_properties(_param,["type","children","dataElement"]),isDisabled=function useIsDisabledWithDefaultValue(selector){var defaultValue=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{return(0,es.d4)(selector)}catch(e){e.message}return defaultValue}((function(state){return selectors.A.isElementDisabled(state,dataElement)}));return isDisabled?null:"button"===type?react.createElement("button",_object_spread({ref,"data-element":dataElement},props),children):react.createElement("div",_object_spread({ref,"data-element":dataElement},props),children)}));DataElementWrapper.displayName="DataElementWrapper",DataElementWrapper.propTypes=propTypes;const DataElementWrapper_DataElementWrapper=DataElementWrapper;DataElementWrapper.__docgenInfo={description:"",methods:[],displayName:"DataElementWrapper",props:{type:{defaultValue:{value:"'div'",computed:!1},description:"",type:{name:"string"},required:!1},id:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1},dataElement:{description:"",type:{name:"string"},required:!1}}};const components_DataElementWrapper=DataElementWrapper_DataElementWrapper;DataElementWrapper_DataElementWrapper.__docgenInfo={description:"",methods:[],displayName:"DataElementWrapper",props:{type:{defaultValue:{value:"'div'",computed:!1},description:"",type:{name:"string"},required:!1},id:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1},dataElement:{description:"",type:{name:"string"},required:!1}}}},"./src/components/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.js");const __WEBPACK_DEFAULT_EXPORT__=_Icon__WEBPACK_IMPORTED_MODULE_0__.A;_Icon__WEBPACK_IMPORTED_MODULE_0__.A.__docgenInfo={description:"",methods:[{name:"updateSvg",docblock:null,modifiers:[],params:[],returns:null},{name:"isInlineSvg",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Icon",props:{className:{description:"",type:{name:"string"},required:!1},color:{description:"",type:{name:"string"},required:!1},glyph:{description:"",type:{name:"string"},required:!0},fillColor:{description:"",type:{name:"string"},required:!1},strokeColor:{description:"",type:{name:"string"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1}}}},"./src/components/NotePopup/NotePopup.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useOnClickOutside.js"),components_DataElementWrapper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/DataElementWrapper/index.js"),react_i18next__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),classnames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),components_Icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Icon/index.js");__webpack_require__("./src/components/NotePopup/NotePopup.scss");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var propTypes={handleEdit:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,handleDelete:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,closePopup:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,openPopup:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,isEditable:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,isDeletable:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,isOpen:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool};function noop(){}function NotePopup(props){var _props_handleEdit=props.handleEdit,handleEdit=void 0===_props_handleEdit?noop:_props_handleEdit,_props_handleDelete=props.handleDelete,handleDelete=void 0===_props_handleDelete?noop:_props_handleDelete,_props_closePopup=props.closePopup,closePopup=void 0===_props_closePopup?noop:_props_closePopup,_props_openPopup=props.openPopup,openPopup=void 0===_props_openPopup?noop:_props_openPopup,isEditable=props.isEditable,isDeletable=props.isDeletable,isOpen=props.isOpen,isReply=props.isReply,t=_sliced_to_array((0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.B)(),1)[0],popupRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef();(0,hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_1__.A)(popupRef,(function(){closePopup()}));if(!isEditable&&!isDeletable)return null;var notePopupButtonClass=classnames__WEBPACK_IMPORTED_MODULE_3___default()("overflow note-popup-toggle-trigger",{active:isOpen}),optionsClass=classnames__WEBPACK_IMPORTED_MODULE_3___default()("options note-popup-options",{"options-reply":isReply});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_DataElementWrapper__WEBPACK_IMPORTED_MODULE_2__.A,{className:"NotePopup",dataElement:"notePopup",ref:popupRef},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:notePopupButtonClass,onClick:function(e){e.stopPropagation(),isOpen?closePopup():openPopup()}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Icon__WEBPACK_IMPORTED_MODULE_4__.A,{glyph:"icon-tools-more"})),isOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:optionsClass},isEditable&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_DataElementWrapper__WEBPACK_IMPORTED_MODULE_2__.A,{type:"button",className:"option note-popup-option",dataElement:"notePopupEdit",onClick:function onEditButtonClick(e){e.stopPropagation(),closePopup(),handleEdit()}},t("action.edit")),isDeletable&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_DataElementWrapper__WEBPACK_IMPORTED_MODULE_2__.A,{type:"button",className:"option note-popup-option",dataElement:"notePopupDelete",onClick:function onDeleteButtonClick(){closePopup(),handleDelete()}},t("action.delete"))))}NotePopup.propTypes=propTypes;const __WEBPACK_DEFAULT_EXPORT__=NotePopup;NotePopup.__docgenInfo={description:"",methods:[],displayName:"NotePopup",props:{handleEdit:{description:"",type:{name:"func"},required:!1},handleDelete:{description:"",type:{name:"func"},required:!1},closePopup:{description:"",type:{name:"func"},required:!1},openPopup:{description:"",type:{name:"func"},required:!1},isEditable:{description:"",type:{name:"bool"},required:!1},isDeletable:{description:"",type:{name:"bool"},required:!1},isOpen:{description:"",type:{name:"bool"},required:!1}}}},"./src/hooks/useOnClickOutside.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),helpers_getRootNode__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/helpers/getRootNode.js");function __WEBPACK_DEFAULT_EXPORT__(ref,handler){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var listener=function(event){ref.current&&!ref.current.contains(event.target)&&handler(event)},browserDocument=document;return window.isApryseWebViewerWebComponent&&(browserDocument=(0,helpers_getRootNode__WEBPACK_IMPORTED_MODULE_1__.Ay)().getElementById("app")),browserDocument.addEventListener("mousedown",listener),browserDocument.addEventListener("touchstart",listener),function(){browserDocument.removeEventListener("mousedown",listener),browserDocument.removeEventListener("touchstart",listener)}}),[ref,handler])}}}]);