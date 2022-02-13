<?php

namespace App\Notifications;


use Carbon\Carbon;
use App\Models\Client;
use App\Models\Reminder;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Log;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class ProfilePictureReminder extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $this->updateRemider($notifiable->id);
        return (new MailMessage)
            ->subject('Reminder')
            ->greeting('Hello '.$notifiable->first_name)
            ->line('You have not submitted your passport photograph at Firm X.')
            ->line('Please do that as soon as possible');
    }

    /**
     * Determine if the notification should be sent.
     *
     * @param  mixed  $notifiable
     * @return bool
     */
    public function shouldSend($notifiable)
    {
        $date = Client::where('id', $notifiable->id)->first()->reminder->next_date;
        return Carbon::parse($date)->toDateString() == today()->toDateString();
    }

    protected function updateRemider($client) {
        Reminder::where('client_id', $client)->update(['next_date' => today()->addDays(3)->toDateString()]);
    }

}
