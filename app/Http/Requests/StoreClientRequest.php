<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreClientRequest extends FormRequest
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
            'firstname'             => 'required|string',
            'lastname'              => 'required|string',
            'email'                 => 'required|email|unique:clients,email',
            'primary_legal_counsel' => 'required|string',
            'date_of_birth'         => 'required|date',
            'image'                 => 'nullable|file|mimes:jpg,jpeg,png,bmp,tiff|max:4096',
            'case_details'          => 'required|string'
        ];
    }
}
