"use client";

import React, { useState, useEffect } from "react";
import ControlBtn from "../ControlBtn/ControlBtn";
import CardList from "../CardList/CardList";
// import classes from "../../App.module.css";

// import SearchBar from "../SearchBar/SearchBar";

const FilteredList = () => {
  const [filter, setFilter] = useState("Show all");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const filterData = () => {
    setFilteredData([]);
    const filteredCards = data.filter((card) => {
      if (filter === "Show all") {
        return true;
      }
      return card.type === filter;
    });
    setFilteredData(filteredCards);
  };

  const handleSearch = (searchData) => {
    setFilteredData(searchData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-architects-near-me-default-rtdb.firebaseio.com/directory.json"
      );
      const jsonData = await response.json();
      setData(Array.isArray(jsonData) ? jsonData : Object.values(jsonData));
      console.log(jsonData);
    };

    fetchData();
    console.log("FetchGETfinished");
  }, []);

  useEffect(() => {
    filterData();
  }, [data, filter]);

  async function addArchitectHandler(architect) {
    const response = await fetch(
      "https://react-architects-near-me-default-rtdb.firebaseio.com/directory.json",
      {
        method: "POST",
        body: JSON.stringify(architect),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseData = await response.json();
    console.log("responsedata", responseData);
    const newData = { ...architect, id: responseData.name };
    setData((prevData) => [...prevData, newData]);

    console.log("FetchPOSTfinished");
  }

  return (
    <>
      {/* <SearchBar placeholder="Search..." data={data} onSearch={handleSearch} /> */}
      <ControlBtn setFilter={setFilter} />
      <CardList directory={filteredData} />
    </>
  );
};

export default FilteredList;
