import { configureStore } from '@reduxjs/toolkit';
import potentialCountriesReducer from '../redux/slices/potentialCountriesSlices';


export default configureStore({
    reducer:{potentialCountries: potentialCountriesReducer}
})