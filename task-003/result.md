```
### index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Vetastudios</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Contenido existente -->

  <section id="contacto">
    <h2>Contacto</h2>
    <form method="POST" action="https://formspree.io/f/PLACEHOLDER">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="mensaje">Mensaje:</label>
      <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

      <button type="submit">Enviar</button>
    </form>
  </section>

  <!-- Footer -->
</body>
</html>
```
```

```
### styles.css
```css
/* Estilos existentes */

#contacto {
  padding: 40px 20px;
  max-width: 600px;
  margin: 0 auto;
}

#contacto h2 {
  text-align: center;
  margin-bottom: 20px;
}

#contacto form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

#contacto input,
#contacto textarea {
  background-color: #111111;
  border: 1px solid #222222;
  padding: 10px;
  color: #ffffff;
  font-size: 16px;
  border-radius: 4px;
}

#contacto input:focus,
#contacto textarea:focus {
  outline: none;
  border-color: #e53935;
}

#contacto button {
  background-color: #e53935;
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

#contacto button:hover {
  background-color: #c62828;
}
```
```