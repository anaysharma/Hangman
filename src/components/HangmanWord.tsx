export function HangmanWord() {
  const word = 'test';
  const guessedLetters = ['t'];

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
      {...word.split('').map((letter, index) => (
        <span style={{ borderBlockEnd: '0.1rem solid black' }}>
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
    ></div>
  );
}
