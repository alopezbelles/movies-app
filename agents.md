# 🤖 Agent Instructions - Movies App

## 📋 Development Guide for AI Agents

This document contains the best practices and rules that must be followed when developing or modifying code in this project.

---

## 🏗️ Project Structure

```
src/
├── components/           # Reusable components
│   └── ComponentName/
│       ├── ComponentName.tsx
│       └── ComponentName.css
├── containers/          # Containers/Pages
│   └── ContainerName/
│       ├── ContainerName.tsx
│       └── ContainerName.css
├── hooks/              # Custom hooks
│   └── useHookName.ts
├── assets/             # Static resources
├── main.tsx           # Entry point
└── index.css          # Global styles
```

---

## 📘 TypeScript - Best Practices

### ✅ **Mandatory Rules:**
- **Always use strict typing** - Do not use `any`
- **Create interfaces** for component props
- **Type custom hooks** correctly
- **Use union types** when appropriate
- **Import types** with `import type` when possible

### 📁 **File Extensions:**
- **React Components**: `.tsx`
- **Hooks and utilities**: `.ts`
- **Configuration files**: `.ts`

### 🔍 **Correct Examples:**

```typescript
// ✅ Interface for props
interface MovieCardProps {
  movie: Movie;
  onClick?: (movie: Movie) => void;
}

// ✅ Hook typing
const [movies, setMovies] = useState<Movie[]>([]);

// ✅ Type imports
import type { Movie } from '../../hooks/useMovies';
```

---

## ⚛️ React - Component Structure

### 📂 **Organization:**
- **Reusable components** → `src/components/`
- **Pages/Containers** → `src/containers/`
- **Each component** in its own folder
- **CSS file** for each component

### 🏗️ **Component Folder Structure:**
```
ComponentName/
├── ComponentName.tsx    # Main component
└── ComponentName.css    # Specific styles
```

### 📝 **Component Template:**
```typescript
// ComponentName.tsx
import './ComponentName.css';
import type { ComponentProps } from './types'; // if complex

interface ComponentNameProps {
  // Component props
}

function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  return (
    <section className="component-name">
      {/* Semantic content */}
    </section>
  );
}

export default ComponentName;
```

---

## 🏷️ Semantic HTML - Best Practices

### ✅ **Use appropriate semantic tags:**

| Use Case | Correct Tag | ❌ Avoid |
|----------|-------------|----------|
| Articles/Cards | `<article>` | `<div>` |
| Navigation | `<nav>` | `<div>` |
| Main content | `<main>` | `<div>` |
| Sections | `<section>` | `<div>` |
| Headings | `<h1>`, `<h2>`, etc. | `<div>` with styles |
| Lists | `<ul>`, `<ol>`, `<li>` | repeated `<div>` |
| Buttons | `<button>` | `<div>` with click |
| Images | `<figure>`, `<img>` | `<div>` with background |

### 🎯 **Semantic Examples:**

```tsx
// ✅ CORRECT - Semantic
<article className="movie-card">
  <figure className="image-container">
    <img src="..." alt="Movie title" />
  </figure>
  <div className="content">
    <h3 className="title">Title</h3>
    <div className="rating">⭐ 8.5/10</div>
  </div>
</article>

// ❌ INCORRECT - Non-semantic
<div className="movie-card-container">
  <div className="movie-card-image-wrapper">
    <div className="movie-card-image" style={{backgroundImage: '...'}}></div>
  </div>
  <div className="movie-card-content-section">
    <div className="movie-card-title-text">Title</div>
    <div className="movie-card-rating-display">⭐ 8.5/10</div>
  </div>
</div>
```

### 📋 **CSS Class Rules:**
- **Simple and descriptive** names
- **No redundant prefixes** (e.g., `title` instead of `movie-card-title`)
- **Use BEM only when necessary**
- **Classes that reflect semantics**

---

## 🎨 Modern CSS - Nesting and Scalability

### ✅ **Nesting Structure:**

```css
/* ✅ CORRECT - Logical nesting */
.component-name {
  /* Container styles */
  
  .title {
    /* Title styles */
    
    &:hover {
      /* Title hover */
    }
  }
  
  .content {
    /* Content styles */
    
    .rating {
      /* Rating styles */
      
      .star {
        /* Star styles */
      }
    }
  }
  
  /* Component states */
  &:hover {
    /* Complete component hover */
    
    .title {
      /* Title changes during hover */
    }
  }
  
  &.variant-large {
    /* Size modifier */
  }
  
  /* Nested media queries */
  @media (max-width: 768px) {
    /* Component responsive */
    
    .title {
      /* Title responsive */
    }
  }
}
```

### 🏗️ **Organization Principles:**

1. **Base styles** of the component first
2. **Child elements** nested logically  
3. **States** (`:hover`, `:focus`, etc.) with `&`
4. **Modifiers** (`.large`, `.small`) with `&`
5. **Media queries** at the end, nested

### 📱 **Responsive Design:**
```css
.component {
  /* Desktop-first styles */
  
  @media (max-width: 768px) {
    /* Tablet */
  }
  
  @media (max-width: 480px) {
    /* Mobile */
  }
}
```

---

## 🔧 Custom Hooks

### 📍 **Location:** `src/hooks/`
### 📝 **Naming:** `use + Description` (e.g., `useMovies`, `useAuth`)
### 📁 **Extension:** `.ts`

```typescript
// useExample.ts
import { useState, useEffect } from 'react';

export const useExample = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
  // Hook logic
  
  return { data, loading };
};
```

---

## 📂 Imports and Exports

### ✅ **Import Order:**
1. **React and external libraries**
2. **Custom hooks**
3. **Own components**
4. **Types and interfaces**
5. **CSS files**

```typescript
// ✅ CORRECT
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMovies } from '../../hooks/useMovies';
import MovieCard from '../MovieCard/MovieCard';
import type { Movie } from '../../types/Movie';
import './ComponentName.css';
```

---

## 🎯 Specific Use Cases

### 🎬 **For Movie Components:**
- Use `<article>` for movie cards
- `<figure>` for image containers
- `<h3>` or `<h4>` for movie titles
- Simple classes: `.movie-card`, `.title`, `.rating`

### 🔍 **For Searches:**
- `<form>` for search forms
- `<input type="search">` for search fields
- Loading and error states clearly handled

### 📱 **For Navigation:**
- `<nav>` for navigation bars
- `<ul>` and `<li>` for link lists
- Responsive design always considered

---

## 🚫 What NOT to Do

### ❌ **TypeScript:**
- Don't use `any`
- Don't omit types in interfaces
- Don't create `.js` files instead of `.ts/.tsx`

### ❌ **React:**
- Don't create components in loose files without folders
- Don't mix logic from different domains in one component
- Don't use `div` when there are appropriate semantic tags

### ❌ **CSS:**
- Don't use excessively specific classes
- Don't repeat styles instead of using nesting
- Don't ignore responsive design

---

## ✅ Quality Checklist

Before completing any task, verify:

- [ ] **TypeScript:** Correct types, no `any`, appropriate extensions
- [ ] **Semantics:** Appropriate HTML tags, accessibility considered  
- [ ] **CSS:** Logical nesting, responsive, simple class names
- [ ] **Structure:** Files in correct folders, organized imports
- [ ] **Functionality:** Component works according to specifications
- [ ] **Consistency:** Follows established patterns in the project

---

*📅 Last updated: November 3, 2025*
*🤖 For use by AI agents in Movies App development*