# Adsterra — playtogether.wiki

Native Banner is wired for the homepage and guide pages, immediately after Quick Answer (`afterQuickAnswer` in `sites/playtogether/ads.config.ts`). The slot component is rendered on those pages. The 404 page does not include the slot.

The zone is still a placeholder. No third-party ad script is loaded.

| Field | Value | Used in the script? |
| --- | --- | --- |
| Zone key | `ADSTERRA_NATIVE_BANNER_PLACEHOLDER` | No. Ids with the `ADSTERRA_` prefix are treated as empty. |
| Script src | empty | No. |
| `enabled` | `false` | No request is made. |

When Adsterra issues a zone for **playtogether.wiki**:

1. Set `enabled` to `true`.
2. Replace `afterQuickAnswer.id` with that zone key.
3. Set `afterQuickAnswer.scriptSrc` to the full script URL Adsterra issued. This game’s zone may or may not use an `/invoke.js` suffix. Paste the URL they give you. Leave `invokeBase` empty unless the dashboard’s URL is the old `invoke.js` form.
4. Do not reuse a zone key or host from Invokyr, Heartopia, Megabonk, or any other site.

Adult and sensitive categories stay off.

`analytics.gaId` in `sites/playtogether/site.config.ts` is an empty string. The base layout loads gtag only when that string is non-empty. There is no Google site-verification meta tag. Put a real GA4 measurement id in `gaId` when one exists. Until then, Analytics stays off.
