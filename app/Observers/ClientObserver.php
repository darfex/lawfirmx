<?php

namespace App\Observers;

use App\Models\Client;
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Mail;

class ClientObserver
{
    /**
     * Handle events after all transactions are committed.
     * @var bool
     */
    public $afterCommit = true;
    
    /**
     * Handle the Client "created" event.
     *
     * @param  \App\Models\Client  $client
     * @return void
     */
    public function created(Client $client)
    {
        // Mail::to($client)->send(new WelcomeMail($client));
    }
}
