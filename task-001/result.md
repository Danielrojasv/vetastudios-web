```html
index.html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Veta Studios</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Bienvenido a Veta Studios</h1>
    </header>
    <section id="vision">
        <h2>Nuestra Visión</h2>
        <p>Descripción de la visión de la empresa.</p>
    </section>
    <section id="servicios">
        <h2>Lo que construimos.</h2>
        <div class="card">
            <div class="icon">
                <!-- SVG Icon for Service 1 -->
                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="20" fill="#fff"/></svg>
            </div>
            <h3>Servicio 1</h3>
            <p>Descripción breve del servicio 1.</p>
            <div class="tags">
                <span class="tag">HTML</span>
                <span class="tag">CSS</span>
            </div>
        </div>
        <div class="card">
            <div class="icon">
                <!-- SVG Icon for Service 2 -->
                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" fill="#fff"/></svg>
            </div>
            <h3>Servicio 2</h3>
            <p>Descripción breve del servicio 2.</p>
            <div class="tags">
                <span class="tag">JavaScript</span>
                <span class="tag">React</span>
            </div>
        </div>
        <div class="card">
            <div class="icon">
                <!-- SVG Icon for Service 3 -->
                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><polygon points="25,0 50,50 0,50" fill="#fff"/></svg>
            </div>
            <h3>Servicio 3</h3>
            <p>Descripción breve del servicio 3.</p>
            <div class="tags">
                <span class="tag">Node.js</span>
                <span class="tag">Express</span>
            </div>
        </div>
        <div class="card">
            <div class="icon">
                <!-- SVG Icon for Service 4 -->
                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><ellipse cx="25" cy="25" rx="20" ry="10" fill="#fff"/></svg>
            </div>
            <h3>Servicio 4</h3>
            <p>Descripción breve del servicio 4.</p>
            <div class="tags">
                <span class="tag">Python</span>
                <span class="tag">Django</span>
            </div>
        </div>
    </section>
    <footer>
        <p>© 2023 Veta Studios</p>
    </footer>
</body>
</html>
```

```css
styles.css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background: #333;
    color: #fff;
    padding: 10px 0;
    text-align: center;
}

section {
    padding: 20px;
}

.card {
    background-color: #111111;
    border: 2px solid #222222;
    border-radius: 8px;
    padding: 15px;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.icon {
    margin-bottom: 10px;
}

h3 {
    margin: 10px 0;
}

.tags {
    display: flex;
    gap: 5px;
}

.tag {
    background-color: #222222;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
}
```