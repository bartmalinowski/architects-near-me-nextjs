"use client";

import React from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";
import classesModal from "../Modal/Modal.module.css";
import classes from "./Card.module.css";
import Image from "next/image";

const Card = ({ name, type, city, style }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMoreInfoClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className={classes.directoryCardContainer}>
        <Image src={style} width={300} height={300} />
        {/* <div
          className={`${classes.column} ${classes.directoryContainer}`}
          style={{
            backgroundImage: `url(${style})`,
            zIndex: -1,
          }}
        >
          <div className={classes.cardText}>
            <a href="index.html" target="_">
              {name}
            </a>
            <div>{type}</div>
            <br />
            <div>{city}</div>
            <br />

            <button className={classes.btnMore} onClick={handleMoreInfoClick}>
              more info
            </button>
          </div>
        </div> */}
        <div className={classes.cardInfo}>
          <a href="index.html" target="_">
            {name}
          </a>

          <div className={classes.cardIcons}>
            <a href="#">
              <i className="fa fa-bookmark"></i>
            </a>
            {/* <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a> */}
            <a href="#">
              2K
              <i className="fa fa-heart"></i>
            </a>
            <a href="#">
              3K
              <i className="fa fa-eye"></i>
            </a>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseClick}
        modalName={name}
        modalCity={city}
        modalType={type}
      />
    </div>
  );
};

export default Card;
