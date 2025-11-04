import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { useMovies } from '../../hooks/useMovies';
import type { Movie } from '../../hooks/useMovies';
import { getImageUrl, formatRating } from '../../hooks/useMovies';
import './MovieSlider.css';

interface MovieSliderProps {
  onMovieClick?: (movie: Movie) => void;
}

function MovieSlider({ onMovieClick }: MovieSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { movies, loading, error } = useMovies('top_rated', 1);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Limitar a las primeras 10 películas
  const topMovies = movies.slice(0, 10);
  const totalSlides = topMovies.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleMovieClick = (movie: Movie) => {
    onMovieClick?.(movie);
  };

  // Auto-slide cada 5 segundos
  useEffect(() => {
    if (topMovies.length === 0) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides, topMovies.length]);

  if (loading) {
    return (
      <section className="movie-slider loading">
        <div className="slider-header">
          <h2 className="slider-title">Top Rated Movies</h2>
        </div>
        <div className="slider-loading">
          <div className="loading-spinner"></div>
          <p>Loading top movies...</p>
        </div>
      </section>
    );
  }

  if (error || topMovies.length === 0) {
    return (
      <section className="movie-slider error">
        <div className="slider-header">
          <h2 className="slider-title">Top Rated Movies</h2>
        </div>
        <div className="slider-error">
          <p>Unable to load top movies</p>
        </div>
      </section>
    );
  }

  return (
    <section className="movie-slider">
      <div className="slider-container">
        <button 
          className="slider-btn prev"
          onClick={prevSlide}
          aria-label="Previous movies"
          disabled={totalSlides <= 1}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="slider-track" ref={sliderRef}>
          <div className="slider-wrapper">
            {/* Películas laterales para contexto visual */}
            <div className="side-movies">
              {/* Película anterior */}
              {topMovies[currentSlide - 1] && (
                <div className="side-movie left">
                  <img
                    src={getImageUrl(topMovies[currentSlide - 1].poster_path, 'w300')}
                    alt={topMovies[currentSlide - 1].title}
                  />
                </div>
              )}
              
              {/* Película siguiente */}
              {topMovies[currentSlide + 1] && (
                <div className="side-movie right">
                  <img
                    src={getImageUrl(topMovies[currentSlide + 1].poster_path, 'w300')}
                    alt={topMovies[currentSlide + 1].title}
                  />
                </div>
              )}
            </div>

            {/* Película principal */}
            <article 
              className="main-movie-card"
              onClick={() => handleMovieClick(topMovies[currentSlide])}
            >
              <div 
                className="movie-backdrop"
                style={{
                  backgroundImage: `url(${getImageUrl(topMovies[currentSlide].backdrop_path, 'original')})`
                }}
              >
                <div className="backdrop-overlay">
                  <div className="movie-content">
                    <figure className="movie-poster">
                      <img
                        src={getImageUrl(topMovies[currentSlide].poster_path, 'w500')}
                        alt={topMovies[currentSlide].title}
                        loading="lazy"
                      />
                    </figure>
                    
                    <div className="movie-details">
                      <div className="movie-rating">
                        <FontAwesomeIcon icon={faStar} className="rating-star" />
                        <span className="rating-value">
                          {formatRating(topMovies[currentSlide].vote_average)}
                        </span>
                        <span className="rating-label">IMDb Rating</span>
                      </div>
                      
                      <h3 className="movie-title">{topMovies[currentSlide].title}</h3>
                      
                      <p className="movie-year">
                        {topMovies[currentSlide].release_date 
                          ? new Date(topMovies[currentSlide].release_date).getFullYear() 
                          : 'N/A'}
                      </p>
                      
                      <p className="movie-overview">
                        {topMovies[currentSlide].overview || 'No description available.'}
                      </p>
                      
                      <button className="watch-btn" onClick={(e) => {
                        e.stopPropagation();
                        handleMovieClick(topMovies[currentSlide]);
                      }}>
                        Watch Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <button 
          className="slider-btn next"
          onClick={nextSlide}
          aria-label="Next movies"
          disabled={totalSlides <= 1}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}

export default MovieSlider;