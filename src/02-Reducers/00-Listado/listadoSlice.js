import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    info: []
}
export const listadoSlice = createSlice({
    name: 'lista',
    initialState: initialState,
    reducers: {
        setListado: (state, action) => {
            state.info = action.payload.info
        }
    },
})
export const { setListado } = listadoSlice.actions
export default listadoSlice.reducer