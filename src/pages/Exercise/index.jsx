import { Container } from './styles'
import { TopBar } from '../../components/Topbar'

import { Head } from '../../components/Head'
import { ExerciseForm } from '../../components/ExerciseForm'

export default function Exercise() {

  // Exibe o exercicio para preenchimento no componente ExerciseForm

  return (
    <Container>
      <Head title='Training' />
      <TopBar></TopBar>
      <ExerciseForm></ExerciseForm>

    </Container>
  )
}
