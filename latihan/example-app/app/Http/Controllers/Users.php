<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\Console\Input\Input;

class Users extends Controller
{
    //
    public function create(request $request){
        $email=$request->input("email");
        $firstname=$request->input("firstname");
        $username=$request->input("username");
        $password=$request->input("password");
        $lastname=$request->input("lastname");

        $user=User::create([
            "email"=>$email,
            "firstname"=>$firstname,
            "username"=>$username,
            "password"=>$password,
            "lastname"=>$lastname,
        ]);
            return response()->json(["status", "save"], 200);

    }
}
