import { TitleForm } from '../../components/TitleForm/TitleForm'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/button'
import { Box } from '../../components/Box/Box'
import { Form } from '../../components/Form/Form'
import { Anchor } from '../../components/Anchor/Anchor'
import { Separator } from '../../components/Separator/Separator'

export function Login() {
  return (
    <>
      <Box classNameContainer='app--container'>
        
        <Form classNameForm="form--register--container">
          <TitleForm text='Login' />
          
          <Input 
            autoComplete_input='off'
            className_registerInput='register--input'
            name='login'
            placeholder='Login'
            type='text'
          />

          <Input 
            autoComplete_input='off'
            className_registerInput='register--input'
            name='password'
            placeholder='Password'
            type='password'
          />

          <Button 
            text='Entrar' 
            type='submit' 
          />

          <Separator classNameSeparator='separator' text='ou' />

          <Anchor 
            endpoint='/cadastro' 
            text='Cadastrar' 
            classNameAnchor='anchor-cadaster' 
          />
        </Form>
      </Box>
    </>
  )
}