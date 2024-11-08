<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function index(){
        return  Inertia::render('Login');
    }

    public function login(Request $request){
        $email = 'ekraf@gmail.com';
        $password = 'ekraf12345';

        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if($request->email === $email && $request->password === $password){
            return redirect()->route('umkms.index');
        }

        return back()->withErrors([
            'email' => 'Email anda salah',
        ]);
    }
}
