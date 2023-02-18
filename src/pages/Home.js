import React from 'react'
import CardsSlider from '../components/CardsSlider/CardsSlider'
import CVfooter from '../components/CVfooter/CVfooter'
import CVnavBar from '../components/CVnavBar/CVnavBar'

const Home = () => {
  return (
    <div>
      <header>
        <CVnavBar/>
      </header>
      <main>
        <CardsSlider/>
      </main>
      <footer>
        <CVfooter/>
      </footer>
    </div>
  )
}

export default Home