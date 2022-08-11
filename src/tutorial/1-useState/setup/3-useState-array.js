import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople]= React.useState(data)
  const removePerson=(id)=>{
    let newPeople =people.filter((person)=>id!== person.id)
    setPeople(newPeople)
  }
  return (
    <>
      {people.map((person) => {
        let { id, name } = person;
         return(
        
        <div key={id} className='item'>
          <h4>{name}</h4>
          <button onClick={()=>removePerson(id)}>remove</button>
        </div>
        
        )
      })}
      <button className='btn' onClick={()=>setPeople([])}>Remove</button>
    </>
  );
};

export default UseStateArray;

