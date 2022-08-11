import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
const mainContext = React.createContext();
// fix - context api, redux (for more complex cases)

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <mainContext.Provider value={{ removePerson,people}}>
      <h3>Use Context</h3>
      <List />
    </mainContext.Provider>
  );
};

const List = () => {
  const transferData = useContext(mainContext);
  return (
    <>
      {transferData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name}) => {
  const {removePerson} = useContext(mainContext)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
