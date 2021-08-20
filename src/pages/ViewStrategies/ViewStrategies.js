import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Select from '../../components/Select/Select';
import StrategyItem from '../../components/StrategyItem/StrategyItem';
import {
  filterStrategies,
  getMagics,
  getManas,
  getRoles,
  getStrategies,
} from '../../services/api';
import { BtnFilter, Container, StrategyArea } from './styled';
import FIRE from '../../assets/icons/img_element_fire.svg';
import WATER from '../../assets/icons/img_element_water.svg';
import EARTH from '../../assets/icons/img_element_earth.svg';
import LIFE from '../../assets/icons/img_element_life.svg';
import DEATH from '../../assets/icons/img_element_death.svg';
import DRAGON from '../../assets/icons/img_element_dragon.svg';

function ViewStrategies() {
  const [mana, setMana] = useState([]);
  const [magics, setMagics] = useState([]);
  const [roles, setRoles] = useState([]);
  const [strategies, setStrategies] = useState([]);
  const [manaLimit, setManaLimit] = useState(null);
  const [magicType, setMagicType] = useState(null);
  const [roleType, setRoleType] = useState(null);

  const filter = () => {
    filterStrategies(manaLimit, magicType, roleType).then((result) =>
      setStrategies(result.data),
    );
  };

  useEffect(() => {
    getManas().then((result) => setMana(result.data));
    getMagics().then((result) => setMagics(result.data));
    getRoles().then((result) => setRoles(result.data));
    getStrategies().then((result) => setStrategies(result.data));
  }, []);
  const setIconStrategy = (magicType) => {
    switch (magicType) {
      case 'FIRE':
        return FIRE;
      case 'WATER':
        return WATER;
      case 'EARTH':
        return EARTH;
      case 'LIFE':
        return LIFE;
      case 'DEATH':
        return DEATH;
      case 'DRAGON':
        return DRAGON;
      default:
        return;
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <section className="control-bar">
          <Select setValue={setManaLimit} options={mana} label="MANA LIMIT" />
          <Select setValue={setMagicType} options={magics} label="MAGIC TYPE" />
          <Select setValue={setRoleType} options={roles} label="ROLE TYPE" />
          <BtnFilter onClick={() => filter()}>Filter</BtnFilter>
        </section>
        <section className="card-controls">
          {strategies.length > 0 &&
            strategies.map((strategy, index) => {
              return (
                <StrategyArea key={index}>
                  <div className="icon-mana">
                    <h1>{strategy.manaLimit}</h1>
                  </div>
                  <img
                    className="icon-type"
                    src={setIconStrategy(strategy.magicType)}
                    alt={`icon-${strategy.magicType}`}
                  />
                  {strategy.cards.map((card, index) => (
                    <StrategyItem key={index} type={index} image={card.image} />
                  ))}
                </StrategyArea>
              );
            })}
        </section>
      </Container>
    </>
  );
}

export default ViewStrategies;
