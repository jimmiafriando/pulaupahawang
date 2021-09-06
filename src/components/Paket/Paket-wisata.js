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
  width: 100%;

//   // tab-port // tablet portrait
//   @media (min-width:601px) and (max-width:900px) {
//     margin-right: 10px;
//   }
//   // phone
//   @media (min-width:0px) and (max-width:600px) {
//     font-size: 15px;
  }
`;

const Content = styled.div`
  display: flex;
`;

const Paket = styled.div`
  font-size: 20px;
  padding: 5px 40px;
  text-align: center;

  // tab-land // tablet landscape (900px - 1200px)
    @media (min-width:901px) and (max-width:1200px) {
      font-size: 20px;
    }
    // tab-port // tablet portrait
    @media (min-width:601px) and (max-width:900px) {
      font-size: 15px;
    }
    // phone
    @media (min-width:0px) and (max-width:600px) {
      font-size: 10px;
    }
`;