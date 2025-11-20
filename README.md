# 🎬 Movies App

A modern web application developed in **React 19** with **TypeScript** that consumes **The Movie Database (TMDB)** API to display detailed information about popular movies, upcoming releases, and enables advanced search functionality.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## ✨ Key Features

### 🏗️ Modern React Architecture
- **Functional components** with React Hooks
- **Custom Hooks** for reusable business logic
- **Strict TypeScript** without `any` usage
- **Container and component architecture**
- **Modular CSS** with design tokens

### 🎯 App Features
- **Interactive slider** of featured movies
- **Responsive grid** of popular movies
- **Dynamic sidebar** with upcoming releases
- **Real-time search** system
- **Loading and error states** properly handled
- **Responsive design** for mobile, tablet, and desktop

### 🛠️ Tech Stack
- **Frontend:** React 19.1.1 + TypeScript
- **Build Tool:** Vite 5.0
- **Styling:** Modern CSS3 with Design Tokens
- **API:** The Movie Database (TMDB)
- **Icons:** FontAwesome React
- **UI Framework:** Bootstrap 5.3.8 (selective)

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header/         # Navigation and search
│   ├── MovieCard/      # Individual movie card
│   ├── MovieList/      # Movie list/grid
│   ├── MovieSlider/    # Featured movies slider
│   └── MoviesCommingSoon/  # Upcoming releases sidebar
├── containers/         # Main pages/containers
│   └── Home/          # Main page
├── hooks/             # Custom Hooks
│   └── useMovies.ts   # Hook for TMDB data management
├── styles/            # Design Tokens and CSS variables
└── main.tsx          # Entry point
```

## 🎯 React Knowledge Demonstration

### 1. **Advanced Custom Hooks**
```typescript
// useMovies.ts - Custom hook with strict TypeScript
export const useMovies = (endpoint: string = 'popular', page: number = 1) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      // Fetching logic with error handling
    };
    fetchMovies();
  }, [endpoint, page]);

  return { movies, loading, error, totalPages };
};
```

### 2. **Typed Components with Interfaces**
```typescript
interface MoviesCommingSoonProps {
  onMovieClick?: (movie: Movie) => void;
}

function MoviesCommingSoon({ onMovieClick }: MoviesCommingSoonProps) {
  const { movies, loading, error } = useUpcomingMovies(8);
  
  // Declarative state handling
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  
  return (
    <section className="movies-coming-soon">
      {movies.map((movie) => (
        <MovieCard 
          key={movie.id} 
          movie={movie} 
          onClick={onMovieClick} 
        />
      ))}
    </section>
  );
}
```

### 3. **Advanced State and Effects**
```typescript
// Multiple specialized hooks
const { movies: popularMovies } = useMovies('popular');
const { movies: upcomingMovies } = useUpcomingMovies(8);
const { searchResults, isSearching } = useSearch();

// Render optimization with useCallback
const handleMovieClick = useCallback((movie: Movie) => {
  console.log("Selected movie:", movie);
}, []);
```

### 4. **Design System with CSS Tokens**
```css
/* CSS Variables organized as Design Tokens */
:root {
  /* Color Tokens */
  --color-primary: #ff6b35;
  --color-bg-surface: #1a1a1a;
  --color-text-primary: #ffffff;
  
  /* Spacing Tokens */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  
  /* Typography Tokens */
  --font-size-sm: 0.875rem;
  --font-weight-regular: 400;
  --line-height-tight: 1.25;
}

/* Component using tokens */
.movie-card {
  background: var(--color-bg-surface);
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  transition: var(--transition-all);
}
```

## 🚀 Installation and Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- TMDB API Key

### 1. Clone the repository
```bash
git clone https://github.com/your-username/movies-app.git
cd movies-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file in the project root:
```env
VITE_TMDB_API_KEY=your_api_key_here
```

> 📋 **Get API Key:** Register at [TMDB](https://www.themoviedb.org/settings/api) and generate your free key.

### 4. Run in development
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📦 Available Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Build preview
npm run lint     # Linting with ESLint
```

## 🎨 Featured Technical Characteristics

### ⚡ Performance
- **Automatic code splitting** with Vite
- **Image lazy loading**
- **Custom Hooks** for logic reusability
- **CSS optimizations** with native variables

### 🎯 UX/UI
- **Animated loading states**
- **Error boundaries** for error handling
- **Smooth scroll** on mobile sliders
- **Interactive hover effects**

### 📱 Responsive Design
- **Mobile-first** approach
- **Advanced CSS Grid** and Flexbox
- **Standardized breakpoints:** 1024px, 768px, 480px
- **Optimized touch gestures**

### 🎨 Modern Design System
- **Centralized Design Tokens** in CSS
- **Native CSS Variables** for consistency
- **Coherent color system**
- **Modular spacing** with tokens
- **Scalable typography** with ratios

### 🔒 Best Practices
- **Strict TypeScript** without `any`
- **Semantic HTML** (article, figure, section)
- **Accessibility** with alt tags and ARIA
- **Modular and scalable** structure
- **CSS with token methodology**

## 🌟 React Concepts Demonstration

| Concept | Implementation | Location |
|---------|----------------|----------|
| **Custom Hooks** | `useMovies`, `useUpcomingMovies` | `/src/hooks/` |
| **Component Composition** | MovieList + MovieCard | `/src/components/` |
| **State Management** | useState + useEffect | Entire project |
| **Props & TypeScript** | Typed interfaces | All components |
| **Conditional Rendering** | Loading/Error states | `MoviesCommingSoon.tsx` |
| **Event Handling** | onClick callbacks | `Home.tsx` |
| **CSS Tokens** | Design System | `/src/styles/` |
| **API Integration** | Fetch with async/await | `useMovies.ts` |

## 📈 Future Improvements

- [ ] **React Router** for SPA navigation
- [ ] **Context API** for global state
- [ ] **React Query** for advanced caching
- [ ] **Progressive Web App** (PWA)
- [ ] **Unit testing** with Jest/Testing Library
- [ ] **Storybook** for component documentation

## 📄 License

This project is open source under the MIT license.

## 👨‍💻 Contact

Developed with ❤️ using modern React and TypeScript best practices.

---
