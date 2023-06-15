import Paciente from "./Paciente"


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">

      {pacientes.length ? (

        <>
            <h2 className="font-black text-3xl text-center text-slate-700">
            Listado de <span className="text-rose-600">Pacientes</span>
            </h2>    
      
            <p className="font-bold mt-5 mb-10 text-center text-2xl text-rose-600">Administra <span className="text-slate-700"> tus Pacientes y Citas</span></p>

            { pacientes.map( paciente => {

              return(
                <Paciente
                    key={paciente.id}
                    paciente = {paciente}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
                )
            })}
        </>

      ) : (
        <>
            <h2 className="font-black text-3xl text-center text-slate-700">
            Aún no hay <span className="text-rose-600">Pacientes</span>
            </h2>    
      
            <p className="font-bold mt-5 mb-10 text-center text-2xl text-rose-600">Agrega tus Pacientes <span className="text-slate-700"> y Apareceran en Este Lugar</span></p>
        </>
      )}

    </div>
  )
}

export default ListadoPacientes