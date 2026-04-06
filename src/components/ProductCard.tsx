import type { Product } from '../types/product';

type ProductCardProps = Product;

const ProductCard = ({
  title,
  category = 'без категорий',
  imgUrl,
  price,
}: ProductCardProps) => {
  return (
    <div className='card'>
      <img src={imgUrl} alt='card' />
      <h3>{title}</h3>
      <p>категория: {category}</p>
      <strong>{price}</strong>
      <button onClick={() => console.log(`The ${title} clicked `)}>
        В корзину
      </button>
    </div>
  );
};

export default ProductCard;
