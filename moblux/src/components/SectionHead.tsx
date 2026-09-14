import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadProps {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Sötét háttéren világos szöveggel. */
  inverse?: boolean;
  className?: string;
  children?: ReactNode;
}

/** Az eredeti .section-head: 1.35fr / .65fr rács, alul igazítva. */
export default function SectionHead({
  eyebrow,
  title,
  lead,
  inverse = false,
  className = '',
  children,
}: SectionHeadProps) {
  return (
    <Reveal
      as="header"
      className={`mb-[50px] grid items-end gap-[70px] max-lg:grid-cols-1 max-lg:gap-[22px] lg:grid-cols-[1.35fr_0.65fr] ${className}`}
    >
      <div>
        <p className={`eyebrow ${inverse ? '' : 'eyebrow-dark'}`}>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children ?? (
        <p className={`text-[17px] ${inverse ? 'text-[#999]' : 'text-muted'}`}>{lead}</p>
      )}
    </Reveal>
  );
}
