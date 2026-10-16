# Edwin Ocampo — Portafolio Digital

Portafolio personal interactivo con libro 3D, navegación adaptable y una vista optimizada para móviles. Personalizado para **Edwin Ocampo** y pensado para mostrar proyectos personales y oportunidades profesionales.

## Proyectos destacados

- **Global Gold** — gestión de joyería, inventario y administración. El repositorio es privado.
- **Neon Arcade Pro** — juegos, perfiles, progresión y clasificaciones. [Repositorio público relacionado](https://github.com/EdwinOcampo28/Juegos_Arcade_Pagina_Web).
- **EDUNOVA** — plataforma educativa, cursos, progreso y certificados. [Repositorio público](https://github.com/EdwinOcampo28/LMS_Plataforma_Educativa).
- **PRESTAMO+** — solicitudes, abonos, pagos y reportes. No se enlaza un repositorio privado como si fuera público.
- **Turismo Internacional** — cotizaciones, itinerarios e historial. [Repositorio público](https://github.com/EdwinOcampo28/Sistema_Turismo_Internacional_Web).
- **Gestor de Gastos** — organización de ingresos y gastos. [Repositorio público de trabajos Python](https://github.com/EdwinOcampo28/TodosLosTrabajospython).

Los repositorios privados se identifican como tales y no se muestran como código público. No se incluyen datos de contacto ni credenciales que no hayan sido confirmados para publicación.

## Tecnologías usadas por este portafolio

- Three.js
- TypeScript
- Vite
- GSAP
- HTML y CSS

Estas tecnologías describen el portafolio interactivo, no necesariamente todos los proyectos mostrados.

## Ejecutar en local

Requisito: Node.js 18 o posterior.

```bash
npm install
npm run dev
```

Para generar los archivos de publicación:

```bash
npm run build
npm run preview
```

El resultado se genera en `dist/`.

## Publicar en GitHub Pages

1. Crea un repositorio público llamado `PORTAFOLIO` en tu cuenta de GitHub.
2. Sube **el contenido de esta carpeta** a la raíz del repositorio (no la carpeta contenedora adicional).
3. Sube también la carpeta `.github/workflows/` incluida en el ZIP.
4. Abre **Settings → Pages** y selecciona **GitHub Actions** como fuente de publicación.
5. Cada vez que subas cambios a `main`, GitHub instalará las dependencias, compilará Vite y publicará automáticamente el contenido de `dist/`.

También puedes publicar en Netlify conectando el repositorio: comando de construcción `npm run build`, directorio de publicación `dist`.

## Personalización

- La información de perfil y los proyectos se encuentra en `src/mobile-view.ts` e `src/i18n.ts`.
- La navegación y las áreas interactivas del libro están en `src/main.ts`.
- Los estilos están en `src/style.css` y `src/mobile-view.css`.
- Las texturas del libro se encuentran en `public/img/pages/` y `public/img/pages-en/`.

## Contacto

GitHub: https://github.com/EdwinOcampo28
