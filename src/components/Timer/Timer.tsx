import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import "./timer.scss"

type TimerProps = {

  setStateButtonUp: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Timer({ setStateButtonUp }: TimerProps) {
  // Например до 30 августа 2024года
  const targetDate = new Date(2024, 7, 30).getTime()


  const [dateCounter, setDateCounter] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const { ref, inView, entry } = useInView({
    threshold: 1
  })

  useEffect(() => {
    if (entry && entry.intersectionRect) {


      if ((entry.intersectionRect.top * 2) <= 0) {
        setStateButtonUp(true)
      } else {
        setStateButtonUp(false)
      }
    }
  }, [inView]);


  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now.getTime();

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // При нулевом времени остановим интервал
        clearInterval(interval);
      } else {
        // Обновим значения при каждом вызове
        setDateCounter({ days, hours, minutes, seconds });
      }
    }, 1000);
  }, [targetDate]);

  return (
    <section ref={ref} className="timer">
      <div className="timer-wrapper">
        <div className="timer-wrapper--counter">
          <p>{dateCounter.days}</p>
          <p>дней</p>
        </div>
        <div className="timer-wrapper--counter">
          <p>{dateCounter.hours}</p>
          <p>часов</p>
        </div>
        <div className="timer-wrapper--counter">
          <p>{dateCounter.minutes}</p>
          <p>минут</p>
        </div>
        <div className="timer-wrapper--counter">

          <p>{dateCounter.seconds}</p>
          <p>секунд</p>
        </div>




      </div>

    </section>
  );
}
