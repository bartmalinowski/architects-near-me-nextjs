// import React, { Suspense } from "react";
import classesLazy from "./LazyLoad.module.css";
import classes from "./CardList.module.css";
// import classesModal from "./Modal/Modal.module.css";

// const Card = React.lazy(() => import("../Card/Card"));

import Card from "../Card/Card";

const CardList = ({ directory }) => {
  return (
    <div>
      <div className={classes.container}>
        {directory.map((card) => {
          return (
            <Card
              key={card.ID}
              firstname={card.firstname}
              lastname={card.lastname}
              city={card.city}
              id={card.id}
              date={card.date}
              url={card.url}
              licenceNumber={card.licenceNumber}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
