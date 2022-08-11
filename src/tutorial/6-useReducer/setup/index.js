import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import {reducer} from './reducer'
// reducer function

const Index = () => {
  const [name, setName] = useState('');
  
  const defaultState = {
    people: [],
    showmodal: false,
    modalContent: 'Hello world',
  };
  const [state, dispatch] = useReducer(reducer, defaultState);
  const hendleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { id: new Date().getTime().toString(), name };
    if (name) {
      dispatch({ type: 'ADD_ITEM', payload: newPerson });
      setName('');
    } else {
      dispatch({ type: 'EMPTY' });
    }
  };
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };
  return (
    <>
      {state.showmodal && (
        <Modal
          closeModal={closeModal}
          modalContent={state.modalContent}
        />
      )}

      <form className='form' onSubmit={hendleSubmit}>
        <div>
          <input
            type='text'
            name='text'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button type='submit'>add </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button className='btn' onClick={()=>{
              dispatch({type:'REMOVE_ITEM',payload:person.id})
            }}>remove</button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
