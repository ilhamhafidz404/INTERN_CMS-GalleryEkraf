<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

        // if($request->email === $email && $request->password === $password){
        //     return redirect()->route('umkms.index');
        // }

        // return back()->withErrors([
        //     'email' => 'Email anda salah',
        // ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $request->session()->regenerate();

            return redirect()->route('umkms.index');
        }

        return back()->withErrors([
            'email' => 'Email atau password anda salah',
        ]);
    }
    
    public function logout()
    {
        Auth::logout();

        // $request->session()->invalidate();
        // $request->session()->regenerateToken();

        // return redirect()->route('login');
        return redirect("/");
    }
}
