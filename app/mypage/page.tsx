import { auth } from '@/auth'

import UserCard from './components/UserCard'

const sample_user = {
  username: 'kitahara masao',
  hack_level: 17,
  uses_technology: ['Next.js', 'Go', 'Java', 'Rust'],
  history: ['ハッカソン１', 'ハッカソン２'],
}

export default async function MyPage() {
  /* eslint-disable */
  const session = await auth()
  const userName = session?.user?.name ?? 'User'

  return (
    <div className="flex pt-10 flex-col items-center justify-center">
      <h1 className="mb-8 text-xl font-bold">マイページ</h1>
      <UserCard initialUserName={userName} sampleUser={sample_user} />
    </div>
  )
}
