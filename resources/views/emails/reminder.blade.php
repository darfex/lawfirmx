@component('mail::message')
# Hi {{ $client->firstname }}

Remember to drop your passport photograph with Law Firm X

Thanks,<br>
{{ config('app.name') }}
@endcomponent
