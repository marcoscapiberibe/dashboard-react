import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Body from "./Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <>
        <Body>
          <Route exact path="/" component={Home} />
        </Body>
      </>
    </Router>

  );
}

export default App;
