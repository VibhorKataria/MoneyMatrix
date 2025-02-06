"use client"

import { signInWithGooglePopup, signInWithGoogleRedirect } from "../firebase/config";

export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-xl rounded-lg p-10 max-w-md w-full text-center">
                <h1 className="text-4xl font-bold text-red-600">MONEYMATRIX</h1>
                <h2 className="text-2xl font-semibold text-orange-500 mt-2">Login</h2>

                <button
                    className="mt-4 w-full px-6 py-3 bg-blue-400 text-white font-medium rounded-lg shadow-md transition hover:bg-blue-500 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={()=>{
                        signInWithGoogleRedirect();

                    }}
                >
                    Login with Google
                </button>
            </div>
        </div>
    );
}
