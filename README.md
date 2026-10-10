# homeport examples

Starters for [homeport](https://homeport.sh): each folder deploys as it is,
with no configuration. In New app, choose **Deploy an example**, or clone this
repository and pick a folder.

| Folder | What it is |
|---|---|
| `go-api/` | A Go HTTP API, built to a single binary |
| `bun-api/` | A Bun HTTP API whose own build compiles it to a single binary (`bun build --compile`) |
| `elysia-api/` | An Elysia API, run with Bun from its files: no build |
| `express-api/` | An Express API, run with Node (24, by its `.nvmrc`) |
| `nextjs-app/` | A Next.js app, its standalone output run with Node |
| `tanstack-start-app/` | A TanStack Start app with a server function, built with Nitro and run with Node |
| `tanstack-start-bun-app/` | The same app without Nitro, as TanStack's starter comes: served by homeport's own server, on Bun |
| `sveltekit-bun-app/` | A SvelteKit app with a form action, compiled by SvelteKit's Bun adapter to a single binary |
| `static-site/` | A static site: one HTML page, nothing to build |
| `laravel-app/` | A Laravel app, served by FrankenPHP (nothing compiled per app) |
| `laravel-inertia-ssr/` | A Laravel app with Inertia and React, its pages rendered before they're sent |
| `laravel-reverb/` | A Laravel app with Reverb: pages that get broadcasts over WebSockets, through Echo |

Each app listens on `$PORT`, which homeport sets.

A JavaScript app runs what its build produces, with the runtime it uses:
the framework's production output, or the app with its production
dependencies, plus a pinned official Node or Bun. It's compiled to a
single binary only when its own build says so, as `bun-api/`'s does.
`elysia-api/` runs on Bun because its start script is `bun src/index.ts`;
`express-api/`, `nextjs-app/` and `tanstack-start-app/` run on Node.

`tanstack-start-app/` builds with Nitro's Vite plugin (`nitro()` in
`vite.config.ts`), which makes the build a Node server, Nitro's
`.output/server/index.mjs`; homeport ships `.output` and starts that. Its
page is rendered on the server by a loader that calls a server function,
and its button calls the same function from the browser.

`tanstack-start-bun-app/` is that app without Nitro, which is how
`@tanstack/cli create` makes one: its build is `dist/server/server.js`, a
request handler with no server. homeport ships a small server of its own
beside it (srvx, TanStack's own), which serves `dist/client` and hands
every other request to the handler. It runs on Bun because the app
installs with Bun (`bun.lock`).

`sveltekit-bun-app/` uses `@sveltejs/adapter-bun` with
`buildOptions.compile`, so `bun run --bun build` writes one executable,
`build/server`, with the client assets in it, and that's what runs: no
`node_modules`, no separate Bun. It knows its public origin from the
`Host` header, as homeport's edge sends it, and its form posts to a form
action.

`laravel-app/` needs no database: sessions are cookies, the cache is files,
jobs run as they're dispatched and logs go to stderr. Its one setting is
`APP_KEY`, which homeport generates when the app is created; homeport
detects everything else.
`/health` answers JSON. `/db` says whether a database is attached: it
answers "not connected" until you add one from the app's Database tab,
then "connected".

`laravel-inertia-ssr/` is Inertia 3 with React, built with
`npm run build:ssr`. homeport sees `inertiajs/inertia-laravel` and the
`build:ssr` script, builds the SSR bundle, and runs Inertia's renderer
beside the app, where Laravel reaches it at Inertia's default address. Its
renderer runs on Node, because nothing in the project says Bun. Each page
arrives with its HTML already rendered (`data-server-rendered`), then React
takes over in the browser.

`laravel-reverb/` is `php artisan install:broadcasting --reverb` with a
public channel. homeport sees `laravel/reverb`, runs Reverb as a process
named `reverb` and sends the app's `/app` and `/apps` paths to it. It sets
the Reverb variables Laravel and Echo read (`REVERB_APP_ID`, `_KEY`,
`_SECRET`, `REVERB_HOST`, `REVERB_PORT`, `REVERB_SCHEME`) and gives the
build their `VITE_` copies, so `resources/js/echo.js` works as generated.
Processes run while the app is always on (at least 1 copy). Open the page
in two tabs and send a ping: both get it.
