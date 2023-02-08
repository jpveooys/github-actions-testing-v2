module.exports = {
  git: {
    commit: false,
    push: false,
    requireBranch: 'main',
    requireCommits: true,
    // eslint-disable-next-line no-template-curly-in-string
    tagName: 'v${version}',
  },
  github: {
    release: true,
    // eslint-disable-next-line no-template-curly-in-string
    releaseName: 'v${version}',
  },
  hooks: {
    "before:github:release": "git push origin v${version}"
  },
  npm: false,
}
