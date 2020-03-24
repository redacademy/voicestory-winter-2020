import React, {createContext, useState} from 'react';
const UserContext = createContext();

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState('guest');
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserContextProvider};
