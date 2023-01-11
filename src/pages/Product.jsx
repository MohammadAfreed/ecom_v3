import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { Add } from "@mui/icons-material";
import { Remove } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Container=styled.div``;
const Wrapper=styled.div`
    padding:50px;
    display:flex;
`;
const ImgContainer=styled.div`
    flex:1;

`;
const Image=styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
`;
const InfoContainer=styled.div`
    flex:1;
    padding: 0px 50px;
`;
const Title=styled.h1`
    font-weight:200;

`;
const Desc=styled.p`
    margin:20px 0px;
`;
const Price=styled.span`
    font-weight:100;
    font-size:40px;
`;
const FilterContainer=styled.div`
    width:50%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;

`;

const Filter=styled.div`
    display:flex;
    align-items:center;
`;

const FilterTitle=styled.span`
    font-size:20px;
    font-weight:200;
`;

const FilterColor=styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};
    margin:0px 5px;
    cursor:pointer;
`;

const FilterSize=styled.select`
    margin-left:10px;
    padding:5px;
`;

const FilterSizeOption=styled.option`
    
`;

const AddContainer=styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;
const AmountContainer=styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`;

const Amount=styled.span`
    width:30;
    height:30;
    border-radius:10px;
    border:1px solid real;
    display:flex;
    align-items:center;
    justify-content: center;
    margin:0px 5px;
`;
const Button=styled.button`
    padding:15px;
    border:2px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight:500;

    &hover{
        background-color:#f8f4f4;
    }
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"></Image>
            </ImgContainer>
            <InfoContainer>
                <Title> Image</Title>
                <Desc>Heloow world how are you</Desc>
                <Price>Rs 200</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Link to={"/cart"}>
                    <Button>Add to Cart</Button>
                    </Link>
                    
                </AddContainer>

            </InfoContainer>

        </Wrapper>
        <Newsletter/>
        <Footer/>

    </Container>
  )
}

export default Product
