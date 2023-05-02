fetch('https://test-changes--ngc-pov--joedemilner-mrm.hlx.page/data.json')
  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then(data => document.write(data));