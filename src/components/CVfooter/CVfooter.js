import React from 'react'
import { imageFaceBN, imageFaceCL, imageHomeBN, imageHorario, imageTelBN, imageTelCL, imageUbiCL, imageWatsBN, imageWatsCL } from '../../assets/imgLinks'


const CVfooter = () => {
  return (
    <div className='p-1'>
      <div className='d-flex justify-content-around'>
        {/* <img style={{width:'50px'}} src={imageHomeBN} alt="imageHome" /> */}

        <a href="https://api.whatsapp.com/send?phone=5215522471005&text=%C2%A1Hola%20me%20gustaria%20hacer%20un%20pedido!">
        <img style={{width:'10vw'}} src={imageWatsCL} alt="imageWats" />
        </a>

        <a href="https://www.facebook.com/profile.php?id=100085872317896">
        <img style={{width:'10vw'}} src={imageFaceCL} alt="imageFace" />
        </a>

        <a href="tel:+525522471005">
        <img style={{width:'10vw'}} src={imageTelCL} alt="imagePhone" />
        </a>

        <a href="https://maps.app.goo.gl/Rc7769yrWnVaFseZ7">
        <img style={{width:'10vw'}} src={imageUbiCL} alt="imageUbication" />
        </a>

      </div>
      <img style={{width:'80vw'}} className='my-3 rounded d-block ms-auto me-auto' src={imageHorario} alt="imageHorario" />
    </div>
  )
}

export default CVfooter