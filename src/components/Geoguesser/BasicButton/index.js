import { Button } from './BasicButton.styled';

export default function BasicButton({ onClick, text }) {
  return <Button onClick={onClick}>{text}</Button>;
}
