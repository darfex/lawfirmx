<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreClientRequest;
use App\Http\Resources\ClientResource;
use Illuminate\Support\Facades\Log;
use App\Models\Client;
use Illuminate\Http\Request;
use Throwable;

class ClientController extends Controller
{
    public function index()
    {
        return ClientResource::collection(Client::all());
    }

    public function show(Client $client)
    {
        return new ClientResource($client);
    }

    public function store(StoreClientRequest $request)
    {
        try{
            if($request->hasFile('image') && !empty($request->image))
            {
                $path = $request->image->store('images/avatars');
            }
            
            $client = Client::create([
                'firstname'             => $request->firstname,
                'lastname'              => $request->lastname,
                'email'                 => $request->email,
                'primary_legal_counsel' => $request->primary_legal_counsel,
                'date_of_birth'         => $request->date_of_birth,
                'image'                 => $request->image,
                'case_details'          => $request->case_details
            ]);

            return response()->json([
                'status'  => true,                
                'message' => 'Client created successfully',
                'data'    => new ClientResource($client)
            ]);
        }
        catch(Throwable $e)
        {
            throw $e;
        }
    }
}