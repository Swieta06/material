<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //
    public function Register(Request $request){
        $data = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
            'name'=> ['required']
        ]);
        $user=User::create([
             'name'=> $data['name'],
            'email' => $data['email'],

            'password'=> Hash::make($data['password'])
        ]);
        return response()->json(['register' => 'succsess', 200]);

    }
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return response()->json(['login' => 'succsess',200]);

        }
    }
}
