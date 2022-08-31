import formatValue from "../../utils/formatValue";
import { Container } from "./styles";

const Total = ({ cartProducts, setCartProducts }) => {
  const total = cartProducts.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  const handleClick = () => {
    setCartProducts([]);
    localStorage.clear();
  };

  return (
    <Container>
      <h2>Resumo do pedido:</h2>
      <span>{cartProducts.length} produto(s)</span>
      <span>{formatValue(total)}</span>
      <button onClick={handleClick}>Finalizar pedido</button>
    </Container>
  );
};

export default Total;
