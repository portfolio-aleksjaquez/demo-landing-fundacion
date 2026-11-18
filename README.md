# Landing de evento para fundación (demo)

Landing page trilingüe (español, inglés y portugués) para un encuentro regional organizado por una fundación. Incluye cuenta regresiva, agenda con pestañas por día y línea de tiempo, directorio de organizaciones con filtro por región, preguntas frecuentes y una vereda punteada que se dibuja con el scroll en el margen de la página.

> La **Fundación Vereda Clara**, el **Encuentro Vereda 2027**, las organizaciones, fechas y contactos son ficticios. Las ilustraciones son originales y se crearon para esta demo.

**Demo:** https://portfolio-aleksjaquez.github.io/demo-landing-fundacion/

## Stack

- [Astro 6](https://astro.build) (sitio estático) con View Transitions
- Tailwind CSS v4
- GSAP (ScrollTrigger) para la vereda que se dibuja con el scroll y la entrada de la portada
- i18n propio con rutas `/es/`, `/en/` y `/pt/`
- Tipografía libre Overpass vía Fontsource
- Despliegue automático a GitHub Pages con GitHub Actions

## Desarrollo

```sh
pnpm install
pnpm dev      # http://localhost:4321/demo-landing-fundacion/
pnpm build    # genera ./dist
pnpm preview
```
