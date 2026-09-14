import { useState } from 'react';

interface ImgProps {
  src: string;
  alt: string;
  /**
   * A méretezés a SZÜLŐ elem dolga — a kép mindig kitölti azt.
   * Itt csak nem ütköző osztályokat adj át (pozíció, object-position, animáció),
   * mert a magasság/szélesség és az object-fit felülírását a Tailwind
   * osztálysorrendje nem garantálja. Az object-fit-hez használd a `fit` propot.
   */
  className?: string;
  loading?: 'lazy' | 'eager';
  fit?: 'cover' | 'contain';
}

/**
 * Kép helykitöltővel: amíg a fájl nincs a /public/assets alatt,
 * a hely megmarad és kiírja, melyik fájl hiányzik.
 */
export default function Img({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fit = 'cover',
}: ImgProps) {
  const [failed, setFailed] = useState(false);
  const base = `h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'}`;

  if (failed) {
    return (
      <div
        className={`flex h-full w-full flex-col justify-end gap-1 bg-[repeating-linear-gradient(135deg,#00000014_0_1px,transparent_1px_9px)] p-4 ${className}`}
      >
        <span className="text-[11px] font-bold text-ink/60">{alt}</span>
        <span className="font-mono text-[9px] break-all text-ink/35">{src}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
      className={`${base} ${className}`}
    />
  );
}
