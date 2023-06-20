
import { Container } from './styles'
import { TopBar } from '../../components/Topbar'
import { Head } from '../../components/Head'
import { TrainingsList } from '../../components/TrainingList'

export default function Main() {



  return (
    <Container>
      <Head title='New Training' />
      <TopBar></TopBar>
      <TrainingsList></TrainingsList>

    </Container>
  )
}
