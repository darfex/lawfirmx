<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateClientRequest extends FormRequest
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
        return [
            'firstName'           => 'required',
            'lastName'            => 'required',
            'email'               => 'required|email|unique:clients,email',
            'primaryLegalCounsel' => 'required',
            'dateOfBirth'         => 'required|date',
            'profileImage'        => 'nullable|file|mimes:jpg,jpeg,png,bmp,tiff|max:4096',
            'caseDetails'         => 'required'
        ];
    }
}
