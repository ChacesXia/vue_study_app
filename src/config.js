export const API_ROOT = (process.env.NODE_ENV !== 'production')
      ? 'http://121.249.216.217/'
      : 'http://localhost:8080/'

export const CookieDomain = (process.env.NODE_ENV === 'production')
      ? '121.249.216.217'
      : ''
