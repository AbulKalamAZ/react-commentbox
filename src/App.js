import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CommentContainer from "./components/Container";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/commentbox/:commentBoxID'
            element={<CommentContainer />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
