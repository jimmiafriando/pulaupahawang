import React, { useState, useEffect } from 'react';
import firebase from '../../../config/firebase';
import './About.css';
import styled from 'styled-components';
import cover from '../../../images/About.png';
// import images from '../../../images/About2.svg';
import NavbarUser from '../../../components/NavbarUser/Navbar';


export default function About() {
  const [AboutList, setAboutList] = useState();
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(()=>{
    const imageRef = firebase.database().ref('imagesDashboard');
    imageRef.on('value', (snapshot) => {
      const imageUrls = snapshot.val();
      const urls = [];
      for (let id in imageUrls) {
        urls.push({ id, url: imageUrls[id] });
      }
      const newState = [...imageUrl, ...urls];
      setImageUrl(newState);
    },[]);

    const readAbout = firebase.database().ref('Dashboard/');
    readAbout.on('value', (snapshot)=>{
      const About = snapshot.val();
      const AboutList = [];
      for (let id in About) {
        AboutList.push(About[id]);
      }
      setAboutList(AboutList);
      console.log('about', AboutList)
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <>
      <NavbarUser/>
    {AboutList ? AboutList.map((data) => 
    <div>
      <div className='Background-user'>
       <Cover>
        <Coverimg src={cover} alt="cover" />
       </Cover>

        <Title>
          {data.name}
        </Title>

        <Artikel>{data.caption}
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris. */}
        </Artikel>

        <Images>
        {imageUrl ? imageUrl.map(({ id, url }) => {
            return (
              <div key={id}>
                <Image src={url} alt="" />
              </div>
            );
          })
        : ''}
        </Images>
      </div>

      <Content>
        <div>
          <Title3>{data.header}
          {/* Lorem ipsum dolor sit amet ? */}
          </Title3>
          <Artikel2>{data.content}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum. */}
          </Artikel2>
        </div>

        <div>
          <Title3>{data.header2}
          {/* Lorem ipsum dolor sit amet ? */}
          </Title3>
        
          <Artikel2>{data.content2}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum. */}
          </Artikel2>
        </div>
      </Content>

      <div className='Background-user'>
        <Title2>{data.header3}
        {/* Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ? */}
        </Title2>

        <Artikel>{data.content3}
         {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
         dolor in reprehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
         anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
         dolor in reprehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
         anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
         dolor in reprehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
         anim id est laborum. */}
        </Artikel>
      </div>
    </div>
          ): ''}
    </>
  );
}

const Artikel= styled.p`
  padding: 0px 40px;
  padding-top: 10px;
  color: white;
  font-size: 20px;
  text-align: justify;

  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    font-size: 15px;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    font-size: 15px;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    font-size: 15px;
  }
`;

const Artikel2= styled.p`
color: black;
font-size: 20px;
padding-left: 40px;
padding-right: 40px;
padding-bottom: 20px;
text-align: justify;

  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    font-size: 15px;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    font-size: 15px;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    font-size: 15px;
  }
`;

const Title = styled.div`
  padding-left: 50px;
  color: white;
  font-size: 50px;
  font-weight: bold;

  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    font-size: 40px;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    font-size: 30px;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    font-size: 25px;
  }
`;

const Title2 = styled.div`
  padding-left: 50px;
  color: white;
  font-size: 25px;
  font-weight: bold;

  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    font-size: 25px;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    font-size: 20px;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    font-size: 20px;
  }
`;

const Title3 = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
  color: black;
  font-size: 25px;
  font-weight: bold;

  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    font-size: 25px;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    font-size: 20px;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    font-size: 20px;
  }
`;

const Image = styled.img`
margin: 0px 10px;
width: 350px;
height: 250px;
object-fit: cover;
border-radius:40px;

  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    width: 250px;
    height: 150px;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    width: 180px;
    height: 100px;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    width: 90px;
    height: 50px;
  }
`;

const Cover = styled.div`
  display: flex;
  justify-content: center;
`; 

const Coverimg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;

  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    width: 70%;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    width: 65%;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    width: 50%;
  }
`;

const Images = styled.div`
  padding-top: 30px;
  padding-bottom: 30PX;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  background: white;
`;