import React, { Suspense } from "react";
import classesLazy from "./LazyLoad.module.css";
import classes from "./CardList.module.css";
// import classesModal from "./Modal/Modal.module.css";

const Card = React.lazy(() => import("../Card/Card"));

// import Card from "./Card";

const CardList = ({ directory }) => {
  return (
    <div>
      <div className={classes.container}>
        {directory.map((card) => {
          return (
            <Suspense
              key={card.name}
              fallback={
                <div>
                  <div className={classes.directoryCardContainer}>
                    <div
                      className={`${classesLazy.columnLazy} ${classesLazy.directoryContainerLazy}`}
                    >
                      <a href="index.html" target="_">
                        {/* {name} */}
                      </a>
                      {/* <div>{type}</div> */}
                      <br />
                      {/* <div>{city}</div> */}

                      <br />
                      {/* <button className="btn-more">more info</button> */}
                    </div>
                    <div className={classes.cardInfo}>
                      <div className={classesLazy.cardNameLazy}>
                        {/* {name} */}
                      </div>

                      <div className={classesLazy.cardIconsLazy}></div>
                    </div>
                  </div>
                </div>
              }
            >
              <Card
                key={card.name}
                type={card.type}
                name={card.name}
                city={card.city}
                style={card.img}
              />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
