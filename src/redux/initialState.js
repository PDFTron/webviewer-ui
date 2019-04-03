import React from 'react';

import ToggleElementOverlay from 'components/toggleElementOverlay';

import getHashParams from 'helpers/getHashParams';
import documentTypeParamToEngineType from 'helpers/documentTypeParamToEngineType';
import { zoomIn, zoomOut } from 'helpers/zoom';

export default {
  viewer: {
    disabledElements: { },
    openElements: {
      header: true
    },
    headers: {
      default: [
        { type: 'toggleElementButton', img: 'ic_left_sidebar_black_24px', element: 'leftPanel', dataElement: 'leftPanelButton', title: 'component.leftPanel' },
        { type: 'divider', hidden: [ 'tablet', 'mobile' ] },
        { type: 'toggleElementButton', img: 'ic_viewer_settings_black_24px', element: 'viewControlsOverlay', dataElement: 'viewControlsButton', title: 'component.viewControlsOverlay' },
        { type: 'toolButton', toolName: 'Pan', dataElement: 'panToolButton', title: 'tool.pan' },
        // { type: 'toolButton', toolName: 'TextSelect', dataElement: 'textSelectButton', title: 'tool.select' },
        { type: 'toolButton', toolName: 'AnnotationEdit', dataElement: 'selectToolButton', title: 'tool.select', hidden: [ 'tablet', 'mobile' ] },
        { type: 'actionButton', img: 'ic_zoom_out_black_24px', onClick: zoomOut, title: 'action.zoomOut', dataElement: 'zoomOutButton', hidden: [ 'mobile' ] },
        { type: 'actionButton', img: 'ic_zoom_in_black_24px', onClick: zoomIn, title: 'action.zoomIn', dataElement: 'zoomInButton', hidden: [ 'mobile' ] },
        { 
          type: 'customElement',
          render: () => <ToggleElementOverlay />, 
          dataElement: 'zoomOverlayButton',
          hidden: [ 'mobile' ],
          element: 'zoomOverlay'
        },
        { type: 'spacer' },
        // { type: 'toolButton', toolName: 'AnnotationCreateDistanceMeasurement', dataElement: 'distanceMeasurementToolButton', title: 'annotation.distanceMeasurement' },
        { 
          type: 'responsiveButton',
          dataElement: 'responsiveGroupButton',
          maxWidth: 900, 
          img: 'ic_edit_black_24px',
          children: [
            { 
              type: 'dropdownButton', toolGroup: 'measurementTools', dataElement: 'measurementToolGroupButton', title: 'component.measurementToolsButton', 
              children: [
                { type: 'toolButton', toolName: 'AnnotationCreateDistanceMeasurement', dataElement: 'distanceMeasurementToolButton', title: 'annotation.distanceMeasurement' },
                { type: 'toolButton', toolName: 'AnnotationCreatePerimeterMeasurement', dataElement: 'perimeterMeasurementToolButton', title: 'annotation.perimeterMeasurement' },
                { type: 'toolButton', toolName: 'AnnotationCreateAreaMeasurement', dataElement: 'areaMeasurementToolButton', title: 'annotation.areaMeasurement' },
              ]
            },
            { 
              type: 'dropdownButton', toolGroup: 'freeHandTools', dataElement: 'freeHandToolGroupButton', title: 'component.freehandToolsButton', 
              children: [
                { type: 'toolButton', toolName: 'AnnotationCreateFreeHand', dataElement: 'freeHandToolButton', title: 'annotation.freehand' },
                { type: 'toolButton', toolName: 'AnnotationCreateFreeHand2', dataElement: 'freeHandToolButton2', title: 'annotation.freehand2' },
                { type: 'toolButton', toolName: 'AnnotationCreateFreeHand3', dataElement: 'freeHandToolButton3', title: 'annotation.freehand3' },
                { type: 'toolButton', toolName: 'AnnotationCreateFreeHand4', dataElement: 'freeHandToolButton4', title: 'annotation.freehand4' },
              ]
            },
            { 
              type: 'dropdownButton', toolGroup: 'textTools', dataElement: 'textToolGroupButton', title: 'component.textToolsButton', 
              children: [
                { type: 'toolButton', toolName: 'AnnotationCreateTextHighlight', dataElement: 'highlightToolButton', title: 'annotation.highlight' },
                { type: 'toolButton', toolName: 'AnnotationCreateTextHighlight2', dataElement: 'highlightToolButton2', title: 'annotation.highlight2' },
                { type: 'toolButton', toolName: 'AnnotationCreateTextHighlight3', dataElement: 'highlightToolButton3', title: 'annotation.highlight2' },
                { type: 'toolButton', toolName: 'AnnotationCreateTextHighlight4', dataElement: 'highlightToolButton4', title: 'annotation.highlight2' },
                { type: 'toolButton', toolName: 'AnnotationCreateTextUnderline', dataElement: 'underlineToolButton', title: 'annotation.underline' },
                { type: 'toolButton', toolName: 'AnnotationCreateTextSquiggly', dataElement: 'squigglyToolButton', title: 'annotation.squiggly' },
                { type: 'toolButton', toolName: 'AnnotationCreateTextStrikeout', dataElement: 'strikeoutToolButton', title: 'annotation.strikeout' },
              ]
            },
            { 
              type: 'dropdownButton', toolGroup: 'shapeTools', dataElement: 'shapeToolGroupButton', title: 'component.shapeToolsButton',  
              children: [
                { type: 'toolButton', toolName: 'AnnotationCreateRectangle', dataElement: 'rectangleToolButton', title: 'annotation.rectangle' },
                { type: 'toolButton', toolName: 'AnnotationCreateEllipse', dataElement: 'ellipseToolButton', title: 'annotation.ellipse' },
                { type: 'toolButton', toolName: 'AnnotationCreateLine', dataElement: 'lineToolButton', title: 'annotation.line' },
                { type: 'toolButton', toolName: 'AnnotationCreateArrow', dataElement: 'arrowToolButton', title: 'annotation.arrow' },
                { type: 'toolButton', toolName: 'AnnotationCreatePolyline', dataElement: 'polylineToolButton', title: 'annotation.polyline' },
                { type: 'toolButton', toolName: 'AnnotationCreatePolygon', dataElement: 'polygonToolButton', title: 'annotation.polygon' },
                { type: 'toolButton', toolName: 'AnnotationCreatePolygonCloud', dataElement: 'cloudToolButton', title: 'annotation.polygonCloud' },
              ] 
            },
            { type: 'statefulButton', dataElement: 'signatureToolButton' },
            { type: 'toggleElementButton', toolName: 'AnnotationCreateRedaction', className: 'redactHeader', dataElement: 'redactionButton', element: 'redactionOverlay', img: 'ic_annotation_add_redact_black_24px', title: 'component.redaction' },
            { type: 'toolButton', toolName: 'AnnotationCreateFreeText', dataElement: 'freeTextToolButton', title: 'annotation.freetext' },
            { type: 'toolButton', toolName: 'AnnotationCreateSticky', dataElement: 'stickyToolButton', title: 'annotation.stickyNote' },
            { 
              type: 'dropdownButton', toolGroup: 'miscTools', img: 'ic_more_black_24px', dataElement: 'miscToolGroupButton', title: 'component.miscToolsButton', 
              children: [
                { type: 'toolButton', toolName: 'AnnotationCreateCallout', dataElement: 'calloutToolButton', title: 'annotation.callout' },
                { type: 'toolButton', toolName: 'AnnotationCreateStamp', dataElement: 'stampToolButton', title: 'annotation.stamp'}
              ]
            },
          ]
        },
        { type: 'divider', hidden: [ 'tablet', 'mobile' ] },
        { type: 'toggleElementButton', dataElement: 'searchButton',  element: 'searchOverlay', img: 'ic_search_black_24px', title: 'component.searchOverlay' },
        { type: 'toggleElementButton', dataElement: 'menuButton', element: 'menuOverlay', img: 'ic_overflow_black_24px', title: 'component.menuOverlay' }
      ],
    },
    toolButtonObjects: {
      AnnotationCreateDistanceMeasurement: { img: 'ic_annotation_distance_black_24px', showColor: 'active', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: [ 'StrokeColor' ], annotationCheck: annotation => annotation instanceof Annotations.LineAnnotation && annotation.IT === 'LineDimension' && annotation.Measure },
      AnnotationCreatePerimeterMeasurement: { img: 'ic_annotation_perimeter_black_24px', showColor: 'active', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: [ 'StrokeColor' ], annotationCheck: annotation => annotation instanceof Annotations.PolylineAnnotation && annotation.IT === 'PolyLineDimension' && annotation.Measure },
      AnnotationCreateAreaMeasurement: { img: 'ic_annotation_area_black_24px', showColor: 'active', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: [ 'StrokeColor', 'FillColor' ], annotationCheck: annotation => annotation instanceof Annotations.PolygonAnnotation && annotation.IT === 'PolygonDimension' && annotation.Measure },
      AnnotationCreateFreeHand: { img: 'ic_annotation_freehand_black_24px', showColor: 'always', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor'], annotationCheck: annotation => annotation instanceof Annotations.FreeHandAnnotation },
      AnnotationCreateFreeHand2: { img: 'ic_annotation_freehand_black_24px', showColor: 'always', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor'], annotationCheck: annotation => annotation instanceof Annotations.FreeHandAnnotation },
      AnnotationCreateFreeHand3: { img: 'ic_annotation_freehand_black_24px', showColor: 'always', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor'], annotationCheck: annotation => annotation instanceof Annotations.FreeHandAnnotation },
      AnnotationCreateFreeHand4: { img: 'ic_annotation_freehand_black_24px', showColor: 'always', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor'], annotationCheck: annotation => annotation instanceof Annotations.FreeHandAnnotation },
      AnnotationCreateTextHighlight: { img: 'ic_annotation_highlight_black_24px', showColor: 'always', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor'], annotationCheck: annotation => annotation instanceof Annotations.TextHighlightAnnotation },
      AnnotationCreateTextHighlight2: { img: 'ic_annotation_highlight_black_24px', showColor: 'always', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor'], annotationCheck: annotation => annotation instanceof Annotations.TextHighlightAnnotation },
      AnnotationCreateTextHighlight3: { img: 'ic_annotation_highlight_black_24px', showColor: 'always', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor'], annotationCheck: annotation => annotation instanceof Annotations.TextHighlightAnnotation },
      AnnotationCreateTextHighlight4: { img: 'ic_annotation_highlight_black_24px', showColor: 'always', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor'], annotationCheck: annotation => annotation instanceof Annotations.TextHighlightAnnotation },
      AnnotationCreateTextUnderline: { img: 'ic_annotation_underline_black_24px', showColor: 'active', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor'], annotationCheck: annotation => annotation instanceof Annotations.TextUnderlineAnnotation },
      AnnotationCreateTextSquiggly: { img: 'ic_annotation_squiggly_black_24px', showColor: 'active', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor'], annotationCheck: annotation => annotation instanceof Annotations.TextSquigglyAnnotation },
      AnnotationCreateTextStrikeout: { img: 'ic_annotation_strikeout_black_24px', showColor: 'active', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor'], annotationCheck: annotation => annotation instanceof Annotations.TextStrikeoutAnnotation },
      AnnotationCreateRectangle: { img: 'ic_annotation_square_black_24px', showColor: 'active', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor', 'FillColor'], annotationCheck: annotation => annotation instanceof Annotations.RectangleAnnotation },
      AnnotationCreateEllipse: { img: 'ic_annotation_circle_black_24px', showColor: 'active', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor', 'FillColor'], annotationCheck: annotation => annotation instanceof Annotations.EllipseAnnotation },
      AnnotationCreateLine: { img: 'ic_annotation_line_black_24px', showColor: 'active', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor'], annotationCheck: annotation => annotation instanceof Annotations.LineAnnotation && annotation.getStartStyle() === 'None' && annotation.getEndStyle() === 'None' },
      AnnotationCreateArrow: { img: 'ic_annotation_arrow_black_24px', showColor: 'active', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor'], annotationCheck: annotation => annotation instanceof Annotations.LineAnnotation && (annotation.getStartStyle() !== 'None' || annotation.getEndStyle() !== 'None') },
      AnnotationCreatePolyline: { img: 'ic_annotation_polyline_black_24px', showColor: 'active', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor'], annotationCheck: annotation => annotation instanceof Annotations.PolylineAnnotation },
      AnnotationCreatePolygon: { img: 'ic_annotation_polygon_black_24px', showColor: 'active', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor', 'FillColor'], annotationCheck: annotation => annotation instanceof Annotations.PolygonAnnotation && annotation.Style === 'solid' },
      AnnotationCreatePolygonCloud: { img: 'ic_annotation_cloud_black_24px', showColor: 'active', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor', 'FillColor'], annotationCheck: annotation => annotation instanceof Annotations.PolygonAnnotation && annotation.Style === 'cloudy' },
      AnnotationCreateRedaction: { dataElement: 'redactionButton', title: 'option.redaction.markForRedaction', img: 'ic_annotation_add_redact_black_24px', showColor: 'never', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor', 'FillColor'], annotationCheck: annotation => annotation instanceof Annotations.RedactionAnnotation },
      AnnotationCreateSignature: { dataElement: 'signatureToolButton', title: 'annotation.signature', img: 'ic_annotation_signature_black_24px', showColor: 'active', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor'], annotationCheck: annotation => annotation instanceof Annotations.FreeHandAnnotation && annotation.Subject === i18next.t('annotation.signature') },
      AnnotationCreateFreeText: { img: 'ic_annotation_freetext_black_24px', showColor: 'active', iconColor: 'TextColor', currentPalette: 'TextColor', availablePalettes: ['TextColor', 'StrokeColor', 'FillColor'], annotationCheck: annotation => annotation instanceof Annotations.FreeTextAnnotation && annotation.getIntent() === Annotations.FreeTextAnnotation.Intent.FreeText },
      AnnotationCreateSticky: { img: 'ic_annotation_sticky_note_black_24px', showColor: 'active', iconColor: 'StrokeColor', currentPalette: 'StrokeColor', availablePalettes: ['StrokeColor'], annotationCheck: annotation => annotation instanceof Annotations.StickyAnnotation },
      AnnotationCreateCallout: { img: 'ic_annotation_callout_black_24px', showColor: 'active', iconColor: 'TextColor', currentPalette: 'TextColor', availablePalettes: ['TextColor', 'StrokeColor', 'FillColor'], annotationCheck: annotation => annotation instanceof Annotations.FreeTextAnnotation && annotation.getIntent() === Annotations.FreeTextAnnotation.Intent.FreeTextCallout },
      AnnotationCreateStamp: { img: 'ic_annotation_image_black_24px', showColor: 'active', iconColor: null, currentPalette: null, availablePalettes: [], annotationCheck: annotation => annotation instanceof Annotations.StampAnnotation },
      Pan: { img: 'ic_pan_black_24px', showColor: 'never', iconColor: null, currentPalette: null, availablePalettes: [], annotationCheck: null },
      AnnotationEdit: { img: 'ic_select_black_24px', showColor: 'never', iconColor: null, currentPalette: null, availablePalettes: [], annotationCheck: null },
      TextSelect: { img: 'textselect_cursor', showColor: 'never', iconColor: null, currentPalette: null, availablePalettes: [], annotationCheck: null },
      MarqueeZoomTool: { dataElement: 'marqueeToolButton', title: 'tool.select', label: 'Marquee Zoom', showColor: 'never', iconColor: null, currentPalette: null, availablePalettes: [], annotationCheck: null }
    },
    activeHeaderGroup: 'default',
    activeToolName: 'AnnotationEdit',
    activeToolStyles: {},
    activeLeftPanel: getHashParams('hideAnnotationPanel', false) || !getHashParams('a', false) || getHashParams('readonly', false) ? 'thumbnailsPanel' : 'notesPanel',
    activeToolGroup: '',
    expandedNotes: {},
    notePopupId: '',
    isNoteEditing: false,
    fitMode: '',
    zoom: 1,
    rotation: 0,
    displayMode: 'Single',
    currentPage: 1,
    sortStrategy: 'position',
    isFullScreen: false,
    doesAutoLoad: getHashParams('auto_load', true),
    isDocumentLoaded: false,
    isReadOnly: getHashParams('readonly', false),
    customPanels: [],
    useEmbeddedPrint: true,
    pageLabels: [],
    noteDateFormat: 'MMM D, h:mma',
    cursorOverlay: {},
    swipeOrientation: 'horizontal',
    warning: {},
    customNoteFilter: null
  },
  search: {
    listeners: [],
    value: '',
    isCaseSensitive: false,
    isWholeWord: false,
    isWildcard: false,
    isRegex: false,
    isSearchUp: false,
    isAmbientString: false,
    activeResult: null,
    activeResultIndex: -1,
    results: [],
    isSearching: false,
    noResult: false,
    isProgrammaticSearch: false,
    isProgrammaticSearchFull: false,
  },
  document: {
    id: getHashParams('did', null),
    initialDoc: getHashParams('initialDoc', getHashParams('d', '')),
    path: null,
    filename: null,
    file: null,
    type: null,
    pdfDoc: null,
    pdfType: getHashParams('pdf', 'wait'),
    officeType: getHashParams('office', 'wait'),
    isOffline: getHashParams('startOffline', false),
    totalPages: 0,
    outlines: [],
    checkPassword: null,
    password: '',
    printQuality: 1,
    passwordAttempts: -1,
    documentLoadingProgress: 0,
    workerLoadingProgress: 0
  },
  user: {
    name: getHashParams('user', 'Guest'),
    isAdmin: getHashParams('admin', false),
  },
  advanced: {
    azureWorkaround: getHashParams('azureWorkaround', false),
    customCSS: getHashParams('css', null),
    customData: getHashParams('custom', null),
    customHeaders: { },
    configScript: getHashParams('config', ''),
    defaultDisabledElements: getHashParams('disabledElements', ''),
    externalPath: getHashParams('p', ''),
    engineType: documentTypeParamToEngineType(getHashParams('documentType'), getHashParams('pdftronServer', '')),
    fullAPI: getHashParams('pdfnet', false),
    pdftronServer: getHashParams('pdftronServer', ''),
    disableWebsockets: getHashParams('disableWebsockets', false),
    preloadWorker: getHashParams('preloadWorker', false),
    serverUrl: getHashParams('server_url', ''),
    serverUrlHeaders: JSON.parse(getHashParams('serverUrlHeaders', '{}')),
    streaming: getHashParams('streaming', false),
    subzero: getHashParams('subzero', false),
    useDownloader: getHashParams('useDownloader', true),
    useSharedWorker: getHashParams('useSharedWorker', false),
    disableI18n: getHashParams('disableI18n', false),
    pdfWorkerTransportPromise: null,
    officeWorkerTransportPromise: null,
    decrypt: null,
    decryptOptions: { },
    withCredentials: false
  }
};
