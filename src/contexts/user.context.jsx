import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener,signOutUser } from "../utils/firebase/firebase.utils";

//as actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//provider
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  

  useEffect(() => {
    const unsbscribe = onAuthStateChangedListener((user)=>{
      console.log(user);
      if(user){
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    })

    return unsbscribe;
  }, [])
  

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
