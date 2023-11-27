import { useSelector } from 'react-redux'
const DetalleInformacionProfesorModule = () => {
    let { proyectosInvestigacion, publicaciones, docencia, extension } = useSelector(state => state.profesorSeleccionado)

    let proyectosInvestigacionHTML = () => {
        return { __html: proyectosInvestigacion };
    }
    let publicacionesHTML = () => {
        return { __html: publicaciones };
    }
    let docenciaHTML = () => {
        return { __html: docencia };
    }
    let extensionHTML = () => {
        return { __html: extension };
    }
    return (
        <div className="col-12 col-md-12 col-lg-12 Tabs">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                {
                    (() => {
                        if (proyectosInvestigacion === "") {
                            return
                        } else {
                            return (
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-investigacion-tab" data-bs-toggle="pill" data-bs-target="#pills-investigacion" type="button" role="tab" aria-controls="pills-investigacion" aria-selected="true">
                                        Proyectos de investigación
                                    </button>
                                </li>
                            )
                        }
                    })()
                }
                {
                    (() => {
                        if (publicaciones === "") {
                            return
                        } else {
                            return (
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-publicaciones-tab" data-bs-toggle="pill" data-bs-target="#pills-publicaciones" type="button" role="tab" aria-controls="pills-publicaciones" aria-selected="false">Publicaciones</button>
                                </li>
                            )
                        }
                    })()
                }
                {
                    (() => {
                        if (docencia === "") {
                            return
                        } else {
                            return (
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-docencia-tab" data-bs-toggle="pill" data-bs-target="#pills-docencia" type="button" role="tab" aria-controls="pills-docencia" aria-selected="false">Docencia</button>
                                </li>
                            )
                        }
                    })()
                }
                {
                    (() => {
                        if (extension === "") {
                            return
                        } else {
                            return (
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-extensión-tab" data-bs-toggle="pill" data-bs-target="#pills-extensión" type="button" role="tab" aria-controls="pills-extensión" aria-selected="false">Extensión</button>
                                </li>
                            )
                        }
                    })()
                }
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade py-2 px-2 bg-light" id="pills-investigacion" role="tabpanel" aria-labelledby="pills-investigacion-tab" tabIndex="0">
                    <div dangerouslySetInnerHTML={proyectosInvestigacionHTML()} />
                </div>
                <div className="tab-pane fade py-2 px-2 bg-light" id="pills-publicaciones" role="tabpanel" aria-labelledby="pills-publicaciones-tab" tabIndex="0">
                    <div dangerouslySetInnerHTML={publicacionesHTML()} />
                </div>
                <div className="tab-pane fade py-2 px-2 bg-light" id="pills-docencia" role="tabpanel" aria-labelledby="pills-docencia-tab" tabIndex="0">
                    <div dangerouslySetInnerHTML={docenciaHTML()} />
                </div>
                <div className="tab-pane fade py-2 px-2 bg-light" id="pills-extensión" role="tabpanel" aria-labelledby="pills-extensión-tab" tabIndex="0">
                    <div dangerouslySetInnerHTML={extensionHTML()} />
                </div>
            </div>
        </div>
    )
}
export default DetalleInformacionProfesorModule