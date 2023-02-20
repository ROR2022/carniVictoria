import CVfooter from '../components/CVfooter/CVfooter'
import CVnavBar from '../components/CVnavBar/CVnavBar'
import { dividerColor } from "../assets/colors";
import FormatResena from '../components/FormatResena/FormatResena';
import Login from '../components/Login/Login';
import useUser from '../hooks/useUser';
import { useEffect } from 'react';

const Resena = () => {
  const [dataUser]= useUser();
  const {isLogged} = dataUser;
 
  useEffect(() => {
    if(isLogged) console.log('ahora puedes escribir tu reseña:..');
  
    return 
  }, [isLogged])
  
  return (
    <div style={{backgroundColor:dividerColor}}>
      <header>
        <CVnavBar/>
      </header>
      <main className='mb-3'>
        {isLogged?<FormatResena/>:<Login/>}
      </main>
      <footer>
        <CVfooter/>
      </footer>
    </div>
  )
}

export default Resena