import React from 'react';
import styled from 'styled-components';


const CardComp = (Props) => {
    return (
        <Card>
           <img src={Props.Image} alt="Trip" />
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