import { useState, useEffect, createContext } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [expansions, setExpansions] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchExpansion = async () => {
      const res = await fetch('/expansions');
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setExpansions(json);
    };
    fetchExpansion().catch(error => error.message);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/account');
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setUser(json);
    };
    fetchUser().catch(error => error.message);
  }, []);

  return (
    <AppContext.Provider value={{ expansions, setExpansions, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
