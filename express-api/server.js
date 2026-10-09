// A small JSON API on Express: homeport runs it with Node, on $PORT.
import express from 'express'

const started = Date.now()
const app = express()

app.get('/', (req, res) => {
  res.json({ hello: 'from Express on homeport', node: process.version, uptime: `${Math.round((Date.now() - started) / 1000)}s` })
})
app.get('/healthz', (req, res) => res.send('ok'))

const port = Number(process.env.PORT ?? 3000)
app.listen(port, () => console.log(`listening on :${port}`))
