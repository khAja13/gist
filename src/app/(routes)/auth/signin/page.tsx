"use client"

import AuthForm from "../components/AuthForm";

export default function SignIn() {
    function onSubmit() {
        
    }

    return(
        <>
            <AuthForm authType="signin" onSubmit={onSubmit} />
        </>
    )
}