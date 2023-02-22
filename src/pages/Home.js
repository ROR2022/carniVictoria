
import CardsSlider from '../components/CardsSlider/CardsSlider'
import CVfooter from '../components/CVfooter/CVfooter'
import CVnavBar from '../components/CVnavBar/CVnavBar'
import { dividerColor } from "../assets/colors";
import LastResenas from '../components/LastResenas/LastResenas';

const Home = () => {
  return (
    <div style={{backgroundColor:dividerColor}}>
      <header>
        <CVnavBar/> 
      </header>
      <main>
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