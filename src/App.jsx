import React from 'react'
import Service from './components/Card/Service'
import './App.scss'
import register from './assets/register.jpg'
import login from './assets/login.jpg'
import payment from './assets/payment.jpg'
import renew from './assets/renew.jpg'

function App () {
  return (
    <div className="App">
      <div className="titles">
        <h1>Asociación Faro de Jandía</h1>
        <h2>Portal de Autogestión</h2>
      </div>
      <div className="services">
        <div className="row">
        <Service
          title='Alta'
          imageUrl={register}
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sem a dui ornare tincidunt quis in odio. Mauris condimentum felis at est volutpat, quis volutpat risus viverra.'
          buttonText='Darme de Alta'
         />
         <Service
          title='Realizar Pago'
          imageUrl={payment}
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sem a dui ornare tincidunt quis in odio. Mauris condimentum felis at est volutpat, quis volutpat risus viverra.'
          buttonText='Darme de Alta'
         />
        </div>

        <div className="row">
        <Service
          title='Renovar Cuota'
          imageUrl={renew}
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sem a dui ornare tincidunt quis in odio. Mauris condimentum felis at est volutpat, quis volutpat risus viverra.'
          buttonText='Darme de Alta'
         />
         <Service
          title='Iniciar Sesión'
          imageUrl={login}
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sem a dui ornare tincidunt quis in odio. Mauris condimentum felis at est volutpat, quis volutpat risus viverra.'
          buttonText='Darme de Alta'
         />
        </div>

      </div>

    </div>
  )
}

export default App
