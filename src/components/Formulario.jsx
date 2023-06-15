import { useState, useEffect } from "react"
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    setNombre(paciente.nombre)
    setPropietario(paciente.propietario)
    setEmail(paciente.email)
    setFecha(paciente.fecha)
    setSintomas(paciente.sintomas)
  }, [paciente])

  


  const generarId = () => {
    const ramdom = Math.random().toString(36).slice(2)
    const fecha = Date.now().toString(36)

    return ramdom + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    /* Validacion del formulario */
    if([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true)
      return
    } 

    setError(false)

    /* Objeto de Paciente */
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
    }

    if(paciente.id){
      //editando el registro  
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map( pacienteState => 
      pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      //nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }


    /* Reiniciar el form */
    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")

  }


  return (
    <div className="md:w-1/2 lg:w-2/5 m-3 mb-16">
        <h2 className="font-black text-3xl text-center text-slate-700">Seguimiento <span className="text-rose-600">Pacientes</span></h2>

        <p className="font-bold mt-5 mb-10 text-center text-2xl text-rose-600">Añade <span className="text-slate-700">Pacientes y Administralos</span></p>

        <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl py-10 px-5">

          {error && <Error>Todos los campos son obligatorios</Error>}

          <div className="mb-5">
            <label
              htmlFor="mascota" 
              className="block uppercase text-slate-700 font-bold mb-2">
              Nombre Mascota
            </label>

            <input 
            className="w-full border-2 rounded-md placeholder-slate-400 p-2" 
            type="text"
            placeholder="Nombre de la Mascota" 
            id="mascota"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value) }
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="propietario" 
              className="block uppercase text-slate-700 font-bold mb-2">
              Nombre Propietario
            </label>

            <input 
            className="w-full border-2 rounded-md placeholder-slate-400 p-2" 
            type="text"
            placeholder="Nombre del Propietario" 
            id="propietario"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value) }
            />
          </div>
         
          <div className="mb-5">
            <label
              htmlFor="email" 
              className="block uppercase text-slate-700 font-bold mb-2">
              Correo Electrónico
            </label>

            <input 
            className="w-full border-2 rounded-md placeholder-slate-400 p-2" 
            type="email"
            placeholder="E-Mail" 
            id="email"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }

            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="alta" 
              className="block uppercase text-slate-700 font-bold mb-2">
              Fecha de Alta
            </label>

            <input 
            className="w-full border-2 rounded-md placeholder-slate-400 p-2" 
            type="date"
            id="alta"
            value={fecha}
            onChange={ (e) => setFecha(e.target.value) }

            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="sintomas" 
              className="block uppercase text-slate-700 font-bold mb-2">
              Síntomas
            </label>

            <textarea 
            className="border-2 w-full rounded-md p-2 text-slate-700" 
            id="sintomas"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }

            >
            </textarea>

          </div>

          <input 
          className="bg-rose-600 transition delay-200 hover:shadow-xl text-white rounded-md font-bold hover:bg-rose-700 text-lg py-2 w-full cursor-pointer"
          type="submit"
          value={ paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          />

        </form>
    </div>
  )
}


export default Formulario