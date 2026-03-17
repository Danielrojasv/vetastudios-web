```
### index.html
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Veta Studios</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Sección Visión -->
    <section id="vision">
        <h2>Visión</h2>
        <p>Descripción de la visión de la empresa.</p>
    </section>

    <!-- Sección Servicios -->
    <section id="servicios" class="servicios">
        <h2>Servicios</h2>
        <div class="card">
            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="20" fill="#e53935"/></svg>
            <h3>Servicio 1</h3>
            <p>Descripción del Servicio 1.</p>
            <div class="tags">
                <span class="tag">Tag1</span>
                <span class="tag">Tag2</span>
            </div>
        </div>
        <div class="card">
            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" fill="#e53935"/></svg>
            <h3>Servicio 2</h3>
            <p>Descripción del Servicio 2.</p>
            <div class="tags">
                <span class="tag">Tag1</span>
                <span class="tag">Tag2</span>
            </div>
        </div>
        <div class="card">
            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><polygon points="25,0 50,50 0,50" fill="#e53935"/></svg>
            <h3>Servicio 3</h3>
            <p>Descripción del Servicio 3.</p>
            <div class="tags">
                <span class="tag">Tag1</span>
                <span class="tag">Tag2</span>
            </div>
        </div>
        <div class="card">
            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><ellipse cx="25" cy="25" rx="25" ry="15" fill="#e53935"/></svg>
            <h3>Servicio 4</h3>
            <p>Descripción del Servicio 4.</p>
            <div class="tags">
                <span class="tag">Tag1</span>
                <span class="tag">Tag2</span>
            </div>
        </div>
    </section>
</body>
</html>
```

```
### styles.css
```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

h2 {
    color: #111111;
}

.servicios {
    border-left: 4px solid #e53935;
    padding: 20px;
    background-color: #222222;
    color: #ffffff;
}

.card {
    background-color: #111111;
    border-radius: 8px;
    padding: 15px;
    margin: 10px 0;
}

.card h3 {
    color: #e53935;
}

.tags {
    margin-top: 10px;
}

.tag {
    background-color: #e53935;
    color: #ffffff;
    padding: 5px 10px;
    border-radius: 5px;
    margin-right: 5px;
    display: inline-block;
}
```

### Instrucciones de uso
1. Copia el contenido de `index.html` y `styles.css` en los archivos correspondientes en tu proyecto.
2. Asegúrate de que el archivo `styles.css` esté vinculado correctamente en el `<head>` de `index.html`.
3. Abre `index.html` en un navegador para ver la sección de Servicios con las 4 cards implementadas.
```