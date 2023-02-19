import React from 'react'
import { imageFaceBN, imageFaceCL, imageHomeBN, imageHorario, imageTelBN, imageTelCL, imageWatsBN, imageWatsCL } from '../../assets/imgLinks'


const CVfooter = () => {
  return (
    <div className='p-1'>
      <div className='d-flex justify-content-around'>
        {/* <img style={{width:'50px'}} src={imageHomeBN} alt="imageHome" /> */}
        <img style={{width:'10vw'}} src={imageWatsCL} alt="imageWats" />
        <img style={{width:'10vw'}} src={imageFaceCL} alt="imageFace" />
        <img style={{width:'10vw'}} src={imageTelCL} alt="imagePhone" />
      </div>
      <img style={{width:'80vw'}} className='my-3 rounded d-block ms-auto me-auto' src={imageHorario} alt="imageHorario" />
    </div>
  )
}

export default CVfooter