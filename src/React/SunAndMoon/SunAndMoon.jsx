import React, { useState } from 'react';
import styled from 'styled-components';

const SunAndMoon = () => {

    const [imageState, imageStateUpdate] = useState('/img/sun.png');

    const handleOnMouseOver = () => {
        console.log('Mousing over');
        imageStateUpdate('/img/moon.png');
    }
    const handleOnMouseOut = () => {
        console.log('Mousing out');
        imageStateUpdate('/img/sun.png');
    }

    return (
        <SunAndMoonStyled>
            <h2>Sun And Moon changes</h2>
            <img
                src={ imageState }
                alt='Sun'
                onMouseOver={ handleOnMouseOver }
                onMouseOut={ handleOnMouseOut }
            />
        </SunAndMoonStyled>
    )
}

export default SunAndMoon;

const SunAndMoonStyled = styled.div`
    background-color: #548253;

    text-align: center;
    padding-bottom: 50px;

    h2 {
        background-color: #37070f;
        color: white;
    }
`;