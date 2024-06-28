import './wishes.scss'
export default function Wishes() {
  return (
    <section className="wishes">
      <h2>Пожелания</h2>

      <div className="wishes--cards">
        {/* 1 */}
        <div className="wishes--cards--card">
          <div className="wishes--cards--card-bg">
            <img src="./img/elephant.png" alt="img" />
          </div>
          <div className="wishes--cards--card--info">
            <h6>Что подарить?</h6>
            <p>Не ломайте голову насчёт подарка, мы не сможем взять с собой
              что-то объёмное даже с учётом крутого координатора с чемоданом...
              Конверт - лучший вариант, да и руки для объятий будут свободны 🤗</p>
          </div>
        </div>
        {/* 2 */}
        <div className="wishes--cards--card">
          <div className="wishes--cards--card-bg">
            <img src="./img/flowers.png" alt="img" />
          </div>
          <div className="wishes--cards--card--info">
            <h6>А цветы?</h6>
            <p>На свадьбах принято дарить цветы - это действительно красиво!
              Но у нас не будет возможности должным образом разместить их.
              Будем признательны за альтернативу букетам в виде бутылочки
              вина или другого вкусного напитка 🙂</p>
          </div>
        </div>
        {/* 3 */}
        <div className="wishes--cards--card">
          <div className="wishes--cards--card-bg">
            <img src="./img/kittens.png" alt="img" />
          </div>
          <div className="wishes--cards--card--info">
            <h6>И последнее, но не по важности!</h6>
            <p>Мы прикладываем очень много усилий для организации этого мероприятия. Самое главное для нас - ваше присутствие, но есть ещё одно условие - хорошее настроение, его обязательно нужно иметь с собой! Давайте запомним этот день на всю жизнь! 🎉</p>
          </div>
        </div>
      </div>
    </section>
  )
}
