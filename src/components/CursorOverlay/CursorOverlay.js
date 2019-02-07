import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import core from 'core';
import getClassName from 'helpers/getClassName';
import selectors from 'selectors';

import './CursorOverlay.scss';

class CursorOverlay extends React.PureComponent {
  static propTypes = {
    isDisabled: PropTypes.bool,
    isOpen: PropTypes.bool,
    imgSrc: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.overlay = React.createRef();
    this.state = { top: 0, left: 0 };
  }  

  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = ({ clientX, clientY }) => {
    if (this.props.isOpen) {
      const { 
        top: viewerTop, 
        bottom: viewerBottom, 
        left: viewerLeft, 
        right: viewerRight 
      } = core.getViewerElement().getBoundingClientRect();
      const mouseWithinViewerElement = clientX >= viewerLeft && clientX <= viewerRight && clientY >= viewerTop && clientY <= viewerBottom;
      let left, top;
      
      if (mouseWithinViewerElement) {
        const OVERLAY_LEFT_GAP = 10;
        left = clientX + OVERLAY_LEFT_GAP;
        top = clientY;
      } else {
        left = top = -9999;
      }

      this.setState({ left, top });
    }
  }

  render() {
    const { top, left } = this.state;
    const { isDisabled, imgSrc } = this.props;
    const className = getClassName('Overlay CursorOverlay', this.props);    

    if (isDisabled) {
      return null;
    }

    return(
      <div className={className} style={{ top, left }} ref={this.overlay}>
        {imgSrc &&
          <img className="cursor-image" src={imgSrc} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isDisabled: selectors.isElementDisabled(state, 'cursorOverlay'),
  isOpen: selectors.isElementOpen(state, 'cursorOverlay'),
  imgSrc: selectors.getCursorOverlayImage(state)
});

export default connect(mapStateToProps)(CursorOverlay);