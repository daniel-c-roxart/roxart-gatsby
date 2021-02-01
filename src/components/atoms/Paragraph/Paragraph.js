import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
    font-size: 11px;
    line-height: 18px;
    margin-top: 0;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.gray};
    letter-spacing: .15px;
`;

const Paragraph = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Paragraph;
