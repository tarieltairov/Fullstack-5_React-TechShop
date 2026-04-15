import { useEffect, useState } from 'react';

export function Button() {
  // 1) пустой массив зависимостей = callback выполнится только один раз (при монтировании)
  // useEffect(() => {
  //   console.log('Компонент смонтирован(родился/отобразился)');
  // }, []);

  // 2) массив с зависимостями внутри = callback сработает каждый раз,
  // когда count (state) меняется + также отработает в начале на рождение компонента
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log('action');
  // }, [count]);

  // 3) очистка эффекта:
  // return - это функция очистки сработает на unmount (смерть) компоненты

  useEffect(() => {
    console.log('mount - рождение');

    return () => {
      console.log('unmount');
    };
  }, []);

  // 4) не делаем так - всегда пишем второй аргумент (массив зависимостей)
  // useEffect(()=>{
  // fetchData()
  // })

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <p>Count: {count}</p>
      <button>click me</button>
    </div>
  );
}
