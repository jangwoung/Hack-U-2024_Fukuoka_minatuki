import SignIn from '@/components/elements/auth/signin-button'
import SignOut from '@/components/elements/auth/signout-button'

export default function Home() {
  return (
    <div>
      <SignIn />
      <SignOut />
      <h1>{process.env.SUPABASE_URL}</h1>
    </div>
  )
}
