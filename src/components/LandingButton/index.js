import { Link } from 'react-router-dom';
import { Wrapper, Button } from './LandingButton.styled';

export default function LandingButton({ text }) {
  return (
    <Wrapper>
      <Link to='/category'>
        <Button>{text}</Button>
      </Link>
    </Wrapper>
  );
}
