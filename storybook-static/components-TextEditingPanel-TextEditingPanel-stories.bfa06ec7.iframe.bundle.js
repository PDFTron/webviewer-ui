"use strict";(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[4735],{"./src/components/TextEditingPanel/TextEditingPanel.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,LeftSide:()=>LeftSide,TextEditingPanelStoryWrapper:()=>TextEditingPanelStoryWrapper,TextEditingUndoRedo:()=>TextEditingUndoRedo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),_TextEditingPanel__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/TextEditingPanel/TextEditingPanel.js"),components_RightPanel__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/RightPanel/index.js"),src_redux_initialState__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/redux/initialState.js"),helpers_storybookHelper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/helpers/storybookHelper.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}var noop=function(){};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/TextEditingPanel",component:_TextEditingPanel__WEBPACK_IMPORTED_MODULE_2__.A,includeStories:["Basic","TextEditingUndoRedo","LeftSide"],parameters:{customizableUI:!0}};var textEditingPanelInitialState=_object_spread_props(_object_spread({},src_redux_initialState__WEBPACK_IMPORTED_MODULE_4__.A),{viewer:_object_spread_props(_object_spread({},src_redux_initialState__WEBPACK_IMPORTED_MODULE_4__.A.viewer),{openElements:{header:!0,textEditingPanel:!0},panelWidths:{textEditingPanel:330},lastPickedToolForGroupedItems:{annotateGroupedItems:"AnnotationCreateFreeText"},activeGroupedItems:["annotateGroupedItems"],lastPickedToolAndGroup:{tool:"AnnotationCreateFreeText",group:["annotateGroupedItems"]}}),featureFlags:{customizableUI:!1}}),basicProps={currentWidth:330,opacity:100,format:{bold:!1,italic:!1,underline:!1},handlePropertyChange:noop,handleTextFormatChange:noop,textEditProperties:{},handleColorChange:noop,rgbColor:{toHexString:function(){return"#FF0000"}}},TextEditingPanelStoryWrapper=function(param){var children=param.children;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Kq,{store:(0,helpers_storybookHelper__WEBPACK_IMPORTED_MODULE_5__.y$)(textEditingPanelInitialState)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_RightPanel__WEBPACK_IMPORTED_MODULE_3__.A,{dataElement:"textEditingPanel",onResize:noop},children))},Basic=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TextEditingPanelStoryWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"Panel TextEditingPanel",style:{width:"330px",minWidth:"330px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextEditingPanel__WEBPACK_IMPORTED_MODULE_2__.A,basicProps)))},TextEditingUndoRedo=function(){var undoRedoProps={currentWidth:330,opacity:100,format:{bold:!1,italic:!1,underline:!1},handlePropertyChange:noop,handleTextFormatChange:noop,textEditProperties:{},handleColorChange:noop,undoRedoProperties:{canUndo:!0,canRedo:!0},rgbColor:{toHexString:function(){return"#FF0000"}}};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TextEditingPanelStoryWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"Panel TextEditingPanel",style:{width:"330px",minWidth:"330px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextEditingPanel__WEBPACK_IMPORTED_MODULE_2__.A,undoRedoProps)))},LeftSide=function(){var stateTextEditingPanelOnLeft=_object_spread_props(_object_spread({},src_redux_initialState__WEBPACK_IMPORTED_MODULE_4__.A),{viewer:_object_spread_props(_object_spread({},src_redux_initialState__WEBPACK_IMPORTED_MODULE_4__.A.viewer),{isInDesktopOnlyMode:!0,genericPanels:[{dataElement:"panel1",render:"textEditingPanel",location:"left"}],openElements:_object_spread_props(_object_spread({},src_redux_initialState__WEBPACK_IMPORTED_MODULE_4__.A.viewer.openElements),{contextMenuPopup:!1,panel1:!0}),lastPickedToolForGroupedItems:{annotateGroupedItems:"AnnotationCreateFreeText"},activeGroupedItems:["annotateGroupedItems"],activeCustomRibbon:"toolbarGroup-Annotate",lastPickedToolAndGroup:{tool:"AnnotationCreateFreeText",group:["annotateGroupedItems","annotateToolsGroupedItems"]},activeToolName:"AnnotationCreateFreeText"}),featureFlags:{customizableUI:!0}});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(helpers_storybookHelper__WEBPACK_IMPORTED_MODULE_5__.os,{initialState:stateTextEditingPanelOnLeft})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"() => {\n  return <TextEditingPanelStoryWrapper>\n      <div className=\"Panel TextEditingPanel\" style={{\n      width: '330px',\n      minWidth: '330px'\n    }}>\n        <TextEditingPanel {...basicProps} />\n      </div>\n    </TextEditingPanelStoryWrapper>;\n}",...Basic.parameters?.docs?.source}}},TextEditingUndoRedo.parameters={...TextEditingUndoRedo.parameters,docs:{...TextEditingUndoRedo.parameters?.docs,source:{originalSource:"() => {\n  const undoRedoProps = {\n    currentWidth: 330,\n    opacity: 100,\n    format: {\n      bold: false,\n      italic: false,\n      underline: false\n    },\n    handlePropertyChange: noop,\n    handleTextFormatChange: noop,\n    textEditProperties: {},\n    handleColorChange: noop,\n    undoRedoProperties: {\n      canUndo: true,\n      canRedo: true\n    },\n    rgbColor: {\n      toHexString: () => {\n        // eslint-disable-next-line custom/no-hex-colors\n        return '#FF0000';\n      }\n    }\n  };\n  return <TextEditingPanelStoryWrapper>\n      <div className=\"Panel TextEditingPanel\" style={{\n      width: '330px',\n      minWidth: '330px'\n    }}>\n        <TextEditingPanel {...undoRedoProps} />\n      </div>\n    </TextEditingPanelStoryWrapper>;\n}",...TextEditingUndoRedo.parameters?.docs?.source}}},LeftSide.parameters={...LeftSide.parameters,docs:{...LeftSide.parameters?.docs,source:{originalSource:"() => {\n  const stateTextEditingPanelOnLeft = {\n    ...initialState,\n    viewer: {\n      ...initialState.viewer,\n      isInDesktopOnlyMode: true,\n      genericPanels: [{\n        dataElement: 'panel1',\n        render: 'textEditingPanel',\n        location: 'left'\n      }],\n      openElements: {\n        ...initialState.viewer.openElements,\n        contextMenuPopup: false,\n        panel1: true\n      },\n      lastPickedToolForGroupedItems: {\n        'annotateGroupedItems': 'AnnotationCreateFreeText'\n      },\n      activeGroupedItems: ['annotateGroupedItems'],\n      activeCustomRibbon: 'toolbarGroup-Annotate',\n      lastPickedToolAndGroup: {\n        tool: 'AnnotationCreateFreeText',\n        group: ['annotateGroupedItems', 'annotateToolsGroupedItems']\n      },\n      activeToolName: 'AnnotationCreateFreeText'\n    },\n    featureFlags: {\n      customizableUI: true\n    }\n  };\n  return <MockApp initialState={stateTextEditingPanelOnLeft} />;\n}",...LeftSide.parameters?.docs?.source}}};const __namedExportsOrder=["TextEditingPanelStoryWrapper","Basic","TextEditingUndoRedo","LeftSide"]},"./src/helpers/storybookHelper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xu:()=>createTemplate,os:()=>MockApp,y$:()=>createStore});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),components_App__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/App/index.js"),reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/redux/reducers/rootReducer.js"),src_redux_initialState__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/redux/initialState.js"),src_redux_modularComponents__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/redux/modularComponents.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}var noop=function(){},createStore=function(preloadedState){return(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__.U1)({reducer:reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__.A,preloadedState,middleware:function(getDefaultMiddleware){return getDefaultMiddleware({serializableCheck:!1})}})},MockApp=function(param){var initialState=param.initialState;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Kq,{store:createStore(initialState)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_App__WEBPACK_IMPORTED_MODULE_2__.A,{removeEventHandlers:noop}))};MockApp.propTypes={initialState:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object.isRequired};var BasicAppTemplate=function(args){var isMultiTab=(null==args?void 0:args.isMultiTab)||!1,stateWithHeaders=_object_spread_props(_object_spread({},src_redux_initialState__WEBPACK_IMPORTED_MODULE_4__.A),{viewer:_object_spread_props(_object_spread({},src_redux_initialState__WEBPACK_IMPORTED_MODULE_4__.A.viewer),{modularHeaders:args.headers,modularComponents:args.components,flyoutMap:args.flyoutMap,openElements:{},genericPanels:src_redux_modularComponents__WEBPACK_IMPORTED_MODULE_5__.$d,activeGroupedItems:["annotateGroupedItems"],lastPickedToolForGroupedItems:{annotateGroupedItems:"AnnotationCreateTextUnderline"},activeCustomRibbon:"annotations-ribbon-item",lastPickedToolAndGroup:{tool:"AnnotationCreateTextUnderline",group:["annotateGroupedItems"]},activeToolName:"AnnotationCreateTextUnderline",isMultiTab,tabs:isMultiTab?[{id:1,src:"file1.pdf",options:{filename:"Title A.pdf"}},{id:2,src:"file2.docx",options:{filename:"Title B.docx"}},{id:3,src:"file3.pptx",options:{filename:"Selected Document.pptx"}}]:[],activeTab:3}),featureFlags:{customizableUI:!0}});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(MockApp,{initialState:stateWithHeaders})},createTemplate=function(param){var _param_headers=param.headers,headers=void 0===_param_headers?{}:_param_headers,_param_components=param.components,components=void 0===_param_components?{}:_param_components,_param_flyoutMap=param.flyoutMap,flyoutMap=void 0===_param_flyoutMap?{}:_param_flyoutMap,_param_isMultiTab=param.isMultiTab,isMultiTab=void 0!==_param_isMultiTab&&_param_isMultiTab,template=BasicAppTemplate.bind({});return template.args={headers,components,flyoutMap,isMultiTab},template.parameters={layout:"fullscreen",customizableUI:!0},template};MockApp.__docgenInfo={description:"",methods:[],displayName:"MockApp",props:{initialState:{description:"",type:{name:"object"},required:!0}}}}}]);