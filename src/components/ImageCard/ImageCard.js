import { useEffect, useState } from 'react';
import { Container, Tumbnail } from '../Card/styled';

function ImageCard({ size, position, setOpen, source, setSelected }) {
  const [target, setTarget] = useState('');
  const [pos, setPos] = useState('');
  const src = 'http://localhost:3001/assets/no-file.png';
  useEffect(() => {
    if (target.src === src && target.id === `image-${pos}`) {
      target.setAttribute('src', source);
    }
  }, [source]);
  const cardClick = async (target) => {
    setOpen(true);
    setTarget(target);
    setSelected(position);
    setPos(position);
  };
  return (
    <Container size={size} onClick={({ target }) => cardClick(target)}>
      <Tumbnail
        id={`image-${position}`}
        onClick={({ target }) => cardClick(target)}
        src={src}
        size={size}
      />
    </Container>
  );
}

export default ImageCard;
