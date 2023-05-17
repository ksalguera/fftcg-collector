import { useState, useEffect, createContext } from 'react';
import { useLocation } from 'react-router-dom';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [expansions, setExpansions] = useState(null);
  const [cards, setCards] = useState(null);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchExpansions = async () => {
      const res = await fetch('/expansions');
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setExpansions(json);
    };
    fetchExpansions().catch(error => error.message);
  }, [user, cards]);

  useEffect(() => {
    const fetchCards = async () => {
      const res = await fetch('/cards');
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setCards(json);
    };
    fetchCards().catch(error => error.message);
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
  
  // fetch all users on admin-dashboard only
  useEffect(() => {
    if (location.pathname === '/admin-dashboard') {
      const fetchUsers = async () => {
        const res = await fetch('/all-users');
        if (!res.ok) throw new Error(res.statusText);
        const json = await res.json();
        setUsers(json);
      };
      fetchUsers().catch(error => error.message);
    }
  }, [location.pathname]);

  return (
    <AppContext.Provider value={{ expansions, setExpansions, cards, setCards, user, setUser, users, setUsers }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
