import { useState, useEffect, createContext } from 'react';

const UserContext = createContext();

export default UserContext;

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/account');
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setUser(json);
    }
    fetchUser().catch(error => error.message)
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider };