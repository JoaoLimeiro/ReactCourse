import React from 'react';

const userInput = (props) => {
    return  (
        <input type='text' onChange={props.changeHandler}></input>
    );
};

export default userInput;