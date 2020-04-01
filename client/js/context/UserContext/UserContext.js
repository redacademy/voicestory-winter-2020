import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState('guest');
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};
UserContextProvider.propTypes = {
  children: PropTypes.object,
};
export {UserContext, UserContextProvider};
