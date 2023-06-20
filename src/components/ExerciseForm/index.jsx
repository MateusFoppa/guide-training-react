import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from './style'

import axios from 'axios'
import BackButton from '../BackButton/BackButton'
import { TrainingTitle } from '../TrainingTitle'

export function ExerciseForm() {
  const { exerciseId, trainingId } = useParams()
  const [exercise, setExercise] = useState('')

  useEffect(() => {
    ;(async () => {
      try {
        const ExerciseRequest = await axios.get(`/exercise/${exerciseId}`, {
          withCredentials: true,
        })
        // console.log(ExerciseRequest.data)
        setExercise(ExerciseRequest.data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  //States do Form
  const [movements, setMoviments] = useState('')
  const [series, setSerie] = useState('')
  const [charge, setCharge] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Aqui você pode fazer algo com os valores do movimento, série e charge
    console.log('Movements:', movements)
    console.log('Série:', series)
    console.log('Charge:', charge)

    // Put do Exercise
    await axios.put(`/exercise/${exerciseId}/training/${trainingId}`, {
      withCredentials: true,
        series,
        movements,
        charge,
    })

    // Limpar os campos do formulário
    setMoviments('')
    setSerie('')
    setCharge('')
  }

  return (
    <Container>
      <div className='justify-center items-center'>
        {exercise.length === 0 ? (
          <h1>Carregando...</h1>
        ) : (
          <>
          <div className="flex-col mb-10">
            <TrainingTitle>{exercise.name}</TrainingTitle>
            <BackButton></BackButton>
          </div>
            <div className='bg-gray-700 p-4 rounded-lg box  flex-col justify-center p-0 m-0'>
              <div className='flex  flex-col p-0 m-0'>
              <div className=' p-0 m-0'>
                  <li className='m-0 p-0'>
                    <span><h1>{exercise.name}</h1></span>
                  </li>
                </div>
                <div className=' p-0 m-0'>
                  <li>
                    <img src={exercise.image} />
                  </li>
                </div>
                <div className=' items-center p-0 m-0'>
                  <form onSubmit={handleSubmit} className=' items-center p-0 m-0' >
                    <label className='mb-2'>
                      Movimentos:
                      <input
                        type='number'
                        value={movements}
                        onChange={(e) => setMoviments(e.target.value)}
                        className='mt-2 p-2 border border-gray-300 rounded-md  text-gray-900'
                      />
                    </label>

                    <label className='mb-2'>
                      Séries:
                      <input
                        type='number'
                        value={series}
                        onChange={(e) => setSerie(e.target.value)}
                        className='mt-2 p-2 border border-gray-300 rounded-md  text-gray-900'
                      />
                    </label>

                    <label className='mb-2'>
                      Carga:
                      <input
                        type='number'
                        value={charge}
                        onChange={(e) => setCharge(e.target.value)}
                        className='mt-2 p-2 border border-gray-300 rounded-md  text-gray-900'
                      />
                    </label>

                    <button
                      type='submit'
                      className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-md'
                    >
                      Enviar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  )
}
