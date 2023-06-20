import React, { useState } from 'react'

import { Container } from '../NewTraining/styles'
import { TopBar } from '../../components/Topbar'
import { Head } from '../../components/Head'
import { TrainingTitle } from '../../components/TrainingTitle'
import BackButton from '../../components/BackButton/BackButton'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function NewExercise() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [serie, setSerie] = useState('');
  const [movements, setMovements] = useState('');

  const { trainingId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Nome submetido:', name)
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor, por exemplo.
    // Post Training
    await axios.post(`/exercise/training/${trainingId}`, {
      withCredentials: true,
      name,
      description,
      image,
      serie,
      movements
    })

    setName('')
    setDescription('')
    setImage('')
    setSerie('')
    setMovements('')

  }

  return (
    <Container>
      <Head title='New Exercise' />
      <TopBar></TopBar>

      <div className="title">
  <TrainingTitle>Novo Treino</TrainingTitle>
  <BackButton></BackButton>
</div>

<div className="flex-col flex items-center gap-4">
  <form onSubmit={handleSubmit} className='w-96 p-4 bg-green-600 shadow rounded'>
    <div className='m-3 justify-end'>
      <label htmlFor="name" className="text-lg font-semibold">Nome:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border border-gray-300 bg-green-200 rounded-md p-2"
      />
    </div>

    <div className='m-3'>
      <label htmlFor="description" className="text-lg font-semibold">Descrição:</label>
      <input
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="border border-gray-300 bg-green-200 rounded-md p-2"
      />
    </div>

    <div className='m-3'>
      <label htmlFor="image" className="text-lg font-semibold">Imagem:</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
        className="border border-gray-300 bg-green-200 rounded-md p-2"
      />
    </div>

    <div className='m-3'>
      <label htmlFor="serie" className="text-lg font-semibold">Série:</label>
      <input
        type="text"
        id="serie"
        value={serie}
        onChange={(e) => setSerie(e.target.value)}
        required
        className="border border-gray-300 bg-green-200 rounded-md p-2"
      />
    </div>

    <div className='m-3'>
      <label htmlFor="movements" className="text-lg font-semibold">Movimentos:</label>
      <input
        id="movements"
        value={movements}
        onChange={(e) => setMovements(e.target.value)}
        required
        className="border border-gray-300 bg-green-200 rounded-md p-2"
      />
    </div>

    <button type="submit" className="bg-gray-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
      Enviar
    </button>
  </form>
</div>



    </Container>
  )
}
