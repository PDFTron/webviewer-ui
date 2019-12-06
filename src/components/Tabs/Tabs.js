import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import actions from 'actions';
import selectors from 'selectors';

const TabsContext = React.createContext();

// eslint-disable-next-line arrow-body-style
export const Tabs = props => {
  return (
    <TabsContext.Provider value={props.id}>
      {props.children}
    </TabsContext.Provider>
  );
};

Tabs.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export const Tab = ({ children, dataElement }) => {
  const id = useContext(TabsContext);
  const [isDisabled, isSelected] = useSelector(state => [
    selectors.isElementDisabled(state, dataElement),
    selectors.getCurrentTab(state, id) === dataElement,
  ]);
  const dispatch = useDispatch();

  let propsToInject = {
    className: classNames({
      selected: isSelected,
      [children.props.className]: !!children.props.className,
    }),
    onClick: () => {
      children.props.onClick?.();
      dispatch(actions.setCurrentTab(id, dataElement));
    },
  };

  // need to do this because the children may be wrapped by React.memo
  const type = typeof (children.type.type || children.type);
  // only inject isSelected if children is a component
  if (type === 'function') {
    propsToInject = Object.assign(propsToInject, {
      isTabSelected: isSelected,
      dataElement,
    });
  } else {
    propsToInject = Object.assign(propsToInject, {
      'data-element': dataElement,
    });
  }

  return isDisabled ? null : React.cloneElement(children, propsToInject);
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number,
  dataElement: PropTypes.string.isRequired,
};

export const TabPanel = ({ children, dataElement }) => {
  const id = useContext(TabsContext);
  const [isDisabled, isSelected] = useSelector(state => [
    selectors.isElementDisabled(state, dataElement),
    selectors.getCurrentTab(state, id).includes(dataElement),
  ]);

  return isDisabled ? null : (
    <div
      className="tab-panel"
      data-element={dataElement}
      style={{ display: isSelected ? '' : 'none' }}
    >
      {typeof children.type === 'function'
        ? React.cloneElement(children, { isTabPanelSelected: isSelected })
        : children}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  dataElement: PropTypes.string.isRequired,
};
