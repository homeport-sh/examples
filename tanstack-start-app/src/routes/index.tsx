import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn, useServerFn } from '@tanstack/react-start'

// runs on the server only: in the loader as the page renders, and over
// HTTP when the button calls it from the browser
const serverTime = createServerFn({ method: 'GET' }).handler(async () => ({
  node: process.version,
  at: new Date().toISOString(),
}))

export const Route = createFileRoute('/')({
  loader: () => serverTime(),
  component: Home,
})

function Home() {
  const rendered = Route.useLoaderData()
  const callServer = useServerFn(serverTime)
  const [called, setCalled] = useState<string>()
  return (
    <main>
      <h1>TanStack Start on homeport</h1>
      <p>
        Rendered on the server (Node {rendered.node}) at {rendered.at}.
      </p>
      <button onClick={async () => setCalled((await callServer()).at)}>
        Call the server function
      </button>
      {called && <p>The server answered at {called}.</p>}
    </main>
  )
}
