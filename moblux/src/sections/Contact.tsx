import { SITE } from '../data/site';
import { telHref } from '../lib/format';

export default function Contact() {
  const cards = [
    { label: 'HÍVJON MINKET', value: SITE.phone, action: 'Telefonálok →', href: telHref(SITE.phone) },
    {
      label: 'BEMUTATÓUDVAR',
      value: 'Baja, Szegedi út 86.',
      action: 'Útvonaltervezés →',
      href: SITE.maps,
      external: true,
    },
    {
      label: 'KÖVESSEN MINKET',
      value: 'MOBLUX Facebook',
      action: 'Megnyitás →',
      href: SITE.facebook,
      external: true,
    },
  ];

  return (
    <section id="contact" className="bg-ink-soft px-[4vw] py-[105px] text-white max-sm:px-5 max-sm:py-[70px]">
      <p className="eyebrow">SZEMÉLYESEN IS VÁRJUK</p>
      <h2 className="mb-[55px]">
        Nézze meg élőben.
        <br />
        Érezze a különbséget.
      </h2>

      <div className="grid border-t border-[#41413d] max-sm:grid-cols-1 sm:grid-cols-3">
        {cards.map((card) => (
          <a
            key={card.label}
            href={card.href}
            {...(card.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            className="border-r border-[#41413d] pt-7 pr-2 pb-2 max-sm:border-r-0 max-sm:border-b"
          >
            <small className="block text-[8px] tracking-[0.16em] text-gold">{card.label}</small>
            <b className="mt-2 mb-[23px] block">{card.value}</b>
            <span className="block text-[10px]">{card.action}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
