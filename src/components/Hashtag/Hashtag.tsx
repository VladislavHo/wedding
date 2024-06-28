import './hashtag.scss'
export default function Hashtag() {
  return (
    <section id='hashtag' className="hashtag">
      <h2>#AHAHAHAHHAHAHA:(</h2>
      <div className="hashtag--info">
        <p>Делитесь фотографиями, рилсами и любыми другими лучшими моментами в социальных сетях, добавляя этот хештег!</p>
        <p>
          А для быстрого поиска публикаций скорее нажимайте на кнопки!
        </p>
      </div>

      <div className="social-network--links">
        <div className="link">
         <a className='vk--link' href="#" target='_blank'>
          <img src="./svg/social_network/vk.svg" alt="logo" />
          <h6>ВКонтакте</h6>
         </a>
        </div>
        <div className="link">

          <a className='inst--link' href="#" target='_blank'>
            <img src="./svg/social_network/inst.svg" alt="logo" />
            <h6>Instagram*</h6>
        
          </a>
          <p className='subtext'>*принадлежит Meta, запрещено в РФ</p>
        </div>
      </div>

    </section>
  )
}

