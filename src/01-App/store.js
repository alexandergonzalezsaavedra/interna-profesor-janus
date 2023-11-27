import { configureStore } from '@reduxjs/toolkit'

import listadoRedux from "../02-Reducers/00-Listado/listadoSlice"
import profesorRedux from "../02-Reducers/01-Profesor/ProfesorSeleccionado"

export const store = configureStore({
    reducer: {
        profesoresJanus: listadoRedux,
        profesorSeleccionado: profesorRedux,
    },
})