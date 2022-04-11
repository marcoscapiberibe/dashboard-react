import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Body from "./Layout";
import Home from "./pages/Home";
import Header from "./components/Header";
import ApexChartScatter from './pages/ApexCharts/ApexChartScatter';
import ApexChartBarrasSimples from './pages/ApexCharts/ApexChartBarrasSimples';


function App() {
  return (
    <Router>
      <>
        <Body>
          <Header></Header>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={ApexChartBarrasSimples} />
          <Route exact path="/" component={ApexChartScatter} />
        </Body>
      </>
    </Router>
  )
};

export default App;