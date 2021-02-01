import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Navigation from '../components/Navigation/Navigation';
import GlobalStyle from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/MainTheme';

const MainLayout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      {children}
    </ThemeProvider>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
