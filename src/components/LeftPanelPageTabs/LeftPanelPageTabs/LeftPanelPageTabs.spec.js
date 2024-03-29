import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import LeftPanelPageTabs from 'components/LeftPanelPageTabs/LeftPanelPageTabs/LeftPanelPageTabs';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// create test component with mock redux
const initialState = {
  viewer: {
    disabledElements: {},
    openElements: [],
    customElementOverrides: []
  },
};
function rootReducer(state = initialState, action) { // eslint-disable-line no-unused-vars
  return state;
}
const store = createStore(rootReducer);
const LeftPanelPageTabsWithRedux = function(props) {
  return (
    <Provider store={store}>
      <LeftPanelPageTabs {...props} />
    </Provider>
  );
};
function noop() {}

describe('LeftPanelPageTabs', () => {
  describe('Component', () => {
    it('Should render component correctly with all buttons', () => {
      const { container } = render(<LeftPanelPageTabsWithRedux
        onReplace={noop()}
        onExtractPages={noop}
        onDeletePages={noop}
        onRotateCounterClockwise={noop}
        onRotateClockwise={noop}
        onInsert={noop}
      />);

      expect(container.querySelectorAll('.Button')).toHaveLength(5);
    });

    it('Should call each handler when clicked', () => {
      const handlers = {
        onRotateCounterClockwise: {
          fn: jest.fn(),
          dataElement: 'thumbnailsControlRotateCounterClockwise'
        },
        onRotateClockwise: {
          fn: jest.fn(),
          dataElement: 'thumbnailsControlRotateClockwise'
        },
        moveToTop: {
          fn: jest.fn(),
          dataElement: 'moveToTop'
        },
        moveToBottom: {
          fn: jest.fn(),
          dataElement: 'moveToBottom'
        },
      };
      const { container } = render(<LeftPanelPageTabsWithRedux
        onRotateCounterClockwise={handlers.onRotateCounterClockwise.fn}
        onRotateClockwise={handlers.onRotateClockwise.fn}
        moveToTop={handlers.moveToTop.fn}
        moveToBottom={handlers.moveToBottom.fn}
      />);

      for (const action in handlers) {
        const button = container.querySelector(`.Button[data-element=${handlers[action].dataElement}]`);
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(handlers[action].fn).toBeCalled();
      }
    });
  });
});