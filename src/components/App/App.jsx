import React from 'react';

import ColorPicker from '../ColorPicker';
import DisplayColor from '../DisplayColor';
import Settings from '../Settings';
import { NumOfColorsContext } from '../NumOfColorsProvider';
import isPropValid from '@emotion/is-prop-valid';
import styled, { StyleSheetManager } from 'styled-components';

function shouldForwardProp(propName, target) {
  if (typeof target === "string") {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}

function App() {
  const { numOfColors } = React.useContext(NumOfColorsContext);

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <Wrapper>
        <Settings />
        <DisplayColor />
        <ColorPicker numOfColors={numOfColors} />
      </Wrapper>
    </StyleSheetManager>
  );
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
`

export default App;


