import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./CardsSlider.css";
import "./animations.css";
import { imageAlitas, imageFrente, imageFrutas, imageHorario, imageLogo, imagePastor, imageRojas } from "../../assets/imgLinks";
import { myId } from "../../assets/MyLibrary";
import { accentColor, dividerColor, primaryColor, primaryText, secondaryText } from "../../assets/colors";
import { useState,useEffect } from "react";


const dataCards = [
  {
    img: imageAlitas,
    title: 'Alitas enchiladas... 😋',
    description: 'Es la respuesta sin importar la pregunta.....😋😉'
  },
  {
    img: imageFrente,
    title: 'Carniceria La Victoria 🐂',
    description: 'Res, Cerdo, Pollo, Frutas y Verduras...'
  },
  {
    img: imageFrutas,
    title: 'Frutas y Verduras 🍉',
    description: 'Calidad y Frescura para ti...'
  },
  {
    img: imageHorario,
    title: 'Horario de Atención 🕰️',
    description: 'Estamos a tus ordenes, servicio, higiene y calidad...'
  },
  {
    img: imageLogo,
    title: 'Carniceria la Victoria 🐖',
    description:'estamos para servirles!!!'
  },
  {
    img: imagePastor,
    title: 'Carne al Pastor 😍',
    description: 'No  te escribiré un poema, ni tampoco te regalaré una flor.....pero si te vendo una rica carne, para unos tacos al pastor 😋🤤😉'
  },
  {
    img: imageRojas,
    title: 'Tradición y Prestigio ❤️',
    description: 'Atención, Calidad, Servicio...'
  }
]


const CardsSlider = () => {
  const [isAnimeted, setIsAnimeted] = useState(false);

  useEffect(() => {

    if(isAnimeted) {
      setTimeout(function(){
        setIsAnimeted(false);
    }, 1000);
    }

    return 
  }, [isAnimeted])
  
  const toggleIsAnimated = ()=>{
    setIsAnimeted(prev=>!prev);
  }
  return (
    <div>
      <Swiper className="mySwiper mt-2">
        {dataCards.map((item,index)=>{
          return(
                <SwiperSlide key={myId()}  style={{backgroundColor:dividerColor}}  className='d-flex flex-column pt-2'>
                    <img style={{width:'90vw', height:'70vh', objectFit:'contain', borderRadius:''}} 
                    className={isAnimeted?`anime${index}`:''}
                    onClick={toggleIsAnimated}
                    src={item.img} alt="imageSwiper" />
                    <h2 style={{color: primaryColor}}>{item.title}</h2>
                    <p style={{color: secondaryText}}>{item.description}</p>
                </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default CardsSlider