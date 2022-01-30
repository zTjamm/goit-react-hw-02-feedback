import React from 'react';
import {Wrapper,Name,Span} from './Counter.styled'

const Counter =({good, neutral, bad})=> {
  return (
    <Wrapper>
    <Name>Statistics</Name>
    <Span>Good:&nbsp;{good}</Span>
    <Span>Neutral:&nbsp;{neutral}</Span>
    <Span>Bad:&nbsp;{bad}</Span>
</Wrapper>
  )
}
export default Counter;