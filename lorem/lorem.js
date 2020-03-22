const loremIpsum = require('lorem-ipsum').loremIpsum;
const fs = require('fs');

function populateTemplate(componentName, idx) {
  return `
  <!-- prettier-ignore -->
  <div>
    <span i18n="@@${componentName}__icu${idx}-label" class="requested-label">Requested {{ vals[${idx}] }}:</span>
    <span i18n="@@${componentName}__icu${idx}">&nbsp;{vals[${idx}], select,
      A {Got A: ${loremIpsum()}}
      B {Got B: ${loremIpsum()}}
      C {Got C: ${loremIpsum()}}
      D {Got D: ${loremIpsum()}}
      E {Got E: ${loremIpsum()}}
      F {Got F: ${loremIpsum()}}
      G {Got G: ${loremIpsum()}}
      H {Got H: ${loremIpsum()}}
      I {Got I: ${loremIpsum()}}
      J {Got J: ${loremIpsum()}}
      K {Got K: ${loremIpsum()}}
      L {Got L: ${loremIpsum()}}
      M {Got M: ${loremIpsum()}}
      N {Got N: ${loremIpsum()}}
      O {Got O: ${loremIpsum()}}
      P {Got P: ${loremIpsum()}}
      Q {Got Q: ${loremIpsum()}}
      R {Got R: ${loremIpsum()}}
      S {Got S: ${loremIpsum()}}
      T {Got T: ${loremIpsum()}}
      U {Got U: ${loremIpsum()}}
      V {Got V: ${loremIpsum()}}
      W {Got W: ${loremIpsum()}}
      X {Got X: ${loremIpsum()}}
      Y {Got Y: ${loremIpsum()}}
      Z {Got Z: ${loremIpsum()}}
    }</span>
  </div>

  `;
}

// Routable1
let routable1Template = '';
for (let i = 0; i < 100; i = i + 1) {
  routable1Template = routable1Template + populateTemplate('Routable1', i);
}

// fs.writeFile('./routable1.html', routable1Template, err => console.log(err));

// Content
for (let c = 1; c < 17; c = c + 1) {
  let contentTemplate = '';
  for (let i = 0; i < 100; i = i + 1) {
    contentTemplate =
      contentTemplate + populateTemplate(`Module2Content${c}`, i);
  }

  fs.writeFile(
    `./content${c}.html`,
    `<div class="content">
  ${contentTemplate}
  </div>`,
    err => console.log(err)
  );
}
