"use client"

import AuthForm from "../components/AuthForm";

export default function Page() {
    function onSubmit() {

    }
    
    return(
        <>
            <AuthForm authType="signup" onSubmit={onSubmit} />
        </>
    )
}