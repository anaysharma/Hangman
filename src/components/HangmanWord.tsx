import styles from './HangmanWord.module.css';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps): JSX.Element {
  return (
    <div className={styles.wordDiv}>
      {wordToGuess.split('').map((letter, index) => (
        <span key={index} className={styles.letterSpan}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? 'visible'
                  : 'hidden',
              color:
                !guessedLetters.includes(letter) && reveal
                  ? '#ff6688'
                  : '#66ff88',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
