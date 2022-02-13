<?php

namespace App\Observers;

use App\Models\Client;
use App\Models\Reminder;
use App\Notifications\ClientCreated;
use Illuminate\Support\Facades\Log;

class ClientObserver
{

    public function created(Client $client)
    {
        if(empty($client->profile_image))
        {
            Reminder::create([
                'client_id' => $client->id,
                'next_date' => $client->created_at->addDays(3)
            ]);
        }

        $client->notify((new ClientCreated()));
    }
}
