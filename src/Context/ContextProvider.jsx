import { createContext, useState } from "react";

const portfolioContext = createContext(null);

const ContextProvider = (prop) => {
  const [isDark, setIsDark] = useState(true);

  return (
    <portfolioContext.Provider value={{ isDark, setIsDark }}>
      {prop.children}
    </portfolioContext.Provider>
  );
};

export default ContextProvider;
