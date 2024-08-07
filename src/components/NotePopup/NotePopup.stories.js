import i18next from 'i18next';
import React from 'react';
import NotePopup from './NotePopup';
import initialState from 'src/redux/initialState';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

export default {
  title: 'Components/NotesPanel/NotePopup',
  component: NotePopup,
};

function noop() { }
function handleEdit() {
  console.log('Would handle Edit');
}

function handleDelete() {
  console.log('Would handle Delete');
}

function open() {
  console.log('Would open the popup');
}

function close() {
  console.log('Would close the popup');
}

const store = configureStore({ reducer: () => initialState });

export function Basic() {
  const [isOpen, setOpen] = React.useState(false);
  function closePopup() {
    console.log('Closing the popup');
    setOpen(false);
  }

  function openPopup() {
    console.log('Opening the popup');
    setOpen(true);
  }

  const annotation = {};
  const style = {
    width: 200,
  };
  return (
    <Provider store={store}>
      <div style={style}>
        <NotePopup
          annotation={annotation}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          closePopup={closePopup}
          openPopup={openPopup}
          isOpen={isOpen}
          isDisable={false}
          isEditable
          isDeletable
        />
      </div>
    </Provider>
  );
}

export function DifferentLanguages() {
  const annotation = {};
  const style = {
    width: 200,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: 10,
    rowGap: 15,
  };

  i18next.changeLanguage('zh_cn');
  return (
    <Provider store={store}>
      <div style={style}>
        <div>Popup closed</div>
        <div>Popup open</div>
        <div style={{ justifySelf: 'start' }}>
          <NotePopup
            annotation={annotation}
            handleEdit={noop}
            closePopup={close}
            openPopup={open}
            isDisable={false}
            isEditable
            isDeletable
          />
        </div>
        <div style={{ justifySelf: 'end' }}>
          <NotePopup
            annotation={annotation}
            handleEdit={noop}
            closePopup={noop}
            openPopup={noop}
            isOpen
            isDisable={false}
            isEditable
            isDeletable
          />
        </div>
      </div>
    </Provider>
  );
}

export function DifferentStates() {
  const annotation = {};
  const style = {
    width: 200,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: 10,
    rowGap: 15,
  };

  i18next.changeLanguage('en');

  return (
    <Provider store={store}>
      <div style={style}>
        <div>Popup closed</div>
        <div>Popup open</div>
        <div style={{ justifySelf: 'start' }}>
          <NotePopup
            annotation={annotation}
            handleEdit={noop}
            closePopup={close}
            openPopup={open}
            isDisable={false}
            isEditable
            isDeletable
          />
        </div>
        <div style={{ justifySelf: 'end' }}>
          <NotePopup
            annotation={annotation}
            handleEdit={noop}
            closePopup={noop}
            openPopup={noop}
            isOpen
            isDisable={false}
            isEditable
            isDeletable
          />
        </div>
      </div>
    </Provider>
  );
}
