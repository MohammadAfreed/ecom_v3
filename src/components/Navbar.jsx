import React from 'react';
import styled from 'styled-components';
import {ShoppingCartOutlined} from '@ant-design/icons';
import { Badge } from '@mui/material';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';





const Container=styled.div`
    height: 60px;
    

    
`;


const Wrapper=styled.div`
    padding: 10px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
 
    `;
const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`;

const Language=styled.span`
font-size: 14px;
cusrsor: pointer;`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  color: grey;
  font-Size:16;

  
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor:pointer;

  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
 
 
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 30px;
  padding:5px;

`;



function Navbar() {
  const navigate = useNavigate();
const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate]);
const handleOnClick1 = useCallback(() => navigate('/cart', {replace: true}), [navigate]);
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='search'/>
                    {/* <Search style={{color:"grey",fontSize:16}}/> */}
                </SearchContainer>
            </Left>
            <Center>
                <Logo onClick={handleOnClick}>E-Commerce</Logo>
            </Center>
            <Right>
              <MenuItem>Register</MenuItem>
              <MenuItem>Signin</MenuItem>
                
              <Badge badgeContent={4} color="primary" onClick={handleOnClick1}>
               <ShoppingCartOutlined/>
              </Badge>

            </Right>
            
            
            </Wrapper>
       
      </Container>
  )
}

export default Navbar