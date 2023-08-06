
import './App.css'

import { NavBar } from './components/NavBar'
import { Banners } from './components/Banner'
import HeroText from './components/HeroText'

function App() {

  return (
    <div className='inner-card relative '>
      <Banners />
      <HeroText />
      <NavBar />
      <div style={{width: 'calc(100% + 20px)'}}
      className=' h-12 bg-shadow absolute -left-[10px] -bottom-6 -z-[1] border-b-[48px]
       border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent'>
      </div>
    </div>
  )
}

export default App

