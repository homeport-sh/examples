import './echo';

const state = document.getElementById('state');
const list = document.getElementById('pings');

window.Echo.connector.pusher.connection.bind('state_change', ({ current }) => {
    state.textContent = current;
});

window.Echo.channel('pings').listen('Pinged', ({ message, at }) => {
    const item = document.createElement('li');
    item.textContent = `${message} (${at})`;
    list.prepend(item);
});

document.getElementById('ping').addEventListener('submit', async (event) => {
    event.preventDefault();
    await fetch('/ping', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
        },
        body: JSON.stringify({ message: new FormData(event.target).get('message') }),
    });
});
