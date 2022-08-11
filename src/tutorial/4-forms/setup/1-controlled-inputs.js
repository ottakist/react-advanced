import React, { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  useEffect(() => {
    if (people.length > 0) {
      // UseState changed
      Notiflix.Notify.info('person added to the list');
    }
  }, [people]);
  const submitHendler = (e) => {
    e.preventDefault();

    if (!name) {
      Notiflix.Notify.failure(`Please enter name`);
    } else if (!email) {
      Notiflix.Notify.failure(`Please enter email`);
    }
    // else if (!email.includes('@')) {
    //   Notiflix.Notify.failure(`Please enter valid email`);
    // }
    else {
      const person = { id: new Date().getTime().toString(), name, email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setEmail('');
      setName('');
    }
  };
  return (
    <>
      <form className='form' onSubmit={submitHendler}>
        <div className='form-control'>
          <label htmlFor='firstName'>Name : </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email : </label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button className='btn'>Submit form</button>
      </form>
      {people.map((person) => {
        const { id, name, email } = person;
        return (
          <>
            <div className='item' key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ControlledInputs;
