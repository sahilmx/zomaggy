import { createSlice } from "@reduxjs/toolkit";

export const restrauntSlice = createSlice({
  name: "restraunt",
  initialState: {
    restraunt: {
        id:null,
        imgUrl:null,
        title:null,
        rating:null,
        genere:null,
        address:null,
        short_description:null,
        dishes:null,
        long:null,
        lat:null,
    },
  
  },
  reducers: {
   setRestraunt:(state, action) =>{
    state.restraunt = action.payload;
   }
  },
});

// Action creators are generated for each case reducer function
export const { setRestraunt } = restrauntSlice.actions;

export const selectRestraunt = (state) => state.restraunt.restraunt;

export default restrauntSlice.reducer;

