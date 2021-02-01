import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const MenuWrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
`;

const MenuLink = styled(Link)`
    color: #212529;
    display: block;
    font-size: 14px;
    font-weight: 700;
    padding: 0;
    text-decoration: none;
    padding: 0;
    margin-left: 29px;
    position: relative;

    &:first-child {
      margin-left: 0;
    }

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: ${({ theme }) => theme.orange};
      bottom: 0;
      left: 0;
      opacity: 0;
      transform: translateY(100%) scaleX(0);
      transform-origin: left;
      transition: transform .3s ease, opacity .3s ease;
    }

    &:hover {
      &:after {
        transform: translateY(100%) scaleX(1);
        opacity: 1;
      }
    }

    &.active {
      &:after {
        transform: translateY(100%) scaleX(1);
        opacity: 1;
      }
    }
`;

const MainMenu = () => (
  <MenuWrapper>
    <MenuLink activeClassName="active" to="/">Home</MenuLink>
    <MenuLink activeClassName="active" to="/about">O nas</MenuLink>
    <MenuLink activeClassName="active" to="/offer">Oferta</MenuLink>
    <MenuLink activeClassName="active" to="/portfolio">Portfolio</MenuLink>
    <MenuLink activeClassName="active" to="/blog">Blog</MenuLink>
    <MenuLink activeClassName="active" to="/90sm">#90sOM</MenuLink>
    <MenuLink activeClassName="active" to="/work">Praca</MenuLink>
    <MenuLink activeClassName="active" to="/contact">Kontakt</MenuLink>
  </MenuWrapper>
);

export default MainMenu;
