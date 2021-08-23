import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context, { updateControl } from '../../Context/index.js';


const Input = () => {
    const { dispatch, state } = useContext(Context);

    const {
        fullname
    } = state;

    console.log('fullname', fullname);

    const handleUpdate = (e) => {
        dispatch(updateControl({
            fullname: e.target.value
        }));
    }

    return (
        <InputStyled
            className='Input'
            type="text"
            id='first'
            value={ fullname }
            onChange={ handleUpdate }
        />
    );
}

export default Input;

const InputStyled = styled.input`

`;