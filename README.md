# Landing de evento para fundación (demo)

Landing page trilingüe (español, inglés y portugués) para un encuentro regional organizado por una fundación. Incluye cuenta regresiva, agenda por días en carrusel, directorio de organizaciones participantes con fichas emergentes, preguntas frecuentes y una animación de un ave que acompaña el scroll.

> La **Fundación Vereda Clara**, el **Encuentro Vereda 2027**, las organizaciones, fechas y contactos son ficticios. Las ilustraciones son originales y se crearon para esta demo.

**Demo:** https://portfolio-aleksjaquez.github.io/demo-landing-fundacion/

## Stack

- [Astro 6](https://astro.build) (sitio estático) con View Transitions
- Tailwind CSS v4
- GSAP (ScrollTrigger y MotionPathPlugin) para la animación del ave
- i18n propio con rutas `/es/`, `/en/` y `/pt/`
- Tipografías libres vía Fontsource (Cormorant Garamond y Jost)
- Despliegue automático a GitHub Pages con GitHub Actions

## Desarrollo

```sh
pnpm install
pnpm dev      # http://localhost:4321/demo-landing-fundacion/
pnpm build    # genera ./dist
pnpm preview
```
