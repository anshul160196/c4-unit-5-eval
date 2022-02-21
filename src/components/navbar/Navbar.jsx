import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div id="navbar">
      <Link className="homeLink" to="/">
        Home
      </Link>
      <input
        className="search-box "
        type="text"
        placeholder="search"
        onKeyPress={function handleInput(event) {
          if (event.key === "Enter") {
            window.open(`/search?q=${event.target.value}`);
          }
        }}
      />
      <button
        className="search"
        className="searchBtn"
        onClick={function handleInput(event) {
          window.open(`/search?q=${event.target.value}`);
        }}
      >
        Search
      </button>
    </div>
  );
};
