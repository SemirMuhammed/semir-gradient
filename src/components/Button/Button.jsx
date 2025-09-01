import React from 'react';
import styled from 'styled-components';

function Button({ children, ...delegated }) {
  return (
    <Wrapper
      {...delegated}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button`
font-size: 1.5rem;
background-color: hsl(240deg, 10%, 60%);
padding: 16px 32px;
border-radius: 8px;
&:hover {
  background-color: hsl(240deg, 10%, 50%);
}
`;

export default Button;
