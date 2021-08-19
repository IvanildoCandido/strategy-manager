import { Container, ImageArea, InfoArea } from './styled';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useEffect, useState } from 'react';
import {
  getCardByName,
  getCardsByServer,
  getImageFromServer,
  getLevels,
  setCard,
} from '../../services/api';
import Select from '../Select/Select';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { Alert } from '@material-ui/lab';
import ImageCard from '../ImageCard/ImageCard';

function SetCards({ setOpen }) {
  const [cards, setCards] = useState([]);
  const [editions, setEditions] = useState([]);
  const [edition, setEdition] = useState('');
  const [levels, setLevels] = useState([]);
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [magicType, setMagicType] = useState('');
  const [tumbnail, setTumbnail] = useState('');
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);
  const [source, setSource] = useState(
    'http://localhost:3001/assets/no-file.png',
  );
  const saveCard = async () => {
    const { data } = await getCardByName(name);
    if (data.length > 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }
    const card = {
      name,
      level,
      magicType,
      tumbnail,
    };
    setCard(card);
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
      setOpen(false);
    }, 2000);
  };
  useEffect(() => {
    getLevels().then((result) => setLevels(result.data));
    getCardsByServer().then((result) => setCards(result));
  }, []);
  useEffect(() => {
    if (edition === null) {
      return;
    }
    getImageFromServer(name, edition, level).then((result) => {
      setSource(result.config.url);
      setTumbnail(result.config.url);
    });
  }, [edition]);
  useEffect(() => {
    if (cards.length > 0) {
      const selectedCard = cards.filter((result) => result.name === name);
      setEditions(selectedCard[0].editions);
    }
  }, [name]);
  return (
    <Container>
      <ImageArea>
        <ImageCard
          position={-1}
          source={source}
          size={{ width: 200, height: 280 }}
        />
      </ImageArea>
      <InfoArea>
        <Autocomplete
          onChange={(event, newValue) => setName(newValue)}
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
        <Select setValue={setEdition} options={editions} label="EDITION" />
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
        {error && <Alert severity="error">Card already registered!</Alert>}
      </InfoArea>
    </Container>
  );
}
export default SetCards;
