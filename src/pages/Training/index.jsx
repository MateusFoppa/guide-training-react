import { Container } from './styles'
import { TopBar } from '../../components/Topbar'

import { Head } from '../../components/Head'
import { TrainingTitle } from '../../components/TrainingTitle'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import BackButton from '../../components/BackButton/BackButton'

export default function Training() {
  const { trainingId } = useParams()

  const [training, setTraining] = useState('')
  const [exercises, setExercises] = useState('')

  // Recebe o usuario do LocalStorage
  var payload = JSON.parse(localStorage.getItem('payload'));
 console.log('logado:', payload);

  useEffect(() => {
    ;(async () => {
      try {
        const TrainingRequest = await axios.get(`/training/${trainingId}`, {
          withCredentials: true,
        })

        setTraining(TrainingRequest.data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const ExercisesRequest = await axios.get(`/exercise/training/${trainingId}`, {
          withCredentials: true,
        })
        // console.log(ExercisesRequest.data.exercise);
        setExercises(ExercisesRequest.data.exercise)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <Container>
      <Head title='Training' />
      <TopBar></TopBar>

      {training.length === 0 ? (
        <h1>Carregando...</h1>
      ) : (
        <div className='flex-col'>
          <TrainingTitle>{training.name}</TrainingTitle>
          <BackButton></BackButton>
          <button className='bg-gray-600 text-white font-bold py-2 px-4 rounded-md gap-4 w-4/5 mb-4 items-center justify-center'>
            <NavLink to={`/exercise/list/training/${trainingId}`}>
              <span>Adicionar Exercicio</span>
            </NavLink>
          </button>
          {/* Mostar o Novo exercicio apenas para admin */}
          {payload.role === 'admin' ? (
            <button className='bg-gray-600 text-white font-bold py-2 px-4 rounded-md gap-4 w-4/5 mb-4 items-center justify-center'>
              <NavLink to={`/exercise/training/${trainingId}`}>
                <span>Novo Exercicio</span>
              </NavLink>
            </button>
          ) : null}
        </div>
      )}
      {/* List of exercises */}
      <div className='bg-gray-1000 justify-center items-center'>
        {exercises.length === 0 ? (
          <h1>Carregando...</h1>
        ) : (
          <ul className='list-disc flex flex-col justify-center items-center gap-4'>
            {exercises.map((ex) => (
              <li
                key={ex._id}
                className='bg-gray-700 p-1 w-4/5 rounded-lg flex justify-center items-center '
              >
                <NavLink to={`/exercise/${ex._id}/training/${training._id}`}>
                  <span>
                    <h1>{ex.name}</h1>
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Container>
  )
}
