import './timeline.scss'

import { useEffect, useState } from 'react';

import { useInView } from "react-intersection-observer";

import YMap1 from '../YMap/YMap1';
import YMap2 from '../YMap/YMap2';
export default function TImelineWrapper({ ...props }) {

  const { id, title, description, map, svg_name, line } = props
  const [isAvtive, setIsActive] = useState(false)
  const [activeButton, setActiveButton] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.5
  });

  useEffect(() => {
    if (isAvtive || inView) {

      setIsActive(true)
    }
  }, [inView, isAvtive])


  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
    setActiveButton(isMobile)
  }, [])



  return (
    <>
      <div className={`timeline--info ${isAvtive ? 'active' : ''}`} ref={ref}>

        <div className="timeline--info-line">

          <img src={`./svg/${svg_name}.svg`} alt="icon" />
          {line && <div className="line"></div>}

        </div>

        <div className="timeline--info-time">
          <h4>{title}</h4>
          {description.map((item: string, index: number) => <p key={index}>{item}</p>)}
          {map && <div className="">

            {id === 1 ?
              <>
                <div className="map--wrapper">
                  <div className="timeline--info-time-map">
    
                    <YMap1></YMap1>
                  </div>
                  {activeButton && <button>Построить маршрут</button>}

                </div>

              </>
              :
              <>
                <div className="map--wrapper">
                  <div className="timeline--info-time-map">
                    <YMap2></YMap2>
                  </div>
                  {activeButton && <button>Построить маршрут</button>}
                </div>

              </>
            }
          </div>}

        </div>
      </div>

    </>
  )
}
