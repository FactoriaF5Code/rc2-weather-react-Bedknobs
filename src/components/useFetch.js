import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.ciudades);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  return { data };
}

export default useFetch;
