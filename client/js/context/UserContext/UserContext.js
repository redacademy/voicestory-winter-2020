import React, {createContext} from 'react';
export const UserContext = createContext();

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserContextProvider};
