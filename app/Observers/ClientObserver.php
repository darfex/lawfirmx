<?php

namespace App\Observers;

use App\Models\Client;
use App\Notifications\ClientCreated;

class ClientObserver
{

    public function created(Client $client)
    {
        $client->notify((new ClientCreated($client))->delay(now()->addSeconds(5)));
    }

}
