import { NavLink } from "react-router-dom"
import { Container } from "./styles"

// import { TrainingContext } from "../../App"

// const trainings = useContext(TrainingContext)

export function TopBar() {

  return <Container>
    <h1>GuideTraining</h1>
    <>
      <nav>
        <ul>
        <li>
            <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded-md">
              <NavLink to='/'>
                <span>Meus Treinos</span>
              </NavLink>
            </button>
          </li>
          <li>
            <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded-md">
              <NavLink to='/statistics'>
                <span>Estatísticas</span>
              </NavLink>
            </button>
          </li>
          <li>
            <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded-md">
              <NavLink to='/auth/login'>
                <span>Login</span>
              </NavLink>
            </button>
          </li>
          <li>
            <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded-md">
              <NavLink to='/auth/register'>
                <span>Register</span>
              </NavLink>
            </button>
          </li>

        </ul>
      </nav>
    </>
  </Container >

}
