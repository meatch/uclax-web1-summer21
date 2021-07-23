import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Homework from '../Homework/Homework.jsx';

const Main = () => {
    return (
        <MainStyled>
            <h1>The Main Content</h1>
            <Switch>
                <Route path='/services'>
                    SERVICES
                </Route>
                <Route path='/contact'>
                    CONTACT
                </Route>
                <Route path='/login'>
                    LOGIN
                </Route>
                <Route path='/homework'>
                    <Homework />
                </Route>
                <Route path='/' exact>
                    WELCOME
                </Route>
            </Switch>
        </MainStyled>
    )
}

export default Main;

const MainStyled = styled.main`
    background-color: #d3c795;
    padding: 10px;
`;