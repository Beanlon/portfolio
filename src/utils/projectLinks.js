export function externalLinkProps(url) {
  return url?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}
}

export function getProjectDetailPath(slug) {
  return slug ? `/projects/${slug}` : null
}
