module.exports = {
  git: {
    // eslint-disable-next-line no-template-curly-in-string
    commitMessage: 'release: v${version}',
    pushArgs: '--follow-tags --set-upstream',
    requireBranch: 'main',
    // eslint-disable-next-line no-template-curly-in-string
    tagName: 'v${version}',
  },
  npm: {
    publish: false,
  },
  hooks: {
    // eslint-disable-next-line no-template-curly-in-string
    'before:git:release': 'git switch -c release-bot/${version}'
  },
}
