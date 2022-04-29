import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { baseUrl } from "./config/config";
import Pages from "./routes";

const App = () => {
  return (
    <Router>
      <Pages />
    </Router>
  );
};

export default App;
