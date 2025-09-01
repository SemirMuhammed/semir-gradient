import React from 'react';

export const ColorContext = React.createContext();

function ColorProvider({ children }) {
  const prevColors = window.localStorage.getItem('colors');

  const defaultColors = [
    '#0000ff',
    '#0000ff',
    '#0000ff',
    '#0000ff',
    '#0000ff',
    '#0000ff'
  ]
  console.log(prevColors)
  const [colors, setColors] = React.useState(
    (prevColors !== null)
      ? JSON.parse(prevColors)
      : defaultColors
  );


  React.useEffect(() => {
    window.localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors])
  console.log(colors);

  const value = {
    colors,
    setColors,
  }
  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  );
}

export default ColorProvider;
