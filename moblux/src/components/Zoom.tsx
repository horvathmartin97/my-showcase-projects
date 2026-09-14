import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import Img from './Img';

interface ZoomTarget {
  src: string;
  alt: string;
}

const ZoomContext = createContext<(target: ZoomTarget) => void>(() => {});

/** Az eredeti <dialog class="lightbox"> működése, globálisan elérhetően. */
export function ZoomProvider({ children }: { children: ReactNode }) {
  const [target, setTarget] = useState<ZoomTarget | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = useCallback((next: ZoomTarget) => setTarget(next), []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (target && !dialog.open) dialog.showModal();
    if (!target && dialog.open) dialog.close();
  }, [target]);

  const value = useMemo(() => open, [open]);

  return (
    <ZoomContext.Provider value={value}>
      {children}
      <dialog
        ref={dialogRef}
        onClose={() => setTarget(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setTarget(null);
        }}
        className="w-[min(1200px,94vw)] border-0 bg-ink p-0 text-white shadow-[0_20px_80px_#000a] backdrop:bg-black/80 backdrop:backdrop-blur-[7px]"
      >
        <button
          type="button"
          onClick={() => setTarget(null)}
          aria-label="Bezárás"
          className="absolute top-2.5 right-2.5 z-2 h-10 w-10 cursor-pointer border-0 bg-ink text-[23px] text-white"
        >
          ×
        </button>
        {target && (
          <img src={target.src} alt={target.alt} className="max-h-[90vh] w-full object-contain" />
        )}
      </dialog>
    </ZoomContext.Provider>
  );
}

export function useZoom() {
  return useContext(ZoomContext);
}

interface ZoomImageProps {
  src: string;
  alt: string;
  /** Bal alsó sarokfelirat (pl. „Nagyítás ↗”). */
  tag?: string;
  className?: string;
  imgClassName?: string;
  loading?: 'lazy' | 'eager';
  /** Alaprajzokhoz, ahol a teljes rajznak látszania kell. */
  fit?: 'cover' | 'contain';
}

/** Nagyítható fotógomb — az eredeti [data-full] gombok megfelelője. */
export function ZoomImage({
  src,
  alt,
  tag,
  className = '',
  imgClassName = '',
  loading = 'lazy',
  fit = 'cover',
}: ZoomImageProps) {
  const zoom = useZoom();

  return (
    <button
      type="button"
      onClick={() => zoom({ src, alt })}
      aria-label={`${alt} – nagyítás`}
      className={`group relative cursor-zoom-in overflow-hidden border-0 bg-[#ddd] p-0 ${className}`}
    >
      <Img
        src={src}
        alt={alt}
        loading={loading}
        fit={fit}
        className={`transition-transform duration-500 group-hover:scale-[1.025] ${imgClassName}`}
      />
      {tag && <span className="zoom-tag">{tag}</span>}
    </button>
  );
}
