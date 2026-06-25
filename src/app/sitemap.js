const SITE_URL = 'https://tonnerre-ewen.netlify.app/'

// Single-page portfolio: one route. Static lastModified keeps the
// sitemap cacheable (no request-time API) and deterministic.
const LAST_MODIFIED = '2026-06-25'

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
