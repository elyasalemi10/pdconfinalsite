export function assetUrlByTag(tag: string): string {
  // Frontend helper to resolve asset by tag via API redirect
  return `/api/assets/${encodeURIComponent(tag)}`;
}


