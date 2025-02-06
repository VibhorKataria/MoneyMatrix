"use client";

import { signInWithGoogleRedirect } from "@/app/firebase/config";
import { useRouter } from "next/navigation";


const SignInButton = () => {
    const router = useRouter();
    const handleSignIn = async () => {
        try {
            await signInWithGoogleRedirect();
        } catch (error) {
            console.error("Google Sign-In Error:", error);
        }
        router.push("/landing")
    };

    return (
        <button
            className="mt-4 w-full px-6 py-3 bg-blue-400 text-white font-medium rounded-lg shadow-md transition hover:bg-blue-500 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleSignIn}
        >
            Login with Google
        </button>
    );
};

export default SignInButton;
