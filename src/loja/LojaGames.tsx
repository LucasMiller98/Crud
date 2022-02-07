import { Button } from '../components/Button/button'
import { Form } from '../components/Form/Form'
import { Input } from '../components/Input/Input'
import './styles.css'

export function LojaGames() {
  return (
    <div className="app--container">
      <Form>
        <h1>Screen Shop</h1>
        <Input 
          type="text" 
          name="name" 
          placeholder="Nome" 
        />
        <Input 
          type="text" 
          name="cost" 
          placeholder="Preço" 
        />
        <Input 
          type="text" 
          name="category" 
          placeholder="Categoria" 
        />

        <Button 
          text='Cadastrar'
          type='submit'
        />
      </Form>
    </div>
  )
}