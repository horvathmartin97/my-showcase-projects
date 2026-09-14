/** Telefonszám tel: linkhez (szóközök és kötőjelek nélkül). */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, '')}`;
}

/** Google Maps útvonaltervezés link egy címhez. */
export function mapsHref(address: string): string {
  return `https://maps.google.com/?q=${encodeURIComponent(address)}`;
}
