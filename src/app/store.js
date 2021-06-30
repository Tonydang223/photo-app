
import { configureStore } from '@reduxjs/toolkit'
import photoSlice from '../features/Photo/photoSlice'
const rootReducers = {
    photos: photoSlice
}

const store = configureStore({
    reducer:rootReducers,
})

export default store