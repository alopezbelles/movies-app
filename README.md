# 🎬 Movies App# React + TypeScript + Vite



Una aplicación web moderna desarrollada en **React 19** con **TypeScript** que consume la API de **The Movie Database (TMDB)** para mostrar información detallada sobre películas populares, próximos estrenos y permitir búsquedas avanzadas.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)Currently, two official plugins are available:

![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white)- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## ✨ Características Principales

- **Componentes funcionales** con React Hooks

- **Custom Hooks** para lógica de negocio reutilizable

- **TypeScript estricto** sin uso de `any`

- **Arquitectura por containers y components**

- **CSS Modules** y nesting moderno

```js

### 🎯 Funcionalidades de la App

- **Slider interactivo** de películas destacadas

- **Grid responsive** de películas populares

- **Sidebar dinámico** con próximos estrenos 

- **Sistema de búsqueda** en tiempo real

- **Estados de carga y error** bien manejados 

- **Responsive design** para mobile, tablet y desktop


### 🛠️ Stack Tecnológico 

- **Frontend:** React 19.1.1 + TypeScript 

- **Build Tool:** Vite 5.0 

- **Styling:** CSS3 moderno con variables y nesting 

- **API:** The Movie Database (TMDB)  

- **Icons:** FontAwesome React

- **UI Framework:** Bootstrap 5.3.8 (selectivo)  



## 📁 Estructura del Proyecto 

src/  

├── components/          # Componentes reutilizables      },

│   ├── Header/         # Navegación y búsqueda 

│   ├── MovieCard/      # Tarjeta individual de película    },

│   ├── MovieList/      # Lista/grid de películas  },

│   ├── MovieSlider/    # Slider de películas destacadas])

│   └── MoviesCommingSoon/  # Sidebar de próximos estrenos

├── containers/         # Páginas/Containers principales

│   └── Home/          # Página principal

├── hooks/             # Custom Hooks

│   └── useMovies.ts   # Hook para gestión de datos TMDB

├── styles/            # Variables CSS globales

└── main.tsx          # Entry pointimport reactX from


## 🎯 Demostración de Conocimientos Reactexport

 

### 1. **Custom Hooks Avanzados** 



// useMovies.ts - Hook personalizado con TypeScript estricto    extends: [

export const useMovies = (endpoint: string = 'popular', page: number = 1) => {      // Other configs...

  const [movies, setMovies] = useState<Movie[]>([]);      // Enable lint rules for React

  const [loading, setLoading] = useState<boolean>(true);      reactX.configs['recommended-typescript'],

  const [error, setError] = useState<string | null>(null);      // Enable lint rules for React DOM

      reactDom.configs.recommended,

  useEffect(() => {    ],

    const fetchMovies = async () => {    languageOptions: {

      // Lógica de fetching con manejo de errores      parserOptions: {

    };        project: ['./tsconfig.node.json', './tsconfig.app.json'],

    fetchMovies();        tsconfigRootDir: import.meta.dirname,

  }, [endpoint, page]);      },

      // other options...

  return { movies, loading, error, totalPages };    },

};  },

```])

```

### 2. **Componentes Tipados con Interfaces**
```typescript
interface MoviesCommingSoonProps {
  onMovieClick?: (movie: Movie) => void;
}

function MoviesCommingSoon({ onMovieClick }: MoviesCommingSoonProps) {
  const { movies, loading, error } = useUpcomingMovies(8);
  
  // Manejo declarativo de estados
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

### 3. **Estado y Efectos Avanzados**
```typescript
// Múltiples hooks especializados
const { movies: popularMovies } = useMovies('popular');
const { movies: upcomingMovies } = useUpcomingMovies(8);
const { searchResults, isSearching } = useSearch();

// Optimización de renders con useCallback
const handleMovieClick = useCallback((movie: Movie) => {
  console.log("Película seleccionada:", movie);
}, []);
```

### 4. **Responsive Design Moderno**
```css
/* CSS con variables y nesting */
.movie-slider {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);

  @media (max-width: 768px) {
    /* Mobile-first responsive */
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }
}
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- API Key de TMDB

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/movies-app.git
cd movies-app
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto:
```env
VITE_TMDB_API_KEY=tu_api_key_aqui
```

> 📋 **Obtener API Key:** Registrate en [TMDB](https://www.themoviedb.org/settings/api) y genera tu clave gratuita.

### 4. Ejecutar en desarrollo
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📦 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
npm run lint     # Linting con ESLint
```

## 🎨 Características Técnicas Destacadas

### ⚡ Performance
- **Code splitting** automático con Vite
- **Lazy loading** de imágenes
- **Custom Hooks** para reutilización de lógica
- **Optimizaciones CSS** con variables nativas

### 🎯 UX/UI
- **Estados de carga** animados
- **Error boundaries** para manejo de errores
- **Scroll suave** en sliders móviles
- **Hover effects** interactivos

### 📱 Responsive Design
- **Mobile-first** approach
- **CSS Grid** y Flexbox avanzado
- **Breakpoints estandarizados:** 1024px, 768px, 480px
- **Touch gestures** optimizados

### 🔒 Buenas Prácticas
- **TypeScript estricto** sin `any`
- **Semantic HTML** (article, figure, section)
- **Accesibilidad** con alt tags y ARIA
- **Estructura modular** y escalable

## 🌟 Demostración de Conceptos React

| Concepto | Implementación | Ubicación |
|----------|----------------|-----------|
| **Custom Hooks** | `useMovies`, `useUpcomingMovies` | `/src/hooks/` |
| **Component Composition** | MovieList + MovieCard | `/src/components/` |
| **State Management** | useState + useEffect | Todo el proyecto |
| **Props & TypeScript** | Interfaces tipadas | Todos los componentes |
| **Conditional Rendering** | Loading/Error states | `MoviesCommingSoon.tsx` |
| **Event Handling** | onClick callbacks | `Home.tsx` |
| **CSS Modules** | Styling modular | Cada componente |
| **API Integration** | Fetch con async/await | `useMovies.ts` |

## 📈 Próximas Mejoras

- [ ] **React Router** para navegación SPA
- [ ] **Context API** para estado global
- [ ] **React Query** para caching avanzado
- [ ] **Progressive Web App** (PWA)
- [ ] **Tests unitarios** con Jest/Testing Library
- [ ] **Storybook** para documentación de componentes

## 📄 Licencia

Este proyecto es de código abierto bajo la licencia MIT.

## 👨‍💻 Contacto

Desarrollado con ❤️ usando las mejores prácticas de React y TypeScript moderno.

---

*Este README demuestra conocimiento profundo de React 19, TypeScript, arquitectura de componentes, custom hooks, responsive design y desarrollo frontend moderno.*