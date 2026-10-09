<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel Reverb on homeport</title>
    <style>
        :root { color-scheme: light dark; }
        body { margin: 0; min-height: 100vh; display: grid; place-items: center; font: 16px/1.5 system-ui, sans-serif; background: #fafafa; color: #1b1b18; }
        main { max-width: 32rem; padding: 2rem; }
        h1 { font-size: 1.75rem; margin: 0 0 .5rem; }
        p, li { color: #5f5f5a; }
        code { font-family: ui-monospace, monospace; font-size: .9em; }
        @media (prefers-color-scheme: dark) { body { background: #0a0a0a; color: #ededec; } p, li { color: #a1a09a; } }
    </style>
    @vite('resources/js/app.js')
</head>
<body>
<main>
    <h1>Laravel Reverb, running on homeport</h1>
    <p>Open this page in two tabs and send a ping: each tab gets it over a WebSocket, from Reverb.</p>
    <p>Connection: <code id="state">connecting</code></p>
    <form id="ping">
        <input name="message" value="hello" maxlength="100">
        <button type="submit">Send a ping</button>
    </form>
    <ul id="pings"></ul>
</main>
</body>
</html>
