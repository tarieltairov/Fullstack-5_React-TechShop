import './App.css';
import { Cart } from './components/Cart';
// import Cart from './components/Cart';
// import { Cart } from './components/Cart/Cart';
import { Counter } from './components/Counter';
import { FlexableListSection } from './components/FlexableListSection';
import ProductCard from './components/ProductCard';
import type { Product } from './types/product';

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
  return (
    <div>
      <Cart />

      <hr />

      <Counter />

      <hr />

      <Counter />

      <main>
        <FlexableListSection
          title='Герои продаж'
          actionSlot={<button>Посмотреть еще</button>}
        >
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
        </FlexableListSection>

        <FlexableListSection title='Важная информация'>
          <p>
            В 1860 году естествоиспытатель Антонио Меуччи опубликовал статью в
            итальянской газете Нью-Йорка, в которой рассказал о своём
            изобретении, способном передавать звуки по электрическим проводам.
            Свой аппарат Меуччи назвал Teletrofono. 28 декабря 1871 года он
            подал заявку в Патентное Бюро США на изобретение телефона. Это была
            заявка-уведомление, которая предполагала право на изобретение в
            течение 1 года и возможность полноценно запатентовать устройство на
            17 лет. Он смог показать своё изобретение вице-президенту «American
            District Telegraph Company» мистеру Гранту. Антонио снабдил его
            чертежами, рассказал о своём устройстве, и тот пообещал помочь. Два
            года Антонио обивал пороги Гранта, а тот отделывался обещаниями,
            после чего объявил, что чертежи были утеряны и помочь он ничем не
            может[6]. Антонио не смог найти инвесторов для своего предприятия. 3
            года Антонио Меуччи продлевал заявку, в 1874 году уже не стал этого
            делать[7].
          </p>

          <p>
            Долгое время Александр Белл (1847—1922) работал над созданием
            мультиплексного телеграфа, и в ходе опытов к нему пришла идея
            создания телефона. 2 июня 1875 года он услышал слабое эхо,
            доносящееся из телеграфного приемника, и это событие подтолкнуло его
            к работе в феврале 1876 года над созданием телефона[8].
          </p>
        </FlexableListSection>
      </main>
    </div>
  );
}

export default App;
