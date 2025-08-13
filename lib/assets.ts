// Deprecated: direct public paths are used now instead of API indirection
export function assetUrlByTag(tag: string): string {
  switch (tag) {
    case 'header-logo':
    case 'footer-logo':
      return '/images/NewPDLogo.png';
    default:
      return '/images/thumbnail.png';
  }
}
