import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Select from '../../components/Select/Select';
import { getMagics, getManas, getRoles } from '../../services/api';
import { Container } from './styled';

function ViewStrategies() {
  const [mana, setMana] = useState([]);
  const [magics, setMagics] = useState([]);
  const [roles, setRoles] = useState([]);
  const [manaLimit, setManaLimit] = useState(null);
  const [magicType, setMagicType] = useState(null);
  const [roleType, setRoleType] = useState(null);

  useEffect(() => {
    getManas().then((result) => setMana(result.data));
    getMagics().then((result) => setMagics(result.data));
    getRoles().then((result) => setRoles(result.data));
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <section className="control-bar">
          <Select setValue={setManaLimit} options={mana} label="MANA LIMIT" />
          <Select setValue={setMagicType} options={magics} label="MAGIC TYPE" />
          <Select setValue={setRoleType} options={roles} label="ROLE TYPE" />
        </section>
        <section className="card-controls"></section>
      </Container>
    </>
  );
}

export default ViewStrategies;
