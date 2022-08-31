import { useContext } from "react";
import Button from "../../components/Button";
import Total from "../../components/Total";
import { CartContext } from "../../providers/cart";
import { Container, ParentContainer, ProductBox } from "./styles";

const Cart = () => {
  const { cart, setCart, removeFromCart } = useContext(CartContext);

  const handleClick = (product) => {
    removeFromCart(product);
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  };

  return (
    <ParentContainer>
      <Container>
        {cart.map((product, index) => (
          <ProductBox key={index}>
            <figure>
              <img src={product.image} alt={product.name} />
            </figure>
            <strong>{product.name}</strong>
            <div>
              <span>{product.priceFormatted}</span>
              <Button onClick={() => handleClick(product)}>Remover</Button>
            </div>
          </ProductBox>
        ))}
      </Container>
      <Total cartProducts={cart} setCartProducts={setCart} />
    </ParentContainer>
  );
};

export default Cart;
