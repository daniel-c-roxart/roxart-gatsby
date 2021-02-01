import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    width: 100%;
    max-width: 1110px;
    margin: 0 auto;
    display: flex;
`;

const Container = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
