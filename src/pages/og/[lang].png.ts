import type { APIRoute } from 'astro';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export function getStaticPaths() {
    return [
        { params: { lang: 'es' } },
        { params: { lang: 'en' } },
        { params: { lang: 'pt' } },
    ];
}

export const GET: APIRoute = async ({ params }) => {
    const lang = params.lang as 'es' | 'en' | 'pt';

    const imagePath = resolve(`src/assets/og/og-${lang}.png`);

    try {
        const buffer = readFileSync(imagePath);
        const body = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength) as ArrayBuffer;

        return new Response(body, {
            headers: {
                'Content-Type': 'image/png',
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch {
        return new Response('Image not found', { status: 404 });
    }
};
