import './App.css';
import ProductCard from './components/ProductCard';
import type { Product } from './types/product';

// Компонент - главная единица React. Все приложение - это дерево компонентов

// tsx/jsx - синтаксис для описания UI прямо внутри JavaScript функции

// 3 правила компонента:
// - Компонент - это обычная JS функция
// - Название обязательно с большой буквы: ProductCard, а не productCard
// - Функция возвращает JSX - HTML-подобный синтаксис

const products: Product[] = [
  {
    price: 100000,
    title: 'Iphone 17',
    imgUrl:
      'https://login.kg/image/cache/catalog/new/Phones/Apple/17%20Pro/2-500x400.jpg',
    category: 'Смартфоны',
  },
  {
    price: 60000,
    title: 'Samsung galaxy ultra s26',
    imgUrl:
      'https://object.pscloud.io/cms/cms/Photo/img_0_77_6363_0_6_3FyUhn_320.webp',
    category: 'Смартфоны',
  },
];

function App() {
  // обычный js код до return
  const storeName = 'TechShop';
  const count = 42;

  return (
    <div>
      <h1>SPA - single page application</h1>

      <h2>Название магазина - {storeName}</h2>

      <p>Товаров в каталоге: {count}</p>

      <div className='product-list'>
        {products.map((item, index) => {
          return (
            <ProductCard
              key={index}
              price={item.price}
              title={item.title}
              imgUrl={item.imgUrl}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
