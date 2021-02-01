import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 45px;

    a {
        display: block;
        margin-left: 8px;
        font-weight: 700;
        color: ${({ theme }) => theme.black};
        text-decoration: none;

        &:hover {
            color: ${({ theme }) => theme.orange}
        }
    }
`;

const MessagesModal = styled.button`
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.black};
    transition: .3s ease;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.orange}
    }

`;

const NavigationSocialMedia = () => (
  <Wrapper>
    <MessagesModal>MSG</MessagesModal>
    <a href="https://www.facebook.com/AgencjaReklamowaROXart?fref=ts" target="_blank" rel="noreferrer">fb</a>
    <a href="https://www.instagram.com/agencja_reklamowa_roxart/" target="_blank" rel="noreferrer">in</a>
    <a href="https://www.youtube.com/channel/UCGKLEiGU0xhhDKwH-rF0q-g" target="_blank" rel="noreferrer">yt</a>
    <a href="https://www.behance.net/roxartpoland" target="_blank" rel="noreferrer">be</a>
    <a href="https://www.tiktok.com/@agencjareklamowaroxart?language=pl&sec_uid=MS4wLjABAAAAzirdl3TfgEIoEHXmBiInVaX3D4obTBcH5CqcSIx95PsGW1OsZr2qElJNeI1NSBu2&share_app_name=musically&timestamp=1582295497&u_code=dag1bkk0e9jmie&utm_campaign=client_share&utm_medium=android&utm_source=messenger&source=h5_m" target="_blank" rel="noreferrer">tik</a>
  </Wrapper>
);

export default NavigationSocialMedia;
