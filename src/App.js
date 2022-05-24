import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Form from "./pages/Form";
import Report from "./pages/Report";
import FormPage from "./pages/FormPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/a-b-tests" component={FormPage}/>
          <Route path="/demo-constructor" component={Form}/>
          <Route path="/report" component={Report}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
