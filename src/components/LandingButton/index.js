import { Wrapper, Button } from './LandingButton.styled';

export default function LandingButton({ text }) {
  return (
    <Wrapper>
      <Button>{text}</Button>
    </Wrapper>
  );
}
