// A small JSON API: its build compiles it to one binary (bun build --compile),
// which homeport runs on $PORT.
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
