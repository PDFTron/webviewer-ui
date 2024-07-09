(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[8335],{"./src/components/CreatePortfolioModal/CreatePortfolioModal.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_CreatePortfolioModal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CreatePortfolioModal/CreatePortfolioModal.js"),redux__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/redux/es/redux.js"),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-redux/es/index.js"),constants_dataElement__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/constants/dataElement.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/CreatePortfolioModal",component:_CreatePortfolioModal__WEBPACK_IMPORTED_MODULE_1__.A};var getStore=function(){var initialState={viewer:{openElements:_define_property({},constants_dataElement__WEBPACK_IMPORTED_MODULE_3__.A.CREATE_PORTFOLIO_MODAL,!0),disabledElements:{},tab:_define_property({},constants_dataElement__WEBPACK_IMPORTED_MODULE_3__.A.CREATE_PORTFOLIO_MODAL,constants_dataElement__WEBPACK_IMPORTED_MODULE_3__.A.PORTFOLIO_UPLOAD_FILES_TAB),customElementOverrides:{}}};return(0,redux__WEBPACK_IMPORTED_MODULE_4__.y$)((function rootReducer(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState}))};function Basic(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Kq,{store:getStore()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CreatePortfolioModal__WEBPACK_IMPORTED_MODULE_1__.A,null))}Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"function Basic() {\n  return <Provider store={getStore()}>\n      <CreatePortfolioModal />\n    </Provider>;\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/FilePicker/FilePicker.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.file-picker-component{width:100%;height:100%;position:relative;border-radius:4px;background:var(--signature-draw-background);border:1px solid var(--modal-stroke-and-border);padding:8px}.file-picker-component .file-picker-container{position:relative;border:1px dashed var(--modal-stroke-and-border);display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}.file-picker-component .file-picker-container.dragging{background:var(--file-picker-drop-background);border:1px dashed var(--file-picker-drop-border)}.file-picker-component .file-picker-container .file-picker-body{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;position:absolute;color:var(--faded-text)}.file-picker-component .file-picker-container .file-picker-body .label-separator{margin:10px}.file-picker-component .file-picker-container .file-picker-body .modal-btn-file{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer}.file-picker-component .file-picker-container .file-picker-body .modal-btn-file:hover{border-color:var(--blue-6);color:var(--blue-6)}.file-picker-component .file-picker-container .file-picker-body .Icon{width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;margin-bottom:15px}.file-picker-component .file-picker-container .file-picker-body .Icon svg{height:45px}.file-picker-component .file-picker-container .file-picker-body .file-picker-separator{margin:10px}.file-picker-component .file-picker-container .file-picker-error{position:absolute;color:red;bottom:0;right:0;margin:0 5px 5px 0}",""]),exports.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},module.exports=exports},"./node_modules/react-swipeable/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hx:()=>Swipeable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var defaultProps={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},initialState={xy:[0,0],swiping:!1,eventData:void 0,start:void 0},LEFT="Left",RIGHT="Right",UP="Up",DOWN="Down",touchStart="touchstart",touchMove="touchmove",touchEnd="touchend",mouseMove="mousemove",mouseUp="mouseup";function rotateXYByAngle(pos,angle){if(0===angle)return pos;var angleInRadians=Math.PI/180*angle;return[pos[0]*Math.cos(angleInRadians)+pos[1]*Math.sin(angleInRadians),pos[1]*Math.cos(angleInRadians)-pos[0]*Math.sin(angleInRadians)]}function getHandlers(set,handlerProps){var onStart=function onStart(event){event.touches&&event.touches.length>1||set((function(state,props){props.trackMouse&&(document.addEventListener(mouseMove,onMove),document.addEventListener(mouseUp,onUp));var _ref=event.touches?event.touches[0]:event,xy=rotateXYByAngle([_ref.clientX,_ref.clientY],props.rotationAngle);return _extends({},state,initialState,{eventData:{initial:[].concat(xy),first:!0},xy,start:event.timeStamp||0})}))},onMove=function onMove(event){set((function(state,props){if(!state.xy[0]||!state.xy[1]||event.touches&&event.touches.length>1)return state;var _ref2=event.touches?event.touches[0]:event,_rotateXYByAngle=rotateXYByAngle([_ref2.clientX,_ref2.clientY],props.rotationAngle),x=_rotateXYByAngle[0],y=_rotateXYByAngle[1],deltaX=state.xy[0]-x,deltaY=state.xy[1]-y,absX=Math.abs(deltaX),absY=Math.abs(deltaY),time=(event.timeStamp||0)-state.start,velocity=Math.sqrt(absX*absX+absY*absY)/(time||1);if(absX<props.delta&&absY<props.delta&&!state.swiping)return state;var dir=function getDirection(absX,absY,deltaX,deltaY){return absX>absY?deltaX>0?LEFT:RIGHT:deltaY>0?UP:DOWN}(absX,absY,deltaX,deltaY),eventData=_extends({},state.eventData,{event,absX,absY,deltaX,deltaY,velocity,dir});props.onSwiping&&props.onSwiping(eventData);var cancelablePageSwipe=!1;return(props.onSwiping||props.onSwiped||props["onSwiped"+dir])&&(cancelablePageSwipe=!0),cancelablePageSwipe&&props.preventDefaultTouchmoveEvent&&props.trackTouch&&event.cancelable&&event.preventDefault(),_extends({},state,{eventData:_extends({},eventData,{first:!1}),swiping:!0})}))},onEnd=function onEnd(event){set((function(state,props){var eventData;return state.swiping&&(eventData=_extends({},state.eventData,{event}),props.onSwiped&&props.onSwiped(eventData),props["onSwiped"+eventData.dir]&&props["onSwiped"+eventData.dir](eventData)),_extends({},state,initialState,{eventData})}))},cleanUpMouse=function cleanUpMouse(){document.removeEventListener(mouseMove,onMove),document.removeEventListener(mouseUp,onUp)},onUp=function onUp(e){cleanUpMouse(),onEnd(e)},attachTouch=function attachTouch(el){if(el&&el.addEventListener){var tls=[[touchStart,onStart],[touchMove,onMove],[touchEnd,onEnd]];return tls.forEach((function(_ref3){var e=_ref3[0],h=_ref3[1];return el.addEventListener(e,h)})),function(){return tls.forEach((function(_ref4){var e=_ref4[0],h=_ref4[1];return el.removeEventListener(e,h)}))}}},output={ref:function onRef(el){null!==el&&set((function(state,props){if(state.el===el)return state;var addState={};return state.el&&state.el!==el&&state.cleanUpTouch&&(state.cleanUpTouch(),addState.cleanUpTouch=null),props.trackTouch&&el&&(addState.cleanUpTouch=attachTouch(el)),_extends({},state,{el},addState)}))}};return handlerProps.trackMouse&&(output.onMouseDown=onStart),[output,attachTouch]}function updateTransientState(state,props,attachTouch){var addState={};return!props.trackTouch&&state.cleanUpTouch?(state.cleanUpTouch(),addState.cleanUpTouch=null):props.trackTouch&&!state.cleanUpTouch&&state.el&&(addState.cleanUpTouch=attachTouch(state.el)),_extends({},state,addState)}var Swipeable=function(_React$PureComponent){function Swipeable(props){var _this;return(_this=_React$PureComponent.call(this,props)||this)._set=function(cb){_this.transientState=cb(_this.transientState,_this.props)},_this.transientState=_extends({},initialState,{type:"class"}),_this}return function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,subClass.__proto__=superClass}(Swipeable,_React$PureComponent),Swipeable.prototype.render=function render(){var _this$props=this.props,className=_this$props.className,style=_this$props.style,_this$props$nodeName=_this$props.nodeName,nodeName=void 0===_this$props$nodeName?"div":_this$props$nodeName,innerRef=_this$props.innerRef,children=_this$props.children,trackMouse=_this$props.trackMouse,_getHandlers=getHandlers(this._set,{trackMouse}),handlers=_getHandlers[0],attachTouch=_getHandlers[1];this.transientState=updateTransientState(this.transientState,this.props,attachTouch);var ref=innerRef?function(el){return innerRef(el),handlers.ref(el)}:handlers.ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(nodeName,_extends({},handlers,{className,style,ref}),children)},Swipeable}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);Swipeable.propTypes={onSwiped:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onSwiping:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onSwipedUp:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onSwipedRight:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onSwipedDown:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onSwipedLeft:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,delta:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,preventDefaultTouchmoveEvent:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,nodeName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,trackMouse:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,trackTouch:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,innerRef:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,rotationAngle:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number},Swipeable.defaultProps=defaultProps},"./src/components/FilePicker/FilePicker.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/FilePicker/FilePicker.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/FilePicker/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>components_FilePicker});var react=__webpack_require__("./node_modules/react/index.js"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),Icon=__webpack_require__("./src/components/Icon/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),device=__webpack_require__("./src/helpers/device.js");__webpack_require__("./src/components/FilePicker/FilePicker.scss");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var FilePicker_FilePicker=function(param){var _ref,_param_onChange=param.onChange,onChange=void 0===_param_onChange?function(){}:_param_onChange,_param_onDrop=param.onDrop,onDrop=void 0===_param_onDrop?function(){}:_param_onDrop,_param_shouldShowIcon=param.shouldShowIcon,shouldShowIcon=void 0!==_param_shouldShowIcon&&_param_shouldShowIcon,acceptFormats=param.acceptFormats,_param_allowMultiple=param.allowMultiple,allowMultiple=void 0!==_param_allowMultiple&&_param_allowMultiple,_param_errorMessage=param.errorMessage,errorMessage=void 0===_param_errorMessage?"":_param_errorMessage,t=_sliced_to_array((0,useTranslation.B)(),1)[0],_useState=_sliced_to_array((0,react.useState)(!1),2),isDragging=_useState[0],setIsDragging=_useState[1],fileInputRef=(0,react.useRef)(null),onClick=function(){var _fileInputRef_current;null==fileInputRef||null===(_fileInputRef_current=fileInputRef.current)||void 0===_fileInputRef_current||_fileInputRef_current.click()},handleFileDrop=(_ref=function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}((function(e){var files;return _ts_generator(this,(function(_state){return e.preventDefault(),setIsDragging(!1),(files=e.dataTransfer.files).length>0&&onDrop(Array.from(files)),[2]}))})),function handleFileDrop(e){return _ref.apply(this,arguments)});return react.createElement("div",{className:"file-picker-component"},react.createElement("div",{className:classnames_default()("file-picker-container",{dragging:isDragging}),onDragEnter:function(e){e.preventDefault(),setIsDragging(!0)},onDragLeave:function(e){e.preventDefault(),e.target.parentNode.contains(e.relatedTarget)||setIsDragging(!1)},onDragOver:function(e){e.preventDefault()},onDrop:handleFileDrop,onDragExit:function(e){e.preventDefault(),setIsDragging(!1)}},react.createElement("div",{className:"file-picker-body"},shouldShowIcon&&react.createElement(Icon.A,{glyph:"icon-open-folder"}),(0,device.Fr)()?react.createElement("div",{className:"file-picker-separator"},t("filePicker.selectFile")):react.createElement(react.Fragment,null,react.createElement("div",null,t("filePicker.dragAndDrop")),react.createElement("div",{className:"file-picker-separator"},t("filePicker.or"))),react.createElement("div",{className:"md-row modal-btn-file",tabIndex:"0",onKeyDown:function(event){"Enter"===event.key&&onClick()},onClick},t("action.browse"),react.createElement("input",{ref:fileInputRef,multiple:allowMultiple,style:{display:"none"},type:"file",accept:acceptFormats,onChange:function(event){var files;(files=event.target.files).length>0&&onChange(Array.from(files)),event.target.value=null}}))),errorMessage&&react.createElement("div",{className:"file-picker-error"},errorMessage)))};const components_FilePicker_FilePicker=FilePicker_FilePicker;FilePicker_FilePicker.__docgenInfo={description:"",methods:[],displayName:"FilePicker",props:{onChange:{defaultValue:{value:"() => { }",computed:!1},required:!1},onDrop:{defaultValue:{value:"() => { }",computed:!1},required:!1},shouldShowIcon:{defaultValue:{value:"false",computed:!1},required:!1},allowMultiple:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:"''",computed:!1},required:!1}}};const components_FilePicker=components_FilePicker_FilePicker;components_FilePicker_FilePicker.__docgenInfo={description:"",methods:[],displayName:"FilePicker",props:{onChange:{defaultValue:{value:"() => { }",computed:!1},required:!1},onDrop:{defaultValue:{value:"() => { }",computed:!1},required:!1},shouldShowIcon:{defaultValue:{value:"false",computed:!1},required:!1},allowMultiple:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:"''",computed:!1},required:!1}}}},"./src/components/PasswordModal/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,setCancelPasswordCheckCallback:()=>_PasswordModal__WEBPACK_IMPORTED_MODULE_0__.Pm,setCheckPasswordFunction:()=>_PasswordModal__WEBPACK_IMPORTED_MODULE_0__.mw});var _PasswordModal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/PasswordModal/PasswordModal.js");const __WEBPACK_DEFAULT_EXPORT__=_PasswordModal__WEBPACK_IMPORTED_MODULE_0__.Ay;_PasswordModal__WEBPACK_IMPORTED_MODULE_0__.Ay.__docgenInfo={description:"",methods:[],displayName:"PasswordModal"}},"./src/components/Tabs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{oz:()=>Tab,tu:()=>TabHeader,Kp:()=>TabPanel,tU:()=>Tabs});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),actions=__webpack_require__("./src/redux/actions/index.js"),selectors=__webpack_require__("./src/redux/selectors/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var TabsContext=react.createContext(),Tabs=react.memo((function(props){return react.createElement(TabsContext.Provider,{value:props.id},props.children)}));Tabs.displayName="Tabs",Tabs.propTypes={id:prop_types_default().string.isRequired,children:prop_types_default().node.isRequired};var Tab=function(param){var obj,key,value,children=param.children,dataElement=param.dataElement,id=(0,react.useContext)(TabsContext),_useSelector=_sliced_to_array((0,es.d4)((function(state){return[selectors.A.isElementDisabled(state,dataElement),selectors.A.getSelectedTab(state,id)===dataElement]}),es.bN),2),isDisabled=_useSelector[0],isSelected=_useSelector[1],dispatch=(0,es.wA)(),propsToInject={className:classnames_default()((obj={selected:isSelected},key=children.props.className,value=!!children.props.className,key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj)),onClick:function(){var _children_props_onClick,_children_props;null===(_children_props_onClick=(_children_props=children.props).onClick)||void 0===_children_props_onClick||_children_props_onClick.call(_children_props),dispatch(actions.A.setSelectedTab(id,dataElement))}},type=function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}(children.type.type||children.type);return propsToInject="function"===type?Object.assign(propsToInject,{isTabSelected:isSelected,dataElement}):Object.assign(propsToInject,{"data-element":dataElement}),isDisabled?null:react.cloneElement(children,propsToInject)};Tab.propTypes={children:prop_types_default().node.isRequired,index:prop_types_default().number,dataElement:prop_types_default().string.isRequired};var TabHeader=function(param){var dataElement=param.dataElement,children=param.children,isDisabled=_sliced_to_array((0,es.d4)((function(state){return[selectors.A.isElementDisabled(state,dataElement)]})),1)[0];return react.createElement("div",{"data-element":dataElement},isDisabled?null:children)};TabHeader.propTypes={children:prop_types_default().node.isRequired,dataElement:prop_types_default().string.isRequired};var TabPanel=function(param){var children=param.children,dataElement=param.dataElement,id=(0,react.useContext)(TabsContext),_useSelector=_sliced_to_array((0,es.d4)((function(state){return[selectors.A.isElementDisabled(state,dataElement),selectors.A.getSelectedTab(state,id).includes(dataElement)]}),es.bN),2),isDisabled=_useSelector[0],isSelected=_useSelector[1];return isDisabled?null:react.createElement("div",{className:"tab-panel","data-element":dataElement,style:{display:isSelected?"":"none"}},"function"==typeof children.type?react.cloneElement(children,{isTabPanelSelected:isSelected}):children)};TabPanel.propTypes={children:prop_types_default().node.isRequired,dataElement:prop_types_default().string.isRequired},Tabs.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{id:{description:"",type:{name:"string"},required:!0},children:{description:"",type:{name:"node"},required:!0}}},Tab.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{children:{description:"",type:{name:"node"},required:!0},index:{description:"",type:{name:"number"},required:!1},dataElement:{description:"",type:{name:"string"},required:!0}}},TabHeader.__docgenInfo={description:"",methods:[],displayName:"TabHeader",props:{children:{description:"",type:{name:"node"},required:!0},dataElement:{description:"",type:{name:"string"},required:!0}}},TabPanel.__docgenInfo={description:"",methods:[],displayName:"TabPanel",props:{children:{description:"",type:{name:"node"},required:!0},dataElement:{description:"",type:{name:"string"},required:!0}}}},"./src/constants/featureFlags.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={CUSTOMIZABLE_UI:"customizableUI"}},"./src/helpers/getHashParameters.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var helpers_getRootNode__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/helpers/getRootNode.js");var paramCorrections={d:"initialDoc",filepicker:"showLocalFilePicker",pdfnet:"fullAPI",user:"annotationUser",a:"enableAnnotations",azureWorkaround:"enableAzureWorkaround",admin:"isAdminUser",l:"licenseKey",pdf:"backendType",office:"backendType",legacyOffice:"backendType",p:"externalPath",did:"documentId",toolbar:"showToolbarControl"},paramsToStringify=["initialDoc"];const __WEBPACK_DEFAULT_EXPORT__=window.isApryseWebViewerWebComponent?function(param){var defaultValue=arguments.length>1&&void 0!==arguments[1]&&arguments[1],defaultType=void 0===defaultValue?"undefined":function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}(defaultValue),correctedParam=paramCorrections[param]?paramCorrections[param]:param,val=(0,helpers_getRootNode__WEBPACK_IMPORTED_MODULE_0__.Iv)().getAttribute(correctedParam);if("initialDoc"===correctedParam&&val&&(val=val.split(","))&&1===val.length&&(val=val[0]),val&&paramsToStringify.includes(correctedParam))return JSON.stringify(val);if("boolean"===defaultType&&!function(val){return void 0===val}(val)){if("true"===val||"1"===val)return!0;if("false"===val||"0"===val)return!1}return val||defaultValue}:window.Core.getHashParameter},"./src/helpers/loadDocument.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var components_PasswordModal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/PasswordModal/index.js"),core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/core/index.js"),helpers_fireEvent__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/helpers/fireEvent.js"),helpers_getHashParameters__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/getHashParameters.js"),actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/redux/actions/index.js"),constants_dataElement__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/constants/dataElement.js"),constants_featureFlags__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/constants/featureFlags.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function __WEBPACK_DEFAULT_EXPORT__(dispatch,src){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},documentViewerKey=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,isCustomizableUIEnabled="beta"===(0,helpers_getHashParameters__WEBPACK_IMPORTED_MODULE_3__.A)("ui","default");core__WEBPACK_IMPORTED_MODULE_1__.A.closeDocument(documentViewerKey),options=function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},getDefaultOptions(),options),options.docId=options.docId||options.documentId||null;var customLoadingProgressFunction=options.onLoadingProgress;if(options.onLoadingProgress=function(percent){customLoadingProgressFunction&&customLoadingProgressFunction(percent),dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.A.setLoadingProgress(percent))},options.password=transformPasswordOption(options.password,dispatch),options.xodOptions=extractXodOptions(options),"onError"in options){var userDefinedOnErrorCallback=options.onError;options.onError=function(error){(0,helpers_fireEvent__WEBPACK_IMPORTED_MODULE_2__.R)(error),userDefinedOnErrorCallback(error)}}else options.onError=helpers_fireEvent__WEBPACK_IMPORTED_MODULE_2__.R;dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.A.closeElement(constants_dataElement__WEBPACK_IMPORTED_MODULE_5__.A.PASSWORD_MODAL)),options.enableOfficeEditing&&isCustomizableUIEnabled&&dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.A.disableFeatureFlag(constants_featureFlags__WEBPACK_IMPORTED_MODULE_6__.A.CUSTOMIZABLE_UI)),options.enableOfficeEditing&&!src?core__WEBPACK_IMPORTED_MODULE_1__.A.loadBlankOfficeEditorDocument(options):core__WEBPACK_IMPORTED_MODULE_1__.A.loadDocument(src,options,documentViewerKey).catch((function(){})),dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.A.openElement(constants_dataElement__WEBPACK_IMPORTED_MODULE_5__.A.PROGRESS_MODAL))}var getDefaultOptions=function(){return{startOffline:(0,helpers_getHashParameters__WEBPACK_IMPORTED_MODULE_3__.A)("startOffline",!1),azureWorkaround:(0,helpers_getHashParameters__WEBPACK_IMPORTED_MODULE_3__.A)("azureWorkaround",!1),webviewerServerURL:(0,helpers_getHashParameters__WEBPACK_IMPORTED_MODULE_3__.A)("webviewerServerURL",""),fallbackToClientSide:(0,helpers_getHashParameters__WEBPACK_IMPORTED_MODULE_3__.A)("fallbackToClientSide",!1),singleServerMode:(0,helpers_getHashParameters__WEBPACK_IMPORTED_MODULE_3__.A)("singleServerMode",!1),forceClientSideInit:(0,helpers_getHashParameters__WEBPACK_IMPORTED_MODULE_3__.A)("forceClientSideInit",!1),disableWebsockets:(0,helpers_getHashParameters__WEBPACK_IMPORTED_MODULE_3__.A)("disableWebsockets",!1),cacheKey:(0,helpers_getHashParameters__WEBPACK_IMPORTED_MODULE_3__.A)("cacheKey",null),officeOptions:JSON.parse((0,helpers_getHashParameters__WEBPACK_IMPORTED_MODULE_3__.A)("officeOptions",null)),rasterizerOptions:JSON.parse((0,helpers_getHashParameters__WEBPACK_IMPORTED_MODULE_3__.A)("rasterizerOptions",null)),streaming:(0,helpers_getHashParameters__WEBPACK_IMPORTED_MODULE_3__.A)("streaming",null),useDownloader:(0,helpers_getHashParameters__WEBPACK_IMPORTED_MODULE_3__.A)("useDownloader",!0),backendType:(0,helpers_getHashParameters__WEBPACK_IMPORTED_MODULE_3__.A)("pdf",null),loadAsPDF:(0,helpers_getHashParameters__WEBPACK_IMPORTED_MODULE_3__.A)("loadAsPDF",null),enableOfficeEditing:(0,helpers_getHashParameters__WEBPACK_IMPORTED_MODULE_3__.A)("enableOfficeEditing",!1)}},transformPasswordOption=function(password,dispatch){var passwordChecked=!1,attempt=0;return function(checkPassword){dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.A.setPasswordAttempts(attempt++)),password||(password=""),passwordChecked||"string"!=typeof password?(passwordChecked&&console.error("Wrong password has been passed as an argument. WebViewer will open password modal."),(0,components_PasswordModal__WEBPACK_IMPORTED_MODULE_0__.setCheckPasswordFunction)(checkPassword),dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.A.openElement(constants_dataElement__WEBPACK_IMPORTED_MODULE_5__.A.PASSWORD_MODAL))):(checkPassword(password),passwordChecked=!0)}},extractXodOptions=function(options){var xodOptions=options.xodOptions||{};return options.decryptOptions&&(xodOptions.decrypt=window.Core.Encryption.decrypt,xodOptions.decryptOptions=options.decryptOptions),options.decrypt&&(xodOptions.decrypt=options.decrypt),null!==options.streaming&&(xodOptions.streaming="true"===options.streaming||!0===options.streaming),options.azureWorkaround&&(xodOptions.azureWorkaround=options.azureWorkaround),options.startOffline&&(xodOptions.startOffline=options.startOffline),xodOptions}}}]);