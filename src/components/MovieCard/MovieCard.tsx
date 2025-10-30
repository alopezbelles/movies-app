// src/components/MovieCard.tsx
import './MovieCard.css';

interface MovieCardProps {
  title: string;
  image: string;
  rating: number;
}

function MovieCard({ title, image, rating }: MovieCardProps) {
  return (
    <article className="movie-card">
      <figure className="image-container">
        <img src={image} alt={title} />
      </figure>
      <div className="content">
        <h3 className="title">{title}</h3>
        <div className="rating">
          <span className="star">⭐</span>
          <span className="score">{rating}/10</span>
        </div>
        <button className="btn-details">Ver detalles</button>
      </div>
    </article>
  );
}

export default MovieCard;
