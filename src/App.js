import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import {UserProvider} from "./Components/UserContext/UserContext";
import Delete from "./Components/Delete/Delete";
import Read from "./Components/Read/Read";
import Edit from "./Components/Edit/Edit";
import NotFound from "./Components/NotFound/NotFound";
import Create from "./Components/Create/Create";


function App() {
  return (
    <div className="App">
        <Header/>
        <UserProvider>
            <Router>
                <Switch>

                    <Route path="/create">
                        <Create />
                    </Route>


                    <Route path="/read/:id">
                        <Read />
                    </Route>

                    <Route path="/edit/:id">
                        <Edit />
                    </Route>

                    <Route path="/delete/:id">
                    <Delete/>
                    </Route>

                    <Route path="/">
                        <Home/>
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </UserProvider>


    </div>
  );
}

export default App;
