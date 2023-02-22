import React, { useEffect } from 'react'
import { deleteResena } from '../../api/apiVictoria';
//import { imageRojas } from '../../assets/imgLinks'
import {useNavigate} from "react-router-dom"

const MyResena = ({dataResena}) => {
  const {urlImageUser, nameUser, comment, id}= dataResena;
  const navigate = useNavigate();

  useEffect(() => {
    if (urlImageUser) console.log('ImgUser:..',urlImageUser);
  
    return 
  }, [])
  

  const eliminarResena = async()=>{
    try {
      const result = await deleteResena(id);
      console.log(result);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='m-2 p-1'>
      <div className='d-flex align-items-center'>
        <img style={{width:'50px'}} className='rounded me-2' src={urlImageUser} alt="imgUsr" />
        <h6 className='text-primary'>{nameUser || 'nombre del usuario'}</h6>
      </div>
      <p className='text-danger opacity-75 ps-1 mt-1'>{comment || 'comentario de la reseña'}</p>
      <button onClick={eliminarResena} className='btn btn-secondary d-block ms-auto '>🗑️</button>
    </div>
  )
}

export default MyResena