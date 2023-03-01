import React, {useContext, useEffect, useState} from 'react';
import {useAuth0} from '@auth0/auth0-react';

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const {isAuthenticated, loginWithRedirect, logout, user, isLoading} = useAuth0();

  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    console.log(`user':${user}`);
    console.log(`isAuthenticated':${isAuthenticated}`);
    console.log(`isLoading':${isLoading}`);
  }, [isAuthenticated])  //invoke this evertime isAuthenticated changes

  return (
    <UserContext.Provider value={{loginWithRedirect, logout, myUser}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext);
}

//Could use Auth0 hook instead of this context file but doing this incase I want multiple locations for authentication
