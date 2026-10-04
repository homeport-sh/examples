// A small JSON API: homeport compiles it to one binary and runs it on $PORT.
const started = Date.now()

const server = Bun.serve({
  port: Number(process.env.PORT ?? 3000),
  routes: {
    '/': () => Response.json({ hello: 'from Bun on homeport', uptime: `${Math.round((Date.now() - started) / 1000)}s` }),
    '/healthz': () => new Response('ok'),
  },
  fetch: () => new Response('Not found', { status: 404 }),
})

console.log(`listening on :${server.port}`)
