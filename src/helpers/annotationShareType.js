// CUSTOM WISEflow

/**
 * Get share type using custom data type "shareType"
 * @param {Annotation} annot annotation to add share type to
 * @return {string} share type [ASSESSORS, PARTICIPANTS, ALL, NONE]. If none is set, returns empty string.
 */
const getAnnotationShareType = annot => annot.getCustomData('shareType');

/**
 * Get share type using custom data type "shareType"
 * @param {Annotation} annot
 * @param {string} shareType [ASSESSORS, PARTICIPANTS, ALL, NONE]
 *
 * @returns {Annotation} annot with share type set
 */
const setAnnotationShareType = (annot, shareType) => {
  annot.setCustomData('shareType', shareType);
  return annot;
};

export { getAnnotationShareType, setAnnotationShareType };
