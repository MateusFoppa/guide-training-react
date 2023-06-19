import { Container } from './style'
import { NavLink, useParams } from 'react-router-dom'
import { getTrainingsId } from '../../services/api'
import { useEffect, useState } from 'react'

export function TrainingBox() {
  const { _id } = useParams()
  const [training, setTraining] = useState(null)

  useEffect(() => {
    const fetchTraining = async () => {
      try {
        const response = await getTrainingsId(_id)
        setTraining(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchTraining()
  }, [_id])

  if (!training) {
    return <div>Carregando...</div>
  }

  return (
    <Container>
      {training.exercise.map((ex) => (
        <div className='item' key={ex._id}>
          <li>
            <button className='btn btn-secondary'>
              <NavLink to={`/training/${_id}/exercise/${ex._id}`}>
                <span>
                  <h1>{ex.name}</h1>
                </span>
              </NavLink>
            </button>
          </li>
        </div>
      ))}
    </Container>
  )
}
