import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './searchSlice';

const reducer = (state, action) => {
    return state;
}
export default configureStore({
    reducer: {
        counter: searchSlice
    }
})