import "./qa.scss"

export default function QA() {
  return (
    <section id="qa" className='qa'>
      <h2>По всем вопросам</h2>


      <div className="qa--wrapper">
        <div className="qa-bg">
          <img src="./img/coordinator.png" alt="img" />
        </div>

        <div className="qa--info">
          <h5>Координатор Кристина</h5>
          <div className="connection">
            <a href="tel:+7 111 111 1111">+7 111 111 1111</a>
            <div className="social-network--link">
              {/* VK */}
              <div className="vk social">
                <a href="#">
                  <img src="./svg/social_network/vk.svg" alt="logo" />
                </a>
              </div>
              {/* TG */}
              <div className="tg social">
                <a href="#">
                  <img src="./svg/social_network/tg.svg" alt="logo" />
                </a>
              </div>
              {/* WA */}

              <div className="wa social">
                <a href="#">
                  <img src="./svg/social_network/wa.svg" alt="logo" />
                </a>
              </div>
            </div>
          </div>
          <div className="qa--text">
            <p>Курирует наше мероприятие неподражаемый профи своего дела и просто замечательный и классный человек — Кристина 🥰
              Она знает про нашу свадьбу всё, но нам не рассказывает!
              Поэтому не стесняйтесь задавать ей любые вопросы.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
