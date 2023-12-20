import './App.scss'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Sliders from './components/sliders/sliders'
import Home from './components/pages/home/home'
import { Routes, Route } from 'react-router-dom'
import Card from './components/content/card/card'
import Kitob from './components/pages/kitob/kitob'
import Kond from './components/pages/kond/kond'
import Telefon from './components/pages/telefon/telefon'
import Televizor from './components/pages/televizor/televizor'


function App() {

  return (
    <>
      <Navbar />
      <Sliders />
      <Routes>
        <Route index element={<Home />} />
        <Route path="kitob" element={<Kitob />} />
        <Route path="kond" element={<Kond />} />
        <Route path="telefon" element={<Telefon />} />
        <Route path="televizor" element={<Televizor />} />
      </Routes>
      <Home />
      <Footer />
    </>
  )
}

export default App