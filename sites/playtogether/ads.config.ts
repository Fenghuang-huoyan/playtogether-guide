/**
 * Adsterra Native Banner, directly after Quick Answer on the homepage and guide pages.
 *
 * This zone's invoke URL has no `/invoke.js` suffix. Set `scriptSrc` to the
 * full script URL Adsterra issued for this site. Do not paste a key or host
 * from another game.
 *
 * When `scriptSrc` is empty, the fallback is still `${invokeBase}/${id}/invoke.js`.
 * Adult and sensitive categories stay off. Only afterQuickAnswer exists, so the
 * script is emitted once per homepage and guide page. The 404 page does not render a slot.
 */
export type AdSlotConfig = {
  id: string;
  format: string;
  /** Full script URL. When set, used instead of `${invokeBase}/${id}/invoke.js`. */
  scriptSrc?: string;
  invokeBase?: string;
  containerPrefix?: string;
};

const slots = {
  afterQuickAnswer: {
    id: '22747ad7e3ae2fc753e19532b035041b',
    format: 'native-banner',
    scriptSrc: 'https://bauval.org/21/22747ad7e3ae2fc753e19532b035041b',
  },
} as const satisfies Record<string, AdSlotConfig>;

export const adsConfig = {
  network: 'adsterra' as const,
  enabled: true,
  invokeBase: '',
  /** Site-wide full script URL. A slot `scriptSrc` overrides this. */
  scriptSrc: '',
  containerPrefix: 'container-',
  slots,
};

export type AdSlotName = keyof typeof slots;

export function resolveAdPlacement(name: AdSlotName) {
  const slot: AdSlotConfig = slots[name];
  const invokeBase = (slot.invokeBase ?? adsConfig.invokeBase).replace(/\/$/, '');
  const containerPrefix = slot.containerPrefix ?? adsConfig.containerPrefix;
  const id = slot.id.trim();
  const explicitSrc = (slot.scriptSrc ?? adsConfig.scriptSrc).trim();
  const scriptSrc = explicitSrc || (id && invokeBase ? `${invokeBase}/${id}/invoke.js` : '');
  return {
    id,
    format: slot.format,
    invokeBase,
    containerId: `${containerPrefix}${id}`,
    scriptSrc,
    active:
      adsConfig.enabled &&
      id.length > 0 &&
      !id.startsWith('ADSTERRA_') &&
      scriptSrc.length > 0,
  };
}
