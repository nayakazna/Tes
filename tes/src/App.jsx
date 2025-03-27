import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ArtCard from './components/ArtCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ArtCard
    title="Halo"
    description="Assalamualaikum"
    ></ArtCard>

  <ArtCard
    title="Hai"
    description="Waalaikumsalam"
    ></ArtCard>
    </>
  )
}

export default App
