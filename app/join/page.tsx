import style from './Join.module.css'

export default function Join() {
  return (
    <div>
      <div className={style.back}>
        <button className={style.button}></button>
        <div>
          <footer>
            <ul>
              <li>ハッカソンレベル</li>
              <li>日時</li>
              <li>場所</li>
              <li>説明</li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  )
}
