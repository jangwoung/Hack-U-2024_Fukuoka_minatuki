import style from './Join.module.css'

export default function Join() {
  return (
    <div className={style.back}>
      <button className={style.button}></button>
      <div className={style.main}>
        <header>
          <div className={style.detail}>
            <ul>
              <li>Hackson Level・・・ 17</li>
              <li>Day・・・・・・・・・1/2</li>
              <li>Venue・・・・・・・・GYMラボ</li>
              <li>Explanation・・・・初心者大歓迎です！</li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  )
}
