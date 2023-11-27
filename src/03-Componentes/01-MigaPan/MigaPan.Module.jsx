import React from 'react'

import { useSelector } from 'react-redux'
const MigaPanModule = () => {
    let { nombre } = useSelector(state => state.profesorSeleccionado)
    return (
        <div className="miga py-1 px-1">
            <a className='link' href="https://urosario.edu.co/janus" rel="noopener noreferrer">JANUS</a> {`>`} <a className='link' href="https://urosario.edu.co/janus/nuestros-integrantes" rel="noopener noreferrer">Nuestros integrantes</a> {`>`} <span className="link">{nombre}</span>
        </div>
    )
}

export default MigaPanModule