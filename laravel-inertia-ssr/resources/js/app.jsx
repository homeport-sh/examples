import { createInertiaApp } from '@inertiajs/react';

createInertiaApp({
    title: (title) => (title ? `${title} - Laravel on homeport` : 'Laravel on homeport'),
});
