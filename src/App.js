import React from "react";
import reviews from "./Overrewers/data";
import Expenses from "./Overrewers/Expenses";
import "./App.css";
import "./Overrewers/index.css"
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
          <Expenses Information={reviews} />;
        
      </section>
    </main>
  );
}

export default App;
