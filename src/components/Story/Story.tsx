import './story.scss'

export default function Story() {
  return (
    <section className="story">
      <h2>Love Story</h2>
      <div className="story-wrapper">
        <div className="story-wrapper--couples">
          <p>Мы познакомились в совсем юном возрасте, через общих друзей в ансамбле народной песни.</p>
          <p>И мимолетная симпатия, пройдя испытание временем, переросла в настоящую любовь.</p>
          <p>Наша история началась 22 января 2013 года, в День Рождения невесты.</p>
          <p>А 27 июня 2023 года Тёма, в свой День Рождения, сделал предложение Владе.</p>

        </div>

        <div className="story-wrapper--photos">
            <img src="./img/photos-couples/image 1.png" alt="image" />
            <img src="./img/photos-couples/image 2.png" alt="image" />
            <img src="./img/photos-couples/image 3.png" alt="image" />
            <img src="./img/photos-couples/image 4.png" alt="image" />
            <img src="./img/photos-couples/image 5.png" alt="image" />
            <img src="./img/photos-couples/image 6.png" alt="image" />
        </div>
      </div>
    </section>
  )
}


