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
            --text-color: #F5F5F5;
            --accent-color: #E63946;
            --border-color: #2B2D42;
            --card-bg: #111111;
            --input-bg: #111111;
            --input-border: #222222;
            --input-focus: #e53935;
            --tag-bg: #222222;
        }

        * {
            box-sizing: border-box;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
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
            color: #A0A0A0;
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
            color: #888;
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
            border-left: 3px solid var(--accent-color);
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
            color: #A0A0A0;
            font-size: 0.95rem;
            margin: 0;
        }

        .projects-section h3 {
            font-size: 1.2rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #666;
            margin-bottom: 30px;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 10px;
        }

        .project-card {
            background-color: var(--card-bg);
            border: 1px solid #222222;
            border-radius: 8px;
            padding: 30px;
            transition: border-color 0.3s ease;
        }

        .project-card:hover {
            border-color: #4A4D6A;
        }

        .project-card h4 {
            font-size: 1.5rem;
            margin: 0 0 10px 0;
            color: #ffffff;
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
            background-color: var(--tag-bg);
            border-radius: 4px;
            color: #D0D0D0;
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

        footer {
            width: 100%;
            border-top: 1px solid var(--border-color);
            padding: 30px 20px;
            text-align: center;
            font-size: 0.85rem;
            color: #666;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        footer a {
            color: #A0A0A0;
            text-decoration: none;
            transition: color 0.2s;
        }

        footer a:hover {
            color: var(--text-color);
        }

        .services-section {
            margin-top: 60px;
        }

        .service-card {
            background-color: var(--card-bg);
            border: 1px solid #222222;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
            transition: border-color 0.3s ease;
        }

        .service-card:hover {
            border-color: #4A4D6A;
        }

        .service-card svg {
            width: 50px;
            height: 50px;
            fill: #ffffff;
        }

        .service-card h4 {
            color: #ffffff;
            margin: 10px 0;
        }

        .service-card p {
            color: #888888;
            font-size: 0.9rem;
        }

        /* Nuevos estilos para secciones destacadas */
        .highlighted {
            border-left: 4px solid var(--accent-color);
            padding-left: 20px;
        }

        /* Estilos para inputs */
        input {
            background-color: var(--input-bg);
            border: 1px solid var(--input-border);
            color: var(--text-color);
            padding: 10px;
            border-radius: 4px;
            font-family: 'Inter', sans-serif;
            width: 100%;
        }

        input:focus {
            border: 1px solid var(--input-focus);
            outline: none;
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
                <h3>Productos Internos</h3>
                
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
            </section>

            <section class="services-section">
                <h3>Servicios</h3>
                <div class="service-card">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-15h2v6h-2zm0 8h2v2h-2z"/></svg>
                    <h4>Desarrollo Web</h4>
                    <p>Creación de sitios web responsivos y optimizados para SEO.</p>
                    <div class="tag-container">
                        <span class="tag">HTML</span>
                        <span class="tag">CSS</span>
                    </div>
                </div>
                <div class="service-card">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-15h2v6h-2zm0 8h2v2h-2z"/></svg>
                    <h4>Consultoría</h4>
                    <p>Asesoramiento en arquitectura de software y mejores prácticas.</p>
                    <div class="tag-container">
                        <span class="tag">Arquitectura</span>
                        <span class="tag">Estrategia</span>
                    </div>
                </div>
                <div class="service-card">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-15h2v6h-2zm0 8h2v2h-2z"/></svg>
                    <h4>Desarrollo Móvil</h4>
                    <p>Aplicaciones móviles nativas y multiplataforma.</p>
                    <div class="tag-container">
                        <span class="tag">iOS</span>
                        <span class="tag">Android</span>
                    </div>
                </div>
                <div class="service-card">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-15h2v6h-2zm0 8h2v2h-2z"/></svg>
                    <h4>Optimización de Rendimiento</h4>
                    <p>Mejoras en la velocidad y eficiencia de aplicaciones existentes.</p>
                    <div class="tag-container">
                        <span class="tag">Performance</span>
                        <span class="tag">Auditoría</span>
                    </div>
                </div>
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
            --text-color: #F5F5F5;
            --accent-color: #E63946;
            --border-color: #2B2D42;
            --card-bg: #111111;
            --input-bg: #111111;
            --input-border: #222222;
            --input-focus: #e53935;
            --tag-bg: #222222;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
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
            border