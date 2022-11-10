type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
}: HangmanWordProps): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        gap: '.25rem',
        fontSize: '5rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}
    >
      {wordToGuess.split('').map((letter, index) => (
        <span style={{ borderBlockEnd: '10px solid black' }} key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? 'visible'
                : 'hidden',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
