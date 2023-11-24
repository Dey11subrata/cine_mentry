import { useEffect, useState } from "react";

export const useFetch = (apiPath) => {
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=1bc4184f5cc98dd17a601b55f914e680`;
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
