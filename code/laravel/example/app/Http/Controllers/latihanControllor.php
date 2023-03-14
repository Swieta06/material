<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Illuminate\Http\Request;

class latihanControllor extends Controller
{
    //
    public function printData()
    {
        return "Hello ";
    }
    public function post(Request $request){
        $name = $request->input("name");
        $age=$request->input("age");
            $person=Person::create([
                "name"=>$name,
                "age"=>$age

            ]);
        return response()->json(["status", "save"], 200);
}
    public function shows()
    {
        return response()->json(Person::all(), 200);
    }
    public function filter($name){
        $person = Person::where("name",$name);
        return response()->json($person->get(), 200);
    }
}

