// rendered on each request, on the server
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main>
      <h1>Next.js on homeport</h1>
      <p>
        Rendered at {new Date().toISOString()} by Node {process.version}.
      </p>
    </main>
  )
}
