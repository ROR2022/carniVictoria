
import CardsSlider from '../components/CardsSlider/CardsSlider'
import CVfooter from '../components/CVfooter/CVfooter'
import CVnavBar from '../components/CVnavBar/CVnavBar'
import { dividerColor } from "../assets/colors";
import LastResenas from '../components/LastResenas/LastResenas';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{backgroundColor:dividerColor}}>
      <header>
        <CVnavBar/> 
      </header>
      <main>
        <Link to={'/resena'} className='btn btn-outline-primary d-block my-1 ms-auto'>Escribir Reseña</Link>
        <LastResenas/>
        <CardsSlider/>
      </main>
      <footer>
        <CVfooter/>
      </footer>
    </div>
  )
}

export default Home