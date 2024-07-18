import { NextApiRequest, NextApiResponse } from 'next'

import { auth } from '@/auth' // auth関数のインポート

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await auth()
    res.status(200).json({ user: session?.user })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' })
  }
}
