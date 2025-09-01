import React from 'react';
import styled from 'styled-components';
import { range } from '../../helpers/file-helpers';

import { ColorContext } from '../ColorProvider';
import { GradientColorsContext } from '../GradientColorsProvider';

function ColorPicker({ numOfColors = 2, }) {
  const { colors, setColors } = React.useContext(ColorContext);
  const { handleGradientColors } = React.useContext(GradientColorsContext);

  return (
    <Wrapper>
      {range(numOfColors).map((index) => {
        return (
          <ColorWrapper
            key={index}
          >
            <ColorIndex>
              Color {index + 1}:
            </ColorIndex>
            <Input
              type='color'
              value={colors[index]}
              onChange={(event) => {
                const updatedColors = [...colors];
                updatedColors[index] = event.target.value;
                setColors(updatedColors);
                handleGradientColors();
              }}
            />
          </ColorWrapper>
        );
      })}
    </Wrapper >
  );
}

const Input = styled.input`
      border: none;
      background: none;
      width: 128px;
      height: 128px;
border-radius: 16px;
      padding: 0;
      `
const Wrapper = styled.div`
      display: flex;
gap: 32px;
    `
const ColorWrapper = styled.div`
`
const ColorIndex = styled.p`
margin: 0;
font-size: 1.25rem;
text-align: center;
`

export default ColorPicker;
