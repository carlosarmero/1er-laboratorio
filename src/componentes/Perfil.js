import React from 'react' //libreria
import '../estilos/perfil.css'
import Contador from './Contador'

function Perfil(props){
  return(
      <div className='contenedor-perfil'>
          <img 
          className='imagen-perfil' 
          src={require(`../imagenes/${props.imagen}.png`)}
          alt='Foto de Brais' />
          <div className='contenedor-texto-perfil'>
              {props.nombre} en {props.pais}
              <p className='cargo-perfil'>
              {props.cargo} en {props.empresa}
          </p>
          <p className='resena-perfil'>
              {props.resena}
          </p>
          </div>
          <div>
 <button onClick = {() => window.open(props.twitter, '_blank')}>

   </button>
   <button onClick = {() => window.open(props.linkedin, '_blank')}>
   </button>
   <button onClick = {() => window.open(props.youtube, '_blank')}>
    <Contador/>
   </button>
  </div>
      </div>
  )
}

export default Perfil