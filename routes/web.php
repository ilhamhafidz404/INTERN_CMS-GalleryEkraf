<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UMKMController;
use App\Models\UMKM;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Index');
// });

Route::resource('/', LoginController::class);
Route::get('/umkms/export', [UMKMController::class, "export"]);
Route::resource('/umkms', UMKMController::class);

Route::get('/products/export', [ProductController::class, "export"]);
Route::resource('/products', ProductController::class);


Route::post('/login', [LoginController::class, 'Login']);
