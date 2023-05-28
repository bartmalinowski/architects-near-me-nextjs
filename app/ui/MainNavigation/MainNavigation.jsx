"use client";
// import React, { useState } from "react";
import Link from "next/link";
// import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
// import { auth } from "../../config/firebase";
// import MobileNavigation from "../MobileNavigation/MobileNavigation";

// import Modal from "../Modal/Modal";
// import Auth from "../Auth/Auth";

function MainNavigation() {
  return (
    <header>
      <nav className={classes.navbar}>
        <Link href="/" className={classes.navLogoLink}>
          <div className={classes.navLogo}>SwiadectwoEnergetyczne.co </div>
        </Link>

        <ul className={classes.navbarDesktop}>
          <li>
            <Link href="/architects">AUDYTORZY</Link>
          </li>
          <li>
            <Link href="/about">O NAS </Link>
          </li>
          <li>
            <Link href="/about">USŁUGI </Link>
          </li>
          <li>
            <Link href="/about">KONTAKT </Link>
          </li>
        </ul>

        <div className={classes.navRight}>
          <Link href="/about" className={classes.signIn}>
            {" "}
            Sign in
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
