import { OpenAPIHono } from '@hono/zod-openapi'
import { apiReference } from '@scalar/hono-api-reference'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'
import type { Routes } from '#common/types'
import type { HTTPException } from 'hono/http-exception'

export class App {
  private app: OpenAPIHono

  constructor(routes: Routes[]) {
    this.app = new OpenAPIHono()

    this.initializeGlobalMiddlewares()
    this.initializeRoutes(routes)
    this.initializeSwaggerUI()
    this.initializeRouteFallback()
    this.initializeErrorHandler()
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      route.initRoutes()
      this.app.route('/api', route.controller)
    })
  }

  private initializeGlobalMiddlewares() {
    this.app.use(logger())
    this.app.use(prettyJSON())
    this.app.use(cors())
  }

  private initializeSwaggerUI() {
    this.app.doc31('/api/swagger', (c) => {
      const { protocol: urlProtocol, hostname, port } = new URL(c.req.url)
      const protocol = c.req.header('x-forwarded-proto') ? `${c.req.header('x-forwarded-proto')}:` : urlProtocol

      return {
        openapi: '3.1.0',

        info: {
          version: '1.0.0',
          title: 'JioSaavn API',
          description: `# Introduction 
        \nJioSaavn API, accessible at [saavn.dev](https://saavn.dev), is an unofficial API that allows users to download high-quality songs from [JioSaavn](https://jiosaavn.com). 
        It offers a fast, reliable, and easy-to-use API for developers. \n`
        },
        servers: [{ url: `${protocol}//${hostname}${port ? `:${port}` : ''}`, description: 'Current environment' }]
      }
    })

    this.app.get(
      '/api/docs',
      apiReference({
        pageTitle: 'JioSaavn API Documentation',
        theme: 'none',
        isEditable: false,
        layout: 'modern',
        darkMode: true,
        metaData: {
          applicationName: 'JioSaavn API',
          author: 'MrAbhi2k3',
          creator: 'MrAbhi2k3',
          publisher: 'MrAbhi2k3',
          robots: 'index, follow',
          description:
            'JioSaavn API is an unofficial wrapper written in TypeScript for jiosaavn.com providing programmatic access to a vast library of songs, albums, artists, playlists, and more.'
        },
        url: '/api/swagger',
        customCss: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

          :root, .dark-mode {
            --scalar-font: 'Inter', sans-serif;
            --scalar-color-1: #eafbe8;
            --scalar-color-2: rgba(234, 251, 232, 0.75);
            --scalar-color-3: rgba(234, 251, 232, 0.5);
            --scalar-color-accent: #5fe3a1;

            --scalar-background-1: #14332c;
            --scalar-background-2: rgba(255, 255, 255, 0.06);
            --scalar-background-3: rgba(255, 255, 255, 0.1);
            --scalar-background-accent: rgba(95, 227, 161, 0.15);

            --scalar-border-color: rgba(255, 255, 255, 0.15);

            --scalar-radius: 1rem;
            --scalar-radius-lg: 1.5rem;
            --scalar-radius-xl: 2rem;
          }

          .dark-mode body {
            background:
              radial-gradient(ellipse 80% 60% at 20% 0%, rgba(140, 255, 190, 0.25), transparent 60%),
              radial-gradient(ellipse 70% 60% at 85% 20%, rgba(120, 200, 255, 0.20), transparent 60%),
              linear-gradient(160deg, #1f5c52 0%, #2f7a63 45%, #b89a5a 100%);
            background-attachment: fixed;
          }

          .dark-mode .t-doc__sidebar,
          .dark-mode .section-container,
          .dark-mode .scalar-card,
          .dark-mode .scalar-code-block,
          .dark-mode .references-rendered {
            background: rgba(255, 255, 255, 0.07) !important;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.15) !important;
          }

          .dark-mode .t-doc__sidebar {
            --scalar-sidebar-background-1: rgba(20, 51, 44, 0.6);
            --scalar-sidebar-color-1: #eafbe8;
            --scalar-sidebar-color-2: rgba(234, 251, 232, 0.7);
            --scalar-sidebar-color-active: #5fe3a1;
            --scalar-sidebar-item-hover-background: rgba(255, 255, 255, 0.08);
            --scalar-sidebar-item-active-background: rgba(95, 227, 161, 0.15);
            --scalar-sidebar-border-color: rgba(255, 255, 255, 0.12);
            --scalar-sidebar-search-background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(20px);
          }

          .dark-mode .scalar-button,
          .dark-mode button.show-api-client-button {
            background: #5fe3a1 !important;
            color: #0c2a20 !important;
            border-radius: 999px !important;
            font-weight: 600;
          }

          .dark-mode .scalar-button:hover {
            background: #7cedb3 !important;
          }
        `
      })
    )
  }

  private initializeRouteFallback() {
    this.app.notFound((ctx) => {
      return ctx.json({ success: false, message: 'route not found, check docs at /api/docs' }, 404)
    })
  }

  private initializeErrorHandler() {
    this.app.onError((err, ctx) => {
      const error = err as HTTPException
      return ctx.json({ success: false, message: error.message }, error.status || 500)
    })
  }

  public getApp() {
    return this.app
  }
}
