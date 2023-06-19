import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import TrainingPage from './pages/Training'
import NewTrainingPage from './pages/NewTraining'
import StatisticsPage from './pages/Statistics'
import LoginPage from './pages/Login/login'
import RegisterPage from './pages/Register/register'
import ExercisePage from './pages/Exercise'
import NewExercisePage from './pages/NewExercise'
import AddExercisePage from './pages/AddExercise'


export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />

      <Route path='/' element={<TrainingPage />} />
      <Route path='/training/:trainingId' element={<TrainingPage />} />

      <Route path='/newTraining' element={<NewTrainingPage />} />

      <Route path='/statistics' element={<StatisticsPage />} />

      <Route path='/auth/login' element={<LoginPage />} />
      <Route path='/auth/register' element={<RegisterPage />} />

      <Route path='/exercise/:exerciseId/training/:trainingId' element={<ExercisePage />} />

      <Route path='/exercise/training/:trainingId' element={<NewExercisePage />} />


      <Route path='/exercise/list/training/:trainingId' element={<AddExercisePage />} />



    </Routes>
  )
}
