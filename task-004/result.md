```html
index.html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Veta Studios | Software Engineering & Digital Products</title>
    <meta name="description" content="Estudio de ingeniería de software enfocado en arquitecturas sólidas, productos digitales y experiencias interactivas. Desde Puerto Montt, Chile.">
    <style>
        :root {
            --bg-color: #000000;
            --text-color: #ffffff;
            --accent-color: #e53935;
            --border-color: #222222;
            --card-bg: #111111;
        }

        * {
            box-sizing: border-box;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: Inter, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            max-width: 900px;
            width: 100%;
            padding: 60px 20px;
            flex: 1;
        }

        header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 60px;
        }

        .logo-img {
            height: 40px;
            width: auto;
            display: block;
        }

        h1 {
            font-weight: 600;
            font-size: 1.5rem;
            margin: 0;
            letter-spacing: -0.5px;
        }

        .hero {
            margin-bottom: 60px;
        }

        .hero h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin: 0 0 20px 0;
            line-height: 1.2;
            letter-spacing: -1px;
        }

        .hero p {
            font-size: 1.1rem;
            color: #888888;
            max-width: 650px;
        }

        .accent {
            color: var(--accent-color);
        }

        .location-tag {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9rem;
            color: #888888;
            margin-top: 15px;
            font-family: monospace;
            border: 1px solid var(--border-color);
            padding: 5px 12px;
            border-radius: 4px;
        }

        .about-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 80px;
        }

        @media (max-width: 768px) {
            .about-section {
                grid-template-columns: 1fr;
            }
        }

        .about-box {
            background-color: var(--card-bg);
            padding: 30px;
            border-left: 4px solid var(--accent-color);
            border-radius: 0 8px 8px 0;
        }

        .about-box h3 {
            margin-top: 0;
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: var(--text-color);
            margin-bottom: 15px;
        }

        .about-box p {
            color: #888888;
            font-size: 0.95rem;
            margin: 0;
        }

        .projects-section h3 {
            font-size: 1.2rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #888888;
            margin-bottom: 30px;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 10px;
        }

        .project-card {
            background-color: #111111;
            border: 1px solid #222222;
            border-radius: 8px;
            padding: 30px;
        }

        .project-card h4 {
            font-size: 1.5rem;
            margin: 0 0 10px 0;
        }

        .project-card p {
            color: #888888;
            font-size: 0.95rem;
            margin-bottom: 20px;
        }

        .tag-container {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 25px;
        }

        .tag {
            font-size: 0.75rem;
            padding: 4px 10px;
            background-color: #222222;
            border-radius: 4px;
            color: #888888;
            font-family: monospace;
        }

        .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: var(--text-color);
            color: var(--bg-color);
            text-decoration: none;
            font-weight: 600;
            border-radius: 4px;
            font-size: 0.9rem;
            transition: opacity 0.2s;
        }

        .btn:hover {
            opacity: 0.8;
        }

        .clients-section {
            margin-bottom: 80px;
        }

        .clients-section h3 {
            font-size: 1.2rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #888888;
            margin-bottom: 30px;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 10px;
        }

        .clients-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        @media (max-width: 768px) {
            .clients-grid {
                grid-template-columns: 1fr;
            }
        }

        .client-card {
            background-color: #111111;
            border: 1px solid #222222;
            border-radius: 8px;
            padding: 25px;
        }

        .client-card h4 {
            font-size: 1.1rem;
            margin: 0 0 10px 0;
        }

        .client-card p {
            color: #888888;
            font-size: 0.9rem;
            margin: 0;
        }

        footer {
            width: 100%;
            border-top: 1px solid var(--border-color);
            padding: 30px 20px;
            text-align: center;
            font-size: 0.85rem;
            color: #888888;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        footer a {
            color: #888888;
            text-decoration: none;
            transition: color 0.2s;
        }

        footer a:hover {
            color: var(--text-color);
        }

        /* Formulario de contacto */
        .contact-section {
            margin-top: 80px;
            padding: 40px;
            background-color: #111111;
            border: 1px solid #222222;
            border-radius: 8px;
            border-left: 4px solid #e53935;
        }

        .contact-section h3 {
            font-size: 1.2rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #888888;
            margin-bottom: 30px;
            padding-bottom: 10px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #ffffff;
            font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 12px;
            background-color: #000000;
            border: 1px solid #222222;
            border-radius: 4px;
            color: #ffffff;
            font-family: Inter, sans-serif;
            font-size: 1rem;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #e53935;
        }

        .form-group textarea {
            min-height: 150px;
            resize: vertical;
        }

        .submit-btn {
            background-color: #ffffff;
            color: #000000;
            border: none;
            padding: 12px 24px;
            font-size: 1rem;
            font-weight: 600;
            border-radius: 4px;
            cursor: pointer;
            transition: opacity 0.2s;
        }

        .submit-btn:hover {
            opacity: 0.8;
        }
    </style>
</head>
<body>

    <div class="container">
        <header>
            <img src="logo-veta-blanco.png" alt="Logo de Veta Studios" class="logo-img">
            <h1>Veta Studios</h1>
        </header>

        <main>
            <section class="hero">
                <h2>Ingeniería aplicada a <br>soluciones <span class="accent">digitales.</span></h2>
                <p>Somos una firma de ingeniería de software independiente. Construimos aplicaciones robustas, sistemas escalables y productos digitales que destacan por su arquitectura técnica y diseño minimalista.</p>
                <div class="location-tag">
                    📍 Puerto Montt, Región de Los Lagos, Chile
                </div>
            </section>

            <section class="about-section">
                <div class="about-box">
                    <h3>Nuestra Misión</h3>
                    <p>Desarrollar software de alto rendimiento que resuelva problemas complejos con elegancia. Transformamos la lógica computacional y la ingeniería de datos en productos funcionales, estables y optimizados, operando con estándares globales desde el sur de Chile.</p>
                </div>
                <div class="about-box">
                    <h3>Nuestra Visión</h3>
                    <p>Consolidarnos como un referente tecnológico en la Patagonia chilena, demostrando que mediante código limpio, precisión matemática y un enfoque analítico, se pueden crear herramientas, aplicaciones y plataformas competitivas a nivel internacional.</p>
                </div>
            </section>

            <section class="projects-section">
                <h3>Lo que construimos.</h3>
                
                <div class="project-card">
                    <h4>Kitty Pot</h4>
                    <p>Una demostración técnica de nuestro dominio en motores físicos y optimización de recursos móviles. Un puzzle dinámico de colisiones y manejo de gravedad, empaquetado como una experiencia lúdica altamente adictiva.</p>
                    <div class="tag-container">
                        <span class="tag">App Móvil</span>
                        <span class="tag">Motor de Físicas</span>
                        <span class="tag">Optimización 2D</span>
                        <span class="tag">Producto Propio</span>
                    </div>
                    <a href="https://kittypotgame.com" class="btn">Ver Proyecto</a>
                </div>

                <div class="project-card">
                    <h4>Proyecto A</h4>
                    <p>Descripción breve del Proyecto A. Un enfoque innovador en la solución de problemas complejos.</p>
                    <div class="tag-container">
                        <span class="tag">Web App</span>
                        <span class="tag">Innovación</span>
                    </div>
                    <a href="#" class="btn">Ver Proyecto</a>
                </div>

                <div class="project-card">
                    <h4>Proyecto B</h4>
                    <p>Descripción breve del Proyecto B. Un sistema que mejora la eficiencia operativa.</p>
                    <div class="tag-container">
                        <span class="tag">Software</span>
                        <span class="tag">Eficiencia</span>
                    </div>
                    <a href="#" class="btn">Ver Proyecto</a>
                </div>

                <div class="project-card">
                    <h4>Proyecto C</h4>
                    <p>Descripción breve del Proyecto C. Un producto que transforma la experiencia del usuario.</p>
                    <div class="tag-container">
                        <span class="tag">UX/UI</span>
                        <span class="tag">Transformación</span>
                    </div>
                    <a href="#" class="btn">Ver Proyecto</a>
                </div>
            </section>

            <section class="clients-section">
                <h3>Con quienes hemos trabajado.</h3>
                <div class="clients-grid">
                    <div class="client-card">
                        <h4>Mercado Libre</h4>
                        <p>Desarrollo de soluciones de backend escalables</p>
                    </div>
                    <div class="client-card">
                        <h4>Falabella Tecnología</h4>
                        <p>Implementación de arquitecturas de microservicios</p>
                    </div>
                    <div class="client-card">
                        <h4>CrediTú</h4>
                        <p>Optimización de sistemas de procesamiento de datos</p>
                    </div>
                </div>
            </section>

            <section class="contact-section">
                <h3>Contacto</h3>
                <form id="contact-form">
                    <div class="form-group">
                        <label for="name">Nombre</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Mensaje</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Enviar Mensaje</button>
                </form>
            </section>
        </main>
    </div>

    <footer>
        <div>&copy; 2026 Veta Studios. Todos los derechos reservados.</div>
        <div>
            <a href="/politicas-de-privacidad">Políticas de Privacidad</a> | 
            <a href="mailto:contacto@vetastudios.io">Contacto</a>
        </div>
    </footer>

</body>
</html>
```

```html
politicas-de-privacidad/index.html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Políticas de Privacidad | Veta Studios</title>
    <style>
        :root {
            --bg-color: #000000;
            --text-color: #ffffff;
            --accent-color: #e53935;
            --border-color: #222222;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: Inter, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
        }

        .container {
            max-width: 800px;
            width: 100%;
            padding: 40px 20px;
        }

        header {
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 20px;
            margin-bottom: 40px;
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .logo-img {
            height: 48px;
            width: auto;
            display: block;
        }

        h1 {
            font-weight: 600;
            font-size: 1.5rem;
            margin: 0;
            letter-spacing: -0.5px;
        }

        h2 {
            font-weight: 500;
            font-size: 1.2rem;
            margin-top: 40px;
            color: var(--text-color);
            border-left: 4px solid var(--accent-color);
            padding-left: 10px;
        }

        p, li {
            font-size: 0.95rem;
            color: #888888;
        }

        a {
            color: var(--accent-color);
            text-decoration: none;
            transition: opacity 0.2s;
        }

        a:hover {
            opacity: 0.8;
            text-decoration: underline;
        }

        footer {
            margin-top: 60px;
            padding-top: 20px;
            border-top: 1px solid var(--border-color);
            font-size: 0.85rem;
            color: #888888;
            text-align: center;
        }
    </style>
</head>
<body>

    <div class="container">
        <header>
            <img src="/logo-veta-blanco.png" alt="Logo de Veta Studios