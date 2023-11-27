import React from 'react'
import { useSelector } from 'react-redux'

const InformacionBasicaProfesorModule = () => {
    let { nombre, imagen, escuelaFacultad, formacion, correo, grupo, temasInteres } = useSelector(state => state.profesorSeleccionado)
    return (
        <div className="col-12 col-md-12 col-lg-12 Profesor mb-2 py-2 px-2">
            <div className="row">
                <div className="col-12 col-md-3 col-lg-3 align-self-center">
                    <h4>{nombre}</h4>
                    <img className="imagen" src={imagen} alt={nombre} />
                </div>
                <div className="col-12 col-md-9 col-lg-9 align-self-center">
                    <p><strong>Facultad o Escuela: </strong>{escuelaFacultad}</p>
                    <p>
                        <strong>Formación de posgrado: </strong>
                        <br />
                        {formacion}
                    </p>
                    <p><strong>E-mail:</strong> <a href={`mailto:${correo}`} rel="noopener noreferrer">{correo}</a></p>
                    {
                        (() => {
                            if (grupo === "") {
                                return
                            } else {
                                return (
                                    <p>
                                        <strong>Grupo: </strong>
                                        <br />
                                        {grupo}
                                    </p>
                                )
                            }
                        })()
                    }
                    {
                        (() => {
                            if (temasInteres === "") {
                                return
                            } else {
                                return (
                                    <p>
                                        <strong>Temas de interés: </strong>
                                        <br />
                                        {temasInteres}
                                    </p>
                                )
                            }
                        })()
                    }
                </div>
            </div>
        </div>
    )
}
export default InformacionBasicaProfesorModule