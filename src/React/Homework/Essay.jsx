import React from 'react';
import styled from 'styled-components';

const Essay = ({ number, question, children }) => {
    return (
        <EssayStyled>
            <h3>Essay # { number }</h3>
            <div className="question">{question}</div>
            <div className="answer">{children}</div>
        </EssayStyled>
    );
}

export default Essay;

const EssayStyled = styled.div`
    padding: 20px;
    border: solid 5px teal;
    margin: 20px;

    h3 { margin: 0px 0px 10px; }

    .question {
        font-size: 18px;
        background-color: #999;
        padding: 10px;
    }
    .answer {
        font-size: 18px;
        padding: 10px;
        background-color: #eee;
    }
`;