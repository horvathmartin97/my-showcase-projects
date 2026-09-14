import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
}

/** Az eredeti IntersectionObserver-es .reveal animáció. */
export default function Reveal({ children, className = '', as: Tag = 'div', id }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <Tag ref={ref} id={id} className={`reveal ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </Tag>
  );
}
