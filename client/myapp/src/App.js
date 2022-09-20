
import './App.css';
import logo from './images/logo_Plan de travail 1.png'
import img from './images/4_Plan de travail 1.png'
import img1 from './images/2_Plan de travail 1.png'
import img2 from './images/3_Plan de travail 1.png'
import img3 from'./images/1_Plan de travail 1.png'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import facebook from './images/icon_Plan de travail 1 (1).png'
import instagram from './images/icon-02.png'
import heart from './images/heart.png'


function App() {

const [nom, setNom] = useState("");
const [prenom, setPrenom] = useState("");
const [telephone, setTelpehone] = useState("");
const [birth, setBirth]= useState("");
const [email, setEmail]= useState("");
const [soins, setSoins] =useState("")
const [day, setDay] = useState("");
const [month, setMonth] = useState("");
const [year, setYear] =  useState("") ;
const [msg, setMsg] = useState("")
const [msgSuccess, setMsgSuccess] = useState("");
const [showSuccess, setShowSuccess] = useState(false)
const [data, setData] = useState({
  Nom : "",
  Prenom : "",
  Telephone : "",
  Birth : "",
  Email : "",
  Soins : ""
})

const [show, setShow] = useState(false);

const getSelectOption = () => {
  const optionsValue = document.querySelector('#selectOption');
  setSoins(optionsValue.value);
        setData({Soins : soins})
}


const controlShow = () => {
  setShowSuccess(!showSuccess)
}

const sendData = ()=> {

  if(nom && prenom && telephone && email && soins && day && month && year ) {
  

    setData({
      Nom : nom,
      Prenom : prenom,
      Telephone : telephone,
      Birth : day + '-' + month + '-' +  year,
      Email : email,
      Soins : soins
    })



    const dataTosend =  JSON.stringify(data) ;
    axios.post(`/promoBack/form1/`, dataTosend, {
      headers: {
        'Content-Type': "application/json"
      }
    }

    ).then((res) => {
      setShowSuccess(!showSuccess)
      setMsgSuccess("Votre demaned a été bien envoyée, Merci pour votre confiance")})






console.log(data)

  }
  else{
    setShow(!show);
    setMsg("Veuillez remplir tous les champs");
  }
}
  return (
    <div className="App">










      <img src={img1} className="img1" alt="im1"/>
      <img src={img2} className="flower1" alt="im2" />
      <img src={img3} className="flower2" alt="im3" />

      <div className="formContainer">

        <div className="logo">
          <div className="imglogo">
            <img src={logo} alt="img" />
          </div>
        </div>


        <div className="formContent">
          <div> 



          <Modal show={showSuccess} onHide={ controlShow}  >
     
        <Modal.Body className="modalSuccess"> <div> {msgSuccess} <img src={heart} alt="heart" className='heart' /> </div>  </Modal.Body>
   
      </Modal>

       

          {
 show && <Alert variant="danger" className='alerte' >
  {msg}
  </Alert>
}


          </div>
 

<img src={img} className="flower"/>

          <div className="formFiled">

            <div className="label"> <div>  Nom </div></div>
            <div> <input className="inputName" onChange={(e) => setNom(e.target.value)} value={nom} placeholder="entrer le nom" /></div>
          </div>


          <div className="formFiled">
            <div className="label"> <div> Prénom </div>  </div>
            <div> <input className="inputPrenom" onChange={(e) => setPrenom(e.target.value)} value={prenom} placeholder="entrer prenom"/></div>
          </div>



          <div className="formFiled">
            <div className="label"> <div> Téléphone </div> </div>
            <div> <input className="inputTel" onChange={(e) => setTelpehone(e.target.value)} value={telephone} placeholder="entrer numéro de telephone" /></div>
          </div>


          <div className="formFiled">
            <div className="label"> <div>  Date de naissance </div></div>
            <div className="dateContent">
              <div> <input className="inputDay" onChange={(e) => setDay(e.target.value)}  value={day} placeholder="Jour" /> </div>
              <div> <input className="inputMonth" onChange={(e) => setMonth(e.target.value)} value={month} placeholder="Mois" /> </div>
              <div> <input className="inputYear" onChange={(e) => setYear(e.target.value)} value={year} placeholder="Année" /> </div>

            </div>
          </div>


          <div className="formFiled">
            <div className="label"> <div> Email</div> </div>
            <div> <input className="inputEmail" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Entrer email"  /></div>
          </div>


          <div className="formFiled">
            <div> Choisissez un soin pour accompagner votre promotion </div>
            <div> 
            <select className='selectOption'  defaultValue={'DEFAULT'}  id="selectOption" onChange={()=> {
              getSelectOption();
              setData({
                Nom : nom,
                Prenom : prenom,
                Telephone : telephone,
                Birth : day + '-' + month + '-' +  year,
                Email : email,
                Soins : soins
              })
            } }>
            <option value="DEFAULT" disabled>Choisissez votre promotion...</option> 
        <option value="Epilation">Epilation </option>
        <option value="Scarlette">Scarlette </option>
        <option value="Photorajeunissement">Photorajeunissement </option>
        <option value="Photorajeunissement"> Saint-Valentin épilation </option>
    </select>
            </div>
          </div>


<div className="buttonSubmit"> <button onClick={(e) => { 
    setData({
      Nom : nom,
      Prenom : prenom,
      Telephone : telephone,
      Birth : day + '-' + month + '-' +  year,
      Email : email,
      Soins : soins
    }); sendData(e)}}> Envoyer</button></div>


        </div>

        <div className="footerForm">

<div className="adressText"> <p> Résidence Chaabani 19b Val Hydra - Alger </p></div>
<div className="socialMedia"> 
<div> <a href='https://www.facebook.com/centredesthetiquelaser' className='links'>  <img src={facebook} className="facebookIcon" alt="facebook"/> Centre d'esthétique laser </a></div>
<div> <a href='https://www.instagram.com/centrelaseresthetique/' className='links'>  <img src={instagram} className="instagramIcon" alt="insta" /> centrelaseresthetique </a></div>
</div>
        </div>

      </div>
    </div>
  );
}

export default App;
