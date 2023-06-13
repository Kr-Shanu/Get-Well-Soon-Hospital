import { configureStore } from "@reduxjs/toolkit";
import patientSlice from "./Slices/PatientSlice";

const store = configureStore({

    reducer: {
        patient: patientSlice
    },
});

export default store;