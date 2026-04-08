// Card - компонент-обертка с children

import type { ReactNode } from 'react';

interface CardProps {
  title?: string; //? = необязательный prop
  children: ReactNode; //ReactNode - любой JSX-контент
}

export function Card({ title, children }: CardProps) {
  return (
    <div
      className='card'
      style={{
        border: '1px solid red',
        borderRadius: '10px',
        padding: '10px',
      }}
    >
      {/* Рендерим title только если он передан */}
      {title && <h2>{title}</h2>}

      {/* children - слот, сюда попадает всё между тегами <Card>...</Card> */}
      <div className='card-body'>{children}</div>
    </div>
  );
}
