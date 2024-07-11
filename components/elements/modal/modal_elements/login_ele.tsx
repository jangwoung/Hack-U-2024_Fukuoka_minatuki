'use client'

import Link from 'next/link'
import React from 'react'

const LoginElement = () => {
  const handleGitHubLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
    const redirectUri = encodeURIComponent(`${window.location.origin}/api/auth/callback/github`)
    const state = generateRandomString(32)
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=user`
  }

  const generateRandomString = (length: number) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    return Array.from(crypto.getRandomValues(new Uint8Array(length)))
      .map((x) => possible[x % possible.length])
      .join('')
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold">ログイン</h1>
      <div
        className="m-4 cursor-pointer rounded-md px-16 py-8 font-bold shadow-[0_4px_8px_2px_rgba(17,17,26,0.18)] duration-200 hover:bg-black hover:text-white"
        onClick={handleGitHubLogin}
      >
        <h1>GitHubアカウントでログイン</h1>
      </div>
      <Link href={'https://github.com/signup'}>
        <p className="m-2 text-sm font-normal underline">GitHubアカウントをお持ちでない方</p>
      </Link>
    </div>
  )
}

export default LoginElement
