import React, { useState } from "react";
import "./index.css";

const Expenses = (props) => {
  const [index, setIndex] = useState(1);
  const {  name,  image, text } = props.Information[index];
  const Prevdata = () => {
    if (index === 0) {
      setIndex(props.Information.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const Nextdata = () => {
    if (props.Information.length-1 === index) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

const Gift= ()=>{
    setIndex(Math.round(Math.random()*3))
}
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon"></span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">web designer</p>
      <p className="info"> {text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={Prevdata}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="next-btn" onClick={Nextdata}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <button className="random-btn" onClick={Gift}>surprise me</button>
    </article>
  );
};

export default Expenses;
