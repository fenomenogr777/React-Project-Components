import { createContext, useEffect, useState } from 'react';

const NavigateContext = createContext();

function NavigateProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // BACK/FORWARD USER INTERACTION
  useEffect(() => {
    const handlePop = () => {
      window.history.pushState({}, '', window.location.pathname);
      setCurrentPath(window.location.pathname);
    };
    document.addEventListener('popstate', handlePop);
    return () => {
      document.removeEventListener('popstate', handlePop);
    };
  }, []);

  // SETS URL TO THE LINK USERS CLICKS
  const navigation = to => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  const valueToShare = {
    navigation,
    currentPath,
  };

  return (
    <NavigateContext.Provider value={valueToShare}>
      {children}
    </NavigateContext.Provider>
  );
}

export { NavigateProvider };
export default NavigateContext;
