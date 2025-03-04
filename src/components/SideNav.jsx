import { useState } from "react"
import { first151Pokemon, getFullPokedexNumber } from "../utils"

export default function SideNav(props) {
    const { selectedPokemon, setSelectedPokemon, handleCloseMenu, showSideMenu } = props

    const [searchValue, setSearchValue] = useState('')

    const filteredPokemon = first151Pokemon.filter((ele, eleIndex) => {
        //If full pokedex number includes the current value, return true
        if ((getFullPokedexNumber(eleIndex)).includes(searchValue)) { return true }
        //If the pokemon name includes the current search valu e, return true
        if (ele.toLowerCase().includes(searchValue.toLowerCase())) { return true }
        // otherwise, exclude value from the array
        return false
    })
    
    return (
        <nav className={" " + (showSideMenu ? " open" : "")}>
            <div className={"header" + (showSideMenu ? " open" : "")}>
                <button onClick={handleCloseMenu} className="open-nav-button">
                    <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                <h1 className="text-gradient">Pokédex</h1>
            </div>
            <input placeholder="E.g. 001 or pika..." value={searchValue} onChange={(e) => {
                setSearchValue(e.target.value)
            }} />
            {filteredPokemon.map((pokemon, pokemonIndex) => {
                const truePokdexNumber = first151Pokemon.indexOf(pokemon)
                return (
                    <button onClick={() => {
                        setSelectedPokemon(truePokdexNumber)
                        handleCloseMenu()
                    }} key={pokemonIndex} className={'nav-card ' + (pokemonIndex === selectedPokemon ? 'nav-card-selected' : '')}>
                        <p>{getFullPokedexNumber(truePokdexNumber)}</p>
                        <p>{pokemon}</p>
                    </button>
                )
            })}
        </nav>
    )
}