import type { ReactNode } from 'react';

interface FlexableListSectionProps {
  children: ReactNode;
  title?: string;
  actionSlot?: ReactNode;
}

export function FlexableListSection({
  children,
  actionSlot,
  title,
}: FlexableListSectionProps) {
  return (
    <section>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {title && <h2>{title}</h2>}
        {actionSlot && actionSlot}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {children}
      </div>
    </section>
  );
}
