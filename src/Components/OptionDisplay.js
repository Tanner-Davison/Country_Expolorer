import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedPotentials } from "../redux/slices/potentialCountriesSlices";
import { setDisplayCountry } from '../redux/slices/displayCountrySlice';

const OptionDisplay = () => {
    const currentPotentials = useSelector(selectedPotentials);
    const dispatch = useDispatch();
	return (
		<div className='stack'>
            {currentPotentials.map((country, i) => {
				return (
					<h2 key={country[i]}
                        className='country-option'
                        onClick={() => {
                            dispatch(setDisplayCountry(currentPotentials[i]))
                        }}>
						{country.name.common}
					</h2>
				);
			})}
		</div>
	);
};

export default OptionDisplay;
