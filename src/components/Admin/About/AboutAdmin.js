import React, { useEffect, useState } from 'react';
import firebase, { storage } from '../../../config/firebase';
import styled from 'styled-components';
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);
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
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  useEffect(()=>{
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
  },[]);

  const saveDashboard = () => {
    const promises = [];
    
    images.forEach((image) => {
      const uploadTask = storage.ref(`imagesDashboard/${image.name}`).put(image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        async () => {
          await storage
            .ref("imagesDashboard")
            .child(image.name)
            .getDownloadURL()
            .then((urls) => {
              setUrls((prevState) => [...prevState, urls]);
            });
        }
      );
    });

    Promise.all(promises)
      .then(() => alert("All images uploaded"))
      .catch((err) => console.log(err));

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

  return (
    <>
    <NavbarAdmin/>
      <div className='Background-admin'>
        <Title>
          Dashboard
        </Title>
       <Border>
        <Input value={name} onChange={e => setName(e.target.value)} placeholder='pulau pahawang'/>

        <Textarea value={caption} onChange={e => setCaption(e.target.value)} >
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

        <Border>
              <div className='Title-3'>
                Masukan Foto Wisata
              </div>
              <Progress>
                <progress value={progress} max="100" />
              </Progress>
              <div>
                <ButtonImg type="file" multiple onChange={handleChange} />
              </div>

          <Cover>
            <div>
                  {urls.map((url, i) => (
                <img
                    key={i}
                    style={{ width: "350px" }}
                    src={url || "http://via.placeholder.com/300"}
                    alt="firebase"
                    />
                    ))}
            </div>
          </Cover>
        </Border>

        <Title2>
          Content 1
        </Title2>
        <Input value={header} onChange={e => setHeader(e.target.value)} placeholder='Header'/>
          <Textarea value={content} onChange={e => setContent(e.target.value)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
          </Textarea>

        <Input value={header2} onChange={e => setHeader2(e.target.value)} placeholder='Header'/>
          <Textarea value={content2} onChange={e => setContent2(e.target.value)}>
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
        <Textarea value={content3} onChange={e => setContent3(e.target.value)}>
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

const Progress = styled.div`
// background: blue;
margin-left: 50px;
`;

const Border = styled.div`
border: 2px solid white;
border-radius: 30px;
padding: 10px 0px;
margin: 0px 100px
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

