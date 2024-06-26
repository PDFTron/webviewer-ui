import React, { useState } from 'react';
import { render, fireEvent, getByText, getByDisplayValue, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormFieldEditPopup from './FormFieldEditPopup';
import { Basic } from './FormFieldEditPopup.stories';

const BasicFormFieldEditPopupStory = withI18n(Basic);

const TestFormFieldEditPopup = withProviders(FormFieldEditPopup);

function noop() { }

const inputFields = [
  {
    label: 'formField.formFieldPopup.fieldName',
    confirmChange: noop,
    value: 'fieldName',
    required: true,
    type: 'text',
    message: 'formField.formFieldPopup.nameRequired',
  },
  {
    label: 'formField.formFieldPopup.fieldValue',
    confirmChange: noop,
    value: 'fieldValue',
    type: 'text',
  },
];

const selectField = [
  {
    label: 'formField.formFieldPopup.fieldName',
    confirmChange: noop,
    value: 'fieldName',
    required: true,
    type: 'select',
    message: 'formField.formFieldPopup.nameRequired',
  },
];

const sampleFlags = [
  {
    label: 'formField.formFieldPopup.readOnly',
    confirmChange: noop,
    isChecked: true,
    setIsChecked: (bool) => {
      sampleFlags[0].isChecked = bool;
    }
  },
  {
    label: 'formField.formFieldPopup.multiLine',
    confirmChange: noop,
    isChecked: false,
    setIsChecked: (bool) => {
      sampleFlags[1].isChecked = bool;
    }
  },
];

const INDICATOR_TEXT = 'This is an indicator';

const indicator = {
  label: 'formField.formFieldPopup.documentFieldIndicator',
  confirmToggleIndicator: noop,
  isChecked: true,
  confirmTextChange: noop,
  textValue: INDICATOR_TEXT,
};

const emptyIndicator = {
  label: 'formField.formFieldPopup.documentFieldIndicator',
  confirmToggleIndicator: noop,
  isChecked: false,
  confirmTextChange: noop,
  textValue: null,
};

const createMockAnnotation = () => {
  let width = 100;
  let height = 100;

  return {
    X: 0,
    Y: 0,
    setWidth: (newWidth) => {
      width = parseInt(newWidth);
    },
    setHeight: (newHeight) => {
      height = parseInt(newHeight);
    },
    get Width() {
      return width;
    },
    get Height() {
      return height;
    },
    getCustomData: () => {
      return {
        'trn-form-field-show-indicator': 'true',
        'trn-form-field-indicator-text': 'Sign Here',
      };
    },
    getFormFieldPlaceholderType: noop,
  };
};


describe('FormFieldEditPopup', () => {
  describe('Component', () => {
    it('Story should not throw any errors', () => {
      expect(() => {
        render(<BasicFormFieldEditPopupStory />);
      }).not.toThrow();
    });

    it('Renders an input for each of the Fields passed in', () => {
      const { container } = render(
        <TestFormFieldEditPopup
          fields={inputFields}
          flags={sampleFlags}
          closeFormFieldEditPopup={noop}
          isOpen
          isValid
          annotation={createMockAnnotation()}
          redrawAnnotation={noop}
          getPageHeight={noop}
          getPageWidth={noop}
          indicator={indicator}
        />,
      );
      // add an extra text input field for indicator text
      expect(container.querySelectorAll('.ui__input__input')).toHaveLength(inputFields.length + 1);
    });

    it('When a select input is passed as a field, it renders correctly as a radio button group select', () => {
      const { container } = render(
        <TestFormFieldEditPopup
          fields={selectField}
          flags={sampleFlags}
          closeFormFieldEditPopup={noop}
          isOpen
          isValid
          annotation={createMockAnnotation()}
          redrawAnnotation={noop}
          getPageHeight={noop}
          getPageWidth={noop}
          radioButtonGroups={[]}
          indicator={indicator}
        />,
      );
      expect(container.querySelectorAll('.radio-group-label')).toHaveLength(selectField.length);
    });

    it('Should not confirm changes when the cancel button is clicked', () => {
      const { container } = render(
        <TestFormFieldEditPopup
          fields={inputFields}
          flags={sampleFlags}
          closeFormFieldEditPopup={noop}
          isOpen
          isValid
          annotation={createMockAnnotation()}
          redrawAnnotation={noop}
          getPageHeight={noop}
          getPageWidth={noop}
          indicator={indicator}
        />,
      );
      // add extra input for show indicator checkbox
      expect(container.querySelectorAll('.ui__choice__input')).toHaveLength(sampleFlags.length + 1);
    });

    it('Should confirm changes when the OK button is clicked', () => {
      let confirming = false;
      const closeFormFieldEditPopup = jest.fn((isConfirmingChanges) => {
        confirming = isConfirmingChanges;
      });
      const { container } = render(
        <TestFormFieldEditPopup
          fields={inputFields}
          flags={sampleFlags}
          closeFormFieldEditPopup={closeFormFieldEditPopup}
          isOpen
          isValid
          setValidationMessage={noop}
          annotation={createMockAnnotation()}
          redrawAnnotation={noop}
          getPageHeight={noop}
          getPageWidth={noop}
          confirmFieldOptionsChange={noop}
          indicator={indicator}
        />,
      );
      const OKButton = container.querySelector('.ok-form-field-button');
      expect(OKButton).toBeInTheDocument();
      fireEvent.click(OKButton);
      expect(closeFormFieldEditPopup).toBeCalled();
      expect(confirming).toBeTruthy();
    });

    it('Call check when Cancel button is clicked', () => {
      let confirming = false;
      const closeFormFieldEditPopup = jest.fn((isConfirmingChanges) => {
        confirming = isConfirmingChanges;
      });
      const { container } = render(
        <TestFormFieldEditPopup
          isOpen
          isValid
          fields={inputFields}
          flags={sampleFlags}
          indicator={indicator}
          closeFormFieldEditPopup={closeFormFieldEditPopup}
          annotation={createMockAnnotation()}
          getPageHeight={noop}
          redrawAnnotation={noop}
          getPageWidth={noop}
          confirmFieldOptionsChange={noop}
        />,
      );
      const cancelButton = container.querySelector('.cancel-form-field-button');
      expect(cancelButton).toBeInTheDocument();
      fireEvent.click(cancelButton);
      expect(closeFormFieldEditPopup).toBeCalled();
      expect(confirming).toBeFalsy();
    });

    it('Should render text input with Warning if field is not valid', () => {
      const { container } = render(
        <TestFormFieldEditPopup
          fields={inputFields}
          flags={sampleFlags}
          closeFormFieldEditPopup={noop}
          isOpen
          isValid={false} // NOT VALID!!
          annotation={createMockAnnotation()}
          redrawAnnotation={noop}
          getPageHeight={noop}
          getPageWidth={noop}
          indicator={indicator}
        />,
      );

      expect(container.querySelector('.ui__input--message-warning')).toBeInTheDocument();
    });

    it('Should render select with warning message if passed', () => {
      const { container } = render(
        <TestFormFieldEditPopup
          fields={selectField}
          flags={sampleFlags}
          closeFormFieldEditPopup={noop}
          isOpen
          isValid
          annotation={createMockAnnotation()}
          redrawAnnotation={noop}
          getPageHeight={noop}
          getPageWidth={noop}
          indicator={indicator}
          validationMessage={'Field Name already exists'}
          radioButtonGroups={[]}
        />,
      );
      getByText(container, 'Field Name already exists');
      expect(container.querySelector('.messageText')).toBeInTheDocument();
    });

    describe('Width and Height inputs', () => {
      const getPageHeight = () => (400);
      const getPageWidth = () => (200);
      it('accepts a width that is less than the page width', () => {
        const { container } = render(
          <TestFormFieldEditPopup
            fields={inputFields}
            flags={sampleFlags}
            closeFormFieldEditPopup={noop}
            isOpen
            isValid
            annotation={createMockAnnotation()}
            redrawAnnotation={noop}
            getPageHeight={getPageHeight}
            getPageWidth={getPageWidth}
            indicator={indicator}
          />,
        );
        const widthInput = container.querySelector('#form-field-width');
        userEvent.clear(widthInput);
        userEvent.type(widthInput, '66');
        expect(widthInput).toHaveValue(66);
      });

      it('if entered width greater than page width, the width is set to page width', () => {
        const { container } = render(
          <TestFormFieldEditPopup
            fields={inputFields}
            flags={sampleFlags}
            closeFormFieldEditPopup={noop}
            isOpen
            isValid
            annotation={createMockAnnotation()}
            redrawAnnotation={noop}
            getPageHeight={getPageHeight}
            getPageWidth={getPageWidth}
            indicator={indicator}
          />,
        );
        const widthInput = container.querySelector('#form-field-width');
        userEvent.clear(widthInput);
        userEvent.type(widthInput, '666');
        const pageWidth = getPageWidth();
        expect(widthInput).toHaveValue(pageWidth);
      });

      it('accepts a height that is less than the page height', () => {
        const { container } = render(
          <TestFormFieldEditPopup
            fields={inputFields}
            flags={sampleFlags}
            closeFormFieldEditPopup={noop}
            isOpen
            isValid
            annotation={createMockAnnotation()}
            redrawAnnotation={noop}
            getPageHeight={getPageHeight}
            getPageWidth={getPageWidth}
            indicator={indicator}
          />,
        );
        const heightInput = container.querySelector('#form-field-height');
        userEvent.clear(heightInput);
        userEvent.type(heightInput, '200');
        expect(heightInput).toHaveValue(200);
      });

      it('if entered height greater than page height, the height is set to page height', () => {
        const { container } = render(
          <TestFormFieldEditPopup
            fields={inputFields}
            flags={sampleFlags}
            closeFormFieldEditPopup={noop}
            isOpen
            isValid
            annotation={createMockAnnotation()}
            redrawAnnotation={noop}
            getPageHeight={getPageHeight}
            getPageWidth={getPageWidth}
            indicator={indicator}
          />,
        );
        const heightInput = container.querySelector('#form-field-height');
        userEvent.clear(heightInput);
        userEvent.type(heightInput, '888');
        const pageHeight = getPageHeight();
        expect(heightInput).toHaveValue(pageHeight);
      });

      it('if entered a height but then I click cancel, it resets to original height', () => {
        const dummyAnnotation = createMockAnnotation();
        const initialHeight = dummyAnnotation.Height;
        const { container } = render(
          <TestFormFieldEditPopup
            fields={inputFields}
            flags={sampleFlags}
            closeFormFieldEditPopup={noop}
            isOpen
            isValid
            annotation={dummyAnnotation}
            redrawAnnotation={noop}
            getPageHeight={getPageHeight}
            getPageWidth={getPageWidth}
            indicator={indicator}
          />,
        );

        // Enter new height, ensure annotation is updated
        const heightInput = container.querySelector('#form-field-height');
        userEvent.clear(heightInput);
        userEvent.type(heightInput, '150');
        expect(heightInput).toHaveValue(150);
        expect(dummyAnnotation.Height).toEqual(150);

        // Now cancel, so height should revert to original values
        const cancelButton = container.querySelector('.cancel-form-field-button');
        expect(cancelButton).toBeInTheDocument();
        fireEvent.click(cancelButton);

        expect(dummyAnnotation.Height).toEqual(initialHeight);
      });

      it('if entered a width but then I click cancel, it resets to original width', () => {
        const dummyAnnotation = createMockAnnotation();
        const initialWidth = dummyAnnotation.Width;
        const { container } = render(
          <TestFormFieldEditPopup
            fields={inputFields}
            flags={sampleFlags}
            closeFormFieldEditPopup={noop}
            isOpen
            isValid
            annotation={dummyAnnotation}
            redrawAnnotation={noop}
            getPageHeight={getPageHeight}
            getPageWidth={getPageWidth}
            indicator={indicator}
          />,
        );

        // Now enter a width, ensure annotation is updated
        const widthInput = container.querySelector('#form-field-width');
        userEvent.clear(widthInput);
        userEvent.type(widthInput, '200');
        expect(widthInput).toHaveValue(200);
        expect(dummyAnnotation.Width).toEqual(200);

        // Now cancel, so width  should revert to original values
        const cancelButton = container.querySelector('.cancel-form-field-button');
        expect(cancelButton).toBeInTheDocument();
        fireEvent.click(cancelButton);

        expect(dummyAnnotation.Width).toEqual(initialWidth);
      });
    });

    it('opens with correct indicator text', () => {
      const { container } = render(
        <TestFormFieldEditPopup
          fields={inputFields}
          flags={sampleFlags}
          closeFormFieldEditPopup={noop}
          isOpen
          isValid
          annotation={createMockAnnotation()}
          redrawAnnotation={noop}
          getPageHeight={noop}
          getPageWidth={noop}
          indicator={indicator}
        />,
      );
      const indicatorText = getByDisplayValue(container, INDICATOR_TEXT);
      expect(indicatorText).toBeInTheDocument();
    });

    it('if I click cancel and the field name is empty, it should call the cancel callback function', () => {
      const dummyAnnotation = createMockAnnotation();
      const mockCancelEmptyFieldName = jest.fn();

      const mockInputFieldWithEmptyName = [
        {
          label: 'formField.formFieldPopup.fieldName',
          confirmChange: noop,
          value: '', // This means the name is empty/blank
          required: true,
          type: 'text',
          message: 'formField.formFieldPopup.nameRequired',
        },
        {
          label: 'formField.formFieldPopup.fieldValue',
          confirmChange: noop,
          value: 'fieldValue',
          type: 'text',
        },
      ];

      render(
        <TestFormFieldEditPopup
          fields={mockInputFieldWithEmptyName}
          flags={sampleFlags}
          closeFormFieldEditPopup={noop}
          isOpen
          isValid={false}
          annotation={dummyAnnotation}
          redrawAnnotation={noop}
          getPageHeight={noop}
          getPageWidth={noop}
          indicator={indicator}
          onCancelEmptyFieldName={mockCancelEmptyFieldName}
        />,
      );

      const cancelButton = screen.getByText('Cancel');
      expect(cancelButton).toBeInTheDocument();
      fireEvent.click(cancelButton);

      expect(mockCancelEmptyFieldName).toHaveBeenCalled();
    });
  });
});
