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
        <h2>Servicios</h2>
        <div class="card-container">
            <div class="card">
                <div class="icon">
                    <!-- SVG Icon for Service 1 -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-15h2v6h-2zm0 8h2v2h-2z"/></svg>
                </div>
                <h3>Servicio 1</h3>
                <p>Descripción breve del servicio 1.</p>
                <div class="tags">
                    <span>Tag1</span>
                    <span>Tag2</span>
                </div>
            </div>
            <div class="card">
                <div class="icon">
                    <!-- SVG Icon for Service 2 -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-15h2v6h-2zm0 8h2v2h-2z"/></svg>
                </div>
                <h3>Servicio 2</h3>
                <p>Descripción breve del servicio 2.</p>
                <div class="tags">
                    <span>Tag1</span>
                    <span>Tag2</span>
                </div>
            </div>
            <div class="card">
                <div class="icon">
                    <!-- SVG Icon for Service 3 -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-15h2v6h-2zm0 8h2v2h-2z"/></svg>
                </div>
                <h3>Servicio 3</h3>
                <p>Descripción breve del servicio 3.</p>
                <div class="tags">
                    <span>Tag1</span>
                    <span>Tag2</span>
                </div>
            </div>
            <div class="card">
                <div class="icon">
                    <!-- SVG Icon for Service 4 -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-15h2v6h-2zm0 8h2v2h-2z"/></svg>
                </div>
                <h3>Servicio 4</h3>
                <p>Descripción breve del servicio 4.</p>
                <div class="tags">
                    <span>Tag1</span>
                    <span>Tag2</span>
                </div>
            </div>
        </div>
    </section>

    <section id="clientes">
        <h2>Clientes</h2>
        <p>Descripción de los clientes de la empresa.</p>
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
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header, footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1em 0;
}

section {
    padding: 20px;
}

.card-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.card {
    background-color: #111111;
    border: 1px solid #222222;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    width: calc(25% - 40px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.card h3 {
    margin: 10px 0;
}

.tags {
    display: flex;
    gap: 5px;
}

.tags span {
    background-color: #222222;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.9em;
}
```