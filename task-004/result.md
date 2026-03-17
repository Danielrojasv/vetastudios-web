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

        .mision,
        .vision {
            margin-bottom: 80px;
        }

        .mision h3,
        .vision h3 {
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: var(--text-color);
            margin-bottom: 15px;
            border-left: 4px solid var(--accent-color);
            padding-left: 15px;
        }

        .mision p,
        .vision p {
            color: #888888;
            font-size: 0.95rem;
            margin: 0;
            max-width: 650px;
        }

        .servicios {
            margin-bottom: 80px;
        }

        .servicios h3 {
            font-size: 1.2rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #888888;
            margin-bottom: 30px;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 10px;
        }

        .project-card {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 30px;
            transition: border-color 0.3s ease;
            margin-bottom: 20px;
        }

        .project-card:hover {
            border-color: #444444;
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
            color: #ffffff;
            font-family: monospace;
        }

        .clientes {
            margin-bottom: 80px;
        }

        .clientes h3 {
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
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 30px;
        }

        .client-card h4 {
            font-size: 1.2rem;
            margin: 0 0 10px 0;
        }

        .client-card p {
            color: #888888;
            font-size: 0.95rem;
            margin: 0;
        }

        .contacto {
            margin-bottom: 80px;
        }

        .contacto h3 {
            font-size: 1.2rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #888888;
            margin-bottom: 30px;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 10px;
        }

        .contacto p {
            color: #888888;
            font-size: 0.95rem;
            margin: 0 0 20px 0;
        }

        .contacto a {
            color: var(--accent-color);
            text-decoration: none;
            font-weight: 600;
        }

        .contacto a:hover {
            text-decoration: underline;
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

            <section class="mision">
                <h3>Nuestra Misión</h3>
                <p>Desarrollar software de alto rendimiento que resuelva problemas complejos con elegancia. Transformamos la lógica computacional y la ingeniería de datos en productos funcionales, estables y optimizados, operando con estándares globales desde el sur de Chile.</p>
            </section>

            <section class="vision">
                <h3>Nuestra Visión</h3>
                <p>Consolidarnos como un referente tecnológico en la Patagonia chilena, demostrando que mediante código limpio, precisión matemática y un enfoque analítico, se pueden crear herramientas, aplicaciones y plataformas competitivas a nivel internacional.</p>
            </section>

            <section class="servicios">
                <h3>Servicios</h3>
                
                <div class="project-card">
                    <h4>Desarrollo Web</h4>
                    <p>Creación de sitios web responsivos y optimizados para SEO, utilizando las últimas tecnologías.</p>
                    <div class="tag-container">
                        <span class="tag">HTML</span>
                        <span class="tag">CSS</span>
                        <span class="tag">JavaScript</span>
                    </div>
                </div>

                <div class="project-card">
                    <h4>Aplicaciones Móviles</h4>
                    <p>Desarrollo de aplicaciones móviles nativas y multiplataforma para iOS y Android.</p>
                    <div class="tag-container">
                        <span class="tag">React Native</span>
                        <span class="tag">Flutter</span>
                        <span class="tag">iOS</span>
                    </div>
                </div>

                <div class="project-card">
                    <h4>Consultoría Técnica</h4>
                    <p>Asesoría en arquitectura de software y optimización de sistemas existentes.</p>
                    <div class="tag-container">
                        <span class="tag">Arquitectura</span>
                        <span class="tag">Optimización</span>
                        <span class="tag">Auditoría</span>
                    </div>
                </div>

                <div class="project-card">
                    <h4>Marketing Digital</h4>
                    <p>Estrategias de marketing digital para aumentar la visibilidad y el alcance de tu negocio.</p>
                    <div class="tag-container">
                        <span class="tag">SEO</span>
                        <span class="tag">SEM</span>
                        <span class="tag">Redes Sociales</span>
                    </div>
                </div>
            </section>

            <section class="clientes">
                <h3>Clientes</h3>
                
                <div class="clients-grid">
                    <div class="client-card">
                        <h4>AndesLabs</h4>
                        <p>Desarrollo de infraestructura de simulación para entrenamiento de IA.</p>
                    </div>
                    <div class="client-card">
                        <h4>Patagonia Cloud</h4>
                        <p>Arquitectura de servicios distribuidos para plataforma de datos.</p>
                    </div>
                    <div class="client-card">
                        <h4>Northern Lights Studio</h4>
                        <p>Optimización de pipeline de renderizado en tiempo real.</p>
                    </div>
                </div>
            </section>

            <section class="contacto">
                <h3>Contacto</h3>
                <p>¿Tienes un proyecto en mente? Escríbenos a <a href="mailto:contacto@vetastudios.io">contacto@vetastudios.io</a> y te responderemos a la brevedad.</p>
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