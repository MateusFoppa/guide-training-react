import React, { useState } from 'react'

import { Container } from '../NewTraining/styles'
import { TopBar } from '../../components/Topbar'
import { Head } from '../../components/Head'
import { TrainingTitle } from '../../components/TrainingTitle'
import BackButton from '../../components/BackButton/BackButton'
import axios from 'axios'

export default function NewExercise() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [serie, setSerie] = useState('');
  const [movements, setMovements] = useState('');

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
      <Head title='New Exercise' />
      <TopBar></TopBar>

      <div className='title flex-col justify-center gap-10'>
        <TrainingTitle>Novo Treino</TrainingTitle>
        <BackButton></BackButton>
      </div>

      <div className='flex justify-center'>
      <form onSubmit={handleSubmit}>
      <div className='gap-4 flex-col'>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className='gap-4 flex-col'>
        <label htmlFor="description">Descrição:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="image">Imagem:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="serie">Série:</label>
        <input
          type="text"
          id="serie"
          value={serie}
          onChange={(e) => setSerie(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="movements">Movimentos:</label>
        <textarea
          id="movements"
          value={movements}
          onChange={(e) => setMovements(e.target.value)}
          required
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
      </div>
    </Container>
  )
}
