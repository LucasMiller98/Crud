import { Button } from '../../components/Button/button'
import { Form } from '../../components/Form/Form'
import { Input } from '../../components/Input/Input'
import { TitleForm } from '../../components/TitleForm/TitleForm'
import { Box } from '../../components/Box/Box'
// import '../styles.css'

export function Cadastro() {
  return (
    <Box classNameContainer='app--container'>
      <Form classNameForm="form--register--container">
        <TitleForm text='Screen Shop' />
        
        <Input 
          type="text" 
          name="name" 
          placeholder="Nome"
          className_registerInput='register--input' 
          autoComplete_input='off'
        />

        <Input 
          type="text" 
          name="cost" 
          placeholder="Preço" 
          className_registerInput='register--input'
          autoComplete_input='off'
        />
        
        <Input 
          type="text" 
          name="category" 
          placeholder="Categoria" 
          className_registerInput='register--input'
          autoComplete_input='off'
        />
        
        {/* <Input 
          type='password'
          name='password'
          placeholder='Senha'
          className_registerInput='register--input'
          autoComplete_input='off'
        /> */}

        <Button 
          text='Cadastrar'
          type='submit'
        />
      </Form>
    </Box>
  )
}