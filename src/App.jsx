import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import Footer from "./components/Footer"

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect( () => {
    const obtenerLocalStorage = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? []

      setPacientes(pacientesLS);
    }
    obtenerLocalStorage()
  }, [])

  useEffect( () => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = id => {

    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id )

    setPacientes(pacientesActualizados);
    
  }

  return (

    <div className="container mx-auto mt-5">

      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

      <Footer />

    </div>

  )
}

export default App
