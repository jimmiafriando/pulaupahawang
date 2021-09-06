import React from 'react';
import styled from 'styled-components';


const CardComp = (Props) => {
    return (
        <Card>
           <Image src={Props.Image} alt="Trip" />
            <Title>
                {Props.Title}
            </Title>
        </Card>
    )
}
export default CardComp;

const Title = styled.p`
    text-align: center;
    font-weight: bold;
    padding: 5px 0px;
    color: white;
`;

const Card = styled.div`
    margin: 0px 10px;
`;

const Image = styled.img`
width: 180px;
height: 180px;
object-fit: cover;
border-radius:40px;;
&:hover {
    transition: all 0.3s ease-out;
    width: 185px;
    height: 185px;
  }

  // tab-land // tablet landscape (900px - 1200px)
    @media (min-width:901px) and (max-width:1200px) {
        width: 150px;
        height: 150px;
    }
    // tab-port // tablet portrait
    @media (min-width:601px) and (max-width:900px) {
        width: 140px;
        height: 140px;
    }
    // phone
    @media (min-width:0px) and (max-width:600px) {
        width: 100px;
        height: 100px;
    }
`;