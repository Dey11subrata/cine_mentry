import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryParam = "") => {
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryParam}`;
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
