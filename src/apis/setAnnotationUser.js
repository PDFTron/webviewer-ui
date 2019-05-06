/**
 * Sets name of the current user
 * @method WebViewer#setAnnotationUser
 * @param {string} username Username to be used for current user.
 * @example // 5.1 and after
const viewerElement = document.getElementById('viewer');
const instance = await WebViewer({ ... }, viewerElement);

instance.setAnnotationUser('Guest-1');
 * @example // 4.0 ~ 5.0
var viewerElement = document.getElementById('viewer');
var viewer = new PDFTron.WebViewer({ ... }, viewerElement);

viewerElement.addEventListener('ready', function() {
  var instance = viewer.getInstance();
  instance.setAnnotationUser('Guest-1');
});
 */

import core from 'core';

export default userName => {
  core.setCurrentUser(userName);
};
