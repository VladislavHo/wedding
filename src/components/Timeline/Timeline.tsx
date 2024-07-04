import { COLOR } from '../../var/var'
import BranchSVG from '../SVG/branchSVG'
import TImelineWrapper from './TImelineWrapper'
import './timeline.scss'


const timeline_info = [
  {
    id: 1,
    title: '11:20 - Регистрация',
    description: ['Дворец Бракосочетания №1, Английская набережная, д. 28 💍', 'Чтобы не пропустить торжество - лучше приходить заранее, минут за 20 ⌛️'],
    map: true,
    mapY: ``,
    svg_name: 'wedding-rings',
    line: true
  },
  {
    id: 2,
    title: '12:30 - Прогулка',
    description: ['Централизованная прогулка с развлекательной программой 🚍'],
    map: false,
    svg_name: 'marker',
    line: true
  },
  {
    id: 3,
    title: '15:30 - Welcome фуршет',
    description: ['Банкетный зал «Кирочный двор», Кирочная ул. д. 36Б 🥂'],
    map: true,
    mapY: ``,
    svg_name: 'cheers',
    line: true
  },
  {
    id: 4,
    title: '16:00 - Банкет',
    description: ['Вкусный обед с интересной программой от потрясающего ведущего 🎙'],
    map: false,
    svg_name: 'dinner',
    line: true
  },
  {
    id: 5,
    title: '20:00 - Торт',
    description: ['Торжественная презентация тортика, самая сладкая часть дня 😋'],
    map: false,
    svg_name: 'cake',
    line: true
  },
  {
    id: 6,
    title: '22:00 - Окончание вечера',
    description: ['Вместе выйдем на улицу и зажжём во всех смыслах этого слова 🎉'],
    map: false,
    svg_name: 'firework',
    line: false
  }

]
export default function Timeline() {

  return (
    <section id='timeline' className="timeline">
      {/* <img className='timeline--img' src="./img/branch-2.png" alt="img" />
      <img className='timeline--img' src="./img/branch-2.png" alt="img" /> */}
      <BranchSVG color={COLOR.branchSilver} />

      <BranchSVG color={COLOR.branchSilver} />

      <div className="timeline--wrapper">
        <h2>Программа свадебного дня</h2>
        <div className="timeline--content">

          {timeline_info && timeline_info.map((item) => <TImelineWrapper key={item.id} {...item} />)}
        </div>
      </div>

    </section>
  )
}
