import React from 'react';
import styled from 'styled-components';

import Homework from '../Homework/Homework.jsx';
import SunAndMoon from '../SunAndMoon/SunAndMoon.jsx';

const Main = () => {
    return (
        <MainStyled>
            <h1>The Main Content</h1>
            <SunAndMoon />
            <Homework />
        </MainStyled>
    )
}

export default Main;

const MainStyled = styled.main`
    background-color: #d3c795;
    padding: 10px;
`;