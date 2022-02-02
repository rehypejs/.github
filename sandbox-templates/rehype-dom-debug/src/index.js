// ⚠️ Important! Please make sure the dependencies are up to date.
// On code sandbox, you can refresh them in the Dependencies section (left-bottom)
// On stackblitz, you can open the package.json file, update the versions,
// then run npm install in the stackblitz terminal

import {rehypeDom} from 'rehype-dom'

const sourceHtml = `
<!doctype html>
<html>
  <head>
    <meta charset="utf8">
    <title>sandbox document</title>
  </head>
  <body>
    <h1>title</h1>
    <p>lorem ipsum</p>
  </body>
</html>
`

async function main() {
  document.querySelector('#source').textContent = sourceHtml

  rehypeDom()
    .use({settings: {fragment: false}})
    // Add any plugins here
    .process(sourceHtml)
    .then((file) => {
      document.querySelector('#result').textContent = String(file)
    })
}

main().catch((error) => {
  document.querySelector('#error').textContent = error
})
