```html
index.html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VetaStudios</title>
    <style>
        body {
            background-color: #000000;
            color: #ffffff;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #000000;
            padding: 20px;
            text-align: center;
        }
        .hero {
            background-color: #000000;
            padding: 60px 20px;
            text-align: center;
        }
        .mision, .vision, .servicios, .clientes, .formulario {
            background-color: #000000;
            padding: 40px 20px;
            text-align: center;
        }
        .servicios-item {
            margin: 20px 0;
        }
        .clientes-logos {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin-top: 20px;
        }
        .formulario form {
            display: flex;
            flex-direction: column;
            max-width: 400px;
            margin: 0 auto;
        }
        .formulario input, .formulario textarea {
            margin: 10px 0;
            padding: 10px;
            background-color: #000000;
            border: 1px solid #ffffff;
            color: #ffffff;
        }
        .formulario button {
            background-color: #e53935;
            color: #ffffff;
            border: none;
            padding: 10px;
            cursor: pointer;
        }
        footer {
            background-color: #000000;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #e53935;
        }
    </style>
</head>
<body>
    <header>
        <h1>VetaStudios</h1>
    </header>

    <section class="hero">
        <h2>Bienvenido a VetaStudios</h2>
        <p>Soluciones digitales innovadoras</p>
    </section>

    <section class="mision">
        <h2>Misión</h2>
        <p>Nuestra misión es transformar ideas en experiencias digitales únicas que impulsen el crecimiento de nuestros clientes.</p>
    </section>

    <section class="vision">
        <h2>Visión</h2>
        <p>Ser líderes en el desarrollo de soluciones tecnológicas creativas y sostenibles a nivel global.</p>
    </section>

    <section class="servicios">
        <h2>Servicios</h2>
        <div class="servicios-item">
            <h3>Diseño Web</h3>
            <p>Creación de sitios web modernos y responsivos.</p>
        </div>
        <div class="servicios-item">
            <h3>Desarrollo de Aplicaciones</h3>
            <p>Aplicaciones móviles y de escritorio a medida.</p>
        </div>
        <div class="servicios-item">
            <h3>Marketing Digital</h3>
            <p>Estrategias efectivas para posicionar tu marca.</p>
        </div>
    </section>

    <section class="clientes">
        <h2>Nuestros Clientes</h2>
        <div class="clientes-logos">
            <div>Logo Cliente 1</div>
            <div>Logo Cliente 2</div>
            <div>Logo Cliente 3</div>
        </div>
    </section>

    <section class="formulario">
        <h2>Contacto</h2>
        <form>
            <input type="text" placeholder="Nombre" required>
            <input type="email" placeholder="Email" required>
            <textarea placeholder="Mensaje" rows="5" required></textarea>
            <button type="submit">Enviar</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2023 VetaStudios. Todos los derechos reservados.</p>
    </footer>
</body>
</html>
```