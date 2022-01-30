// ⚠️ Important! Please make sure the dependencies are up to date.
// On code sandbox, you can refresh them in the Dependencies section (left-bottom)
// On stackblitz, you can open the package.json file, update the versions,
// then run npm install in the stackblitz terminal

import { rehypeDom } from "rehype-dom";

const sourceHtml = `
<html>
  <head></head>
  <body>
    <h1>title</h1>
    <p>lorem ipsum</p>
  </body>
</html>
`;

document.getElementById("source").textContent = sourceHtml;

rehypeDom()
  .use({ settings: { fragment: false } })
  // add any plugins here
  .process(sourceHtml)
  .then(
    (file) => (document.getElementById("result").textContent = String(file))
  )
  .catch((err) => (document.getElementById("error").innerHTML = err));
