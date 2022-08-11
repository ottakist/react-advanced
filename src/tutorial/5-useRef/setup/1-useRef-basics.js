import React, { useEffect, useRef} from 'react';
import Notiflix from 'notiflix';


const UseRefBasics = () => {
  const formValue = useRef(null)
  const submitForm=(e)=>{
    e.preventDefault()
    Notiflix.Notify.success(`item added: "${formValue.current.value}"`);
    
  }

  useEffect(()=>{
    Notiflix.Notify.info('page rendered');
    
  })
  return (<>
  <form className='form' onSubmit={submitForm}>
    <input type="text" ref={formValue}/>
    <button type='submit'>submit</button>
    </form>
    </>)
};

export default UseRefBasics;
