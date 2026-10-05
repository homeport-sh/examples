<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel on homeport</title>
    <style>
        :root { color-scheme: light dark; }
        body { margin: 0; min-height: 100vh; display: grid; place-items: center; font: 16px/1.5 system-ui, sans-serif; background: #fafafa; color: #1b1b18; }
        main { max-width: 32rem; padding: 2rem; }
        h1 { font-size: 1.75rem; margin: 0 0 .5rem; }
        p { margin: .5rem 0; color: #5f5f5a; }
        code { font-family: ui-monospace, monospace; font-size: .9em; }
        a { color: #f53003; }
        @media (prefers-color-scheme: dark) { body { background: #0a0a0a; color: #ededec; } p { color: #a1a09a; } a { color: #ff4433; } }
    </style>
</head>
<body>
<main>
    <h1>Laravel, running on homeport</h1>
    <p>Laravel {{ app()->version() }} on PHP {{ PHP_VERSION }}, served by FrankenPHP from a single binary.</p>
    <p>The JSON health check is at <a href="/health"><code>/health</code></a>.</p>
</main>
</body>
</html>
