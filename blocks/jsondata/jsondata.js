export default function decorate(block) {
	  
  	const cols = [...block.firstElementChild.children];
  	block.classList.add(`joe-jsondata`);
  	
  	var iDiv = document.createElement('div');
    iDiv.id = 'json-data';
  	iDiv.className = 'joe-data';

	const request = new Request("http://localhost:3000/data.json");

	fetch(request)
	  .then((response) => response.json())
	  .then((data) => {
	    for (const item of data.data) {
			
			var para = document.createElement("p");
	  		para.innerHTML = '<b>key</b>: ' + item.Key + '<br> <b>value</b>: ' + item.Value + '<br> <b>description</b>: ' + item.Description + '<hr>';
	  		iDiv.append(para);
			console.log('ddjjd: ' + item.Key);
		}
	})
	.catch(console.error);

	block.appendChild(iDiv);

}
