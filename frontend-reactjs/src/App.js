import { BrowserRouter,Route,Switch, Redirect } from "react-router-dom";
import Home from "./page/Home";
import Detail from "./page/Detail";
import Edit from "./page/Edit";
import Tambah from "./page/Tambah";
import Analityc from "./page/Analityc";

import Login from './app/pages/Login';
import Register from './app/pages/Register';
import { useSelector } from 'react-redux';
import Logout from './app/components/Logout';

function App() {

  const auth = useSelector(state => state.auth);
  
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>

        <Route exact path="/">
             <Login />
             {/* <Home /> */}
          </Route>
        <Route path="/logout">
              <Logout />
        </Route>
        <Route path="/analityc">
             <Analityc />
          </Route> 
        <Route path="/login">
          { auth.user ? <Redirect to="/home" /> : <Login /> } 
        </Route> 
        <Route path="/home">
          { !auth.user ? <Redirect to="/" /> : <Home /> } 
          </Route> 
          {/* <Route exact path="/">
             <Home />
          </Route> */}
          <Route path="/detail/:id">
             <Detail />
          </Route>
          <Route path="/edit/:id">
             <Edit />
          </Route>
          <Route path="/tambah">
             <Tambah />
          </Route>
      
         <Route path="/register" component={Register}/>
        </Switch>
      </BrowserRouter>
    
      hhhh
    </div>
  );
}

export default App;
