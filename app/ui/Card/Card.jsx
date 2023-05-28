"use client";

import React from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";
import classesModal from "../Modal/Modal.module.css";
import classes from "./Card.module.css";
import Link from "next/link";

const Card = ({ firstname, lastname, city, id, date, licenceNumber, url }) => {
  return (
    <div className={classes.directoryCardContainer}>
      {firstname} {lastname}
      <br />
      {city}
      <br />
      <span>Nr wpisu:</span>
      {id}
      <br />
      <span>Data wpisu:</span>
      {date}
      <br />
      <span>Numer uprawnień budowlanych:</span>
      {licenceNumber}
      <br />
      <Link href={url}>www</Link>
    </div>
  );
};

export default Card;
