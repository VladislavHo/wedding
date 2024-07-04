import { useState } from 'react';

import './navigation.scss'
import BranchSVG from '../SVG/branchSVG';
import { COLOR } from '../../var/var';


interface NavigationItem {
  name: string;
  active: boolean;
  idName: string;
}




export default function Navigation() {

  const [navigation, setNavigation] = useState([
    {
      name: 'Love Story',
      active: true,
      idName: "story"
    },
    {
      name: 'Программа дня',
      active: false,
      idName: "timeline"
    },
    {
      name: 'Дресс-код',
      active: false,
      idName: "dress_code"
    },
    {
      name: 'Пожелания',
      active: false,
      idName: "wishes"
    },
    {
      name: 'Подтвердить присутствие',
      active: false,
      idName: "presence"
    },
    {
      name: 'Контакты координатора',
      active: false,
      idName: "qa"
    }
  ]);






  const handler = (item: NavigationItem) => {

    // setNavigation((prev) => prev.map((el) => ({ ...el, active: false})));
    setNavigation((prev) => prev.map((el) => ({ ...el, active: el.name === item.name })));

    const section = document.getElementById(item.idName);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="navigation" className="navigation">
      {/* <img src="./img/branch-2.png" alt="img" /> */}
      <BranchSVG color={COLOR.branchSilver} />
      <h2>Навигация</h2>
      <ul>
        {navigation.map((item) => (
          <li key={item.name}>
            <button className={item.active ? 'active' : ''} onClick={() => handler(item)}>{item.name}</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

