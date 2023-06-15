const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente?")

    if(respuesta) {
      eliminarPaciente(paciente.id)
    }
  }


  return (
    <div className="bg-white m-3 shadow-lg px-5 py-10 rounded-xl">
        <p className="uppercase mb-3 font-bold text-slate-700">Nombre: <span className="font-normal normal-case">{paciente.nombre}</span></p>
        <p className="uppercase mb-3 font-bold text-slate-700">Propietario: <span className="font-normal normal-case">{paciente.propietario}</span></p>
        <p className="uppercase mb-3 font-bold text-slate-700">Correo: <span className="font-normal normal-case">{paciente.email}</span></p>
        <p className="uppercase mb-3 font-bold text-slate-700">Alta: <span className="font-normal normal-case">{paciente.fecha}</span></p>
        <p className="uppercase mb-3 font-bold text-slate-700">Síntomas: <span className="font-normal normal-case">{paciente.sintomas}</span></p>

        <div className="flex mt-5 justify-around">

          <button 
            type="button"
            onClick={() => setPaciente(paciente)}
            className="bg-amber-500 text-white font-bold py-2 px-10 lg:px-16 rounded-lg hover:bg-amber-600 transition duration-150 text-lg"
            >Editar</button>
            

          <button 
            type="button"
            onClick={handleEliminar}
            className="bg-red-500 text-white font-bold py-2 px-8 lg:px-16 rounded-lg hover:bg-red-600 transition duration-150 text-lg"
            >Eliminar</button>

        </div>
  </div>
  )
}

export default Paciente