import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
import styled from 'styled-components'



const Container=styled.div`
    display:flex;
`;
const Left=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding;20px;
`;
const Logo=styled.h1`

`;

const Desc=styled.p`
    margin:20px 0px;
    
`;

const SocialContainer=styled.h1`
    display:flex;
  

`;

const SocialIcon=styled.h1`
    width:40px;
    height:40px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;

`;

const Right=styled.div`
    flex:1;
    padding:20px;
`;
const Center=styled.div`
    flex:1;
    padding:20;
`;
const Title=styled.h3`
    margin-bottom:30px;


`;

const List=styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;    
`;

const ListItem=styled.li`
    width:50%;
    margin-bottom:10px;
`;

const ContactItem=styled.div``;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Ecomm</Logo>
            <Desc>hello Guys....!!</Desc>
            <SocialContainer>
                <SocialIcon>
                    <AiFillFacebook/>
                </SocialIcon>
                <SocialIcon>
                    <AiFillInstagram/>
                </SocialIcon>
                <SocialIcon>
                    <AiFillTwitterSquare/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Track Order</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>T&C</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contacts</Title>
            <ContactItem>
                GreaterNoida, UttarPradesh
            </ContactItem>
            <ContactItem>+1800 284 922</ContactItem>
            <ContactItem>@hanu.com</ContactItem>
        </Right>
      
    </Container>
  )
}
 
export default Footer
