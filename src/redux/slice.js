import { createSlice } from "@reduxjs/toolkit";

const slices = createSlice({
  name: "yojna",
  initialState: {
    talukaId: null,
    subyojnaId: null,
    taluka: null,
    role: null,
    tId: null,
  },
  reducers: {
    setTalukaId: (state, action) => {
      state.talukaId = action.payload;
    },
    setSubyojnaId: (state, action) => {
      state.subyojnaId = action.payload; 
    },
    // setJillhaId: (state, action) => {
    //   state.jillhaId = action.payload; 
    // },
    setRole: (state, action) => {
      state.role = action.payload; 
    },
    setTId: (state, action) => {
      state.tId = action.payload; 
    },
    setTaluka: (state, action) => {
      state.taluka = action.payload; 
    },
  },
});

export const { setTalukaId, setSubyojnaId, setJillhaId, setRole, setTId, setTaluka } = slices.actions;
export default slices.reducer;
