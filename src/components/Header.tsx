import * as React from 'react';
import {Container, Navbar} from 'react-bootstrap';
interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar bg="dark" fixed="top" variant="dark">
    <Container>
    <Navbar.Brand href="/">
        Notes Typescript
      </Navbar.Brand>
    </Container>
    </Navbar>
  );
};

export default Header;
