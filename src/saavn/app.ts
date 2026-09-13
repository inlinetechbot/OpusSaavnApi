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
        theme: 'default',
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

          html.dark-mode,
          html.dark-mode body,
          .dark-mode {
            --scalar-font: 'Inter', sans-serif !important;

            --scalar-color-1: #eafbe8 !important;
            --scalar-color-2: rgba(234, 251, 232, 0.78) !important;
            --scalar-color-3: rgba(234, 251, 232, 0.55) !important;
            --scalar-color-accent: #5fe3a1 !important;

            --scalar-background-1: #14332c !important;
            --scalar-background-2: #1b3f36 !important;
            --scalar-background-3: #234a3f !important;
            --scalar-background-accent: rgba(95, 227, 161, 0.15) !important;

            --scalar-border-color: rgba(255, 255, 255, 0.15) !important;

            --scalar-button-1: #5fe3a1 !important;
            --scalar-button-1-color: #0c2a20 !important;
            --scalar-button-1-hover: #7cedb3 !important;

            background-image:
              radial-gradient(ellipse 80% 60% at 20% 0%, rgba(140, 255, 190, 0.28), transparent 60%),
              radial-gradient(ellipse 70% 60% at 85% 20%, rgba(120, 200, 255, 0.22), transparent 60%),
              linear-gradient(160deg, #1f5c52 0%, #2f7a63 45%, #b89a5a 100%) !important;
            background-attachment: fixed !important;
          }

          html.dark-mode .t-doc__sidebar {
            --scalar-sidebar-background-1: rgba(20, 51, 44, 0.7) !important;
            --scalar-sidebar-color-1: #eafbe8 !important;
            --scalar-sidebar-color-2: rgba(234, 251, 232, 0.7) !important;
            --scalar-sidebar-color-active: #5fe3a1 !important;
            --scalar-sidebar-item-hover-background: rgba(255, 255, 255, 0.08) !important;
            --scalar-sidebar-item-active-background: rgba(95, 227, 161, 0.15) !important;
            --scalar-sidebar-border-color: rgba(255, 255, 255, 0.12) !important;
            --scalar-sidebar-search-background: rgba(255, 255, 255, 0.08) !important;
            backdrop-filter: blur(20px);
          }

          html.dark-mode .scalar-card,
          html.dark-mode .scalar-api-client__send-request,
          html.dark-mode .scalar-code-block,
          html.dark-mode .t-doc .card {
            background: rgba(255, 255, 255, 0.06) !important;
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.15) !important;
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
