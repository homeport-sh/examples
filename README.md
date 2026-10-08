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
| `static-site/` | A static site: one HTML page, nothing to build |
| `laravel-app/` | A Laravel app, served by FrankenPHP (nothing compiled per app) |

Each app listens on `$PORT`, which homeport sets.

A JavaScript app runs what its build produces, with the runtime it uses:
the framework's production output, or the app with its production
dependencies, plus a pinned official Node or Bun. It's compiled to a
single binary only when its own build says so, as `bun-api/`'s does.
`elysia-api/` runs on Bun because its start script is `bun src/index.ts`;
`express-api/` and `nextjs-app/` run on Node.

`laravel-app/` needs no database: sessions are cookies, the cache is files,
jobs run as they're dispatched and logs go to stderr. Its one setting is
`APP_KEY`, which homeport generates when the app is created; homeport
detects everything else.
`/health` answers JSON. `/db` says whether a database is attached: it
answers "not connected" until you add one from the app's Database tab,
then "connected".
