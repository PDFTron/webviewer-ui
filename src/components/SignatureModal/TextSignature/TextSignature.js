import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import core from 'core';
import { isIOS } from 'helpers/device';
import selectors from 'selectors';

import './TextSignature.scss';

const propTypes = {
  isModalOpen: PropTypes.bool,
  _setSaveSignature: PropTypes.func.isRequired,
  isTabPanelSelected: PropTypes.bool,
};

const TextSignature = ({
  isModalOpen,
  _setSaveSignature,
  isTabPanelSelected,
}) => {
  const fonts = useSelector(state => selectors.getSignatureFonts(state));
  const [value, setValue] = useState(core.getCurrentUser());
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef();
  const canvasesRef = useRef([]);

  useEffect(() => {
    // this can happen when an user added a new signature font, select it and then removed it
    // in this case we just assume there's at least one font and set the active index to 0
    if (activeIndex >= fonts.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, fonts]);

  // useEffect(() => {
  //   const signatureTool = core.getTool('AnnotationCreateSignature');

  //   if (isModalOpen && isTabPanelSelected) {
  //     _setSaveSignature(!!value);

  //     if (value) {
  //       signatureTool.setSignature(
  //         canvasesRef.current[activeIndex].toDataURL(),
  //       );
  //     } else {
  //       signatureTool.setSignature(null);
  //     }
  //   }
  // }, [_setSaveSignature, isTabPanelSelected, activeIndex, value, isModalOpen]);

  useEffect(() => {
    if (isTabPanelSelected) {
      inputRef.current?.focus();

      if (isIOS) {
        inputRef.current.setSelectionRange(0, 9999);
      } else {
        inputRef.current.select();
      }
    }
  }, [isTabPanelSelected]);

  const handleInputChange = e => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <div className="text-signature">
      <input
        className="text-signature-input"
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
      />
      <div className="text-signature-container">
        {fonts.map((font, index) => (
          <div
            key={font}
            className={classNames({
              'text-signature-text': true,
              active: index === activeIndex,
            })}
            style={{ fontFamily: font, fontSize: 100 }}
          >
            {value}
            {/* <span style={{ fontFamily: font }}>{value}</span> */}
            {/* <div className="text-signature-background" />
            <Canvas
              ref={el => {
                canvasesRef.current[index] = el;
              }}
              text={value}
              font={font}
              onSelect={() => setActiveIndex(index)}
              isTabPanelSelected={isTabPanelSelected}
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

TextSignature.propTypes = propTypes;

export default TextSignature;

const Canvas = React.forwardRef(
  ({ text, font, onSelect, isTabPanelSelected }, forwardedRef) => {
    const canvasRef = useRef();

    useEffect(() => {
      const multiplier = window.utils.getCanvasMultiplier();
      const canvas = canvasRef.current;

      const resizeCanvas = () => {
        // the panel has display: none when it's not selected, which will affect the canvas size
        // so we resize the canvas whenever this panel is selected
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width * multiplier;
        canvas.height = height * multiplier;
      };

      const setFont = () => {
        const ctx = canvas.getContext('2d');

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        let fontSize = 100 * multiplier;
        ctx.font = `${fontSize}px ${font}`;

        while (ctx.measureText(text).width > canvas.width) {
          fontSize--;
          ctx.font = `${fontSize}px ${font}`;
        }
      };

      const drawTextSignature = () => {
        const ctx = canvas.getContext('2d');
        const { width, height } = canvas;

        ctx.fillStyle = '#000';
        ctx.clearRect(0, 0, width, height);
        ctx.fillText(text, width / 2, height / 2);
      };

      if (isTabPanelSelected && canvas) {
        resizeCanvas();
        setFont();
        drawTextSignature();
      }
    }, [isTabPanelSelected, text, font]);

    const handleClick = () => {
      const signatureTool = core.getTool('AnnotationCreateSignature');
      if (text) {
        signatureTool.setSignature(canvasRef.current.toDataURL());
      } else {
        signatureTool.annot = null;
      }

      onSelect();
    };

    return (
      <canvas
        ref={el => {
          canvasRef.current = el;
          forwardedRef(el);
        }}
        onClick={handleClick}
      />
    );
  },
);

Canvas.propTypes = {
  text: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  isTabPanelSelected: PropTypes.bool,
};
