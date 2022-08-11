import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  // const getUsers = async () => {
  //   const response = await fetch(url);
  //   const users = await response.json();
  //   setUsers(users);
  // };
  useEffect(() => {
    fetch(url).then((resp)=>{
      if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
      }
      else{
        throw new Error(resp.statusText);
      }
    }).then((users)=>{
      setUsers(users)
    })
    // getUsers();
  }, []);
  return (
    <>
      <h2>GIT users</h2>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
