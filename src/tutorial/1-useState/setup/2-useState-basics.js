import React, { useState } from 'react';

const UseStateBasics = () => {
  const[text,setText] = useState('random title')
   const Hendler = () => {
    setText('Lorem ipsum dolor sit amet.')
   };
 return(
  <React.Fragment>
    <h2>{text}</h2>
    <button className='btn' onClick={Hendler}>Change text</button>
  </React.Fragment>
 )

};

export default UseStateBasics;
