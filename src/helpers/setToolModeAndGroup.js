import core from 'core';
import toolStylesExist from 'helpers/toolStylesExist';
import actions from 'actions';
import selectors from 'selectors';

export default (store, toolName) => {
  const { dispatch, getState } = store;

  const openElement = selectors.getOpenElements(getState());
  const currentTool = core.getToolMode().name;

  if (currentTool === window.Tools.ToolNames.SIGNATURE && openElement['signatureModal']) {
    // disable changing tool when the signature overlay is opened
    return;
  }

  const toolGroup =
    selectors.getToolButtonObject(getState(), toolName)?.group || '';

  if (toolGroup) {
    dispatch(actions.openElement('toolsOverlay'));
  } else {
    dispatch(actions.closeElement('toolsOverlay'));
  }
  
  const hasToolBeenSelected = currentTool === toolName;
  if (hasToolBeenSelected && toolStylesExist(toolName)) {
    dispatch(actions.toggleElement('toolStylePopup'));
    return;
  }

  if (
    window.innerWidth <= 900 &&
    // TODO: revisit
    toolName !== 'Pan' &&
    toolName !== 'AnnotationEdit'
  ) {
    dispatch(actions.setActiveHeaderGroup('tools'));
  }

  dispatch(actions.closeElement('toolStylePopup'));
  core.setToolMode(toolName);
  dispatch(actions.setActiveToolGroup(toolGroup));
};
