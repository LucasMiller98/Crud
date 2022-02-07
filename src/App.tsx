import { Routes } from './routes/routes'
import { LojaGames } from './loja/LojaGames'
import './global/styles.css'

function App() {
  return (
    <div>
      <LojaGames />
      <Routes />
    </div>
  )
}

export default App;
