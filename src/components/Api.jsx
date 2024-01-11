import useFetch from "./useFetch";

function Api() {
  const { data } = useFetch("https://www.el-tiempo.net/api/json/v2/provincias");

  return (
    <div>
      <ul>
        {data &&
          data.length > 0 &&
          data.map((city) => (
            <li key={city.CODPROV}>{city.NOMBRE_PROVINCIA}</li>
          ))}
      </ul>
    </div>
  );
}

export default Api;
