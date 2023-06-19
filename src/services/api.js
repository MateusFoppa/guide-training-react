import axios from 'axios'

export const api = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true
})

export const getTrainings = async () => {
  return  await api.get("/training",{
    withCredentials: true,
  })
}

export const getTrainingsId = (_id) => {
  return api.get(`/training/${_id}`,{
    headers: {
      'Content-type': 'application/json',
    },
  })
}

export const getExerciseId = (_id) => {
  return api.get(`/exercise/${_id}`)
}


export const postTrainings = (training) => {
  // const { trainings } = useContext(TrainingContext)
  axios.post('http://localhost:5000/training', {
    training
  })
    .then(function (response) {
      console.log(response);
      console.log(training,"postCerto");
    })
    .catch(function (error) {
      console.error(error,'aqui');
    });
}
export default api
