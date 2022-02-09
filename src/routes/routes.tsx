import {
  BrowserRouter as Router,
  Routes as RoutesReact, 
  Route } from 'react-router-dom'
import { Cadastro } from '../loja/cadastro/Cadastro'

export function Routes() {
  return (
    <Router>
      <RoutesReact>
        <Route path='/cadastro' element={Cadastro} />
      </RoutesReact>
    </Router>
  )
}