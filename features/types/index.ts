export interface SimpleHackathonInfo {
  title: string
  description: string
  date: string
}

export interface Hackathon {
  id: number
  creator_uid: string
  title: string
  place: string
  kick_off_date: string // ISO 8601形式の文字列
  prezen_date: string // ISO 8601形式の文字列
  description: string
  created_at: string // ISO 8601形式の文字列
}
