import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MODEL_DETAILS } from '../data/models';

interface ModelModalProps {
  detailKey: string | null;
  onClose: () => void;
}

/** Az eredeti <dialog class="model-modal"> gyorsnézete. */
export default function ModelModal({ detailKey, onClose }: ModelModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const detail = detailKey ? MODEL_DETAILS[detailKey] : null;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (detail && !dialog.open) dialog.showModal();
    if (!detail && dialog.open) dialog.close();
  }, [detail]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
      className="w-[min(650px,92vw)] border-0 bg-ink p-[55px] text-left text-white shadow-[0_20px_80px_#000a] backdrop:bg-black/80 backdrop:backdrop-blur-[7px] max-sm:px-6 max-sm:pt-[50px] max-sm:pb-7"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Bezárás"
        className="absolute top-2.5 right-2.5 z-2 h-10 w-10 cursor-pointer border-0 bg-ink text-[23px] text-white"
      >
        ×
      </button>

      {detail && (
        <>
          <p className="eyebrow">{detail.kicker}</p>
          <h2 className="text-[46px] max-sm:text-[36px]">{detail.title}</h2>
          <p className="text-[#bbb]">{detail.copy}</p>
          <div className="my-7 grid grid-cols-3 gap-[7px] max-sm:grid-cols-1">
            {detail.specs.map(([value, label]) => (
              <div key={label} className="border border-[#3b3c37] p-[13px]">
                <b className="block">{value}</b>
                <span className="block text-[9px] text-[#999]">{label}</span>
              </div>
            ))}
          </div>
          <Link to="/ajanlatkeres" onClick={onClose} className="btn btn-ink border border-[#3b3c37]">
            Ehhez kérek ajánlatot
          </Link>
        </>
      )}
    </dialog>
  );
}
