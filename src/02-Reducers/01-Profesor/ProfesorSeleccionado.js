import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    nombre: "",
    imagen: "",
    escuelaFacultad: "",
    formacion: "",
    correo: "",
    grupo: "",
    temasInteres: "",
    proyectosInvestigacion: "",
    publicaciones: "",
    docencia: "",
    extension: ""
}
export const profesorSlice = createSlice({
    name: 'lista',
    initialState: initialState,
    reducers: {
        setProfesor: (state, action) => {
            state.nombre = action.payload.nombre;
            state.imagen = action.payload.imagen;
            state.escuelaFacultad = action.payload.escuelaFacultad;
            state.formacion = action.payload.formacion;
            state.correo = action.payload.correo;
            state.grupo = action.payload.grupo;
            state.temasInteres = action.payload.temasInteres;
            state.proyectosInvestigacion = action.payload.proyectosInvestigacion;
            state.publicaciones = action.payload.publicaciones;
            state.docencia = action.payload.docencia;
            state.extension = action.payload.extension;
        }
    },
})
export const { setProfesor } = profesorSlice.actions
export default profesorSlice.reducer