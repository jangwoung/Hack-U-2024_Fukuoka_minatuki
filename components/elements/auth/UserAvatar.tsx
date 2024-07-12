/* eslint-disable */
import { auth } from '@/auth'

export default async function UserAvatar() {
  const session = await auth()

  if (!session || !session.user) return null

  return <div>{session.user.name ?? 'User'}</div>
}
