import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.css';

const { countdownContainer, countdownButton, countdownButtonActive } = styles;

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={countdownButton}>
          Ciclo encerrado
          <img src="icons/check.svg" alt="Completo!" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${countdownButton} ${countdownButtonActive} `}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={countdownButton}
              onClick={startCountdown}
            >
              Inciar ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
