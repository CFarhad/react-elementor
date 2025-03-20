import { combineReducers, configureStore } from "@reduxjs/toolkit";
import editor from "./editor"

export default configureStore({
    reducer: {
        editor,
    },
    devTools: process.env.NODE_ENV === "development" ? true : false
})