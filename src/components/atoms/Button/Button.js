import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const Button = styled(Link)`
    color: ${({ theme }) => theme.black};
    border: 2px solid #ff8200;
    padding: 10px 40px;
    font-size: 14px;
    border-radius: 23px;
    display: inline-block;
    cursor: pointer;
    transition: color .3s ease, background .3s ease;
    text-decoration: none;

    &:hover {
        color: #fff;
        background: ${({ theme }) => theme.orange};
    }

    ${({ secondary }) => secondary && css`
        background-color:  ${({ theme }) => theme.black};
        border-color:  ${({ theme }) => theme.black};
        color: hsl(0deg 0% 100%);

        &:hover {
            color: ${({ theme }) => theme.black};;
            background: transparent;
        }
    `}
`;

export default Button;
