import { useState } from 'react';

export function Cart() {
  const [products, setProducts] = useState<number[]>([1, 2, 3]);

  const addNewProduct = () => {
    setProducts((prevArr) => [...prevArr, prevArr.length + 1]);
  };

  const onDeleteProduct = (productInd: number) => {
    setProducts((prevArr) =>
      prevArr.filter((_, index) => index !== productInd),
    );
  };

  return (
    <div>
      <div>Корзина </div>

      <button onClick={addNewProduct} style={{ marginBottom: '20px' }}>
        добавить новый продукт
      </button>

      {products.map((item, index) => (
        <div
          key={index}
          style={{
            width: '100px',
            height: '40px',
            background: 'red',
            marginBottom: '10px',
          }}
        >
          {item}

          <button onClick={() => onDeleteProduct(index)}>удалить</button>
        </div>
      ))}
    </div>
  );
}
