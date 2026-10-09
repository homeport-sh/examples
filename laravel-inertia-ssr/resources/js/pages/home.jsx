import { Head } from '@inertiajs/react';
import { useState } from 'react';

const styles = {
    main: { maxWidth: '32rem', margin: '0 auto', padding: '3rem 2rem', font: '16px/1.5 system-ui, sans-serif' },
    muted: { color: '#5f5f5a' },
};

export default function Home({ laravel, php, renderedAt }) {
    const [clicks, setClicks] = useState(0);

    return (
        <main style={styles.main}>
            <Head title="Home" />
            <h1>Inertia, rendered on the server</h1>
            <p style={styles.muted}>
                Laravel {laravel} on PHP {php}. This page's HTML was rendered by Inertia's SSR server, running beside the
                web in the same sandbox, at <span id="rendered-at">{renderedAt}</span>.
            </p>
            <p>
                <button type="button" onClick={() => setClicks(clicks + 1)}>
                    Clicked {clicks} times
                </button>
            </p>
            <p style={styles.muted}>
                The JSON health check is at <a href="/health"><code>/health</code></a>.
            </p>
        </main>
    );
}
