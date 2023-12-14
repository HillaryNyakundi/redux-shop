import './App.css';
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter,Switch,Route, Redirect} from "react-router-dom";
import { ToastContainer} from "react-toastify";

import NavBar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import NotFound from './components/NotFound';


function App() {
  return <div className="App">
    <BrowserRouter>
    <ToastContainer/>
      <NavBar/>
      <Switch>
        <Route path='/cart' exact component={Cart}/>
        <Route path='/not-found' component={NotFound}/>
        <Route path='/' exact component={Home}/>
        <Redirect to="/not-found" />
      </Switch>  
    </BrowserRouter>
  </div>
}

export default App;
