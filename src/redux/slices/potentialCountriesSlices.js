import { createSlice } from '@reduxjs/toolkit';

export const potentialCountriesSlice = createSlice({
    name: 'potentialCountries',
    initialState: {
        value: [
            {
                name: {
                    common: "Search for a Country!"
                },
            },
        ],
    },
    reducers: {
        setPotentialCountries: (state, action) => {
            state.value = action.payload;
        },
        deletePotentialCountries: (state) => {
            state.value = null;
        },
    },
})
export const { setPotentialCountries, deletePotentialCountries } =
    potentialCountriesSlice.actions;

export const selectedPotentials = (state) => state.potentialCountries.value;

export default potentialCountriesSlice.reducer;