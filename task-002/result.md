### index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>VetaStudios</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Sección Servicios -->
  <section class="servicios">
    <h2>Servicios</h2>
    <p>Descripción de servicios...</p>
  </section>

  <!-- Sección Clientes -->
  <section class="clientes">
    <h2>Clientes</h2>
    <div class="cards-container">
      <div class="card">
        <h3>Empresa A</h3>
        <p>Proveedor de soluciones tecnológicas.</p>
      </div>
      <div class="card">
        <h3>Empresa B</h3>
        <p>Especialista en marketing digital.</p>
      </div>
      <div class="card">
        <h3>Empresa C</h3>
        <p>Consultoría en estrategia empresarial.</p>
      </div>
    </div>
  </section>
</body>
</html>
```

### styles.css
```css
/* Estilos generales */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #111111;
  color: #ffffff;
}

/* Sección Servicios */
.servicios {
  padding: 40px 20px;
  border-left: 4px solid #e53935;
  background-color: #111111;
  border-bottom: 1px solid #222222;
}

/* Sección Clientes */
.clientes {
  padding: 40px 20px;
  border-left: 4px solid #e53935;
  background-color: #111111;
  border-bottom: 1px solid #222222;
}

.clientes h2 {
  margin-top: 0;
}

.cards-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  background-color: #1a1a1a;
  border: 1px solid #222222;
  padding: 15px;
  border-radius: 4px;
  flex: 1 1 300px;
}

.card h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.card p {
  margin: 0;
  font-size: 0.9em;
  color: #cccccc;
}
```