import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/Firebase";

const UserContext = createContext();

export const UserContextProvider = (props) => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = onAuthStateChanged(auth, (userInfo) => {
      if (userInfo) {
        setIsUserLoggedIn(true);
        setCurrentUser(userInfo);
      } else {
        setIsUserLoggedIn(false);
        setCurrentUser(null);
      }

      setLoading(false);
    });

    return () => getUser();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, isUserLoggedIn, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
