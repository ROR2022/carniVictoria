import CVfooter from '../components/CVfooter/CVfooter'
import CVnavBar from '../components/CVnavBar/CVnavBar'
import { dividerColor } from "../assets/colors";
import FormatResena from '../components/FormatResena/FormatResena';
import Login from '../components/Login/Login';

const Resena = () => {
  return (
    <div style={{backgroundColor:dividerColor}}>
      <header>
        <CVnavBar/>
      </header>
      <main>
        <Login/>
        <FormatResena/>
      </main>
      <footer>
        <CVfooter/>
      </footer>
    </div>
  )
}

export default Resena