module.exports = {
  git: {
    commit: false,
    requireBranch: 'main',
    // eslint-disable-next-line no-template-curly-in-string
    tagName: 'v${version}',
  },
  github: {
    release: true,
    // eslint-disable-next-line no-template-curly-in-string
    releaseName: 'v${version}',
  },
  npm: false,
}
