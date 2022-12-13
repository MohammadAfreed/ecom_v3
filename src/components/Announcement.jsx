import React from 'react'
import styled from 'styled-components';

const Container=styled.div`
height:30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
font-size:14px;
font-weight:500;
`




function Announcement() {
  return (
    <Container>
        The deal you can not miss is livee......!!!!
    </Container>
  )
}

export default Announcement