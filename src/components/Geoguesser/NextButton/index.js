import { Button } from './NextButton.styled';

export default function NextButton({ id, onClick, text }) {
  return (
    <Button id={id} onClick={onClick}>
      {text}
    </Button>
  );
}
