import React from 'react';
import chroma from 'chroma-js';

import { ColorContext } from "../ColorProvider"
import { NumOfColorsContext } from '../NumOfColorsProvider';

export const GradientColorsContext = React.createContext();

function GradientColorsProvider({ children }) {
  const { colors } = React.useContext(ColorContext);
  const { numOfColors } = React.useContext(NumOfColorsContext);
  const neededColors = colors.slice(0, numOfColors);

  const [gradientColors, setGradientColors] = React.useState(
    chroma
      .scale(neededColors)
      .mode('lch')
      .colors(6)
  );

  const handleGradientColors = () => {
    const updatedGradientColors = chroma
      .scale(neededColors)
      .mode('lch')
      .colors(6);

    setGradientColors(updatedGradientColors)
  }

  React.useEffect(() => {
    handleGradientColors()
  }, [numOfColors]);

  return (
    <GradientColorsContext.Provider
      value={{
        gradientColors,
        handleGradientColors,
      }}
    >
      {children}
    </ GradientColorsContext.Provider>
  );
}

export default GradientColorsProvider;
