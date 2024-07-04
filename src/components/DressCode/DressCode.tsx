import { useState } from 'react'
import './dress-code.scss'
import DressCodeWrapper from './DressCodeWrapper'
import BranchSVG from '../SVG/branchSVG'
import { COLOR } from '../../var/var'


const dressCodeInfo = [
  {
    id: 1,
    title: 'Джентельмен',
    color: ['#689c82', '#ae81aa', '#855ead', '#000000', '#ffffff'],
    description: 'Джентльмены могут остановиться на белой рубашке, а цвет мероприятия отразить в галстуке - классическом или бабочке. Отличным вариантом будет и рубашка, попадающая в наши цвета.Если выбирать костюм - лучше тройку, чтобы в случае жаркой погоды можно было остаться в жилетке.',
    imgName: ['men-1', 'men-2', 'men-3', 'men-4', 'men-5', 'men-6']
  },
  {
    id: 2,
    title: 'Леди',
    color: ['#173e2c', '#689c82', '#9ac9b5', '#6b4667', '#ae81aa', '#f0c1eb', '#5d3685', '#855ead', '#b691d7'],
    description: 'Легкие, нарядные, элегантные платья, комбинезоны, в которых Вам будет комфортно.Брюки или юбки с блузами, однотонные наряды с акцентными аксессуарами и обувью. Для комфортных танцев и сохранности шпилек мы советуем брать с собой сменную обувь на толстом каблуке или плоской подошве.',
    imgName: ['women-1', 'women-2', 'women-3', 'women-4', 'women-5', 'women-6']
  }
]




export default function DressCode() {
  const [isMen, setIsMen] = useState(false)
  return (
    <section id='dress_code' className="dress_code">
      <BranchSVG color={COLOR.branchSilver}/>
      <div className="dress_code--wrapper">
        <h2>Дресс-код</h2>
        <p className='dress_code--text'>Мы очень стараемся сделать наш праздник красивым и интересным!Безусловно, присутствие таких классных и красивых людей автоматически делает праздник прекрасным. Но мы были бы очень рады, если каждый внёс бы свою лепту и поддержал цветовую гамму нашей свадьбы:</p>

        <div className="switch--btn">
          <button className={!isMen ? 'active' : ''} onClick={() => setIsMen(false)}>
            <p className='name--btn'>
              Леди
            </p>

          </button>

          <button className={isMen ? 'active' : ''} onClick={() => setIsMen(true)}>
            <p className='name--btn'>
              Джентельмен
            </p>

          </button>

        </div>

        {/* {isMen
        ? <DressCodeWrapper {...dressCodeInfo[1]} /> : <DressCodeWrapper {...dressCodeInfo[0]} />} */}


        <div className="slider">

          <DressCodeWrapper isMen={!isMen} {...dressCodeInfo[1]} />
          <DressCodeWrapper isMen={isMen} {...dressCodeInfo[0]} />

        </div>
      </div>


    </section>
  )
}
