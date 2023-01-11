import React,{useCallback} from 'react';
import { useNavigate } from 'react-router';
import { SearchOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import {AiTwotoneFire} from 'react-icons/ai'
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Info=styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    opacity:0;
    transition:all 0.5s ease;
    cursor:pointer;
`;


const Container=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    flex-direction:Horizontal; 
    margin:5px;
    min-width:280px;
    height:350px;
    background-color:#f5fbfd;
    position:relative;
    &:hover ${Info}{
        opacity:1;

    }
`;
const Circle=styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:white;
    position:absolute;
`;

const Image=styled.img`
    height:75%;    
    z-index:2;
`;
const Icon=styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    cursor:pointer;a
    transition:all 0.5s ease ; 

    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.1);
    }

`;



const Product= ({item})=> {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/products/123', {replace: true}), [navigate]);
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <Link to={"/cart"}>
                <ShoppingCartOutlined/>
                </Link>
                
            </Icon>
            <Icon onClick={handleOnClick}>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <AiTwotoneFire/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
