import React from 'react';
import styled from 'styled-components';


const PaketWisata = (Props) => {
    return (
        <Content>
            <Paket>
                <Listpaket>
                    {Props.Peserta} 
                </Listpaket>
            </Paket>
            <Paket>
                <Listpaket>
                    {Props.Harga}
                </Listpaket>
            </Paket>
        </Content>
    )
}
export default PaketWisata;

const Listpaket = styled.div`
  background-color: white;
  color: black;
  border-radius: 20px;
  text-align: center;
  padding: 2px 20px;
  margin: 5px 0px;
`;

const Content = styled.div`
  display: flex;
`;

const Paket = styled.div`
  font-size: 20px;
  padding: 5px 40px;
  text-align: center;
`;