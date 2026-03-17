```css
styles/main.css
/* Sistema de diseño - Colores */
:root {
  --color-primary: #2563eb;
  --color-primary-dark: #1d4ed8;
  --color-secondary: #f97316;
  --color-accent: #10b981;
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-text-secondary: #64748b;
  --color-border: #e2e8f0;
  --color-error: #ef4444;
  --color-success: #22c55e;
  
  /* Espaciados */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  
  /* Bordes */
  --border-radius: 0.5rem;
  --border-width: 1px;
  
  /* Sombras */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--color-background);
  color: var(--color-text);
  line-height: 1.6;
}

/* Secciones destacadas con borde izquierdo rojo */
.servicios-section,
.clientes-section {
  border-left: 4px solid var(--color-secondary);
  padding-left: var(--spacing-lg);
  margin: var(--spacing-2xl) 0;
}

/* Tarjetas de servicios */
.servicios-card {
  background-color: var(--color-surface);
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.servicios-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.servicios-card h3 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
  font-size: 1.25rem;
}

.servicios-card p {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
}

/* Tarjetas de clientes */
.clientes-card {
  background-color: var(--color-surface);
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.clientes-card img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--color-border);
}

.clientes-card .cliente-info h4 {
  margin-bottom: var(--spacing-xs);
  font-size: 1.1rem;
}

.clientes-card .cliente-info p {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

/* Formulario */
.formulario {
  background-color: var(--color-surface);
  border-radius: var(--border-radius);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  max-width: 600px;
  margin: var(--spacing-2xl) auto;
}

.formulario h2 {
  margin-bottom: var(--spacing-lg);
  color: var(--color-primary);
  text-align: center;
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-group label {
  display: block;
  margin-bottom: var(--spacing-sm);
  font-weight: 500;
  color: var(--color-text);
}

.form-control {
  width: 100%;
  padding: var(--spacing-md);
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  background-color: var(--color-surface);
  color: var(--color-text);
}

.form-control:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
}

.form-control::placeholder {
  color: var(--color-text-secondary);
}

.btn {
  display: inline-block;
  background-color: var(--color-primary);
  color: white;
  padding: var(--spacing-md) var(--spacing-lg);
  border: none;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  width: 100%;
}

.btn:hover {
  background-color: var(--color-primary-dark);
}

.btn:active {
  transform: scale(0.98);
}

/* Responsive */
@media (max-width: 768px) {
  .servicios-section,
  .clientes-section {
    padding-left: var(--spacing-md);
    margin: var(--spacing-xl) 0;
  }
  
  .formulario {
    padding: var(--spacing-lg);
  }
  
  .clientes-card {
    flex-direction: column;
    text-align: center;
  }
}
```