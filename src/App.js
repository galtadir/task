import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from './Questions/Navbar';
import { Q1 } from './Questions/Q1';
import { Q2 } from './Questions/Q2';
import { Q3 } from './Questions/Q3';
import { Q4 } from './Questions/Q4';

let q1Input = [
    {timestamp : "01-01-2020T01:23:34"},
    {timestamp : "01-01-2020T01:23:34",value: 56},
    {timestamp : "01-01-2020T01:23:34",value: -4},
    {timestamp : "01-01-2020T01:23:34",value: 22},
    {timestamp : "01-01-2020T01:23:34",value: 99},
    {timestamp : "01-01-2020T01:23:34",value: 1},
    {timestamp : "01-01-2020T01:23:34",value: 60},
    {timestamp : "01-01-2020T01:23:34",value: 20},
    {timestamp : "01-01-2020T01:23:34",value: 80},
    {timestamp : "01-01-2020T01:23:34",value: 28},
    
]

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Q1 input={q1Input}/>
        </Route>
        <Route exact path='/Q2'>
          <Q2 />
        </Route>
        <Route exact path='/Q3'>
          <Q3 countriesNames={["israel", "england", "spain"]} favoriteCountriesNames={["israel"]}/>
        </Route>
        <Route exact path='/Q4'>
          <Q4 />
        </Route>


        
      </Switch>
    </Router>
  );
}

export default App;
