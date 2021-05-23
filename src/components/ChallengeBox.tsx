import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css';

const {
  challengeBoxContainer,
  challengeActive,
  challengeNotActive,
  challengeFailedButton,
  challengeSucceededButton,
} = styles;

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } =
    useContext(ChallengesContext);

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengesucceeded() {
    completeChallenge();
    resetCountdown();
  }
  function handleChanllengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={challengeBoxContainer}>
      {activeChallenge ? (
        <div className={challengeActive}>
          <header>Ganhe {activeChallenge.amount}xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={challengeFailedButton}
              onClick={handleChanllengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={challengeSucceededButton}
              onClick={handleChallengesucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={challengeNotActive}>
          <strong>Finalize um ciclo para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Complete-os e ganhe experiência e avance de level.
          </p>
        </div>
      )}
    </div>
  );
}
