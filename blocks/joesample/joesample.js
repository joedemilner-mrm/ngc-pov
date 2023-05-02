export default function decorate(block) {
	fetch('https://test-changes--ngc-pov--joedemilner-mrm.hlx.page/data.json')
  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then(data => console.log(data));
  
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}
