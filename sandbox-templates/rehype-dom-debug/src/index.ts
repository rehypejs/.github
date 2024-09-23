// ⚠️ Important! Please make sure the dependencies are up to date.
// On code sandbox, you can refresh them in the Dependencies section (left-bottom).
// On stackblitz, you can open the package.json file, update the versions,
// then run npm install in the stackblitz terminal.

import {rehypeDom} from 'rehype-dom'

const html = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Saturn</title>
  </head>
  <body>
    <h1>Saturn</h1>
    <p>Saturn is a gas giant composed predominantly of hydrogen and helium.</p>
  </body>
</html>
`

const $error = document.querySelector('#error')!
const $result = document.querySelector('#result')!
const $source = document.querySelector('#source')!

try {
  $source.textContent = html

  const file = await rehypeDom()
    .use({settings: {fragment: false}})
    // Add any plugins here
    .process(html)

  $error.textContent = ''
  $result.textContent = String(file)
} catch (error) {
  $error.textContent = String(error)
  $result.textContent = ''
}
