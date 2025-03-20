import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "editor",
    initialState: {
        mode: "components",
        title: "",
    },
    reducers: {
        setComponents: (state,action) => {
            state.mode = "components"
        },
        setEdit: (state,action)=>{
            state.mode = "edit"
        },
        setTitle: (state,action) => {
            state.title = action.payload
        }
    }
})

export const {setComponents,setEdit,setTitle} = slice.actions;
export default slice.reducer