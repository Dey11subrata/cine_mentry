import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "../components/MovieCard";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("q");
  const { data: movieList } = useFetch(apiPath, queryParam);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly ">
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
