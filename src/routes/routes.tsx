import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Navigate
} from 'react-router-dom'

import { Cadastro } from '../loja/cadastro/Cadastro'
import { Login } from '../loja/login/Login'

export function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='/' element={<Cadastro/>} />
        </Routes>
      </Router>
    </>
  )
}