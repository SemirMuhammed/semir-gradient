import React from 'react';
import styled from 'styled-components';

import { GradientColorsContext } from '../GradientColorsProvider'

function DisplayColor() {
  const { gradientColors } = React.useContext(GradientColorsContext);

  return (
    <Wrapper>
      <Display
        colors={gradientColors}
      />
    </Wrapper>
  );
}

const Display = styled.div.attrs(props => ({
  style: {
    backgroundImage: `linear-gradient(${props.colors})`,
  },
}))`
  width: 100%;
  height: 100%;
  border-radius: 24px;
`;

const Wrapper = styled.div`
width: 720px;
@media(max-width: 800px) {
width: 90%;
}
@media(max-width: 400px) {
width: 320px;
}
height: 540px;
`;

export default DisplayColor;


// background - image: linear - gradient(
//   0deg,
//   ${
//     props => props.colors.map((color, index) => {
//       const numOfColors = props.colors.length - 1;
//       const colorCode = `${color} ${index / numOfColors * 100}%${index !== 5 ? "," : ""}`;
//       return colorCode;
//     })
// }
// );

//     ${
//   newColors.map((color, index) => {
//     const colorCode = `${color} ${index / numOfColors * 100}%${index !== 5 ? "," : ""}`;
//     return colorCode;
//   })
// }
