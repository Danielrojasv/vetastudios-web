```html
components/Contacto.html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto | Veta Studios</title>
    <style>
        :root {
            --bg-color: #000000;
            --text-color: #F5F5F5;
            --accent-color: #E63946;
            --border-color: #222222;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        form {
            background-color: var(--border-color);
            padding: 20px;
            border-radius: 8px;
            width: 100%;
            max-width: 400px;
        }

        input, textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            background-color: #111111;
            border: 1px solid #222222;
            color: var(--text-color);
            border-radius: 4px;
            transition: border-color 0.3s;
        }

        input:focus, textarea:focus {
            border-color: #e53935;
            outline: none;
        }

        button {
            padding: 10px;
            background-color: var(--accent-color);
            color: var(--bg-color);
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            width: 100%;
        }

        button:hover {
            opacity: 0.8;
        }
    </style>
</head>
<body>

    <form method="POST" action="https://formspree.io/f/PLACEHOLDER">
        <h2>Contacto</h2>
        <input type="text" name="nombre" placeholder="Tu nombre" required>
        <input type="email" name="email" placeholder="Tu email" required>
        <textarea name="mensaje" rows="5" placeholder="Tu mensaje" required></textarea>
        <button type="submit">Enviar</button>
    </form>

</body>
</html>
```