import { createContext, useState, useEffect, useMemo } from 'react';

const UsersContext = createContext({
  user: null,
  setUser: null,
});

export default function UserProvider( { children } ){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  }, []);
  const value = useMemo(() => (
    {
      users,
      setUsers
    }
  ), [users])
  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  )
}
