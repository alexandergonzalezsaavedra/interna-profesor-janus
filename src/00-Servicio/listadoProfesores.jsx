import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setListado } from "../02-Reducers/00-Listado/listadoSlice"
const ListadoProfesores = () => {
    let dispatch = useDispatch()
    useEffect(() => {
        info()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const [lp, setLp] = useState([])
    //  let dataJson = "https://appsweb01.urosario.edu.co/portal-resources/janus-profesores/profesores-janus.json"
    let dataJson = "https://gsb.urosario.edu.co/gsb_urosario_edu_co/media/janus/json/profesores-janus.json"
    const info = async () => {
        try {
            let data = await fetch(dataJson)
            let resData = await data.json()
            setLp(resData.profesores)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        dispatch(setListado({
            info: lp
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lp])
    return
}
export default ListadoProfesores