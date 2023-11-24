import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const jsonData = await response.json();

      setData(jsonData.results);

      console.log(jsonData);
    }
    fetchMovies();
  }, [url]);

  return { data };
};
