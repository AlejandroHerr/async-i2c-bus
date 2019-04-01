const simpleGit = require('simple-git');

simpleGit()
  .add('./docs')
  .commit('docs(documentation) Update markdown docs [ci skip]')
  .push('origin', 'master')
  .then(() => {
    console.log('Docs published');

    return process.exit(0);
  });
