const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/omarking05/omarking05.github.io'
  },
  () => {
    console.log('Deploying to mrgeek.github.io is done.')
  }
)