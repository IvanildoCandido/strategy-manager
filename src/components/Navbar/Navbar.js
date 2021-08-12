import { Container, Logo } from './styled';
import { ImTarget } from 'react-icons/im';
import { CgCardSpades } from 'react-icons/cg';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import FormDialog from '../FormDialog/FormDialog';
import SetCards from '../SetCards/SetCards';

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Logo>
        Never forget your<span>strategy</span>
      </Logo>
      {open && (
        <FormDialog open={open} setOpen={setOpen}>
          <SetCards setOpen={setOpen} />
        </FormDialog>
      )}
      <section>
        <ImTarget data-tip="ADD A STRATEGY" className="icons" />
        <CgCardSpades
          onClick={() => setOpen(!open)}
          data-tip="ADD A CARD"
          className="icons"
        />
        <BsSearch data-tip="FIND A WINNER STRATEGY" className="icons" />
      </section>
    </Container>
  );
}

export default Navbar;
