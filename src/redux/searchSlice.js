import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'counter',
  initialState: {
    value: "",
  },
  reducers: {
    change: (state, action) => {
      state.value = action.payload.value;
    }
  },
})

export const { change } = searchSlice.actions

export default searchSlice.reducer