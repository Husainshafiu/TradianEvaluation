"use server"


import {signIn as authSignIn, signOut as authSignOut } from "@/auth"
import "server-only"
// import {permanentRedirect, redirect} from "next/navigation";

export async function signIn() {
    await authSignIn()
}

export async function signOut() {
    await authSignOut()
}