import { useEffect, useState } from 'react'
import { Container } from './style'
import axios from 'axios'

export function TrainingsList() {
  const [trainings, setTrainings] = useState('')

  useEffect(() => {
    ;(async () => {
      try {
        const TrainingRequest = await axios.get(`/training`, {
          withCredentials: true,

        })
        const trainingAll  = TrainingRequest.data.training

        console.log('Todos os Treinos do Usuário:', trainings)
        if (trainingAll.length > 0) {
          for (const tr of trainingAll) {
            const exercisesForTraining = await getExercise(tr)
            tr.exercise = exercisesForTraining
            setTrainings([...trainingAll])
          }}
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  const getExercise = async (tr) => {
    try {
          const ExercisesRequest = await axios.get(`/exercise/training/${tr._id}`, {
            withCredentials: true,
          });

          console.log('Todos Exercises: ', ExercisesRequest.data.exercise)
          const exercisesForTraining = ExercisesRequest.data.exercise
          return exercisesForTraining;

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <>
      {Array.isArray(trainings) &&
  trainings.map((training) => {
    // console.log(training);
     return (
      <div className='training box' key={training._id}>
        <h1>{training.name}</h1>

        {Array.isArray(training.exercise) && training.exercise.length > 0 ? (
          training.exercise.map((ex) => {
             return (
              <div key={ex._id} className='exercise'>
                <ul>
                  <li>
                    <h2>{ex.name}</h2>
                  </li>
                  <div className='ul'>
                    <ul>
                      <li>
                        <h2>{ex.series}</h2>
                      </li>
                      <li>
                        <h2>{ex.movements}</h2>
                      </li>
                      <li>
                        <h2>{ex.charge} KG</h2>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <h2>Series</h2>
                      </li>
                      <li>
                        <h2>Repetições</h2>
                      </li>
                      <li>
                        <h2>Carga</h2>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
             );
          })
        ) : (<><h1>nulo</h1></>)}
      </div>
     );
  })}
  </>
  </Container>

  )
}
