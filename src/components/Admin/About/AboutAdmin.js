import React, { useEffect, useState } from 'react';
import firebase from '../../../config/firebase';
import styled from 'styled-components';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import remove from '../../../images/delete.png';
import { v4 as uuid } from 'uuid';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 10,
    textAlign: 'center',
  },
}));

export default function About() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState([]);
  const [DashboardList, setDashboardList] = useState([]);
  const [name, setName] = useState('');
  const [caption, setCaption] = useState('Caption...');
  const [header, setHeader] = useState('');
  const [content, setContent] = useState('Caption...');
  const [header2, setHeader2] = useState('');
  const [content2, setContent2] = useState('Caption...');
  const [header3, setHeader3] = useState('');
  const [content3, setContent3] = useState('Caption...');

  const handleChange = (e) => {
      setFile(e.target.files[0]);
  };

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

    const readDashboard = firebase.database().ref('Dashboard/');
    readDashboard.on('value', (snapshot)=>{
      const Dashboard = snapshot.val();
      const DashboardList = [];
      for (let id in Dashboard) {
        DashboardList.push({ id,...Dashboard[id] });
      }
      setDashboardList(...DashboardList, DashboardList);
      console.log(DashboardList)
      setName(DashboardList[0].name)
      setCaption(DashboardList[0].caption)
      setHeader(DashboardList[0].header)
      setHeader2(DashboardList[0].header2)
      setHeader3(DashboardList[0].header3)
      setContent(DashboardList[0].content)
      setContent2(DashboardList[0].content2)
      setContent3(DashboardList[0].content3)
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const saveDashboard = async (e) => {
    const id = uuid();
    const storageRef = firebase.storage().ref('imagesDashboard').child(id);
    const imageRef = firebase.database().ref('imagesDashboard').child(id);
    await storageRef.put(file);
    storageRef.getDownloadURL().then((url) => {
      imageRef.set(url);
      const newState = [...imageUrl, { id, url }];
      setImageUrl(newState);
    });

      const createRef = firebase.database().ref('Dashboard/').child(DashboardList.id);
      const create = {
      name,
      caption,
      header,
      header2,
      header3,
      content,
      content2,
      content3,
    };
    setName('')
    setCaption('Caption...')
    setHeader('')
    setHeader2('')
    setHeader3('')
    setContent('')
    setContent2('')
    setContent3('')

    createRef.set(create);
    };

    //material-ui
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const deleteImage = (id) => {
      const storageRef = firebase.storage().ref('imagesDashboard').child(id);
      const imageRef = firebase.database().ref('imagesDashboard').child(id);
      storageRef.delete().then(() => {
        imageRef.remove();  
      });
    };
    
  return (
    <>
    <NavbarAdmin/>
      <div className='Background-admin'>
        <Title>
          Dashboard
        </Title>
       <Border>
        <Input value={name} onChange={e => setName(e.target.value)} placeholder='pulau pahawang'/>

        <Textarea value={caption} onChange={e => setCaption(e.target.value)} maxLength='690' >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris.
        </Textarea>

        <Border2>
              <div className='Title-3'>
                Masukan Foto Wisata
              </div>
              <div>
                <ButtonImg type="file" multiple onChange={handleChange} />
              </div>

          <Cover>
          {imageUrl ? imageUrl.map(({ id, url }) => {
            return (
              <div key={id}>
                <Imgdelete src={remove} onClick={() => deleteImage(id)} alt=""/>
                <Image src={url} alt="" />
              </div>
            );
          })
        : ''}
          </Cover>
        </Border2>

        <Title2>
          Content 1
        </Title2>
        <Input value={header} onChange={e => setHeader(e.target.value)} placeholder='Header'/>
          <Textarea value={content} onChange={e => setContent(e.target.value)} maxLength='450'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
          </Textarea>

        <Input value={header2} onChange={e => setHeader2(e.target.value)} placeholder='Header'/>
          <Textarea value={content2} onChange={e => setContent2(e.target.value)} maxLength='450'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
          </Textarea>

        <Title2>
          Content 2
        </Title2>
      <Input value={header3} onChange={e => setHeader3(e.target.value)} placeholder='Header'/>
        <Textarea value={content3} onChange={e => setContent3(e.target.value)} maxLength='450'>
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
        </Textarea>
      <Button onClick={() => {saveDashboard(DashboardList); handleOpen();}}>
        UPDATE
      </Button>
    </Border>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">UPDATE BERHASIL!!!</h2>
            <br/>
            <p id="transition-modal-description">Silahkan Cek dihalaman dashboard user</p>
          </div>
        </Fade>
      </Modal>
      </div>
    </>
  );
}

const Imgdelete = styled.img`
cursor: pointer;
position: absolute;
padding-left: 10px;
height: 3%;
&:hover {
  transition: all 0.3s ease-out;
  height:4%;
}
`;

const Image = styled.img`
margin: 0px 10px;
width: 250px;
height: 200px;
object-fit: cover;
border-radius:40px;

// tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    width: 200px;
    height: 130px;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    width: 150px;
    height: 100px;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    width: 120px;
    height: 80px;
  }
`;

const Title2 = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-left: 10%;
    margin-top: 20px;
`;

const Title = styled.div`
    color: white;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
`;

const Border = styled.div`
border: 2px solid white;
border-radius: 30px;
padding: 10px 0px;
margin: 0px 100px;
width: 80%;

  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    width: 80%;
  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    width: 80%;
    border: none;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    width: 100%;
    border: none;
    margin: 0px 0px;
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

const Border2 = styled.div`
border: 2px solid white;
border-radius: 30px;
padding: 10px 0px;
margin: 0px 110px;
width: 80%;

  // tab-land // tablet landscape (900px - 1200px)
  @media (min-width:901px) and (max-width:1200px) {
    width: 100%;
    margin: 0px 0px;

  }
  // tab-port // tablet portrait
  @media (min-width:601px) and (max-width:900px) {
    width: 100%;
    margin: 0px 0px;
    border: none;
  }
  // phone
  @media (min-width:0px) and (max-width:600px) {
    width: 100%;
    border: none;
    margin: 0px 0px;
  }
`;


const ButtonImg = styled.input`
  margin: 10px 10px;
  margin-left: 50px;
  padding: 10px 10px;
  border-radius: 20px;
  background: #19B200;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
  &:hover {
    padding: 10px 10px;
    transition: all 0.3s ease-out;
    background-color: #6C63FF;
    color: white;
    border-radius: 20px;
    border: 0px solid var(--white);
    transition: all 0.3s ease-out;
  }
`;

const Input = styled.input`
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 5px 10%;
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

const Textarea = styled.textarea`
  margin: 0px 10%;
  width: 80%;
  height: 100px;
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

const Cover = styled.div`
  display: flex;
  justify-content: center;
`; 

// const Images = styled.div`
//   padding-top: 30px;
//   padding-bottom: 30PX;
//   display: flex;
//   justify-content: center;
// `;


