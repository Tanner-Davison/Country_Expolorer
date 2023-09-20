import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectedPotentials } from "./redux/slices/potentialCountriesSlices";
import {  useSelector } from "react-redux";
import { selectDisplay } from "./redux/slices/displayCountrySlice";

function App() {
    let potentials = useSelector(selectedPotentials)
    const currentDisplay = useSelector(selectDisplay)
    console.log("DISPLAY", currentDisplay);
    return (
        <div className="App font-link">
            <Header />
           {currentDisplay ? <MainDisplay/> : <OptionDisplay />}
        </div>
    );
}

export default App;
