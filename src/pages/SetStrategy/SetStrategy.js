import { useEffect, useState } from 'react';
import ImageCard from '../../components/ImageCard/ImageCard';
import FormDialog from '../../components/FormDialog/FormDialog';
import Navbar from '../../components/Navbar/Navbar';
import Select from '../../components/Select/Select';
import {
  getCardsByLevel,
  getImage,
  getLevels,
  getMagics,
  getManas,
  getRoles,
  postStrategy,
} from '../../services/api';
import { BtnSave, Container } from './styled';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
const cardsSelection = [];
function SetStrategy() {
  const [mana, setMana] = useState([]);
  const [magics, setMagics] = useState([]);
  const [roles, setRoles] = useState([]);
  const [manaLimit, setManaLimit] = useState(null);
  const [magicType, setMagicType] = useState(null);
  const [roleType, setRoleType] = useState(null);
  const [open, setOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [levels, setLevels] = useState([]);
  const [level, setLevel] = useState('');
  const [source, setSource] = useState('');
  const [selected, setSelected] = useState(-1);
  const [btnActivation, setbtnActivation] = useState(true);

  useEffect(() => {
    getManas().then((result) => setMana(result.data));
    getMagics().then((result) => setMagics(result.data));
    getRoles().then((result) => setRoles(result.data));
    getLevels().then((result) => setLevels(result.data));
  }, []);
  useEffect(() => {
    getCardsByLevel(level).then((result) => setCards(result.data));
  }, [level]);
  useEffect(() => {
    if (manaLimit && magicType && roleType) {
      setbtnActivation(false);
    }
  }, [manaLimit, magicType, roleType]);
  const getCardImage = async (name) => {
    const image = await getImage(encodeURI(name), level);
    const itemCard = {
      name,
      level,
    };
    cardsSelection[selected] = itemCard;
    setSource(image);
    setOpen(false);
  };
  const saveStrategy = async () => {
    const strategy = {
      starQtd: 0,
      manaLimit,
      magicType,
      roleType,
      cards: cardsSelection,
    };
    await postStrategy(strategy);
  };
  return (
    <>
      <Navbar />
      <Container>
        <section className="control-bar">
          <Select setValue={setManaLimit} options={mana} label="MANA LIMIT" />
          <Select setValue={setMagicType} options={magics} label="MAGIC TYPE" />
          <Select setValue={setRoleType} options={roles} label="ROLE TYPE" />
        </section>
        <section className="card-controls">
          <ImageCard
            setSelected={setSelected}
            source={source}
            open={open}
            setOpen={setOpen}
            position={0}
            size={{ width: 200, height: 280 }}
          />
          <ImageCard
            setSelected={setSelected}
            source={source}
            open={open}
            setOpen={setOpen}
            position={1}
            size={{ width: 160, height: 240 }}
          />
          <ImageCard
            setSelected={setSelected}
            source={source}
            open={open}
            setOpen={setOpen}
            position={2}
            size={{ width: 160, height: 240 }}
          />
          <ImageCard
            setSelected={setSelected}
            source={source}
            open={open}
            setOpen={setOpen}
            position={3}
            size={{ width: 160, height: 240 }}
          />
          <ImageCard
            setSelected={setSelected}
            source={source}
            open={open}
            setOpen={setOpen}
            position={4}
            size={{ width: 160, height: 240 }}
          />
          <ImageCard
            setSelected={setSelected}
            source={source}
            open={open}
            setOpen={setOpen}
            position={5}
            size={{ width: 160, height: 240 }}
          />
          <ImageCard
            setSelected={setSelected}
            source={source}
            open={open}
            setOpen={setOpen}
            position={6}
            size={{ width: 160, height: 240 }}
          />
        </section>
        <BtnSave disabled={btnActivation} onClick={() => saveStrategy()}>
          SAVE
        </BtnSave>
        {open && (
          <FormDialog open={open} setOpen={setOpen}>
            <Select setValue={setLevel} options={levels} label="LEVEL" />
            <Autocomplete
              onChange={(_event, newValue) => getCardImage(newValue)}
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
          </FormDialog>
        )}
      </Container>
    </>
  );
}

export default SetStrategy;
