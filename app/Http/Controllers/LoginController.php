<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class LoginController extends Controller
{
    public function create(){
       return Inertia::render('Auth/Login');
    }
    public function store(Request $request){
        $formData=request()->validate([
            'email' => ['required',Rule::exists('users','email')],
            'password'=>['required','min:3']
        ]);
        if(auth()->attempt($formData)){
            return redirect('/');
        }else{
            return back();
        }
    }
    public function destroy(){
       auth()->logout();
       return redirect('/login');
    }
}
