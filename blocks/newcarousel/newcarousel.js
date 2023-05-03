export default function decorate(block) {

	// Get the current markup
	var html = block.innerHTML;
	
	
	block.firstElementChild.firstElementChild.classList.add(`slider-wrapper`);
	
	block.firstElementChild.firstElementChild.firstElementChild.classList.add(`slides-container`);
	
	
	block.firstElementChild.firstElementChild.firstElementChild.setAttribute('id', `slides-container`);


var targetImages = document.querySelectorAll("ul#slides-container li");

console.log("Count of images: " + targetImages.length);

targetImages.forEach((targetImages) => {
  targetImages.classList.add('slide');
});

	
	
	//block.firstElementChild.firstElementChild.firstElementChild.firstElementChild.classList.add(`slide`);
	//block.firstElementChild.firstElementChild.firstElementChild.secondElementChild.classList.add(`slide`);
	
	//var b = document.querySelectorAll("slider-wrapper");
	
	// Replace the current markup
	block.firstElementChild.firstElementChild.innerHTML += "<button class='slide-arrow' id='slide-arrow-prev'>&#8249;";
	
	// Add content after the current markup
	block.firstElementChild.firstElementChild.innerHTML += '</button>';
	
	// Replace the current markup
	block.firstElementChild.firstElementChild.innerHTML += "<button class='slide-arrow' id='slide-arrow-next'>&#8250;";
	
	// Add content after the current markup
	block.firstElementChild.firstElementChild.innerHTML += '</button>';
	
	
	
	
}