import React from "react";
import { useState } from "react";
import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import NavBar from "../components/navBar/NavBar";
import Search from "../components/search/Search";

function Home() {
  const [searchValue, setSearchValue] = useState("Avengers");

  return (
    <div>
      <NavBar />
      <Hero />
      <Search setSearchValue={setSearchValue} />
      <Movies searchValue={searchValue} />
    </div>
  );
}

export default Home;
