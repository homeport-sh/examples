// A small JSON API on Elysia: homeport runs it with Bun, on $PORT.
import { Elysia } from 'elysia'

const started = Date.now()

const app = new Elysia()
  .get('/', () => ({ hello: 'from Elysia on homeport', bun: Bun.version, uptime: `${Math.round((Date.now() - started) / 1000)}s` }))
  .get('/healthz', () => 'ok')
  .listen(Number(process.env.PORT ?? 3000))

console.log(`listening on :${app.server?.port}`)
