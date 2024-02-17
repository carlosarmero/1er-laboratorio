import logo from './logo.svg';
import './App.css';
import Perfil from './componentes/Perfil.js'

function App() {
  return (
    <div className="App">
    <div className='contenedor-principal'>
      <h1>Mis cuentas preferidas</h1>
      <Perfil
      nombre='Brais'
      pais='España'
      cargo='Developer'
      empresa='Youtube'
      resena='Lorem Ipsum es simplemente el te Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el .'
      imagen='brais'       
      />
      </div>
      <div>
      <Perfil
      nombre='Facundo'
      pais='Usa'
      cargo='Desarrollador'
      empresa='Desconocida'
      resena='lLorem Ipsum es simplemente el . Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el .'
      imagen='facundo'       
      />
     </div>
     <Perfil
      nombre='Fatz'
      pais='Mexico'
      cargo='Instructor'
      empresa='YouTube'
      resena='lLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el .'
      imagen='fatz'       
      />
    </div>
  );
}

export default App;
