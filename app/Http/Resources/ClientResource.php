<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'firstName'           => $this->first_name,
            'lastName'            => $this->last_name,
            'email'               => $this->email,
            'dateProfiled'        => Carbon::parse($this->date_profiled)->toDateString(),
            'primaryLegalCounsel' => $this->primary_legal_counsel,
            'caseDetails'         => $this->case_details,
            'dateOfBirth'         => $this->date_of_birth,
            'profileImage'        => $this->profile_image
        ];
    }
}
