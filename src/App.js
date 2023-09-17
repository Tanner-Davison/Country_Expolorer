import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectedPotentials } from "./redux/slices/potentialCountriesSlices";
import {  useSelector } from "react-redux";


function App() {
    let potentials = useSelector(selectedPotentials)
    console.log(potentials)
    return (
        <div className="App font-link">
            <Header />
            <MainDisplay/>
            <OptionDisplay />
        </div>
    );
}

export default App;
