import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import SideNav from './components/SideNav'
import PokeCard from './components/PokeCard'

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0)
  const [showSideMenu, setShowSideMenu] = useState(false)

  function handleToggleMenu() {
    setShowSideMenu(!showSideMenu)
  }
  function handleCloseMenu() {
    setShowSideMenu(false)
  }

  return (
    <>
      <Header handleToggleMenu={handleToggleMenu} />
      <SideNav 
        selectedPokemon={selectedPokemon} 
        setSelectedPokemon={setSelectedPokemon} 
        handleCloseMenu={handleCloseMenu} 
        showSideMenu={showSideMenu} 
      />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  )
}

export default App
