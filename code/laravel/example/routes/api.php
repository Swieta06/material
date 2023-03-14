<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\latihanControllor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get("testing",function(){
echo"Testing";
});

Route::get("laravel", [latihanControllor::class,"printData"]);
Route::post("laravel_post", [latihanControllor::class,"post"]);
Route::get("laravel_shows", [latihanControllor::class,"shows"]);
Route::get("filter/{name}", [latihanControllor::class,"filter"]);
Route::post("register", [AuthController::class,"register"]);
Route::post("login", [AuthController::class,"login"]);
