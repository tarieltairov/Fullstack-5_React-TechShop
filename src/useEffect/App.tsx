// useEffect - это хук, который позволяет выполнять побочные действия в React-компоненте

import { useEffect, useState } from 'react';
import { Users } from './Users';
import { Button } from './Button';

// import { useEffect, useState } from 'react';
// import { Button } from './Button';

// побочные эффекты:
// - запросы к API
// - работа с localStorage (память браузера)
// - подписки (events, websockets)
// - ручное изменение DOM
// - setTimeout, setInterval - не забываем очищать при unmout

// Life cycle - жизненный цикл

export function App() {
  const [isVisible, setIsVisible] = useState(true);
  // useEffect(() => {
  //эффект
  // }, [dependencies]);

  useEffect(() => {
    console.log('timer started');
    const timeoutId = setTimeout(() => setIsVisible(false), 5000);
    return () => {
      clearTimeout(timeoutId);
    };
    // setInterval(() => setIsVisible((prev) => !prev), 3000);
  }, []);

  return (
    <div>
      <h1>lesson useEffect</h1>
      {isVisible && <Button />}

      <Users />
    </div>
  );
}
