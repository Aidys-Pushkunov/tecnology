let menu = document.getElementById('menu');
let count = 0;
let image = ["img/slidbar/1 (1).JPEG", "img/slidbar/1 (1).JPG", "img/slidbar/1 (1).png", "img/slidbar/1 (2).JPG", "img/slidbar/1 (3).JPG", "img/slidbar/1 (3).png", "img/slidbar/1 (4).JPG", "img/slidbar/1 (5).jpg", "img/slidbar/1 (6).jpg", "img/slidbar/1 (7).JPG", "img/slidbar/1 (8).jpg", "img/slidbar/1 (9).JPG"]
let num = 0;

function myFunction() {
	if(count < 1) {
	    menu.style.display = "block";
		count++;
	} else {
	    menu.style.	display = "none";
		count--;
	}

}

function next() {
	let slider = document.getElementById("slider");
	num++;
	if( num >= image.length) {
		num = 0;
	}
	slider.src = image[num];
}

function prev() {
	let slider = document.getElementById("slider");
	num--;
	if (num < 0) { 
		num = image.length-1;
	}
	slider.src = image[num];
}

