import { MovieCard } from "../components/MovieCard";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ apiPath }) => {
  // const [movieList, setMovieList] = useState([]);

  const { data: movieList } = useFetch(apiPath);
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
