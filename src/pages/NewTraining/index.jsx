import React, { useState } from 'react'

import { Container } from './styles'
import { TopBar } from '../../components/Topbar'
import { Head } from '../../components/Head'
import { TrainingTitle } from '../../components/TrainingTitle'
import BackButton from '../../components/BackButton/BackButton'
import axios from 'axios'

export default function NewTraining() {
  const [name, setName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Nome submetido:', name)
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor, por exemplo.
    // Post Training
    await axios.post(`/training`, {
      withCredentials: true,
      name
    })

    setName('')
  }

  return (
    <Container>
      <Head title='New Training' />
      <TopBar></TopBar>

      <div className='title flex-col justify-center gap-10 mb-10'>
        <TrainingTitle>Novo Treino</TrainingTitle>
        <BackButton></BackButton>
      </div>

      <div className='flex justify-center'>
        <form className='w-96 p-4 bg-green-400 shadow rounded' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='name' className='block mb-2 text-bolt text-gray-700'>
              Nome do Treino
            </label>
            <input
              type='text'
              id='name'
              className='w-full px-3 py-2 border rounded focus:ring-2 focus:ring-gray-500  text-gray-900'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <button
            type='submit'
            className='w-full px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600'
          >
            Enviar
          </button>
        </form>
      </div>
    </Container>
  )
}
