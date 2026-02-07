import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links'
import { defaultLocale, locales } from './src/i18n/i18n';
import { site, base } from './src/consts';
import tailwindcss from '@tailwindcss/vite';

const sitemapLocales = Object.fromEntries(locales.map((_, i) => [locales[i], locales[i]])) // Create an object with keys and values based on locales

import sitemap from '@astrojs/sitemap';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
    site: site,
    base: base,
    integrations: [mdx(), preact(), sitemap({
        filter: (page) => page.secret !== true,
        i18n: {
            defaultLocale: defaultLocale,
            locales: sitemapLocales,
        }
		})
    ],
    i18n: {
        defaultLocale: defaultLocale,
        locales: locales,
    },
    markdown: {
        rehypePlugins:[[
            rehypeExternalLinks, {
                target: '_blank',
                rel: ['nofollow', 'noreferrer'],
            }
        ]]
    },
    renderers: ['@astrojs/renderer-preact'],
    vite: {
        plugins: [tailwindcss()],
    }
});