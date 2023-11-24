import { MovieCard } from "../components/MovieCard";
import { useFetch } from "../hooks/useFetch";

export const MovieList = () => {
  // const [movieList, setMovieList] = useState([]);
  const { data: movieList } = useFetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=1bc4184f5cc98dd17a601b55f914e680"
  );
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
