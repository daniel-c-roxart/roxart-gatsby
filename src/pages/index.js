import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import Container from '../components/Container/Container';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  align-items: flex-start;
  justify-content: center;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  flex-direction: column;


    div {
      width: 100%;
    }
`;

const Header = styled.h2`
  color: ${({ theme }) => theme.black};
  font-size: 52px;
  line-height: 47px;
  margin-bottom: 20px;
  margin-top: 0;
  font-weight: 800;
`;

const WhatWeDoWrapper = styled.div`
  color: ${({ theme }) => theme.moreBlack};
  font-size: 18px;
  line-height: 1.2;
  display: flex;
  flex-wrap: wrap;

  a, span {
    color: ${({ theme }) => theme.moreBlack};
    font-size: 18px;
    line-height: 1.2;
    display: inline-block;
    text-decoration: none;
    letter-spacing: .15px;
    font-weight: 400;
    transition: color .3s ease
  }
  a {
    &:hover {
      color: ${({ theme }) => theme.orange};
    }
  }
  span {
    margin: 0 4px;
  }
`;

const IndexPage = ({ data }) => (
  <>
    <Container>
      <Wrapper>
        <Header>SIŁA SKUTECZNEJ REKLAMY</Header>
        <WhatWeDoWrapper>
          <Link to="oferta/marketing">marketing</Link>
          <span>/</span>
          <Link to="oferta/projekty-graficzne">design</Link>
          <span>/</span>
          <Link to="oferta/strony-internetowe">web</Link>
          <span>/</span>
          <Link to="https://social.roxart.pl/">social media</Link>
          <span>/</span>
          <Link to="oferta/reklama-w-google">e-commerce</Link>
          <span>/</span>
          <Link to="oferta/wideo-marketing">video</Link>
        </WhatWeDoWrapper>
        <Paragraph>
          Jesteśmy czołową
          {' '}
          <strong>Agencją Reklamową w Rzeszowie</strong>
          , na rynku od 8 lat.
          Naszą siłą jest umiejętność
          {' '}
          <strong>tworzenia skutecznych reklam</strong>
          , które nie tylko
          przyciągają uwagę, lecz również generują zyski. Specjalizujemy się w tworzeniu
          {' '}
          <strong>
            projektów
            graficznych
          </strong>
          {' '}
          szeroko rozumianych
          {' '}
          <strong>reklam</strong>
          {' '}
          oraz skutecznych
          {' '}
          <strong>stronach internetowych</strong>
          . Naszymi klientami są firmy z całej Polski i nie tylko,
          które cenią przede wszystkim dobry i dopracowany
          {' '}
          <strong>design</strong>
          . Nasz zespół to
          kreatywni graficy, wyspecjalizowani programiści, doświadczeni marketingowcy
          - krótko mówiąc specjaliści od
          {' '}
          <strong>reklamy</strong>
          {' '}
          z pasją.
        </Paragraph>
        <Paragraph>
          Powiedz nam czego oczekujesz, a my zajmiemy się resztą - zaawansowane
          {' '}
          <strong>projekty graficzne</strong>
          , skomplikowane
          {' '}
          <strong>strony internetowe</strong>
          {' '}
          lub
          wymagające
          {' '}
          <strong>kampanie reklamowe</strong>
          {' '}
          - to tylko część działań, które realizujemy
          każdego dnia na terenie nie tylko
          {' '}
          <strong>Rzeszowa</strong>
          , lecz całej Polski.
        </Paragraph>
      </Wrapper>
      <Wrapper>
        <Image fluid={data.file.childImageSharp.fluid} />
      </Wrapper>
    </Container>
  </>
);

export const query = graphql`
  {
    file(name: {eq: "hero_img"}) {
      childImageSharp {
        fluid(maxWidth: 555, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.node.isRequired,
};

export default IndexPage;
