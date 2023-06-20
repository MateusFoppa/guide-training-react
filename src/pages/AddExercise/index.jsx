import { Container } from './styles'
import { TopBar } from '../../components/Topbar'

import { Head } from '../../components/Head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import BackButton from '../../components/BackButton/BackButton'
import { useParams } from 'react-router-dom'

export default function AddExercise() {

  const { trainingId } = useParams()

  const [exercises, setExercises] = useState('')

  useEffect(() => {
    ;(async () => {
      try {
        const ExercisesRequest = await axios.get(`/exercise/list`, {
          withCredentials: true,
        })
        console.log(ExercisesRequest.data.exercises)
        setExercises(ExercisesRequest.data.exercises)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])
  const cloneExercise = (exerciseId) => {
    return async () => {
      console.log('Exercício clonado:', exerciseId);
      // lógica para clonar o exercício e adicioná-lo ao treino.
      await axios.post(`/exercise/${exerciseId}/training/${trainingId}`, {
        withCredentials: true,
      })
    };
  };


  return (
    <Container>
      <Head title='Training' />
      <TopBar></TopBar>
      <div className='title flex justify-center items-center'>
        <BackButton></BackButton>
      </div>

      {/* List of exercises */}
      <div className='bg-gray-1000 justify-center items-center'>
        {Array.isArray(exercises) && exercises.length > 0 ? (
          <ul className='list-disc flex flex-col justify-center items-center gap-4'>
            {exercises.map((ex) => (
              <li
              key={ex.id}
                className='bg-gray-900 p-1 w-4/5 rounded-lg flex justify-center items-center '
              >
                {ex.name}
                <button
                onClick={cloneExercise(ex.id)}
                  className='bg-green-500 text-white font-bold py-2 px-4 rounded-md m-4 float-left justify-end'
                >
                  <span>Adicionar Exercicio</span>
                  {/* <NavLink to={`/exercise/${ex._id}/training/${trainingId}/clone`}>
                  </NavLink> */}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <h1>Carregando...</h1>
        )}
      </div>
    </Container>
  )
}
