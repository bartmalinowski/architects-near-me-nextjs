"use client";

import React, { useState } from "react";

import classes from "./ControlBtn.module.css";

function ControlBtn({ setFilter }) {
  const [activeBtn, setActiveBtn] = useState(1);

  const activeHandler = (id) => {
    setActiveBtn(id);
  };
  const btnClass = (id) =>
    activeBtn === id ? `${classes.btn} ${classes.active}` : classes.btn;

  return (
    <div>
      <div className={classes.controlButtonDiv}>
        <div id="myBtnContainer" className={classes.btnSlide}>
          <button
            className={btnClass(1)}
            onClick={() => {
              setFilter("Show all");
              activeHandler(1);
            }}
          >
            Show all
          </button>
          <button
            className={btnClass(2)}
            onClick={() => {
              setFilter("Residential architects");
              activeHandler(2);
            }}
          >
            Residential architects
          </button>
          <button
            className={btnClass(3)}
            onClick={() => {
              setFilter("Commercial architects");
              activeHandler(3);
            }}
          >
            Commercial architects
          </button>
          <button
            className={btnClass(4)}
            onClick={() => {
              setFilter("Landscape architects");
              activeHandler(4);
            }}
          >
            Landscape architects
          </button>
          <button
            className={btnClass(5)}
            onClick={() => {
              setFilter("Interior designers");
              activeHandler(5);
            }}
          >
            Interior designers
          </button>

          <button>
            <i className="fa fa-filter"></i> Filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default ControlBtn;
