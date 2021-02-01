import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import Container from '../components/atoms/Container/Container';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Button from '../components/atoms/Button/Button';
import IndexStandsOutTile from '../components/molecules/IndexStandsOutTile/IndexStandsOutTile';

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  align-items: flex-start;
  justify-content: center;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  flex-direction: column;
  padding-top: 100px;
  margin-bottom: 100px;


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
  margin-bottom: 20px;

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

const SmallHeroButton = styled(Button)`
  margin-right: 20px;
`;

const HeroImagesWrapper = styled(Wrapper)`
    position: relative;

      .gatsby-image-wrapper{

          &:not(:first-child) {
            position: absolute !important;
            max-width: 100%;
            z-index: -1; 
          }
          :first-child {
            z-index: 1;
          }
          :last-child {
            bottom: 0;
            right: -20px;
          }
      
      }
`;

const SecondContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: .5px;
    margin-bottom: .5rem;
    margin-top: 0;

    strong {
      font-weight: 600;
    }
  }

  p {
    font-size: 30px;
    font-weight: 700;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

const StandsOutContainer = styled(Container)`
  margin-top: 60px;
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
        <div className="buttonContainer">
          <SmallHeroButton to="/about" secondary>
            O nas
          </SmallHeroButton>
          <Button to="/portfolio" target="_blank">
            Zobacz portfolio
          </Button>
        </div>
      </Wrapper>
      <HeroImagesWrapper>
        <Image alt="Roxart - Hero Footballowiec" fluid={data.image1.childImageSharp.fluid} />
        <Image alt="Roxart - Hero ozdoby " fluid={data.image2.childImageSharp.fluid} />
        <Image alt="Roxart - Hero ozdoby " fluid={data.image3.childImageSharp.fluid} />
      </HeroImagesWrapper>
    </Container>

    <SecondContainer>
      <h2>
        Agencja Reklamowa
        {' '}
        <strong>ROXART</strong>
      </h2>
      <p>
        CO WYRÓŻNIA NAS OD INNYCH
      </p>
    </SecondContainer>
    <StandsOutContainer>

      <IndexStandsOutTile
        fixedValues={data.image4.childImageSharp.fixed}
        header="NOWOCZESNOŚĆ"
        paragraph="Nowatorskie podejście do tematu REKLAMY"
      />
      <IndexStandsOutTile
        fixedValues={data.image5.childImageSharp.fixed}
        header="DOŚWIADCZENIE"
        paragraph="Spore doświadczenie mimo młodego wieku"
      />
      <IndexStandsOutTile
        fixedValues={data.image6.childImageSharp.fixed}
        header="ZAANGAŻOWANIE"
        paragraph="Po prostu kochamy naszą pracę"
      />
      <IndexStandsOutTile
        fixedValues={data.image7.childImageSharp.fixed}
        header="KOMUNIKATYWNOŚĆ"
        paragraph="Lubimy rozmawiać z naszymi klientami"
      />
      <IndexStandsOutTile
        fixedValues={data.image8.childImageSharp.fixed}
        header="PORTFOLIO"
        paragraph="Jesteśmy z niego dumni!"
      />
    </StandsOutContainer>
  </>
);

export const query = graphql`
  {
    image1: file(name: {eq: "hero_img"}) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image2: file(name: {eq: "hero_ornament_1"}) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image3: file(name: {eq: "hero_oranment_2"}) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image4: file(name: {eq: "stands_out1"}) {
      childImageSharp {
        fixed(width: 51, height: 51, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    image5: file(name: {eq: "stands_out2"}) {
      childImageSharp {
        fixed(width: 51, height: 51, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    image6: file(name: {eq: "stands_out3"}) {
      childImageSharp {
        fixed(width: 51, height: 51, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    image7: file(name: {eq: "stands_out4"}) {
      childImageSharp {
        fixed(width: 51, height: 51, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    image8: file(name: {eq: "stands_out5"}) {
      childImageSharp {
        fixed(width: 51, height: 51, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.node.isRequired,
};

export default IndexPage;
