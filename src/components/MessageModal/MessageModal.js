import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 600px;
    margin: 1.75rem auto;
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const MessagesModal = () => (
  <Wrapper>
    <h3>
      Skrzynka wiadomości
      {' '}
      <strong>ROXART</strong>
    </h3>
  </Wrapper>
);

export default MessagesModal;
