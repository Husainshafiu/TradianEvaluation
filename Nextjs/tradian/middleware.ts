import {NextResponse} from 'next/server'
import {auth} from '@/auth'

export default auth(async function middleware(request) {
    console.log('############################################################################', request.nextUrl.pathname)
    if (!request.auth) {
        return NextResponse.redirect(new URL('/api/auth/signin', request.url))
    }
})

export const config = {
    matcher: '/admin/:path*',
}