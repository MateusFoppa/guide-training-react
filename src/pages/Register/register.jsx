import { Container } from './styles'
import { TopBar } from '../../components/Topbar'
import { Head } from '../../components/Head'
import { TrainingTitle } from '../../components/TrainingTitle'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {

  const navigate = useNavigate();


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post("http://localhost:5000/auth/register", {
          name,
          email,
          password,
          confirmpassword,
      })
      console.log('Server response:', response.data)
      navigate('/auth/login');

    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <Container>
      <Head title='Resgister' />
      <TopBar></TopBar>
      <TrainingTitle>Register</TrainingTitle>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' value={name} onChange={handleNameChange} required />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div>
            <label htmlFor='confirmPassword'>Confirm Password:</label>
            <input
              type='password'
              id='confirmPassword'
              value={confirmpassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <button type='submit'>Create User</button>
        </form>
      </div>
    </Container>
  )
}
