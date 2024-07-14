/* eslint-disable */
import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/features/utils/supabase/middleware'
import { auth } from '@/auth'

export async function middleware(request: NextRequest) {
  // NextAuthのミドルウェアを実行
  try {
    const authResult = await auth(request)
    if (authResult) return authResult
  } catch (error) {
    console.error('NextAuth middleware error:', error)
  }

  // Supabaseのセッション更新
  return await updateSession(request)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
