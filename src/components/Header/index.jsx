import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../providers/cart";
import { Container } from "./styles";

const Header = () => {
  const history = useHistory();

  const { cart } = useContext(CartContext);

  const handleClick = (path) => {
    history.push(path);
  };
  return (
    <Container>
      <h2 onClick={() => handleClick("/")}>Kenzie Shop</h2>
      <div>
        {cart.length > 0 && <span>{cart.length}</span>}
        <h3 onClick={() => handleClick("/cart")}>Carrinho</h3>
        <h3 onClick={() => handleClick("/")}>Entrar</h3>
      </div>
    </Container>
  );
};

export default Header;
