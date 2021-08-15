import { Container, Tumbnail } from '../ImageCard/styled';
function StrategyItem({ type, image }) {
  const size =
    type === 0 ? { width: 160, height: 240 } : { width: 140, height: 200 };

  return (
    <Container size={size}>
      <Tumbnail src={image} size={size} />
    </Container>
  );
}

export default StrategyItem;
