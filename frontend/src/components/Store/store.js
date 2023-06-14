import { configureStore } from "@reduxjs/toolkit";
import patientSlice from "./Slices/PatientSlice";
import DoctorSlice from "./Slices/DoctorSlice";

const store = configureStore({

    reducer: {
        patient: patientSlice,
        doctor: DoctorSlice
    },
});

export default store;