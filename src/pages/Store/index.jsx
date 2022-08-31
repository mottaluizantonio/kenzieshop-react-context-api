import { useContext } from "react";
import Button from "../../components/Button";
import { CartContext } from "../../providers/cart";
import { ProductsContext } from "../../providers/products";
import { Container, ParentContainer, ProductBox } from "./styles";

const Store = () => {
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  return (
    <ParentContainer>
      <Container>
        {products.map((product, index) => (
          <ProductBox key={index}>
            <figure>
              <img src={product.image} alt={product.name} />
            </figure>
            <strong>{product.name}</strong>
            <span>{product.priceFormatted}</span>
            <Button onClick={() => addToCart(product)}>Comprar</Button>
          </ProductBox>
        ))}
      </Container>
    </ParentContainer>
  );
};

export default Store;
