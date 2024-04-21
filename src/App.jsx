import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import Footer from './Footer';
import Mycards from './Mycards'; 
import Tags from './Tags'
import poddle from './assets/poddle.jpg';
import pastor from './assets/pastor.jpg';
import golden from './assets/golden.jpg';
import samo from './assets/samo.jpg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='contenedor'>
<Mycards 
 image={poddle}
 name="Summer"
 description="Brillante y calida como el Verano! Soy tranquila, cariñosa, me gusta estar con humanos y otros perros."
 text="Adoptame"
 color="success"
 
 /> 

<Mycards 
image={pastor}
name="Panqueca"
description="Soy un perrito muy energico con ganas de muchas aventuras!"
text="Adoptame"
color="warning"
/> 


<Mycards 
image={golden}
 name="Anya"
 description="Soy un perrito que le gusta los paseos en la playa y las croquetas!"
 text="Adoptame"
 color="primary"
 /> 

<Mycards 
image={samo}
 name="Gojo"
 description="Me gusta el bosque, y tener paseos largos, y los cariñitos en la panza"
 text="Adoptame"
 color="secondary"
 /> 




 </div>
      <Footer/>
   
      
    </>
  )
}

export default App
