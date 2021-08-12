import { Container, ImageArea, InfoArea } from './styled';
import Card from '../Card/Card';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useEffect, useState } from 'react';
import { getCards, getLevels, getMagics, setCard } from '../../services/api';
import Select from '../Select/Select';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { Alert } from '@material-ui/lab';

function SetCards({ setOpen }) {
  const [cards, setCards] = useState([]);
  const [magics, setMagics] = useState([]);
  const [levels, setLevels] = useState([]);
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [magicType, setMagicType] = useState('');
  const [tumbnail, setTumbnail] = useState('');
  const [message, setMessage] = useState(false);
  const saveCard = () => {
    const card = {
      name,
      level,
      magicType,
      tumbnail: `http://localhost:3001/assets/images/${tumbnail}`,
    };
    setCard(card);
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
      setOpen(false);
    }, 2000);
  };
  useEffect(() => {
    getCards().then((result) => setCards(result.data));
    getLevels().then((result) => setLevels(result.data));
    getMagics().then((result) => setMagics(result.data));
  }, []);
  return (
    <Container>
      <ImageArea>
        <Card
          setValue={setTumbnail}
          type="SET"
          position={'add'}
          size={{ width: 200, height: 280 }}
        />
      </ImageArea>
      <InfoArea>
        <Autocomplete
          onChange={(event, newValue) => setName(newValue)}
          onInputChange={(event, newInputValue) => {
            setName(newInputValue);
          }}
          freeSolo
          options={cards.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="CARD NAME"
              margin="normal"
              variant="outlined"
              uppercase
            />
          )}
        />
        <Select setValue={setLevel} options={levels} label="LEVEL" />
        <Select setValue={setMagicType} options={magics} label="MAGIC TYPE" />
        <Button
          onClick={() => saveCard()}
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
        {message && <Alert severity="success">Card successfully added!</Alert>}
      </InfoArea>
    </Container>
  );
}
export default SetCards;
