import React from 'react';

export const NumOfColorsContext = React.createContext();

function NumOfColorsProvider({ children }) {
  const [numOfColors, setNumOfColors] = React.useState(2);

  return (
    <NumOfColorsContext.Provider
      value={{
        numOfColors,
        setNumOfColors,
      }}
    >
      {children}
    </NumOfColorsContext.Provider >
  );
}

export default NumOfColorsProvider;
