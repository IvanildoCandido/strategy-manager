import { Container, Logo } from './styled';
import { ImTarget } from 'react-icons/im';
import { CgCardSpades } from 'react-icons/cg';
import { BsSearch } from 'react-icons/bs';

function Navbar() {
  return (
    <Container>
      <Logo>
        Never forget your<span>strategy</span>
      </Logo>
      <section>
        <ImTarget data-tip="ADD A STRATEGY" className="icons" />
        <CgCardSpades data-tip="ADD A CARD" className="icons" />
        <BsSearch data-tip="FIND A WINNER STRATEGY" className="icons" />
      </section>
    </Container>
  );
}

export default Navbar;
