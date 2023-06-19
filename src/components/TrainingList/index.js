import { Container } from './style';
import { getTrainings } from '../../services/api';



export function TrainingsList() {

  const { trainings } = getTrainings();



  return <Container>
    <>
      {trainings.map((training) => {

        const { exercise } = training;
        //console.log(training);
        return (

          <div className='training box' key={training._id}>
            <h1>{training.name}</h1>
            {Array.isArray(exercise) ? exercise.map((exe) => {
              return (
                <div key={exe.id} className='exercise'>
                  <ul>
                    <li><h2>{exe.name}</h2></li>

                    <div className='ul'>
                      <ul>
                        <li><h2>{exe.series}</h2></li>
                        <li><h2>{exe.movements}</h2></li>
                        <li><h2>{exe.charge} KG</h2></li>
                      </ul>

                      <ul>
                        <li><h2>Series</h2></li>
                        <li><h2>Repetições</h2></li>
                        <li><h2>Carga</h2></li>
                      </ul>
                    </div>
                  </ul>
                </div>
              )
            }) : <div className="box" key={exercise.id}>
              <ul>
                <li><h2>{exercise.name}</h2></li>
                <li><h2>Series</h2>
                  <h2>{exercise.series}</h2></li>

                <li><h2>Repetições</h2>
                  <h2>{exercise.movements}</h2></li>

                <li><h2>Carga</h2>
                  <h2>{exercise.charge}</h2></li>

              </ul>
            </div>}

          </div>
        )
      })}
    </>
  </Container >

}
