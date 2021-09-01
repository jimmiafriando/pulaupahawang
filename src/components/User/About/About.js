import React, { useState, useEffect } from 'react';
import firebase from '../../../config/firebase';
import './About.css';
import styled from 'styled-components';
import cover from '../../../images/About.png';
import images from '../../../images/About2.svg';
import NavbarUser from '../../../components/NavbarUser/Navbar';

export default function About() {
  const [AboutList, setAboutList] = useState();

  useEffect(()=>{
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
  },[]);
  return (
    <>
      <NavbarUser/>
    {AboutList ? AboutList.map((data) => 
    <div>
      <div className='Background-user'>
       <Cover>
        <img src={cover} alt="cover" />
       </Cover>

        <div className='Title'>
          {data.name}
        </div>

        <p className='Artikel'>{data.caption}
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris. */}
        </p>

        <Images>
          <img src={images} alt="images" />
        </Images>
      </div>

      <Content>
        <div>
        
          <div className='Title-2'>{data.header}
          {/* Lorem ipsum dolor sit amet ? */}
          </div>
          <p className='Artikel-2'>{data.content}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum. */}
          </p>
        </div>

        <div>
          <div className='Title-2'>{data.header2}
          {/* Lorem ipsum dolor sit amet ? */}
          </div>
        
          <p className='Artikel-2'>{data.content2}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum. */}
          </p>
        </div>
      </Content>

      <div className='Background-user'>
        <div className='Title-3'>{data.header3}
        {/* Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ? */}
        </div>

        <p className='Artikel-3'>{data.content3}
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
        </p>
      </div>
    </div>
          ): ''}
    </>
  );
}

const Cover = styled.div`
  display: flex;
  justify-content: center;
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