import './timeline.scss'
import { YMaps, Map } from '@pbe/react-yandex-maps';
import { useEffect, useState } from 'react';
// import React from 'react';
import { useInView } from "react-intersection-observer";
export default function TImelineWrapper({ ...props }) {

  const { id, title, description, map, svg_name, line } = props
  const [isAvtive, setIsActive] = useState(false)


  const { ref, inView  } = useInView({
    threshold: 0.5
  });


  useEffect(() => {
    if (isAvtive || inView) {

      setIsActive(true)
    }
  }, [inView, isAvtive])



  return (
    <>
      <div  className={`timeline--info ${isAvtive ? 'active' : ''}`} ref={ref}>

        <div className="timeline--info-line">

          <img src={`./svg/${svg_name}.svg`} alt="icon" />
          {line && <div className="line"></div>}

        </div>

        <div className="timeline--info-time">
          <h4>{title}</h4>
          {description.map((item: string, index: number) => <p key={index}>{item}</p>)}
          {map && <div className="timeline--info-time-map">
            {id === 1 ? 
              <YMaps>
                <Map
                  defaultState={{ center: [59.934014, 30.293828], zoom: 17 }}
                  width='100%'
                  height='100%'
                >
                </Map>
              </YMaps> : 
              <YMaps>
                <Map
                  defaultState={{ center: [59.944449, 30.364449], zoom: 17 }}
                  width='100%'
                  height='100%'
                >
                </Map>
              </YMaps>
            }
          </div>}

        </div>
      </div>

    </>
  )
}
