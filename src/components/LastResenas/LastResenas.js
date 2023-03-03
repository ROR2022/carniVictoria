import React, { useEffect, useState } from 'react'
import { getAllResenasBack } from '../../api/apiVictoria';
import MyResena from './MyResena'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { myId } from '../../assets/MyLibrary';
import { dividerColor } from '../../assets/colors';

const LastResenas = () => {
  const [lastResenas, setLastResenas] = useState(null);
  useEffect(() => {
    recuperaResenas();
    return 
  }, [])
  const recuperaResenas = async ()=>{
    try {
      const result = await getAllResenasBack();
      console.log('Datos de las Reseñas:..',result.data);
      if (result.data?.length>0){
          setLastResenas(result.data)
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Swiper>
        {lastResenas &&
          lastResenas.map((item)=>{
            return (
              <SwiperSlide key={myId()} className='border border-3' style={{backgroundColor:dividerColor}}>
                  <MyResena dataResena={item}/>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
            
    </div>
  )
}

export default LastResenas