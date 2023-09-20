import logo from './logo.svg';
import './App.css';
import Welcome from './Welcom';
import StateExample from './StateExample';
import StateExample2 from './StateExample2';
import UseEffectExample from './UseEffectExample';
import About from './About';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact'

import {Route, Switch} from 'react-router-dom'
import MapExample from './MapExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
        <MapExample/>
      </header>
     
    </div>
  );
}

export default App;
