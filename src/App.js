import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Classes from './components/OurClasses/Classes';
import ClassInformation from './components/ClassInformation/ClassInformation';
import Pricing from './components/Pricing/Pricing';
import Home from './components/Home/Home';
import MemberShip from './components/MemberShip/MemberShip';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/memberShip">
          <MemberShip></MemberShip>
        </Route>
        <Route path="/classSchedule">
          <ClassInformation></ClassInformation>
        </Route>
        <Route path="/pricing">
          <Pricing></Pricing>
        </Route>
        <Route path="/classes">
          <Classes></Classes>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
