const HEAD: JSX.Element = (
  <div
    style={{
      width: '30px',
      height: '30px',
      borderRadius: '100%',
      border: '10px solid white',
      position: 'absolute',
      top: '30px',
      right: '-20px',
    }}
  />
);

const BODY: JSX.Element = (
  <div
    style={{
      width: '10px',
      height: '100px',
      background: 'white',
      position: 'absolute',
      top: '70px',
      right: 0,
    }}
  />
);

const RIGHT_ARM: JSX.Element = (
  <div
    style={{
      width: '80px',
      height: '10px',
      background: 'white',
      position: 'absolute',
      top: '100px',
      right: '-80px',
      rotate: '-30deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const LEFT_ARM: JSX.Element = (
  <div
    style={{
      width: '80px',
      height: '10px',
      background: 'white',
      position: 'absolute',
      top: '100px',
      right: '10px',
      rotate: '30deg',
      transformOrigin: 'right bottom',
    }}
  />
);

const RIGHT_LEG: JSX.Element = (
  <div
    style={{
      width: '100px',
      height: '10px',
      background: 'white',
      position: 'absolute',
      top: '160px',
      right: '-100px',
      rotate: '60deg',
      transformOrigin: 'left top',
    }}
  />
);

const LEFT_LEG: JSX.Element = (
  <div
    style={{
      width: '100px',
      height: '10px',
      background: 'white',
      position: 'absolute',
      top: '160px',
      right: '10px',
      rotate: '-60deg',
      transformOrigin: 'right top',
    }}
  />
);

const BODY_PARTS: JSX.Element[] = [
  HEAD,
  BODY,
  RIGHT_ARM,
  LEFT_ARM,
  RIGHT_LEG,
  LEFT_LEG,
];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps): JSX.Element {
  return (
    <div style={{ position: 'relative' }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          position: 'absolute',
          height: '40px',
          width: '10px',
          background: 'white',
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: '10px',
          width: '150px',
          background: 'white',
          marginLeft: '45px',
        }}
      />
      <div
        style={{
          height: '300px',
          width: '10px',
          background: 'white',
          marginLeft: '45px',
        }}
      />
      <div style={{ height: '10px', width: '200px', background: 'white' }} />
    </div>
  );
}
