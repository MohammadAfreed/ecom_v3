import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import styled from 'styled-components';


const Container=styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;

const Title=styled.h1`
    font-size:70px;
    margin: 20px;
`;

const Desc=styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px
`;

const InputContainer=styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border: 10x solid lightgray;

`;

const Input=styled.input`
    border: none;
    flex:8;
    padding-left:20px;
`;

 const Button=styled.button`
    flex:1; 
    border:none;
    background-color:teal;
    color:white;
 `;


export const Newsletter = () => {
  return (
    <Container>
        <Title>NewsLetter </Title>
        <Desc> Get rapid Updates of your favorite Products....!!</Desc>
        <InputContainer >
            <Input placeholder="your email"/>
            <Button>
                <AiOutlineSend/>
            </Button>
        
        </InputContainer>
    </Container>
  )
}
