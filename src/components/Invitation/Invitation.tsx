import { COLOR } from '../../var/var'
import BranchSVG from '../SVG/branchSVG'
import './invitation.scss'
export default function Invitation() {
  return (
    <section id='invitation' className='invitation'>
      <BranchSVG color={COLOR.branchViolet} />
      <BranchSVG color={COLOR.branchViolet} />

      <h2>Кажется, свадьба намечается...</h2>
      <div className="invitation-wrapper">
        <h4>Дорогой, Даня!</h4>
        <p>Мы начали наш совместный путь много лет назад. Вместе переживали радости и преодолевали испытания.</p>

        <p>Мы верим в то, что шли правильным путём, ведь наша любовь только укрепилась.</p>
        <p>Теперь мы готовы сделать следующий шаг и вступить в брак.</p>
        <p>Этот важный для нас день мы хотим отпраздновать в кругу близких нам людей.</p>
        <p>И присутствие именно читающих эти строки людей сделает наш день ещё более особенным.</p>
      </div>
    </section>
  )
}







