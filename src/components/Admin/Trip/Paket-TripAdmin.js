import React from 'react';
import styled from 'styled-components';
import remove from '../../../images/Remove.svg';
import refresh from '../../../images/Refresh.svg';
import ImageUploading from 'react-images-uploading';

export default function PaketTripAdmin() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return(
      <>
        <div className='Background-admin'>
          <Title>
              PENGINAPAN
          </Title>
        
        <MainInput>
          <Input type="text" id="#" name="#" placeholder="Nama Trip"/>
        </MainInput>
        <Border>
              <div className='Title-3'>
                Masukan Foto Penginapan
              </div>

          <Cover>
          <div>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
          // write your building UI
          <div>
            <ButtonImg
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </ButtonImg>
            &nbsp;
            <ButtonImg2 onClick={onImageRemoveAll}>Remove all images</ButtonImg2>
            {imageList.map((image, index) => (
              <ImgUp>
                <img src={image['data_url']} alt="" width="350" />
                <div>
                  <div>
                  <img className='main-image' onClick={() => onImageUpdate(index)} src={refresh} alt="remove"/>
                  </div>
                  <div>
                  <img className='main-image2' onClick={() => onImageRemove(index)} src={remove} alt="remove"/>
                  </div>
                </div>
              </ImgUp>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
          </Cover>
          </Border>

          <form>
            <Textarea>Caption...</Textarea>
          </form>

          <Content>
            <div>
              <div className='Title-2'>
                PAKET WISATA
              </div>
              <Boxpaket>
                <Content>
                  <Paket>
                    PESERTA
                  </Paket>
                  <Paket>
                    HARGA
                  </Paket>
                </Content>
                <div>
                  <Peserta type="text"  placeholder="2"/>
                  <Harga type="number"  placeholder="Rp.500.000"/>
                </div>
                <div>
                  <Peserta type="text"  placeholder="2"/>
                  <Harga type="number"  placeholder="Rp.500.000"/>
                </div>
                <div>
                  <Peserta type="text"  placeholder="2"/>
                  <Harga type="number"  placeholder="Rp.500.000"/>
                </div>
                <div>
                  <Peserta type="text"  placeholder="2"/>
                  <Harga type="number"  placeholder="Rp.500.000"/>
                </div>
                <div>
                  <Peserta type="text"  placeholder="2"/>
                  <Harga type="number"  placeholder="Rp.500.000"/>
                </div>
              </Boxpaket>
            </div>

            <div>
              <div className='Title-2'>
                FASILITAS
              </div>
              <form>
                <Textarea2>Text...</Textarea2>
              </form>
            </div>
          </Content>

          <div>
            <div className='Title-2'>
              NOTE :
            </div>
            <form>
                <Textarea3>Text...</Textarea3>
            </form>
            <Button>
              UPLOAD
            </Button>
          </div>

        </div>
      </>
  )
}

const ImgUp = styled.div`
display: flex;
margin: 20px 0px;
`;

const Border = styled.div`
border: 2px solid white;
border-radius: 30px;
padding: 10px 0px;
margin: 0px 100px
`;

const Peserta = styled.input`
border: 2px solid black;
border-radius: 10px;
padding: 5px 10px;
margin: 5px 20px;
width: 30%;
outline: none;
&:focus{
  border: 2px solid #6C63FF;
}
&::-webkit-inner-spin-button,
-webkit-outer-spin-button{
  -webkit-appearance: none; 
margin: 0;
}
`;

const Harga = styled.input`
border: 2px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 5px 20px;
  width: 30%;
  outline: none;
  &:focus{
    border: 2px solid #6C63FF;
  }
  &::-webkit-inner-spin-button,
  -webkit-outer-spin-button{
    -webkit-appearance: none; 
  margin: 0;
  }
`;

const Title = styled.div`
  color: white;
  font-size: 25px;
  font-weight: bold;
  background-color: #BE9427;
  text-align:center;
  margin: 0px 400px;
  padding: 3px 0px;
  border-radius: 10px;
`;

const Cover = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
`; 

const Content = styled.div`
  display: flex;
`;

const Boxpaket = styled.div`
  Background-color: #105E8A;
  border-radius: 20px;
`;

const Paket = styled.div`
  color: white;
  font-size: 20px;
  padding: 10px 40px;
  text-align: center;
`;

const Input = styled.input`
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 5px 0px;
  width: 30%;
  outline: none;
  &:focus{
    border: 4px solid #6C63FF;
  }
  &::-webkit-inner-spin-button,
  -webkit-outer-spin-button{
    -webkit-appearance: none; 
  margin: 0;
  }
`;

const MainInput = styled.div`
  margin-left: 15%;
  margin-top: 10px;
`;

const Textarea = styled.textarea`
  margin: 20px 10%;
  width: 80%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 10px;
  outline:none;
  background-color: white;
  font-size: 16px;
  resize: none;
  &:focus{
    border: 4px solid #6C63FF;
  }
`;

const Textarea2 = styled.textarea`
  margin: 20px 5%;
  width: 800px;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 10px;
  outline:none;
  background-color: white;
  font-size: 16px;
  resize: none;
  &:focus{
    border: 4px solid #6C63FF;
  }
`;

const Textarea3 = styled.textarea`
  margin: 20px 5%;
  width: 400px;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 10px;
  outline:none;
  background-color: white;
  font-size: 16px;
  resize: none;
  &:focus{
    border: 4px solid #6C63FF;
  }
`;

const Button = styled.button`
  margin: 0;
  position: relative;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin-top: 40px;
  padding: 10px 30px;
  border-radius: 20px;
  background: #19B200;
  outline: none;
  border:  1px solid;
  cursor: pointer;
  color: white;
  font-weight: bold;
  &:hover {
    padding: 10px 30px;
    transition: all 0.3s ease-out;
    background-color: #6C63FF;
    color: white;
    border-radius: 20px;
    border: 1px solid var(--white);
    transition: all 0.3s ease-out;
  }
`;

const ButtonImg = styled.button`
  margin: 10px 0px;
  padding: 10px 30px;
  border-radius: 20px;
  background: #19B200;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
  &:hover {
    padding: 10px 30px;
    transition: all 0.3s ease-out;
    background-color: #6C63FF;
    color: white;
    border-radius: 20px;
    border: 0px solid var(--white);
    transition: all 0.3s ease-out;
  }
`;

const ButtonImg2 = styled.button`
  margin: 10px 0px;
  padding: 10px 30px;
  border-radius: 20px;
  background: red;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
  &:hover {
    padding: 10px 30px;
    transition: all 0.3s ease-out;
    background-color: #F26A6A;
    color: white;
    border-radius: 20px;
    border: 0px solid var(--white);
    transition: all 0.3s ease-out;
  }
`;