# 🎬 Movies App - Configuración de TMDB API

## Configuración de la API Key

Para que la aplicación funcione correctamente, necesitas obtener una API key de The Movie Database (TMDB).

### Pasos para obtener la API key:

1. **Crear cuenta en TMDB:**
   - Ve a [https://www.themoviedb.org/](https://www.themoviedb.org/)
   - Regístrate o inicia sesión

2. **Solicitar API key:**
   - Ve a tu perfil → Settings → API
   - Solicita una nueva API key (es gratis)
   - Completa la información requerida

3. **Configurar en el proyecto:**
   - Copia el archivo `.env` en la raíz del proyecto
   - Reemplaza `tu_api_key_aqui` con tu API key real:
   ```env
   VITE_TMDB_API_KEY=tu_api_key_real_aqui
   ```

### Estructura del proyecto actualizada:

```
src/
├── hooks/
│   └── useMovies.ts          # Hook personalizado para TMDB API
├── components/
│   ├── MovieCard/
│   │   ├── MovieCard.tsx     # Componente de tarjeta (actualizado)
│   │   └── MovieCard.css     # Estilos semánticos
│   ├── MovieList/
│   │   ├── MovieList.tsx     # Lista de películas con paginación
│   │   └── MovieList.css     # Estilos para la lista
│   └── Header/
└── containers/
    └── Home/
        ├── Home.tsx          # Contenedor principal (actualizado)
        └── HomeStyles.css    # Estilos para el home
```

### Funcionalidades incluidas:

- ✅ **Hook personalizado** para manejar la API de TMDB
- ✅ **Componente MovieCard** semántico y responsivo
- ✅ **Estados de loading y error** con UI apropiadas
- ✅ **Paginación** para navegar entre páginas
- ✅ **Diferentes categorías** (popular, top_rated, upcoming, now_playing)
- ✅ **Búsqueda de películas** (hook disponible)
- ✅ **Imágenes placeholder** para películas sin poster
- ✅ **Responsive design** para móviles y tablets
- ✅ **TypeScript** con tipos seguros

### Próximos pasos recomendados:

1. **Página de detalles** de película individual
2. **Funcionalidad de búsqueda** en el header
3. **Filtros por género**
4. **Lista de favoritos**
5. **Sistema de rutas** con React Router

### Comandos disponibles:

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```