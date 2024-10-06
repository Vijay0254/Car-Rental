import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Cars from './Components/Cars'
import Testimonials from './Components/Testimonials'
import Banner1 from './Components/Banner1'
import Footer from './Components/Footer'
import Banner2 from './Components/BANNER2.JSX'

const App = () => {
  const [theme,settheme] = useState(false)
  const [menu,setmenu] = useState(false)
  return (
    <main className='overflow-x-hidden'>
      <Navbar theme={theme} settheme={settheme} menu={menu} setmenu={setmenu} />
      <section className={`${menu ? "invisible" : "visible"}`}>
        <Hero theme={theme} />
        <About />
        <Services />
        <Cars />
        <Testimonials />
        <Banner1 />
        <Banner2 />
        <Footer />
      </section>
    </main>
  )
}

export default App