import { NextRequest, NextResponse } from 'next/server'

const { NEXT_PUBLIC_GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env

interface TokenResponse {
  access_token: string
  token_type: string
  scope: string
}

interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  html_url: string
  name: string
  company?: string
  blog?: string
  location?: string
  email?: string
  bio?: string
  public_repos: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 })
  }

  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: NEXT_PUBLIC_GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code,
      }),
    })

    console.log('Response status:', tokenResponse.status)
    console.log('Response headers:', Object.fromEntries(tokenResponse.headers.entries()))

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text()
      console.error('Token response error:', tokenResponse.status, errorText)
      throw new Error(`Failed to fetch access token: ${tokenResponse.status} ${errorText}`)
    }

    const tokenData = (await tokenResponse.json()) as TokenResponse
    const accessToken = tokenData.access_token

    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${accessToken}`,
        Accept: 'application/vnd.github.v3+json',
      },
    })

    if (!userResponse.ok) {
      throw new Error('Failed to fetch user data')
    }

    const userData = (await userResponse.json()) as GitHubUser

    return NextResponse.json(userData)
  } catch (error) {
    console.error('Detailed error:', error)
    return NextResponse.json(
      { error: 'Authentication failed', details: (error as Error).message },
      { status: 500 },
    )
  }
}
