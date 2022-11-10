export function HangmanWord(): JSX.Element {
  const word: string = 'test';
  const guessedLetters: string[] = ['t'];

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
      {word.split('').map((letter, index) => (
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
