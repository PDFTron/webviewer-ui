import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import Input from 'components/Input';

import core from 'core';

import './Layer.scss';

class Layer extends React.PureComponent {
  static propTypes = {
    layer: PropTypes.object.isRequired,
    layers: PropTypes.arrayOf(PropTypes.object).isRequired,
    index: PropTypes.number.isRequired,
  };

  state = {
    isExpanded: false,
  };

  onChange = e => {
    const { index, layers } = this.props;
    layers[index].visible = e.target.checked;
    const doc = core.getDocument();
    doc.setLayersArray(layers);

    window.docViewer.refreshAll();
    window.docViewer.updateView();
  };

  onClickExpand = () => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  render() {
    const { isExpanded } = this.state;
    const { layer } = this.props;
    const hasSubLayers = layer.children.length > 0;

    return (
      <div className="Layer">
        <div className="layer-wrapper">
          <div className="padding">
            {hasSubLayers && (
              <div
                className={`arrow ${
                  isExpanded ? 'expanded' : 'collapsed'
                }`}
                onClick={this.onClickExpand}
              >
                <Icon glyph="ic_chevron_right_black_24px" />
              </div>
            )}
          </div>
          <Input
            id={layer.name}
            type="checkbox"
            label={layer.name}
            onChange={this.onChange}
            defaultChecked={layer.visible}
          />
        </div>
        {hasSubLayers && isExpanded && (
          <div className="sub-layers">
            {layer.children.map((subLayer, i) => (
              <Layer key={i} layer={subLayer} layers={layer.children} index={i} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Layer;
