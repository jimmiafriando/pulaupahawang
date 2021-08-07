import React from 'react';
import './About.css';
import styled from 'styled-components';
import cover from '../../../images/About.svg';
import images from '../../../images/About2.svg';


export default function About() {
  return (
    <>
      <div className='Background-user'>
       <Cover>
        <img src={cover} alt="cover" />
       </Cover>

        <div className='Title'>
          Pulau Pahawang
        </div>

        <p className='Artikel'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris.
        </p>

        <Images>
          <img src={images} alt="images" />
        </Images>
      </div>

      <Content>
        <div>
        
          <div className='Title-2'>
          Lorem ipsum dolor sit amet ?
          </div>
          <p className='Artikel-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
          </p>
        </div>

        <div>
          <div className='Title-2'>
          Lorem ipsum dolor sit amet ?
          </div>
        
          <p className='Artikel-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
          </p>
        </div>
      </Content>

      <div className='Background-user'>
        <div className='Title-3'>
        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ?
        </div>

        <p className='Artikel-3'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor
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
         anim id est laborum.
        </p>
      </div>

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