import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        
        Inertia.post("/login", { email, password }, {
            onError: (err) => setErrors(err),
        });
    };

    return (
        <>
        <div className="bg-white shadow-lg flex h-screen w-full overflow-hidden">
            <div className="w-1/2 flex items-center justify-center p-8">
                <div className="w-3/4">
                <h1 className="text-3xl font-bold mb-10 text-center">Sign In</h1>
                <p className="text-gray-500 text-sm mb-4">or use your email password</p>
                <form onSubmit={handleSubmit} action="/login" method="POST">
                    <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered w-full mt-1"
                        required
                    />
                    </div>
                    <div className="mb-6">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input input-bordered w-full mt-1"
                        required
                    />
                    </div>
                    <div className="text-right mb-4">
                        <a href="#" className="text-sm text-gray-500">
                            Forgot Your Password?
                        </a>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                    Sign In
                    </button>
                </form>
                </div>
            </div>
            <div
                className="w-1/2 bg-indigo-500 text-white flex items-center justify-center p-8"
            >
                <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Hello, Friend!</h3>
                </div>
            </div>
        </div>
        </>            
    );
}
