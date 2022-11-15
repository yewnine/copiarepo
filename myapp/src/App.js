import React,{useContext} from 'react';
import { Header } from "./componentes/Header";
import { BrowserRouter as Router}  from 'react-router-dom';
import banner from './images/banner.png'
import {Modal, Button} from 'react-bootstrap';

function App() {
  const[show, setShow] = React.useState(null);
  const cerrarModal = () => setShow(false);
  const abrirModal = () => setShow(true);

  return (
    
    <div className="App">
      <Router>
      <Header />
      </Router>
      <img src={banner} alt="banner" style={{width:'60%', display:'block', marginLeft:'auto', marginRight:'auto'}}/>
      <div className='texto'>Grand Theft Auto Online</div>
      <h1>GTA Online: The Criminal Enterprises ya disponible</h1>
      <Button variant="primary" onClick={abrirModal} style={{color:"white", paddingTop: "-1rem", marginLeft:'75rem', marginTop:'-5rem', fontFamily:'Helvetica', fontWeight: "bold", fontSize: "1.5rem", borderColor: "white", backgroundColor: "black"}} >JUEGA AHORA</Button>               
      <Modal show={show} onHide={cerrarModal}>
         <Modal.Header closeButton>
            <Modal.Title>Disfruta la experiencia!</Modal.Title>
         </Modal.Header>
         <Modal.Body>La descarga comenzará en breve.</Modal.Body>
             <Modal.Footer >
               <Button variant="primary" onClick={cerrarModal}>cerrar</Button>
             </Modal.Footer>
        </Modal>
    </div>
    
  );
}

export default App;