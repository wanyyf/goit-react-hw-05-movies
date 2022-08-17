import { Header, Link } from '../App.styled';
const HeaderPart = () => {
  return (
    <Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Movies">Movies</Link>
      </nav>
    </Header>
  );
};
export default HeaderPart;
