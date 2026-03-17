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
        <h1>Veta Studios</h1>
    </header>
    <section id="vision">
        <h2>Nuestra Visión</h2>
        <p>Descripción de la visión de la empresa.</p>
    </section>
    <section id="servicios">
        <h2>Servicios</h2>
        <div class="card">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-brush" viewBox="0 0 16 16">
                <path d="M15.9 0.1a1.5 1.5 0 0 0-2.1 0L1.5 11.3a1.5 1.5 0 0 0-.4.7l-.5 3a1 1 0 0 0 1.2 1.2l3-.5a1.5 1.5 0 0 0 .7-.4L15.9 2.2a1.5 1.5 0 0 0 0-2.1zM3.5 13.5l-.5 2.5 2.5-.5 9.1-9.1-2-2-9.1 9.1z"/>
            </svg>
            <h3>Diseño Gráfico</h3>
            <p>Ofrecemos servicios de diseño gráfico personalizados para tu marca.</p>
            <div class="tags">
                <span>#Diseño</span>
                <span>#Creatividad</span>
                <span>#Marca</span>
            </div>
        </div>
        <div class="card">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M6.5 11.5l-2-2 2-2v4zm3-4l2 2-2 2V7.5z"/>
                <path d="M0 1.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zM0 14.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <h3>Desarrollo Web</h3>
            <p>Desarrollamos sitios web responsivos y funcionales para tu negocio.</p>
            <div class="tags">
                <span>#Web</span>
                <span>#Desarrollo</span>
                <span>#Responsive</span>
            </div>
        </div>
        <div class="card">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                <path d="M10.5 0a.5.5 0 0 1 .5.5V1h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H1a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h2V.5a.5.5 0 0 1 .5-.5h6zM1 3v10h14V3H1zm7 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
            <h3>Fotografía</h3>
            <p>Capturamos los momentos más importantes de tu vida y negocio.</p>
            <div class="tags">
                <span>#Fotografía</span>
                <span>#Eventos</span>
                <span>#Retratos</span>
            </div>
        </div>
        <div class="card">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-1.5 1.5-3-3 1.5-1.5zM11.5 2.5l-1.5 1.5 3 3 1.5-1.5-3-3zM1 13.5V16h2.5l8.5-8.5-2-2L1 13.5z"/>
            </svg>
            <h3>Redacción de Contenidos</h3>
            <p>Creamos contenido atractivo y optimizado para tu audiencia.</p>
            <div class="tags">
                <span>#Redacción</span>
                <span>#SEO</span>
                <span>#Contenido</span>
            </div>
        </div>
    </section>
    <footer>
        <p>&copy; 2023 Veta Studios</p>
    </footer>
</body>
</html>
```

```css
styles.css
body {
    background-color: #111111;
    color: #ffffff;
    font-family: Arial, sans-serif;
}

header, footer {
    text-align: center;
    padding: 20px;
}

section {
    margin: 20px;
}

.card {
    background-color: #111111;
    border: 1px solid #222222;
    border-radius: 5px;
    padding: 15px;
    margin: 10px;
    display: inline-block;
    width: 200px;
    vertical-align: top;
}

.card h3 {
    margin: 10px 0;
}

.card p {
    margin: 5px 0;
}

.tags {
    margin-top: 10px;
}

.tags span {
    background-color: #222222;
    color: #ffffff;
    padding: 5px;
    border-radius: 3px;
    margin-right: 5px;
    display: inline-block;
}
```