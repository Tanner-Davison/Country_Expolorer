import { configureStore } from '@reduxjs/toolkit';
import potentialCountriesReducer from '../redux/slices/potentialCountriesSlices';
import displayedCountryReducer  from './slices/displayCountrySlice';


export default configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer,
        displayedCountry: displayedCountryReducer}
})