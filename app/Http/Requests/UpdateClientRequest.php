<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;

class UpdateClientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->route('client');
        return [
            'firstName'           => 'required',
            'lastName'            => 'required',
            'email'               => 'required|email|unique:clients,email,'.$id,
            'primaryLegalCounsel' => 'required',
            'dateOfBirth'         => 'required|date',
            'profileImage'        => 'nullable|file|mimes:jpg,jpeg,png,bmp,tiff|max:4096',
            'caseDetails'         => 'required'
        ];
    }
}
