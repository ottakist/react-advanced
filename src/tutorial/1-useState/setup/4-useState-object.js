import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:"peter",
    age:"24",
    message:"Lorem ipsum dolor sit amet."
  })
  const changeMessage=()=>{
    setPerson({...person,message:"random message"})
  }
return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
  
};

export default UseStateObject;
