import core from 'core';
import getToolStyles from 'helpers/getToolStyles';
import { mapAnnotationToToolName } from 'constants/map';
import actions from 'actions';

export default (dispatch, annotationConstructor, activeDocumentViewerKey = 1) => {
  const annotations = createTextAnnotation(annotationConstructor, activeDocumentViewerKey);

  core.clearSelection(activeDocumentViewerKey);
  core.addAnnotations(annotations, activeDocumentViewerKey);
  core.selectAnnotations(annotations, activeDocumentViewerKey);
  dispatch(actions.closeElement('textPopup'));
};


const createTextAnnotation = (annotationConstructor, activeDocumentViewerKey = 1) => {
  const annotations = [];
  const quads = core.getSelectedTextQuads(activeDocumentViewerKey);

  Object.keys(quads).forEach((pageNumber) => {
    pageNumber = parseInt(pageNumber, 10);
    const annotation = createAnnotation(annotationConstructor, pageNumber, quads);

    if (window.Core.Tools.TextAnnotationCreateTool.AUTO_SET_TEXT && !(annotation instanceof window.Core.Annotations.RedactionAnnotation)) {
      annotation.setContents(core.getSelectedText(activeDocumentViewerKey));
    }

    annotation.setCustomData('trn-annot-preview', core.getSelectedText(activeDocumentViewerKey));

    if (annotation instanceof window.Core.Annotations.RedactionAnnotation) {
      setRedactionStyle(annotation);
      annotation.IsText = true;
    }

    setAnnotationStyle(annotation);

    annotations.push(annotation);
  });

  return annotations;
};

const createAnnotation = (annotationConstructor, pageNumber, quads) => {
  const annotation = new annotationConstructor();

  annotation.PageNumber = pageNumber;
  annotation.Quads = quads[pageNumber];
  annotation.Author = core.getCurrentUser();
  return annotation;
};

const setAnnotationStyle = (annotation) => {
  const toolName = mapAnnotationToToolName(annotation);

  if (toolName) {
    const newStyles = getToolStyles(toolName);
    Object.keys(newStyles).forEach((property) => {
      annotation[property] = newStyles[property];
    });
  }
};

const setRedactionStyle = (annotation) => {
  const { AnnotationCreateRedaction: { defaults: style = {} } } = core.getToolModeMap();

  if (style) {
    if (style.StrokeColor) {
      const color = style.StrokeColor;
      annotation.StrokeColor = new window.Core.Annotations.Color(color['R'], color['G'], color['B'], color['A']);
    }
    if (style.StrokeThickness) {
      annotation.StrokeThickness = style['StrokeThickness'];
    }
    if (style.FillColor) {
      const fillColor = style.FillColor;
      annotation.FillColor = new window.Core.Annotations.Color(fillColor['R'], fillColor['G'], fillColor['B'], fillColor['A']);
    }
  }
};