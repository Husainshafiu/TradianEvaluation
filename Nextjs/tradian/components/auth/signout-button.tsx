"use client"

import {Button} from "@/components/ui/button";
import { signOut } from "next-auth/react";

export function SignOut() {
    return <Button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</Button>
}