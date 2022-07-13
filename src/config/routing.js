export const routeLinks = {
  offer(slug) {
    if (!slug) {
      return `/oferta`
    }
    return `/oferta/${slug}`
  },
  raftingRoutes: '/trasy-splywow',
  gallery: '/galeria',
  contact: '/kontakt',
  statute: '/regulaminy',
  cookiesPolicy: '/polityka-cookies',
  privacyPolicy: '/polityka-prywatnosci',
  reservation: '/rezerwacja',
}
