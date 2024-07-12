/* eslint-disable */
import { signIn } from '@/auth.ts'
import { ReactNode } from 'react'

export default function SignIn({ LoginElement }: { LoginElement: ReactNode }) {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('github', { redirectTo: '/mypage' })
      }}
    >
      <button type="submit">{LoginElement}</button>
    </form>
  )
}
