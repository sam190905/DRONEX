import React, { useState } from "react";
import "./App.css";
import Form from "./components/form";
function App() {
  return (
    <div>
        <div>
          <div className="logoelementform">
            <p>DRONEX</p>
          </div>
          <div className="sentenceform">Fly beyond Limits! 🚀</div>

        </div>

      <Form />

      <p className="footform">
        <p>&copy; {new Date().getFullYear()} Dronex. All rights reserved.</p>
      </p>

    </div>
  );
}

export default App;
