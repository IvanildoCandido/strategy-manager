import { Container, Tumbnail } from './styled';
import { FiPlusCircle } from 'react-icons/fi';
import { useState } from 'react';

function Card({ size, position, type }) {
  const [filePath, setFilePath] = useState('');
  const changeFile = (target) => {
    const file = document.getElementById(`card-${position}`);
    file.click();
  };
  const cardClick = (target) => {
    if (type === 'SET') {
      changeFile(target);
    }
    if (type === 'CHANGE') {
      //Exibir Modal
    }
  };

  return (
    <Container size={size} onClick={({ target }) => cardClick(target)}>
      {filePath !== '' && (
        <Tumbnail
          src={'http://localhost:3001/assets/images/' + filePath}
          size={size}
        />
      )}
      <input
        id={`card-${position}`}
        type="file"
        hidden={true}
        onChange={({ target }) => setFilePath(target.files[0].name)}
      />
      <FiPlusCircle />
    </Container>
  );
}

export default Card;
