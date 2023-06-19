import { Container } from './styles'
import { TopBar } from '../../components/Topbar'

import { TrainingTitle } from '../../components/TrainingTitle'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Main() {
  const [trainings, setTraining] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const TrainingRequest = await axios.get('/training', {
          withCredentials: true,
        })

        setTraining(TrainingRequest.data.training)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <Container>
      <TopBar></TopBar>
      <TrainingTitle>Meus Treinos</TrainingTitle>
      <button className='bg-gray-600 text-white font-bold py-2 px-4 rounded-md gap-4 w-4/5 mb-4 items-center justify-center'>
            <NavLink to={`/newTraining`}>
              <span>Novo Treino</span>
            </NavLink>
          </button>

      <div className=' p-1'>
        {trainings.length === 0 ? (
          <h1>Carregando...</h1>
        ) : (
          <ul className='list-disc flex justify-center items-center flex-col gap-4'>
            {trainings.map((tr) => (
              <li
                key={tr._id}
                className='bg-gray-600 p-1 w-4/5 font-bold rounded-lg flex justify-center items-center'
              >
                <NavLink to={`/training/${tr._id}`}>
                  <span>
                    <h1>{tr.name}</h1>
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
