import React, { useState ,useEffect } from 'react';
// short-circuit evaluation
// ternary operator
const ShortCircuit = () => {
  const [text, setText]= useState('text')
  const [isError,setError] = useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  // useEffect(()=>{
  //   setText('prop text')
  // },[])

  return( <>
  <h1>{text || 'Hello world'}</h1>
  <button className='btn' onClick={()=>{setError(!isError)}}>Toggle error</button>
  <h2>{isError && 'Error...'}</h2>
  {isError ? (<p>There is an error</p>):(<p>There is no error</p>)}</>
  )
};

export default ShortCircuit;
