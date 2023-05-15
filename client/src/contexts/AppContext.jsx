import { useState, useEffect, createContext } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [expansions, setExpansions] = useState(null);
  const [cards, setCards] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchExpansions = async () => {
      const res = await fetch('/expansions');
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setExpansions(json);
    };
    fetchExpansions().catch(error => error.message);
  }, [user]);

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

  return (
    <AppContext.Provider value={{ expansions, setExpansions, cards, setCards, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
