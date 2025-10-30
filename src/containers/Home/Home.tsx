import MovieCard from "../../components/MovieCard/MovieCard";

function Home() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Películas Populares</h2>
      <div className="row g-3">
        <div className="col-md-3 col-sm-6">
          <MovieCard
            title="The Batman"
            image="https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
            rating={7.8}
          />
        </div>

        <div className="col-md-3 col-sm-6">
          <MovieCard
            title="Interstellar"
            image="https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
            rating={8.6}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
