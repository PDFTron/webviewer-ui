/*! For license information please see components-PageReplacementModal-PageNumberInput-PageNumberInput-stories.0e63b98c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[7214],{"./src/components/PageReplacementModal/PageNumberInput/PageNumberInput.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_PageNumberInput__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/PageReplacementModal/PageNumberInput/PageNumberInput.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/PageReplacementModal/PageNumberInput",component:_PageNumberInput__WEBPACK_IMPORTED_MODULE_1__.A};var Basic=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PageNumberInput__WEBPACK_IMPORTED_MODULE_1__.A,args)}.bind({});Basic.args={selectedPageNumbers:[],onSelectedPageNumbersChange:function noop(){},pageCount:10},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => <PageNumberInput {...args} />",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType)if(arg.toString===Object.prototype.toString)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key);else classes.push(arg.toString())}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/PageReplacementModal/PageNumberInput/PageNumberInput.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".PageNumberInput .input-wrapper{position:relative;display:flex;align-items:center}.PageNumberInput .input-wrapper .Icon{position:absolute;right:8px;color:var(--error-border-color)}.PageNumberInput .page-number-input{padding:6px!important;width:108px}.PageNumberInput .page-number-input.page-number-input--error{padding-right:30px;border-color:var(--error-border-color)}.PageNumberInput .page-number-input::-moz-placeholder{color:var(--gray-6)}.PageNumberInput .page-number-input::placeholder{color:var(--gray-6)}.PageNumberInput .page-number-input::-moz-placeholder.error{border-color:var(--error-text-color)}.PageNumberInput .page-number-input::placeholder.error{border-color:var(--error-text-color)}.PageNumberInput .page-number-error{color:var(--error-text-color);margin-top:8px}",""]),module.exports=exports},"./src/components/PageReplacementModal/PageNumberInput/PageNumberInput.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/PageReplacementModal/PageNumberInput/PageNumberInput.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.js");const __WEBPACK_DEFAULT_EXPORT__=_Icon__WEBPACK_IMPORTED_MODULE_0__.A;_Icon__WEBPACK_IMPORTED_MODULE_0__.A.__docgenInfo={description:"",methods:[{name:"updateSvg",docblock:null,modifiers:[],params:[],returns:null},{name:"isInlineSvg",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Icon",props:{className:{description:"",type:{name:"string"},required:!1},color:{description:"",type:{name:"string"},required:!1},glyph:{description:"",type:{name:"string"},required:!0},fillColor:{description:"",type:{name:"string"},required:!1},strokeColor:{description:"",type:{name:"string"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1}}}},"./src/components/PageReplacementModal/PageNumberInput/PageNumberInput.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),helpers_getPageArrayFromString__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/helpers/getPageArrayFromString.js"),components_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/index.js");__webpack_require__("./src/components/PageReplacementModal/PageNumberInput/PageNumberInput.scss");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var propTypes={selectedPageNumbers:prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),pageCount:prop_types__WEBPACK_IMPORTED_MODULE_5___default().number,placeholder:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,pageNumberError:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,onBlurHandler:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func,onError:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func,onSelectedPageNumbersChange:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func},noop=function(){};function PageNumberInput(param){var selectedPageNumbers=param.selectedPageNumbers,pageCount=param.pageCount,placeholder=param.placeholder,pageNumberError=param.pageNumberError,onSelectedPageNumbersChange=param.onSelectedPageNumbersChange,_param_onError=param.onError,onError=void 0===_param_onError?noop:_param_onError,_param_onBlurHandler=param.onBlurHandler,onBlurHandler=void 0===_param_onBlurHandler?noop:_param_onBlurHandler,pageLabels=Array.from({length:pageCount},(function(_,i){return(i+1).toString()})),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),2),pageString=_useState[0],setPageString=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),hasError=_useState1[0],setHasError=_useState1[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){selectedPageNumbers&&setPageString(getPageString(selectedPageNumbers))}),[selectedPageNumbers]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setHasError(!!pageNumberError)}),[pageNumberError]);var getPageString=function(selectedPageArray){for(var pagesToPrint="",sortedPages=selectedPageArray.sort((function(a,b){return a-b})),prevIndex=null,i=0;sortedPages.length>i;i++)sortedPages[i+1]===sortedPages[i]+1?prevIndex=null!==prevIndex?prevIndex:sortedPages[i]:null!==prevIndex?(pagesToPrint="".concat(pagesToPrint).concat(prevIndex,"-").concat(sortedPages[i],", "),prevIndex=null):pagesToPrint="".concat(pagesToPrint).concat(sortedPages[i],", ");return pagesToPrint.slice(0,-2)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"PageNumberInput"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"input-wrapper"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({"page-number-input":!0,"page-number-input--error":hasError}),id:"PageNumberInput",type:"text",onChange:function(e){setPageString(e.target.value);var selectedPagesString=e.target.value.replace(/ /g,""),pageNumbersArray=selectedPagesString?(0,helpers_getPageArrayFromString__WEBPACK_IMPORTED_MODULE_2__.A)(selectedPagesString,pageLabels,pageCount,onError):[];onSelectedPageNumbersChange&&onSelectedPageNumbersChange(pageNumbersArray)},onBlur:function(e){var selectedPagesString=e.target.value.replace(/ /g,""),pageNumbersArray=selectedPagesString?(0,helpers_getPageArrayFromString__WEBPACK_IMPORTED_MODULE_2__.A)(selectedPagesString,pageLabels,pageCount,onError):[],pageNumbersString=getPageString(pageNumbersArray);setPageString(pageNumbersString),onBlurHandler&&onBlurHandler(pageNumbersArray)},value:pageString,placeholder,"aria-describedby":hasError?"PageNumberInputError":void 0}),hasError&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Icon__WEBPACK_IMPORTED_MODULE_3__.A,{glyph:"icon-alert"})),hasError&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:"PageNumberInputError",className:"page-number-error"},pageNumberError))}PageNumberInput.propTypes=propTypes;const __WEBPACK_DEFAULT_EXPORT__=PageNumberInput;PageNumberInput.__docgenInfo={description:"",methods:[],displayName:"PageNumberInput",props:{onError:{defaultValue:{value:"() => { }",computed:!1},description:"",type:{name:"func"},required:!1},onBlurHandler:{defaultValue:{value:"() => { }",computed:!1},description:"",type:{name:"func"},required:!1},selectedPageNumbers:{description:"",type:{name:"arrayOf",value:{name:"number"}},required:!1},pageCount:{description:"",type:{name:"number"},required:!1},placeholder:{description:"",type:{name:"string"},required:!1},pageNumberError:{description:"",type:{name:"string"},required:!1},onSelectedPageNumbersChange:{description:"",type:{name:"func"},required:!1}}}},"./src/helpers/getPageArrayFromString.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/index.js");function __WEBPACK_DEFAULT_EXPORT__(customInput,pageLabels){var totalPages=arguments.length>2&&void 0!==arguments[2]?arguments[2]:core__WEBPACK_IMPORTED_MODULE_0__.A.getTotalPages(),onError=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},pagesToPrint=[];if(!customInput){for(var i=1;i<=totalPages;i++)pagesToPrint.push(i);return pagesToPrint}return customInput.split(",").forEach((function(pageGroup){var range=pageGroup.split("-"),isSinglePage=1===range.length,isRangeOfPages=2===range.length;if(isSinglePage){var page=getPageNumber(range[0],pageLabels,onError);pagesToPrint.push(page)}else isRangeOfPages&&addRangeOfPagesTo(pagesToPrint,range,pageLabels,onError)})),pagesToPrint.filter((function(pageNumber,index,pagesToPrint){return pagesToPrint.indexOf(pageNumber)===index&&(pageNumber>0&&pageNumber<=totalPages)})).sort((function(a,b){return a-b}))}var addRangeOfPagesTo=function(pagesToPrint,range,pageLabels,onError){var end,start=getPageNumber(range[0],pageLabels,onError);end=""===range[1]?core__WEBPACK_IMPORTED_MODULE_0__.A.getTotalPages():getPageNumber(range[1],pageLabels,onError);for(var i=start;i<=end;i++)pagesToPrint.push(i)},getPageNumber=function(character,pageLabels,onError){var pageNumber,pageIndex=pageLabels.indexOf(character);return-1===pageIndex?(onError&&onError(character),console.warn("".concat(character," is not a valid page label"))):pageNumber=pageIndex+1,pageNumber}}}]);