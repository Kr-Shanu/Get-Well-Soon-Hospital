import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({

    name: "patient",
    initialState: {
        patientId: "",
        loggedIn: false,
    },
    reducers: {
        patientLoggedIn(state, action) {
            state.patientId = action.payload;
            state.loggedIn = true;
            console.log("State: ", state);
        }
    },
});

export const { patientLoggedIn } = patientSlice.actions;
export default patientSlice.reducer;