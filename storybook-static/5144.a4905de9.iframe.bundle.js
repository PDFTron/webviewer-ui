(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[5144,8001,382,2763,5964,3583],{"./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/utils/domUtils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O1:()=>focusableElementDomString});var focusableElementDomString=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",")},"./node_modules/blob-stream/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var WritableStream=__webpack_require__("?c02f").Writable,util=__webpack_require__("./node_modules/util/util.js"),Blob=__webpack_require__("./node_modules/blob/index.js"),URL=__webpack_require__.g.URL||__webpack_require__.g.webkitURL||__webpack_require__.g.mozURL;function BlobStream(){if(!(this instanceof BlobStream))return new BlobStream;WritableStream.call(this),this._chunks=[],this._blob=null,this.length=0}util.inherits(BlobStream,WritableStream),BlobStream.prototype._write=function(chunk,encoding,callback){chunk instanceof Uint8Array||(chunk=new Uint8Array(chunk)),this.length+=chunk.length,this._chunks.push(chunk),callback()},BlobStream.prototype.toBlob=function(type){return type=type||"application/octet-stream",this._blob||(this._blob=new Blob(this._chunks,{type}),this._chunks=[]),this._blob.type!==type&&(this._blob=new Blob([this._blob],{type})),this._blob},BlobStream.prototype.toBlobURL=function(type){return URL.createObjectURL(this.toBlob(type))},module.exports=BlobStream},"./node_modules/blob/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var BlobBuilder=__webpack_require__.g.BlobBuilder||__webpack_require__.g.WebKitBlobBuilder||__webpack_require__.g.MSBlobBuilder||__webpack_require__.g.MozBlobBuilder,blobSupported=function(){try{return 2===new Blob(["hi"]).size}catch(e){return!1}}(),blobSupportsArrayBufferView=blobSupported&&function(){try{return 2===new Blob([new Uint8Array([1,2])]).size}catch(e){return!1}}(),blobBuilderSupported=BlobBuilder&&BlobBuilder.prototype.append&&BlobBuilder.prototype.getBlob;function mapArrayBufferViews(ary){for(var i=0;i<ary.length;i++){var chunk=ary[i];if(chunk.buffer instanceof ArrayBuffer){var buf=chunk.buffer;if(chunk.byteLength!==buf.byteLength){var copy=new Uint8Array(chunk.byteLength);copy.set(new Uint8Array(buf,chunk.byteOffset,chunk.byteLength)),buf=copy.buffer}ary[i]=buf}}}function BlobBuilderConstructor(ary,options){options=options||{};var bb=new BlobBuilder;mapArrayBufferViews(ary);for(var i=0;i<ary.length;i++)bb.append(ary[i]);return options.type?bb.getBlob(options.type):bb.getBlob()}function BlobConstructor(ary,options){return mapArrayBufferViews(ary),new Blob(ary,options||{})}module.exports=blobSupported?blobSupportsArrayBufferView?__webpack_require__.g.Blob:BlobConstructor:blobBuilderSupported?BlobBuilderConstructor:void 0},"./node_modules/lodash/_baseRange.js":module=>{var nativeCeil=Math.ceil,nativeMax=Math.max;module.exports=function baseRange(start,end,step,fromRight){for(var index=-1,length=nativeMax(nativeCeil((end-start)/(step||1)),0),result=Array(length);length--;)result[fromRight?length:++index]=start,start+=step;return result}},"./node_modules/lodash/_baseTrim.js":(module,__unused_webpack_exports,__webpack_require__)=>{var trimmedEndIndex=__webpack_require__("./node_modules/lodash/_trimmedEndIndex.js"),reTrimStart=/^\s+/;module.exports=function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,""):string}},"./node_modules/lodash/_createRange.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseRange=__webpack_require__("./node_modules/lodash/_baseRange.js"),isIterateeCall=__webpack_require__("./node_modules/lodash/_isIterateeCall.js"),toFinite=__webpack_require__("./node_modules/lodash/toFinite.js");module.exports=function createRange(fromRight){return function(start,end,step){return step&&"number"!=typeof step&&isIterateeCall(start,end,step)&&(end=step=void 0),start=toFinite(start),void 0===end?(end=start,start=0):end=toFinite(end),step=void 0===step?start<end?1:-1:toFinite(step),baseRange(start,end,step,fromRight)}}},"./node_modules/lodash/_isIterateeCall.js":(module,__unused_webpack_exports,__webpack_require__)=>{var eq=__webpack_require__("./node_modules/lodash/eq.js"),isArrayLike=__webpack_require__("./node_modules/lodash/isArrayLike.js"),isIndex=__webpack_require__("./node_modules/lodash/_isIndex.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js");module.exports=function isIterateeCall(value,index,object){if(!isObject(object))return!1;var type=typeof index;return!!("number"==type?isArrayLike(object)&&isIndex(index,object.length):"string"==type&&index in object)&&eq(object[index],value)}},"./node_modules/lodash/_trimmedEndIndex.js":module=>{var reWhitespace=/\s/;module.exports=function trimmedEndIndex(string){for(var index=string.length;index--&&reWhitespace.test(string.charAt(index)););return index}},"./node_modules/lodash/range.js":(module,__unused_webpack_exports,__webpack_require__)=>{var range=__webpack_require__("./node_modules/lodash/_createRange.js")();module.exports=range},"./node_modules/lodash/toFinite.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toNumber=__webpack_require__("./node_modules/lodash/toNumber.js");module.exports=function toFinite(value){return value?Infinity===(value=toNumber(value))||-Infinity===value?17976931348623157e292*(value<0?-1:1):value==value?value:0:0===value?value:0}},"./node_modules/lodash/toNumber.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseTrim=__webpack_require__("./node_modules/lodash/_baseTrim.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),isSymbol=__webpack_require__("./node_modules/lodash/isSymbol.js"),reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=function toNumber(value){if("number"==typeof value)return value;if(isSymbol(value))return NaN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NaN:+value}},"./node_modules/react-swipeable/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hx:()=>Swipeable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var defaultProps={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},initialState={xy:[0,0],swiping:!1,eventData:void 0,start:void 0},LEFT="Left",RIGHT="Right",UP="Up",DOWN="Down",touchStart="touchstart",touchMove="touchmove",touchEnd="touchend",mouseMove="mousemove",mouseUp="mouseup";function rotateXYByAngle(pos,angle){if(0===angle)return pos;var angleInRadians=Math.PI/180*angle;return[pos[0]*Math.cos(angleInRadians)+pos[1]*Math.sin(angleInRadians),pos[1]*Math.cos(angleInRadians)-pos[0]*Math.sin(angleInRadians)]}function getHandlers(set,handlerProps){var onStart=function onStart(event){event.touches&&event.touches.length>1||set((function(state,props){props.trackMouse&&(document.addEventListener(mouseMove,onMove),document.addEventListener(mouseUp,onUp));var _ref=event.touches?event.touches[0]:event,xy=rotateXYByAngle([_ref.clientX,_ref.clientY],props.rotationAngle);return _extends({},state,initialState,{eventData:{initial:[].concat(xy),first:!0},xy,start:event.timeStamp||0})}))},onMove=function onMove(event){set((function(state,props){if(!state.xy[0]||!state.xy[1]||event.touches&&event.touches.length>1)return state;var _ref2=event.touches?event.touches[0]:event,_rotateXYByAngle=rotateXYByAngle([_ref2.clientX,_ref2.clientY],props.rotationAngle),x=_rotateXYByAngle[0],y=_rotateXYByAngle[1],deltaX=state.xy[0]-x,deltaY=state.xy[1]-y,absX=Math.abs(deltaX),absY=Math.abs(deltaY),time=(event.timeStamp||0)-state.start,velocity=Math.sqrt(absX*absX+absY*absY)/(time||1);if(absX<props.delta&&absY<props.delta&&!state.swiping)return state;var dir=function getDirection(absX,absY,deltaX,deltaY){return absX>absY?deltaX>0?LEFT:RIGHT:deltaY>0?UP:DOWN}(absX,absY,deltaX,deltaY),eventData=_extends({},state.eventData,{event,absX,absY,deltaX,deltaY,velocity,dir});props.onSwiping&&props.onSwiping(eventData);var cancelablePageSwipe=!1;return(props.onSwiping||props.onSwiped||props["onSwiped"+dir])&&(cancelablePageSwipe=!0),cancelablePageSwipe&&props.preventDefaultTouchmoveEvent&&props.trackTouch&&event.cancelable&&event.preventDefault(),_extends({},state,{eventData:_extends({},eventData,{first:!1}),swiping:!0})}))},onEnd=function onEnd(event){set((function(state,props){var eventData;return state.swiping&&(eventData=_extends({},state.eventData,{event}),props.onSwiped&&props.onSwiped(eventData),props["onSwiped"+eventData.dir]&&props["onSwiped"+eventData.dir](eventData)),_extends({},state,initialState,{eventData})}))},cleanUpMouse=function cleanUpMouse(){document.removeEventListener(mouseMove,onMove),document.removeEventListener(mouseUp,onUp)},onUp=function onUp(e){cleanUpMouse(),onEnd(e)},attachTouch=function attachTouch(el){if(el&&el.addEventListener){var tls=[[touchStart,onStart],[touchMove,onMove],[touchEnd,onEnd]];return tls.forEach((function(_ref3){var e=_ref3[0],h=_ref3[1];return el.addEventListener(e,h)})),function(){return tls.forEach((function(_ref4){var e=_ref4[0],h=_ref4[1];return el.removeEventListener(e,h)}))}}},output={ref:function onRef(el){null!==el&&set((function(state,props){if(state.el===el)return state;var addState={};return state.el&&state.el!==el&&state.cleanUpTouch&&(state.cleanUpTouch(),addState.cleanUpTouch=null),props.trackTouch&&el&&(addState.cleanUpTouch=attachTouch(el)),_extends({},state,{el},addState)}))}};return handlerProps.trackMouse&&(output.onMouseDown=onStart),[output,attachTouch]}function updateTransientState(state,props,attachTouch){var addState={};return!props.trackTouch&&state.cleanUpTouch?(state.cleanUpTouch(),addState.cleanUpTouch=null):props.trackTouch&&!state.cleanUpTouch&&state.el&&(addState.cleanUpTouch=attachTouch(state.el)),_extends({},state,addState)}var Swipeable=function(_React$PureComponent){function Swipeable(props){var _this;return(_this=_React$PureComponent.call(this,props)||this)._set=function(cb){_this.transientState=cb(_this.transientState,_this.props)},_this.transientState=_extends({},initialState,{type:"class"}),_this}return function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,subClass.__proto__=superClass}(Swipeable,_React$PureComponent),Swipeable.prototype.render=function render(){var _this$props=this.props,className=_this$props.className,style=_this$props.style,_this$props$nodeName=_this$props.nodeName,nodeName=void 0===_this$props$nodeName?"div":_this$props$nodeName,innerRef=_this$props.innerRef,children=_this$props.children,trackMouse=_this$props.trackMouse,_getHandlers=getHandlers(this._set,{trackMouse}),handlers=_getHandlers[0],attachTouch=_getHandlers[1];this.transientState=updateTransientState(this.transientState,this.props,attachTouch);var ref=innerRef?function(el){return innerRef(el),handlers.ref(el)}:handlers.ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(nodeName,_extends({},handlers,{className,style,ref}),children)},Swipeable}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);Swipeable.propTypes={onSwiped:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onSwiping:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onSwipedUp:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onSwipedRight:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onSwipedDown:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onSwipedLeft:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,delta:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,preventDefaultTouchmoveEvent:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,nodeName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,trackMouse:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,trackTouch:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,innerRef:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,rotationAngle:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number},Swipeable.defaultProps=defaultProps}}]);