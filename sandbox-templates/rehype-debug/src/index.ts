// ⚠️ Important! Please make sure the dependencies are up to date.
// On code sandbox, you can refresh them in the Dependencies section (left-bottom)
// On stackblitz, you can open the package.json file, update the versions,
// then run npm install in the stackblitz terminal

import {rehype} from 'rehype'

const sourceHtml = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>sandbox document</title>
  </head>
  <body>
    <h1>title</h1>
    <p>lorem ipsum</p>
  </body>
</html>
`

try {
  document.querySelector('#source')!.textContent = sourceHtml

  const file = await rehype()
    // Add any plugins here
    .process(sourceHtml)

  document.querySelector('#result')!.textContent = String(file)
} catch (error) {
  document.querySelector('#error')!.textContent = String(error)
}
