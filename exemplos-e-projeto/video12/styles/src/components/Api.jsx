import { useState, useEffect } from 'react'

import './styles.css'

const Api = () => {
  const [personagens, setPersonagens] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setPersonagens(data.results))
  }, [])

  console.log(personagens)
  return (
    <div className='container'>
     {personagens.map(personagem => 
        <div key={personagem.id} className='card'>
          <p>{personagem.name}</p>
          <img src={personagem.image} alt={personagem.name}/>
        </div>
      )}
    </div>
  )
}

export default Api