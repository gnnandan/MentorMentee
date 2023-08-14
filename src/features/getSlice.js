import { createSlice } from '@reduxjs/toolkit';
export const getSlice = createSlice({
  name: 'counter',
  initialState : [],
  reducers: {
    addData: (state,action) => {
     state.push(action.payload);
    },
    deleteData:(state, action) => {

    }
  },
})


export const {  addData, deleteData } = getSlice.actions

export default getSlice.reducer