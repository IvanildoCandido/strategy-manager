import { Container, Logo } from './styled';
import { ImTarget } from 'react-icons/im';
import { CgCardSpades } from 'react-icons/cg';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import FormDialog from '../FormDialog/FormDialog';
import SetCards from '../SetCards/SetCards';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Link to="/">
        <Logo>
          Never forget your<span>strategy</span>
        </Logo>
      </Link>
      {open && (
        <FormDialog open={open} setOpen={setOpen}>
          <SetCards setOpen={setOpen} />
        </FormDialog>
      )}
      <section>
        <Link to="/">
          <ImTarget data-tip="ADD A STRATEGY" className="icons" />
        </Link>
        <CgCardSpades
          onClick={() => setOpen(!open)}
          data-tip="ADD A CARD"
          className="icons"
        />
        <Link to="/strategies">
          <BsSearch data-tip="FIND A WINNER STRATEGY" className="icons" />
        </Link>
      </section>
    </Container>
  );
}

export default Navbar;
