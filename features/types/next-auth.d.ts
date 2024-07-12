/* eslint-disable */
import NextAuth, { type DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    supabaseAccessToken?: string
    user: {
      address: string
      name?: string | null
      email?: string | null
      image?: string | null
    } & DefaultSession['user']
    expires: string
  }
}
