// hooks (хуки) - это вспомогательные фукнции (инструменты от реакт) для работы с отрицовкой, с состоянием
// и другим действиями в React

import { useState } from 'react';

// Правило хуков:
// 1) хуки есть встроенные в реакт и наши кастомные (можем строить хуки с помощью  встроенных)
// 2) все хуки должны называться с префиксом useName
// 3) хуки можно использовать только внутри компонентов

export function Counter() {
  // useState - помогает нам работать с State в React

  // State (состояние) - это спец переменная React. При её изменении React автоматически перерисовывает компонент
  // с новыми данными

  const [count, setCount] = useState<number>(0); // 0 - можно передавать initialValue (начальное значение)

  // count - состояние (State)
  // setCount - функция которая будет менять состояние "count"

  // setCount(0) - перезаписывает состояние полностью
  // setCount((prev) => prev + 1) - делаем операцию с предыдущим значением

  const handleDecrement = () => {
    setCount((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  };

  return (
    <div>
      <p>Товаров в корзине: {count}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={() => setCount(0)}>Сбросить</button>
    </div>
  );
}

// Соглашение по именованию

// Всегда пара: value=>setValue

// Примеры:
// [count, setCount], [isOpen, setIsOpen], [products, setProducts]
