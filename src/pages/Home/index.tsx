//Import
import React from 'react'
import {FiLogIn} from 'react-icons/fi'
import {Link} from 'react-router-dom'

//Main import
import './style.css'
import logo from '../../asset/logo.svg'


const home = () =>{
    return(
      <div id="page-home">
          <div className="content">
              <header>
                <img src={logo} alt="Coleta Seletiva"/>
              </header>
              <main>
                  <h1>Seu marketplace <br/> de coleta de resíduos.</h1>
                  <p>Ajudamos pessoas a encontrarem pontos <br/> de coleta de forma eficiente</p>
                  <Link to="/create-point">
                    <span>
                      <FiLogIn/>
                    </span>
                    <strong>Cadastre um ponto de coleta</strong>
                  </Link>
              </main>
          </div>
      </div>
    )
}

export default home