import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';

const Wrapper = styled.div`
    display: flex;
    width: 20%;
    padding: 0 15px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    cursor: default;

    .StandsOutImageWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        width: 100px;
        height: 100px;
        display: flex;
        border: 2px solid ${({ theme }) => theme.orange};
        border-radius: 50%;
        margin-bottom: 20px;
        transition: background-color .3s ease;

        img {
            transition: filter .1s .3s ease;
        }
    }

    .StandsOutContent {
        text-align: center;

        * {
            width: 100%;
        }

        h3 {
            margin-bottom: 6px;
            font-weight: 700;
            font-size: 18px;
            text-transform: uppercase;
        }

        p {
            font-size: 14px;
            color: ${({ theme }) => theme.gray};
            line-height: 20px;
            margin-bottom: 0;
        }
    }

    &:hover {
        .StandsOutImageWrapper {
            background-color: ${({ theme }) => theme.orange};

            img {
                filter: brightness(0) invert(1);
            }
        }
    }
`;

const IndexStandsOutTile = ({ fixedValues, header, paragraph }) => (
  <Wrapper>
    {console.log({ fixedValues })}
    <div className="StandsOutImageWrapper">
      <Image fixed={fixedValues} alt="alt" />
    </div>
    <div className="StandsOutContent">
      <h3>
        {header}
      </h3>
      <p>
        {paragraph}
      </p>
    </div>
  </Wrapper>
);

IndexStandsOutTile.propTypes = {
  header: PropTypes.string,
  paragraph: PropTypes.string,
};

IndexStandsOutTile.defaultProps = {
  header: '',
  paragraph: '',
};

export default IndexStandsOutTile;
