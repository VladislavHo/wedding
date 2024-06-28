import { useEffect, useState } from "react"
import "./timer.scss"

export default function Timer() {
  // Например до 30 августа 2024года
  const targetDate = new Date(2024, 7, 30).getTime()
  // const [days, setDays] = useState(0);
  // const [hours, setHours] = useState(0);
  // const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState(0);

  const [dateCounter, setDateCounter] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })


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
    <section className="timer">
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
