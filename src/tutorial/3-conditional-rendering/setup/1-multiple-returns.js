import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true);
  const [isEror, setEror] = useState(false);
  const [user, setUser] = useState();
  useEffect(() => {
    
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        }
        else{
          setLoading(false)
          setEror(true)
          throw new Error(response.statusText)
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login)
        setLoading(false)
      }).catch(console.error())
  },[]);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isEror) {
    return <h1>Error...</h1>;
  }
  return <h1>{user}</h1>;
};

export default MultipleReturns;
