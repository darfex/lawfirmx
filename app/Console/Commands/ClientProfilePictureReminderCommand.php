<?php

namespace App\Console\Commands;

use App\Models\Client;
use App\Notifications\ProfilePictureReminder;
use Illuminate\Console\Command;

class ClientProfilePictureReminderCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'profilepicture:reminder';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send profile picture reminder to clients.';

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
        $clients = Client::where('profile_image', null)->get();

        foreach($clients as $client)
        {
            $client->notify((new ProfilePictureReminder($client))->delay(now()->addSeconds(5)));
        }

    }
}
