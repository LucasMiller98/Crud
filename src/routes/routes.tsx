import {
  Routes, 
  Route,
} from 'react-router-dom'

import { Cadastro } from '../loja/cadastro/Cadastro'
import { Login } from '../loja/login/Login'
import { Home } from '../loja/home/Home'

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro/>} />
      </Routes>
    </>
  )
}