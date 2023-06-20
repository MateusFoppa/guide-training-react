import { NavLink } from "react-router-dom"
import { Container } from "./styles"

import UserButton from "../UserButton/UserButton"

export function TopBar() {

    // Recebe o usuario do LocalStorage
    var payload = JSON.parse(localStorage.getItem('payload'));
    console.log('logado:', payload);

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
            <span className="bg-green-600 text-white font-bold py-2 px-4 rounded-md">{payload.name}</span>
          </li>

        </ul>
      </nav>
    </>
  </Container >

}
