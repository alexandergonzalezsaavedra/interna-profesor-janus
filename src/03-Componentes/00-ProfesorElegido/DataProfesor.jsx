import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setProfesor } from "../../02-Reducers/01-Profesor/ProfesorSeleccionado"
const DataProfesor = () => {
    let { info } = useSelector(state => state.profesoresJanus)
    const [seleccionado, setSeleccionado] = useState([])
    let dispatch = useDispatch()
    let dataUrl = window.location.search
    let nombreUrl = dataUrl.replaceAll("-", " ")
    let depurarNombreUrl = nombreUrl.replaceAll("?", " ").trim()
    useEffect(() => {
        profesorElegido()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [info])

    const profesorElegido = async () => {
        try {
            if (info.length !== 0) {
                let dataJson = await info
                let res = await dataJson.filter(d => {
                    return (
                        d.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, '').replaceAll(/;/g, "").toLowerCase().includes(depurarNombreUrl)
                    )
                })
                setSeleccionado(res[0])
            } else {
                return
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        dispatch(setProfesor({
            nombre: seleccionado.nombre,
            imagen: seleccionado.imagen,
            escuelaFacultad: seleccionado.escuelaFacultad,
            formacion: seleccionado.formacion,
            correo: seleccionado.correo,
            grupo: seleccionado.grupo,
            temasInteres: seleccionado.temasInteres,
            proyectosInvestigacion: seleccionado.proyectosInvestigacion,
            publicaciones: seleccionado.publicaciones,
            docencia: seleccionado.docencia,
            extension: seleccionado.extension
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seleccionado])
    return
}
export default DataProfesor
