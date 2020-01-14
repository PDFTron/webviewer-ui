import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import core from 'core';
import { isMobile } from 'helpers/device';
import actions from 'actions';
import selectors from 'selectors';
import ThumbnailControls from 'components/ThumbnailControls';

import './Thumbnail.scss';

export const THUMBNAIL_SIZE = 150;

class Thumbnail extends React.PureComponent {
  static propTypes = {
    index: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    pageLabels: PropTypes.array.isRequired,
    canLoad: PropTypes.bool.isRequired,
    onLoad: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    updateAnnotations: PropTypes.func,
    closeElement: PropTypes.func.isRequired,
    onDragStart: PropTypes.func,
    onDragOver: PropTypes.func,
    isDraggable: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.thumbContainer = React.createRef();
    this.onLayoutChangedHandler = this.onLayoutChanged.bind(this);
  }

  componentDidMount() {
    const { onLoad, index } = this.props;
    const id = this.loadThumbnailAsync();
    onLoad(index, this.thumbContainer.current, id);

    core.addEventListener('layoutChanged', this.onLayoutChangedHandler);
  }

  componentDidUpdate(prevProps) {
    const { onLoad, onCancel, index } = this.props;

    if (!prevProps.canLoad && this.props.canLoad) {
      onLoad(index, this.thumbContainer.current);
    }
    if (prevProps.canLoad && !this.props.canLoad) {
      onCancel(index);
    }
  }

  componentWillUnmount() {
    const { onRemove, index } = this.props;
    core.removeEventListener('layoutChanged', this.onLayoutChangedHandler);
    onRemove(index);
  }

  onLayoutChanged(changes) {
    const { contentChanged, moved, added, removed } = changes;
    const { index, pageLabels } = this.props;

    const currentPage = index + 1;
    const currentPageStr = `${currentPage}`;

    const isPageAdded = added.indexOf(currentPage) > -1;
    const didPageChange = contentChanged.some(
      changedPage => currentPageStr === changedPage,
    );
    const didPageMove = Object.keys(moved).some(
      movedPage => currentPageStr === movedPage,
    );
    const isPageRemoved = removed.indexOf(currentPage) > -1;
    const newPageCount = pageLabels.length - removed.length;

    if (removed.length > 0 && index + 1 > newPageCount) {
      // don't load thumbnail if it's going to be removed
      return;
    }

    if (isPageAdded || didPageChange || didPageMove || isPageRemoved) {
      this.loadThumbnailAsync();
    }
  }

  loadThumbnailAsync = () => {
    const { index } = this.props;
    const { thumbContainer } = this;
    const { current } = thumbContainer;

    const id = core.loadThumbnailAsync(index, thumb => {
      thumb.className = 'page-image';
      thumb.style.maxWidth = `${THUMBNAIL_SIZE}px`;
      thumb.style.maxHeight = `${THUMBNAIL_SIZE}px`;

      const childElement = current.querySelector('.page-image');
      if (childElement) {
        current.removeChild(childElement);
      }
      current.appendChild(thumb);
      if (this.props.updateAnnotations) {
        this.props.updateAnnotations(index);
      }
    });

    return id;
  }

  handleClick = () => {
    const { index, closeElement } = this.props;

    core.setCurrentPage(index + 1);

    if (isMobile()) {
      closeElement('leftPanel');
    }
  };

  onDragStart = e => {
    const { index, onDragStart } = this.props;
    onDragStart(e, index);
  };

  onDragOver = e => {
    const { index, onDragOver } = this.props;
    onDragOver(e, index);
  };

  render() {
    const { index, currentPage, pageLabels, isDraggable } = this.props;
    const isActive = currentPage === index + 1;
    const pageLabel = pageLabels[index];

    return (
      <div
        className={classNames({
          Thumbnail: true,
          active: isActive,
        })}
        onClick={this.handleClick}
        onDragOver={this.onDragOver}
      >
        <div
          className="container"
          style={{
            width: THUMBNAIL_SIZE,
            height: THUMBNAIL_SIZE,
          }}
          ref={this.thumbContainer}
          onDragStart={this.onDragStart}
          draggable={isDraggable}
        />
        <div className="page-label">{pageLabel}</div>
        {isActive && <ThumbnailControls index={index} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPage: selectors.getCurrentPage(state),
  pageLabels: selectors.getPageLabels(state),
});

const mapDispatchToProps = {
  closeElement: actions.closeElement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnail);
