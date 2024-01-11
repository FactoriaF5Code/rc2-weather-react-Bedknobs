import { useState } from "react";
import useFetch from "./useFetch";
import Provinces from "./Provinces";

function ProvinciaBrowser() {
  const { data } = useFetch("https://www.el-tiempo.net/api/json/v2/provincias");
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
      return dato.NOMBRE_PROVINCIA.toLowerCase().includes(search.toLowerCase());
    });
  }

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={searcher}
        placeholder="Provincia"
      />
      <Provinces results={results} />
    </div>
  );
}

export default ProvinciaBrowser;
