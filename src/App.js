import React , {useEffect,useState, useRef} from 'react';
import './App.css';

function App() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinuts, setTimerMinuts] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();
  const startTimer = ()=> {
    const countdownDate = new Date('May 23, 2021 01:58:00').getTime();
    interval= setInterval(() => {
      const now = new Date();
      const distance= countdownDate- now;
      const days = Math.floor(  distance / (1000  * 60 * 60 * 24) );
      const hours = Math.floor(( distance % (1000  * 60 * 60 * 24)) / (1000 * 60 * 60) );
      const miniuts = Math.floor(( distance % (1000  * 60 * 60)) / (1000 * 60) );
      const seconds = Math.floor(( distance % (1000  * 60 ))/ 1000 );
      if (distance < 0 ){
        clearInterval(interval.current);
      }else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinuts(miniuts);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(()=> {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  });


  return (
      <section className="timer-container">
        <section className="timer">
          <div>
            <span className="mdi mdi-calendar-clock timer-icon"></span>
            <h2>Coundown Timer</h2>
            <p>lorem ipsum abcde hahaah hello ifeifji zzz hello</p>
          </div>
          <div>
            <section>
              <p>{timerDays}</p>
              <p><small>Days</small></p>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <p><small>Hours</small></p>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinuts}</p>
              <p><small>Minuts</small></p>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <p><small>Seconds</small></p>
            </section>
          </div>
        </section>
      </section> 
  );
}

export default App;
