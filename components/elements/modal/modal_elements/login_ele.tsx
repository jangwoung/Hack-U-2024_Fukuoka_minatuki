import Link from 'next/link'
import React from 'react'

import SignIn from '../../auth/signin-button'

const LoginElement = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold">ログイン</h1>
      <SignIn
        LoginElement={
          <div className="m-4 cursor-pointer rounded-md px-16 py-8 font-bold shadow-[0_4px_8px_2px_rgba(17,17,26,0.18)] duration-200 hover:bg-black hover:text-white">
            <h1>GitHubアカウントでログイン</h1>
          </div>
        }
      ></SignIn>
      <Link href={'https://github.com/signup'}>
        <p className="m-2 text-sm font-normal underline">GitHubアカウントをお持ちでない方</p>
      </Link>
    </div>
  )
}

export default LoginElement
