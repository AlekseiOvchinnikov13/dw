import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Form from "./pages/Form";
import ReportPage from "./pages/ReportPage";
import FormPage from "./pages/FormPage";
import Home from "./pages/Home";
import ReportCommon from "./pages/ReportCommon";
import ReportML from "./pages/ReportML";
import FormRetail from "./pages/FormRetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/a-b-tests" component={FormPage}/>
          <Route path="/demo-retail" component={FormRetail}/>
          <Route path="/demo-constructor" component={Form}/>
          <Route path="/report" component={ReportPage}/>
          <Route path="/report-common" component={ReportCommon}/>
          <Route path="/report-ml" component={ReportML}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
