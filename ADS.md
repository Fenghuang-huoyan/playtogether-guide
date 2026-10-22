# Adsterra — playtogether.wiki

Native Banner is wired for the homepage and guide pages, immediately after Quick Answer (`afterQuickAnswer` in `sites/playtogether/ads.config.ts`). The script is rendered once on those pages. The 404 page does not include the slot.

This zone uses a full script URL. There is no `/invoke.js` suffix, and `invokeBase` stays empty so the old host is not hardcoded.

| Field | Value | Used in the script? |
| --- | --- | --- |
| Zone key | `22747ad7e3ae2fc753e19532b035041b` | Yes. `afterQuickAnswer.id`, and the container id `container-22747ad7e3ae2fc753e19532b035041b` |
| Script src | `https://bauval.org/21/22747ad7e3ae2fc753e19532b035041b` | Yes. Full `afterQuickAnswer.scriptSrc` |
| Website ID | `6142615` | No. Ops note only |
| Placement ID | `31868776` | No. Ops note only |

Adult and sensitive categories stay off.

`analytics.gaId` in `sites/playtogether/site.config.ts` is an empty string. The base layout loads gtag only when that string is non-empty. There is no Google site-verification meta tag. Put a real GA4 measurement id in `gaId` when one exists. Until then, Analytics stays off.
