import { auth } from '@/auth'

import HeaderClient from './header-client'

export default async function HeaderServer() {
  /* eslint-disable */
  const session = await auth()
  const userName = session?.user?.name ?? 'ログイン'

  return <HeaderClient UserName={userName} />
}
