module.exports = {
  git: {
    // eslint-disable-next-line no-template-curly-in-string
    commitMessage: 'release: v${version}',
    pushArgs: '--follow-tags origin $(git rev-parse --abbrev-ref HEAD)',
    requireBranch: 'main',
    // eslint-disable-next-line no-template-curly-in-string
    tagName: 'v${version}',
  },
  github: {
    release: true,
    draft: true,
  },
  npm: {
    publish: false,
  },
  hooks: {
    'after:bump': 'npm run build',
    // eslint-disable-next-line no-template-curly-in-string
    'before:git:release': 'git switch -c release-bot/${version}'
  },
}
