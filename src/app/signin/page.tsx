"use client"
import SignInButton from "../components/buttons/sign-in"

export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-xl rounded-lg p-10 max-w-md w-full text-center">
                <h1 className="text-4xl font-bold text-red-600">MONEYMATRIX</h1>
                <h2 className="text-2xl font-semibold text-orange-500 mt-2">Login</h2>
                <SignInButton/>
            </div>
        </div>
    );
}
