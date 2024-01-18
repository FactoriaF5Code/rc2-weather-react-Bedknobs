import { useState } from "react";
import useFetch from "./useFetch";
import Provinces from "./Provinces";

function Weather() {
  const { data } = useFetch("https://www.el-tiempo.net/api/json/v2/home");
  const [search, setSearch] = useState("");
  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  let results = [];
  if (!search) {
    results = data;
  } else {
    results = data.filter((dato) => {
      return dato.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  return (
    <div className="center">
      <p className="title">¿Qué tiempo va a hacer hoy?</p>
      <p className="subtitle">
        Escribe el lugar del que desees conocer el tiempo
      </p>
      <p className="namesCitys">
        Madrid, Barcelona, Sevilla, Valencia, Bilbao, A Coruña, Oviedo, Puerto
        de la Cruz, Eivissa, Cáceres, Almería, Cazorla
      </p>
      <input
        className="browser"
        type="text"
        value={search}
        onChange={searcher}
        placeholder="Madrid..."
      />
      {search && <Provinces results={results} />}
    </div>
  );
}

export default Weather;
