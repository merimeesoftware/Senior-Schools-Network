/**
 * Canonical public origin.
 *
 * Legacy hosts (www and the seniorschoolnetwork.com / .org names) 301 here.
 * Those host redirects are Cloudflare zone rules, not Workers `_redirects`.
 * See docs/deploy-cloudflare.md.
 */
export const SITE_ORIGIN = 'https://seniorschools.org';
