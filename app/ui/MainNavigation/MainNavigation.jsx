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
          <div className={classes.navLogo}>ArchitectsNear.me</div>
        </Link>

        <ul className={classes.navbarDesktop}>
          <li>
            <Link href="/architects">ARCHITECTS</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
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
