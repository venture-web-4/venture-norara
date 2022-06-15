import { Button } from './AlphaButton.styled';

export default function AlphaButton({ value, clicked, onClick }) {
  return (
    <>
      <Button clicked={clicked} onClick={onClick} disabled={clicked}>
        {value}
      </Button>
    </>
  );
}
