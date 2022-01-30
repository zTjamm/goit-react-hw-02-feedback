import React from 'react';
import {Button,Wrapper} from './Buttons.styled'

const Buttons =({increments,buttons})=>{
    return(
    <Wrapper>
        {buttons.map((button)=>(
            <Button 
            key={button}
            type='button'
            name={button}
            onClick={increments}
            >{button}</Button>
        ))}        
    </Wrapper>
    )};
export default Buttons;