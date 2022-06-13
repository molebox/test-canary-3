// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextResponse } from 'next/server'
// eslint-disable-next-line @next/next/no-server-import-in-page
import type { NextRequest } from 'next/server'
// eslint-disable-next-line @next/next/no-server-import-in-page
import type { NextFetchEvent } from 'next/server'


export function middleware(request: NextRequest) {
  //return NextResponse.rewrite(new URL('/about-2', request.url));

  const reqCookies = request.cookies

  reqCookies.get('lang')

  const response = NextResponse.next()
  // set a cookie
  response.cookies.set('vercel', 'fast')

  // set another cookie with options
  response.cookies.set('nextjs', 'awesome', { path: '/about' })

  // get all the details of a cookie
  const { value, options } = response.cookies.getWithOptions('vercel')
  console.log(value) // => 'fast'
  console.log(options) // => { Path: '/test' }

  // deleting a cookie will mark it as expired
  response.cookies.delete('vercel')

  // clear all cookies means mark all of them as expired
  response.cookies.clear()
  return response
}

// config with custom matcher
export const config = {
  matcher: '/about/:path*'
}