# homeport examples

Starters for [homeport](https://homeport.sh): each folder deploys as it is,
with no configuration. In New app, choose **Deploy an example**, or clone this
repository and pick a folder.

| Folder | What it is |
|---|---|
| `go-api/` | A Go HTTP API, built to a single binary |
| `bun-api/` | A Bun HTTP API, compiled to a single binary |
| `static-site/` | A static site: one HTML page, nothing to build |
| `laravel-app/` | A Laravel app on FrankenPHP, built to a single binary |

Each app listens on `$PORT`, which homeport sets.

`laravel-app/` needs no database: sessions are cookies, the cache is files,
jobs run as they're dispatched and logs go to stderr. Its one setting is
`APP_KEY`, which homeport generates when the app is created; its
`homeport.yaml` says how the binary serves (`php-server --listen :$PORT`).
`/health` answers JSON.
