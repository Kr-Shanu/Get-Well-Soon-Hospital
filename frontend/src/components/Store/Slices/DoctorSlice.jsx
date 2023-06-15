import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({

    name: "doctor",
    initialState: {
        doctorId: "",
        loggedIn: false,
    },
    reducers: {
        doctorLoggedIn(state, action) {
            state.doctorId = action.payload;
            state.loggedIn = true;
            console.log("State: ", state);
        }
    },
});

export const { doctorLoggedIn } = doctorSlice.actions;
export default doctorSlice.reducer;