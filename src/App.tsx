import { AppRoutes } from './routes/routes'
import { Cadastro } from './loja/cadastro/Cadastro'
import './global/styles.css'

function App() {
  return (
    <>
      <Cadastro />
      <AppRoutes />
    </>
  )
}

export default App;
