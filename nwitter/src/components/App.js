import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { authService } from 'fbase';

function App() {
  const[init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user){
        setIsLoggedIn(true);
        setUserObj(user);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    setUserObj(Object.assign({}, authService.currentUser));
  }
  return (
    <>
    {init ?<AppRouter refreshUser={refreshUser} isLoggedIn={isLoggedIn} userObj={userObj} /> : "Initializing..."}
    </>
  );
}

export default App;
