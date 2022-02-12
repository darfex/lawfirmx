<?php

namespace App\Console\Commands;

use App\Mail\ReminderMail;
use App\Models\Client;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class NotifyClients extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'clients:notify';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send a reminder to clients to drop passport photograph with Law Firm X';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $clients = Client::where('image', null)->get();

        foreach($clients as $client)
        {
            Mail::to($client)->send(new ReminderMail($client));
        }
    }
}
