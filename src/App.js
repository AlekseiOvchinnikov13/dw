import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Form from "./pages/Form";
import ReportPage from "./pages/ReportPage";
import FormPage from "./pages/FormPage";
import Home from "./pages/Home";
import ReportCommon from "./pages/ReportCommon";
import ReportML from "./pages/ReportML";
import FormRetail from "./pages/FormRetail";
import ContactPolicy from "./pages/ContactPolicy";
import ReportAverageCheck from "./pages/ReportAverageCheck";
import ReportCrossSale from "./pages/ReportCrossSale";
import ReportRegularCompanies from "./pages/ReportRegularCompanies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/a-b-tests" component={FormPage}/>
          <Route path="/contact-policy" component={ContactPolicy}/>
          <Route path="/demo-retail" component={FormRetail}/>
          <Route path="/demo-constructor" component={Form}/>
          <Route path="/report" component={ReportPage}/>
          <Route path="/report-common" component={ReportCommon}/>
          <Route path="/report-average-check" component={ReportAverageCheck}/>
          <Route path="/report-cross-sale" component={ReportCrossSale}/>
          <Route path="/report-regular-companies" component={ReportRegularCompanies}/>
          <Route path="/report-ml" component={ReportML}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
