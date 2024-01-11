import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("cachedData");

    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      fetch(url)
        .then((response) => response.json())
        .then((responseData) => {
          localStorage.setItem(
            "cachedData",
            JSON.stringify(responseData.provincias)
          );
          setData(responseData.provincias);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [url]);

  return { data };
}

export default useFetch;
