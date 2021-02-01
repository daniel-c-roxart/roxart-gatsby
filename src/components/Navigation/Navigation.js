import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import MainMenu from './NavigationMenu';
import NavigationSocialMedia from './NavigationSocialMedia';
import logo from '../../assets/images/logo.gif';

const NavigationWrapper = styled.header`
    display: flex;
    width: 100%;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

`;

const NavigationContainer = styled.div`
    width: 1350px;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavigationContainerBottom = styled(NavigationContainer)`
  padding: 14px 0;
`;

const NavigatonHeader = styled.h1`
    font-size: 13px;
    line-height: 32px;
    font-weight: 400;
    margin: 0;
`;

const NavigationContact = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    li {
        margin-left: 30px;

        p, a {
            font-size: 13px;
            line-height: 32px;
            color: #2b2a29;
            text-decoration: none;
            transition: color .3s ease;

            &:hover {
                color: #ff8200;
            }
        }
    }
`;

const NavigationLogo = styled(Link)`
    display: block;
    text-decoration: none;

    img {
        max-width: 100%;
        display: block;
        margin: 0;
    }
`;

const RightContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Navigation = () => (
  <NavigationWrapper id="mainMenu">
    <NavigationContainer>
      <NavigatonHeader>Agencja Reklamowa Rzeszów</NavigatonHeader>
      <NavigationContact>
        <li><a href="https://www.google.com/maps/place/Kolejowa+1,+35-073+Rzesz%C3%B3w/@50.040542,22.0059381,17z/data=!3m1!4b1!4m5!3m4!1s0x473cfb02a5d79505:0x90e3e9ec9ac04aa1!8m2!3d50.040542!4d22.0081268" target="_blank" rel="noreferrer">ul. Kolejowa 1, 35-073 Rzeszów</a></li>
        <li><a href="mailto:biuro@roxart.pl">biuro@roxart.pl</a></li>
        <li><a href="tel:+48 517 398 997">+48 517 398 997</a></li>
      </NavigationContact>

    </NavigationContainer>
    <NavigationContainerBottom>
      <NavigationLogo to="/" title="Agencja Reklamowa ROXart - kompleksowa obsługa firm.">
        <img src={logo} alt="Roxart - Agencja Reklamowa Rzeszów" />
      </NavigationLogo>

      <RightContentWrapper>
        <MainMenu />
        <NavigationSocialMedia />
      </RightContentWrapper>
    </NavigationContainerBottom>
  </NavigationWrapper>
);

export default Navigation;
