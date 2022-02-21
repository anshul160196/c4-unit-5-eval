import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";

export const Search = () => {
  const [myData, setmyData] = useState([]);
  const [data] = useSearchParams();
  let val = data.get("q");

  useEffect(() => {
    getData();
    function getData() {
      fetch(`https://fast-reef-22226.herokuapp.com/data?q=${val}`)
        .then((res) => res.json())
        .then((data) => setmyData(data));
    }
  }, []);

  const sort = (val) => {
    const newData = [...myData];
    newData.sort((a, b) => {
      return a[val] - b[val];
    });
    setmyData(newData);
    // console.log(newData);
  };

  return (
    <div>
      <Navbar />
      <div>
        <button onClick={(e) => sort(e.target.name)}>Sort A-Z</button>
        <button>Sort Z-A</button>
        <button>Sort by Date (inc)</button>
        <button>Sort by Date (dec)</button>
        <button>Sort by Quality</button>
        <button>Sort by Quality</button>
      </div>
      <div id="search-result">
        {myData.map((element, index) => (
          <div className="result" key={index}>
            <Link to={`/page/${element.id}`}>{element.title}</Link>
            <p>{element.description}</p>
            <h4>Creation-Date:{Date(element.creation_date)}</h4>
            <span>Explicit: {element.explicit ? "Yes" : "No"}</span>
            <span> Explicit: {element.quality}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
