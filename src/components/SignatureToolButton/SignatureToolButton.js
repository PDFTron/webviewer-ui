import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import Button from 'components/Button';
import defaultTool from 'constants/defaultTool';
import DataElements from 'constants/dataElement';
import '../ToolGroupButton/ToolGroupButton.scss';

import core from 'core';
import actions from 'actions';
import selectors from 'selectors';

const SignatureToolButton = () => {
  const [isActive] = useSelector(
    (state) => [
      selectors.getActiveToolName(state) === 'AnnotationCreateSignature',
      selectors.isElementOpen(state, DataElements.SIGNATURE_MODAL),
      selectors.isElementOpen(state, DataElements.SIGNATURE_OVERLAY),
    ],
    shallowEqual,
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    if (isActive) {
      core.setToolMode(defaultTool);
      dispatch(actions.closeElement(DataElements.SIGNATURE_OVERLAY));
    } else {
      core.setToolMode('AnnotationCreateSignature');
      // if (isTabletAndMobile) {
      dispatch(actions.setActiveToolGroup(''));
      // }
      dispatch(actions.openElement(DataElements.SIGNATURE_OVERLAY));
    }
  };

  return (
    <div
      className={classNames({
        'tool-group-button': true,
        active: isActive,
        signature: true,
      })}
      data-element="signatureToolButton"
      onClick={handleClick}
    >
      <Button
        img="icon-tool-signature"
        title="annotation.signature"
      />
    </div>
  );
};

export default SignatureToolButton;
