import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';
import Select from '../../components/Select/Select';
import { getMagics, getManas, getRoles } from '../../services/api';
import { Container } from './styled';
function SetStrategy() {
  const [mana, setMana] = useState([]);
  const [magics, setMagics] = useState([]);
  const [roles, setRoles] = useState([]);

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
          <Select options={mana} label="MANA LIMIT" />
          <Select options={magics} label="MAGIC TYPE" />
          <Select options={roles} label="ROLE TYPE" />
        </section>
        <section className="card-controls">
          <Card position={0} size={{ width: 200, height: 280 }} />
          <Card position={1} size={{ width: 160, height: 240 }} />
          <Card position={2} size={{ width: 160, height: 240 }} />
          <Card position={3} size={{ width: 160, height: 240 }} />
          <Card position={4} size={{ width: 160, height: 240 }} />
          <Card position={5} size={{ width: 160, height: 240 }} />
          <Card position={6} size={{ width: 160, height: 240 }} />
        </section>
        
      </Container>
    </>
  );
}

export default SetStrategy;
