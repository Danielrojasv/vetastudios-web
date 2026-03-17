### package.json
```json
{
  "name": "tree-1773694796",
  "version": "1.0.0",
  "description": "Project to validate build without errors",
  "scripts": {
    "build": "tsc && vite build",
    "dev": "vite",
    "preview": "vite preview"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "vite": "^4.0.0",
    "@types/node": "^18.0.0"
  }
}
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

### vite.config.ts
```typescript
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
});
```

### src/main.ts
```typescript
// src/main.ts
console.log('Build validation successful');
```

### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tree Project Build Validation</title>
</head>
<body>
    <div id="app">
        <h1>Build Validation in Progress</h1>
    </div>
    <script type="module" src="/src/main.ts"></script>
</body>
</html>
```

### README.md
```markdown
# Tree Project Build Validation

## Validación de Build sin Errores

Este proyecto mínimo está configurado para validar que el proceso de build se ejecute correctamente sin errores ni warnings.

### Scripts Disponibles

- `npm run build`: Compila el proyecto usando TypeScript y Vite
- `npm run dev`: Inicia el servidor de desarrollo
- `npm run preview`: Vista previa del build

### Validaciones Incluidas

1. ✅ Compilación TypeScript sin errores
2. ✅ Resolución correcta de imports
3. ✅ Generación de build output en directorio `dist/`
4. ✅ Sin warnings de tipos sin resolver

### Para ejecutar la validación:

```bash
npm install
npm run build
```

Si el comando termina con código 0, la validación es exitosa.
```