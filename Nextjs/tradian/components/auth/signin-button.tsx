"use client"

import {signIn} from "@/components/auth/_actions/sign-in";
import {Button} from "@/components/ui/button";

export function SignIn() {
    return (
        <form action={signIn}>
            <Button type="submit">Sign in</Button>
        </form>
    )
}