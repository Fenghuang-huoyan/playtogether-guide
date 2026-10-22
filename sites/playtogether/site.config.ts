export const siteConfig = {
  siteName: 'Play Together Guide',
  domain: 'playtogether.wiki',
  url: 'https://playtogether.wiki',
  gameTitle: 'Play Together',
  steamAppId: 3198850,
  steamUrl: 'https://store.steampowered.com/app/3198850/Play_Together/',
  supportEmail: 'support@playtogether.zendesk.com',
  social: [
    { href: 'https://help-playtogether.haegin.kr/hc/en-us', label: 'Help Center' },
    { href: 'https://notice.haegin.kr/', label: 'Notices' },
    { href: 'http://haegin.kr/playtogether/coupon', label: 'iOS coupons' },
  ],
  developer: 'HAEGIN Co.,Ltd.',
  publisher: 'HAEGIN Co.,Ltd.',
  tagline: 'A sunny English field guide for Kaia Island: codes, fishing, pets, jobs, and home parties.',
  locale: 'en',
  themeColor: '#0e4c6e',
  contentRoot: 'playtogether',
  homeTitle: 'Play Together Guide — Codes, Fishing, Pets & Kaia Island',
  homeDescription:
    'Unofficial English Play Together wiki for Steam AppID 3198850. Redeem-code status, beginner loop, fishing, insects, pets, Stars and Gems, jobs, events, and home parties on Kaia Island. Fan site for playtogether.wiki.',
  analytics: {
    gaId: 'G-Q21P2S3TL8',
  },
  art: {
    hero: '/images/official/steam/library-hero.jpg',
    heroAlt:
      'Official Steam library hero for Play Together: the PLAY TOGETHER logo over a bright beach with palm trees, a pink-haired character, a boy with goggles, a white puppy, and a girl with a blue bow',
    header: '/images/official/steam/header.jpg',
    headerAlt:
      'Official Steam header for Play Together: the PLAY TOGETHER logo over a beach with palm trees and three characters',
    ogImage: '/images/official/steam/library-hero.jpg',
  },
  ads: {
    network: 'adsterra' as const,
    format: 'native-banner' as const,
  },
  disclaimer:
    'playtogether.wiki is an unofficial fan-made guide for Play Together. It is not affiliated with, endorsed by, or sponsored by HAEGIN Co.,Ltd., Valve, or Steam. All game content, names, artwork, and trademarks belong to their respective owners. Coupon codes expire, and this site does not redeem them for you. Prices, spawn rates, and event dates change in the live client. This site is not responsible for account issues, missed mailbox rewards, or purchase decisions. The support address in the footer is HAEGIN’s Zendesk contact from the Steam store page. Mail sent there does not reach the people who edit this wiki.',
  nav: [
    { href: '/codes', label: 'Codes' },
    { href: '/beginner-guide', label: 'Start' },
    { href: '/fishing', label: 'Fishing' },
    { href: '/insects', label: 'Insects' },
    { href: '/pets', label: 'Pets' },
  ],
  moreNav: [
    { href: '/money', label: 'Stars & Gems' },
    { href: '/jobs', label: 'Jobs' },
    { href: '/events', label: 'Events' },
    { href: '/minigames', label: 'Minigames' },
    { href: '/homes', label: 'Homes' },
    { href: '/faq', label: 'FAQ' },
    { href: '/about', label: 'About' },
  ],
  footerNav: [
    { href: '/beginner-guide', label: 'Beginner guide' },
    { href: '/codes', label: 'Codes' },
    { href: '/fishing', label: 'Fishing' },
    { href: '/pets', label: 'Pets' },
    { href: '/faq', label: 'FAQ' },
    { href: '/about', label: 'About' },
  ],
  version: {
    label: 'Checked 22 Oct 2026',
    detail:
      'Store text, price, platforms, languages, and system requirements are from the Steam store page and appdetails API on 22 Oct 2026. Review totals are from the Steam reviews API the same day. Fishing, gathering, Stars, Gems, pets, camping, and quests follow HAEGIN’s English help articles. Coupon windows follow HAEGIN notices. Community code lists are labeled and were not redeemed here.',
  },
  databases: [
    {
      href: 'https://help-playtogether.haegin.kr/hc/en-us',
      label: 'HAEGIN Help Center',
    },
    {
      href: 'https://hub.playtogether.haegin.kr/homegame-guide/whats-the-play-together',
      label: 'Official “What’s the Play Together” hub',
    },
    {
      href: 'https://notice.haegin.kr/',
      label: 'HAEGIN notices',
    },
  ],
} as const;

export type NavItem = { href: string; label: string };
