### Stack.tsx
```tsx
// Stack.tsx
import React from 'react';

// Definición del tipo para una tecnología
interface Technology {
  name: string;
  icon?: string; // Opcional: ruta al ícono de la tecnología
}

// Definición del tipo para una categoría
interface Category {
  title: string;
  technologies: Technology[];
}

// Datos de ejemplo para las tecnologías agrupadas por categoría
const stackData: Category[] = [
  {
    title: "Lenguajes",
    technologies: [
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "Python", icon: "python.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
      { name: "Rust", icon: "rust.svg" },
    ],
  },
  {
    title: "Frameworks",
    technologies: [
      { name: "React", icon: "react.svg" },
      { name: "Next.js", icon: "nextjs.svg" },
      { name: "FastAPI", icon: "fastapi.svg" },
      { name: "Django", icon: "django.svg" },
    ],
  },
  {
    title: "Herramientas",
    technologies: [
      { name: "Git", icon: "git.svg" },
      { name: "Docker", icon: "docker.svg" },
      { name: "Webpack", icon: "webpack.svg" },
      { name: "Vite", icon: "vite.svg" },
    ],
  },
  {
    title: "Plataformas",
    technologies: [
      { name: "AWS", icon: "aws.svg" },
      { name: "Vercel", icon: "vercel.svg" },
      { name: "Netlify", icon: "netlify.svg" },
      { name: "GitHub", icon: "github.svg" },
    ],
  },
];

const Stack: React.FC = () => {
  return (
    <div className="stack-container">
      <h2>Mi Stack Tecnológico</h2>
      <div className="stack-grid">
        {stackData.map((category, index) => (
          <div key={index} className="category-card">
            <h3>{category.title}</h3>
            <ul className="technology-list">
              {category.technologies.map((tech, techIndex) => (
                <li key={techIndex} className="technology-item">
                  {tech.icon && <img src={`/icons/${tech.icon}`} alt={tech.name} className="tech-icon" />}
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
```

### Instrucciones de uso:
1. Guarda este archivo como `Stack.tsx` en tu proyecto.
2. Asegúrate de tener las imágenes de los íconos en la carpeta `/public/icons/` si decides usarlos.
3. Importa y usa el componente `<Stack />` donde lo necesites:
   ```tsx
   import Stack from './components/Stack';
   
   function App() {
     return (
       <div className="App">
         <Stack />
       </div>
     );
   }
   ```

### Notas adicionales:
- El componente asume que existen íconos en `/public/icons/`. Si no deseas usar íconos, puedes eliminar la propiedad `icon` del tipo `Technology` y las referencias relacionadas.
- Puedes personalizar los estilos mediante CSS agregando clases como `.stack-container`, `.stack-grid`, `.category-card`, etc., según sea necesario.