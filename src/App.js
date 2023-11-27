import React from 'react'
import ListadoProfesores from './00-Servicio/listadoProfesores'
import DataProfesor from './03-Componentes/00-ProfesorElegido/DataProfesor'
import MigaPanModule from './03-Componentes/01-MigaPan/MigaPan.Module'
import InformacionBasicaProfesorModule from './03-Componentes/02-InformacionBasica/InformacionBasicaProfesor.Module'
import DetalleInformacionProfesorModule from './03-Componentes/03-DetallesProfesor/DetalleInformacionProfesor.Module'
const App = () => {
  return (
    <>
      <ListadoProfesores />
      <DataProfesor />
      <MigaPanModule />
      <InformacionBasicaProfesorModule />
      <DetalleInformacionProfesorModule />
    </>
  )
}
export default App