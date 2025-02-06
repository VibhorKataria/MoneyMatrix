'use client';
import React from 'react';
import SignInButton from "./buttons/sign-in";
import Navbar from '@/app/components/navbar';
export default function Landing() {
    return (
        <div>
            <Navbar />
            <div className='mt-52 text-center '>
                <div>
                    <h1 className='text-2xl font-mono ml-4'>
                    WANT TO CHECK TO GET INSURED!!
                    </h1>
                </div>
            </div>
        </div>
    )

}
