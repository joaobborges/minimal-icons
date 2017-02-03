function getGitTag() {
    const config = require('../../package.json');
    document.querySelector('#git-tag').innerHTML = `v${config.version}`;
}

getGitTag();