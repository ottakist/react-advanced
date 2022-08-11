import React from 'react';
let title = 'random title';

const ErrorExample = () => {
  return (<React.Fragment>
    <h2>{title}</h2>
    <button className='btn' onClick={ClickHendler}>Change title</button>
  </React.Fragment>)
};

const ClickHendler = (e) => {
  
  title = 'new title'
  console.log(title);
  return title
};
export default ErrorExample;
