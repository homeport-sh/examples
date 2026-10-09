<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;

// Sent to everyone watching the page, through Reverb, as it's dispatched
// (ShouldBroadcastNow: no queue worker needed).
class Pinged implements ShouldBroadcastNow
{
    use Dispatchable;

    public function __construct(public string $message, public string $at) {}

    public function broadcastOn(): Channel
    {
        return new Channel('pings');
    }
}
