<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Support\Facades\Log;
use App\Http\Resources\ClientResource;
use App\Http\Requests\CreateClientRequest;
use App\Http\Requests\UpdateClientRequest;

class ClientController extends Controller
{

    public function index() {
        try {
            $clients = Client::paginate(10);
            return response()->json([
                'status' => true,
                'message' => 'Clients fetched',
                'data' => [
                    'clients' => ClientResource::collection($clients)
                ]
            ]);
        }
        catch (\Throwable $th) {
            throw $th;
        }
    }

    public function store(CreateClientRequest $request) {
        try {
            if($request->hasFile('profileImage') && !empty($request->profileImage))
            {
                $path = $request->profileImage->store('images/avatars');
            }
            
            $client = Client::create([
                'first_name'            => $request->firstName,
                'last_name'             => $request->lastName,
                'email'                 => $request->email,
                'primary_legal_counsel' => $request->primaryLegalCounsel,
                'date_of_birth'         => $request->dateOfBirth,
                'case_details'          => $request->caseDetails,
                'profile_image'         => $request->profileImage
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Profile successfully created',
                'data' => [
                    'client' => new ClientResource($client)
                ]
            ]);
        }
        catch (\Throwable $th) {
            throw $th;
        }
    }

    public function show($id)
    {
        try {
            $client = Client::findOrFail($id);
            return response()->json([
                'status' => true,
                'message' => 'Client fetched',
                'data' => [
                    'client' => ClientResource::make($client)
                ]
            ]);
        }
        catch (\Throwable $th) {
            throw $th;
        }
    }

    public function update($id, UpdateClientRequest $request)  {
        try {
            $client = Client::findOrFail($id);

            if($request->hasFile('profileImage') && !empty($request->profileImage))
            {
                $path = $request->profileImage->store('images/avatars');
            }

            $client->update([
                'first_name'            => $request->firstName,
                'last_name'             => $request->lastName,
                'email'                 => $request->email,
                'primary_legal_counsel' => $request->primaryLegalCounsel,
                'date_of_birth'         => $request->dateOfBirth,
                'case_details'          => $request->caseDetails,
                'profile_image'         => $request->profileImage
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Profile Updated Successfully',
                'data' => [
                    'client' => new ClientResource($client)
                ]
            ]);
        }
        catch (\Throwable $th) {
            throw $th;
        }
    }

    private function uploadImage() {

    }
}
