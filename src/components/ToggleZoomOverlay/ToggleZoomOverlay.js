import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import core from 'core';
import classNames from 'classnames';

import ToggleElementButton from 'components/ToggleElementButton';
import Element from 'components/Element';
import ActionButton from 'components/ActionButton';
import { zoomIn, zoomOut, zoomTo } from 'helpers/zoom';
import selectors from 'selectors';
import actions from 'actions';
import zoomFactors from 'constants/zoomFactors';
import './ToggleZoomOverlay.scss';

const ToggleZoomOverlay = () => {
  const [isActive] = useSelector(
    state => [
      selectors.isElementOpen(state, 'zoomOverlay'),
    ],
    shallowEqual,
  );
  const dispatch = useDispatch();
  const [value, setValue] = useState('100');

  useEffect(() => {
    const onDocumentLoaded = () => setValue(Math.ceil(core.getZoom() * 100).toString());
    const onZoomUpdated = () => setValue(Math.ceil(core.getZoom() * 100).toString());

    core.addEventListener('documentLoaded', onDocumentLoaded);
    core.addEventListener('zoomUpdated', onZoomUpdated);

    return () => {
      core.removeEventListener('documentLoaded', onDocumentLoaded);
      core.removeEventListener('zoomUpdated', onZoomUpdated);
    };
  }, []);

  const onKeyPress = e => {
    if (e.nativeEvent.key === 'Enter' || e.nativeEvent.keyCode === 13) {
      const zoom = Math.ceil(core.getZoom() * 100).toString();
      if (e.target.value === zoom) {
        return;
      }
      if (e.target.value === '') {
        setValue(zoom);
      } else {
        let zoomValue = (e.target.value) / 100;
        zoomValue = Math.max(zoomValue, zoomFactors.getMinZoomLevel());
        zoomValue = Math.min(zoomValue, zoomFactors.getMaxZoomLevel());
        zoomTo(zoomValue);
      }
    }
  };

  const onChange = e => {
    const re = /^(\d){0,4}$/;
    if (re.test(e.target.value) || e.target.value === '') {
      setValue(e.target.value);
    }
  };

  const onBlur = e => {
    const zoom = Math.ceil(core.getZoom() * 100).toString();
    if (e.target.value === zoom) {
      return;
    }
    if (e.target.value === '' || isNaN(Number(e.target.value))) {
      setValue(zoom);
    } else {
      setValue(Number(e.target.value).toString());
      zoomTo(e.target.value / 100);
    }
  };

  return (
    <div className="Overlay ToggleZoomOverlay hide-in-mobile" data-element="zoomOverlayButton">
      <Element
          className="row"
          dataElement="zoomButtons"
      >
        <ActionButton
          dataElement="zoomOutButton"
          title="action.zoomOut"
          img="ic_zoom_out_black_24px"
          onClick={zoomOut}
        />
        <ActionButton
          dataElement="zoomInButton"
          title="action.zoomIn"
          img="ic_zoom_in_black_24px"
          onClick={zoomIn}
        />
      </Element>
      <div className={classNames({
        OverlayContainer: true,
        'active': isActive,
      })}
      >
        <div className="OverlayText" onClick={() => dispatch(actions.toggleElement('zoomOverlay'))}>
          <input
            type="text"
            className="textarea"
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onBlur={onBlur}
            tabIndex={-1}
          />
          <span>%</span>
        </div>
        <ToggleElementButton className="OverlayButton" img="ic-triangle" element="zoomOverlay" dataElement="zoomOverlay"/>
      </div>
    </div>
  );
};

export default ToggleZoomOverlay;