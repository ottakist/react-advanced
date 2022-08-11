import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value >= 1) {
      document.title = `Value changed ${value} times`;
    }
  }, [value]);
  return (
    <>
      <h2>{value}</h2>
      <button
        className='btn'
        onClick={() => {
          setTimeout(() => {
            setValue((value) => {
              return value + 1;
            });
          },1000);
        }}
      >
        Increase
      </button>
    </>
  );
};

export default UseEffectBasics;
