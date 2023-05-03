const loggedInPages = [
  { name: 'Admin Dashboard', link: '/admin-dashboard' },
  { name: 'Collection', link: '/collection-dashboard' },
  { name: 'Sets', link: '/browse-sets' },
  { name: 'Cards', link: '/browse-cards' },
  { name: 'Resources', link: '/' }
]

const loggedOutPages = [
  { name: 'Sets', link: '/browse-sets' },
  { name: 'Cards', link: '/browse-cards' },
  { name: 'Resources', link: '/' }
]

export { loggedInPages, loggedOutPages };