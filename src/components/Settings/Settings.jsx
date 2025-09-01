import React from 'react';

import { ColorContext } from '../ColorProvider';
import { NumOfColorsContext } from '../NumOfColorsProvider';
import Button from '../Button';
import styled from 'styled-components';

function Settings() {
  const { colors, setColors } = React.useContext(ColorContext);
  const { numOfColors, setNumOfColors } = React.useContext(NumOfColorsContext);

  function handleAddColor() {
    if (numOfColors >= 6) {
      window.alert("This generator is designed to handle upto 6 colors");
      return;
    }
    setNumOfColors(numOfColors + 1);
  }

  function handleRemoveColor() {
    if (numOfColors <= 2) {
      window.alert("Minimum required colors for gradient reached");
      return;
    }
    setNumOfColors(numOfColors - 1);
  }
  return (
    <Wrapper>
      <Button
        onClick={handleAddColor}
      >
        ቀለም ያክሉ
      </Button>

      <Button
        onClick={handleRemoveColor}
      >
        ቀለም አስወግድ
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
display: flex;
gap: 16px;
`

export default Settings;
