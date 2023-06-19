import { Container } from './styles'
import { TopBar } from '../../components/Topbar'
import { Head } from '../../components/Head'
import { TrainingTitle } from '../../components/TrainingTitle'
import { useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Validar los datos antes de enviar la solicitud
    if (!email || !password) {
      console.error('Por favor, completa todos los campos')
      return
    }

    try {
      const response = await axios.post('/auth/login', {
        email,
        password,
      })


      console.log('Server response:', response.data)
      // Realizar acciones adicionales después de iniciar sesión, como redireccionar a una página de inicio
      navigate('/');
    } catch (error) {
      console.error('Error:', error)
      navigate('/auth/register');

    }
  }

  return (
    <Container>
      <Head title='Login' />
      <TopBar></TopBar>
      <TrainingTitle>Login</TrainingTitle>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input className='text-gray-800'
              type='password'
              id='password'
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type='submit'>Iniciar</button>
        </form>
      </div>
    </Container>
  )
}
