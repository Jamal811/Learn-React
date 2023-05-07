import { useState, useEffect } from "react";
import "./App.css";
import Movie from "./Movie";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";
function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=bd964c4f2d69a0479db749fdbc2d156b&language=en-US&page=1"
    );
    const Movies = await data.json();
    console.log(Movies);
    setPopular(Movies.results);
    setFiltered(Movie.results);
  };
  return (
    // https://api.themoviedb.org/3/movie/popular?api_key=bd964c4f2d69a0479db749fdbc2d156b&language=en-US&page=1
    <div>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="pupular-movies">
        <AnimatePresence>
          {filtered?.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
