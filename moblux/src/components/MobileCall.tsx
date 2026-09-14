import { SITE } from '../data/site';
import { telHref } from '../lib/format';

/** Fix hívás-sáv 650px alatt (.mobile-call). */
export default function MobileCall() {
  return (
    <a
      href={telHref(SITE.phone)}
      className="fixed inset-x-0 bottom-0 z-25 hidden h-[50px] items-center justify-between bg-gold px-[18px] text-[11px] font-bold text-[#111] max-sm:flex"
    >
      Hívás <b>{SITE.phone}</b>
    </a>
  );
}
