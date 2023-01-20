import './App.css';
import {
  Routes,
  Route,
  // Link
} from "react-router-dom";

import { AllSeasons } from './components/AllSeasons';
// import { SeasonsForm } from './components/AllSeasons';
// import { AllSeasons } from './components/AllSeasons';
// import { AllSeasons } from './components/AllSeasons';


function App() {
  return (
    <div >
      <h1> App . js Seasons</h1>
      <Routes>
        <Route exact path='/seasons' element={<AllSeasons />}></Route>

        {/* <Route exact path='/seasons/new' element={<SeasonsForm />}></Route>

        <Route exact path='/seasons/:id' element={<ViewOneSeason />}> </Route>

        <Route exact path='/seasons/edit/:id' element={<EditSeason />}> </Route> */}
      </Routes>

    </div>
  );
}

export default App;