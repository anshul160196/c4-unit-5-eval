import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";

export const SearchDetail = () => {
  const [myData, setmyData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getData();
    function getData() {
      fetch(`https://fast-reef-22226.herokuapp.com/data/${id}`)
        .then((res) => res.json())
        .then((data) => setmyData(data));
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="result">
        <h1>{myData.title}</h1>
        <p>{myData.description}</p>
        <h4>Creation-Date:{Date(myData.creation_date)}</h4>
        <span>Explicit: {myData.explicit ? "Yes" : "No"}</span>
        <span> Explicit: {myData.quality}</span>
      </div>
    </div>
  );
};
